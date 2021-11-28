(ns ^:figwheel-hooks devils-grip.core
  (:require
   [goog.dom :as gdom]
   [reagent.core :as reagent]
   [reagent.dom :as dom]
   [devils-grip.engine :as engine]
   [devils-grip.engine.helpers :as action-helpers]
   [devils-grip.components.action :as action]
   [devils-grip.components.board :as board]
   [devils-grip.components.help :as help]
   [devils-grip.rules :as rules]))

(defonce state-map
  (reagent/atom
   {:action-state {} ; refactor away from `-state` naming
    :stock nil
    :talon []
    :board-state []
    :ui {}}))

(def state-fns ; since I'm passing the state map deeper these fns may not make sense. Injection is still nice for testing, though.
  {:advance-action! #(engine/advance! state-map)
   :selection-click! (partial action-helpers/selection-click! state-map)
   :set-action! (partial action-helpers/set-action! state-map)
   :double-click! (action-helpers/double-click! state-map)
   :draw! (action-helpers/draw! state-map)
   :drag-enter! (action-helpers/drag-enter! state-map)
   :drag-start! (action-helpers/drag-start! state-map)
   :drop! (action-helpers/drop! state-map)})

(defn page [ratom]
  [:table
   [:tbody
    [:tr
     [:td {:id "title"} "Devil's Grip Solitaire"]]
    [:tr
     [:td {:id "board"}
      (board/board state-fns state-map)]]
    [:tr
     [:td
      [:div
       [:span {:style {:display "flex"}}
        (board/stock state-fns state-map) ;; these need some margins/padding
        [:div {:style {:width "1em"}}]
        (board/talon state-fns state-map)]
       [:br]
       (board/score state-map)]]]
    [:tr
     [:td {:id "actions"}
      (action/button state-fns :abort "Abort action")
      [:br] [:br]
      (action/button state-fns :start "New game")]]]])

(defn get-app-element []
  (gdom/getElement "app"))

(defn mount [el]
  (dom/render [page] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

(mount-app-element)

(defn ^:after-load on-reload []
  (mount-app-element))
