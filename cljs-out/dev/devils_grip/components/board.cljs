(ns devils-grip.components.board
  (:require
   [devils-grip.cards :as cards]
   [devils-grip.components.select :as select]))

(defn card [[suit rank] offset]
  (when (and suit rank)
    ^{:key {:suit suit :rank rank}}
    [:div {:class ["card" (cards/suit->color suit)]  
           :style {:z-index offset
                   :top (str "-" (* offset 3.5) "em")}}
     [:div {:class "top-left"}
      (name rank) (cards/suit->symbol suit)]
     [:div {:class "bottom-right"}
      (name rank) (cards/suit->symbol suit)]]))

(defn cell [state-map
            {:keys [advance-action!
                    selection-click!
                    drag-start!
                    drag-enter!
                    drop!
                    double-click!]}
            row-num
            col-num
            cell-cards]
  (let [cell-id (str "row-" row-num "-col-" col-num)
        {:keys [ui]} @state-map]
    ^{:key {:row row-num :cell col-num}}
    [:div {:class (conj (get-in ui [:board row-num col-num :classes] []) "cell")
           :id cell-id
           :on-double-click (double-click! :board "cell" [row-num col-num])
           :on-drag-over #(.preventDefault %)
           :on-drag-enter (drag-enter! :board [row-num col-num])
           :on-drop (drop! [row-num col-num])}
     [:div {:class "drag-container" ;; this may be where the ui changes should be applied. Do I need these layered divs? May have been for layout reasons.
            :id (str "drag-row-" row-num "-col-" col-num)
            :draggable true
            :on-drag-start (drag-start! :board [row-num col-num])}
      (map #(card %1 %2) cell-cards (range))]]))

(defn row [state-map state-fns row-num row]
  ^{:key {:row row-num}}
  [:div {:id (str "row-" row-num)
         :class "row"}
   (doall
    (map (fn [cell-data col-num]
           (cell state-map state-fns row-num col-num cell-data))
         row
         (range)))])

;; TODO: make where state-map appears in args consistent
(defn board [state-fns state-map]
  (let [{:keys [board-state]} @state-map]
    [:div {:class ["board"]}
     (doall
      (map (fn [row-data row-num]
             (row state-map state-fns row-num row-data))
           board-state
           (range)))]))

(defn stock [{:keys [drag-start! drag-enter! draw!]} state-map]
  (let [{:keys [stock ui]} @state-map]
    ^{:key "stock-draggable"}
    [select/draggable {:on-drag-start (drag-start! :stock nil)
                       :on-double-click draw!
                       :class (get-in ui [:stock :classes])}
     ^{:key "stock-card"}
     [:div {:class "card"}
      [:div {:class "stock"}
       [:span {:class "center-card-back"}
        (count stock)]]]]))

(defn talon [{:keys [drag-start! drag-enter! drop! double-click!]} state-map]
  (let [{:keys [talon ui]} @state-map]
    [:span {:id "talon"}
     ^{:key "talon-drag"}
     [select/draggable {:on-drag-start (drag-start! :talon nil)
                        :on-double-click (double-click! :talon "drag-container" nil)
                        :class (get-in ui [:talon :classes])}
      ^{:key "talon-drop"}
      [select/drop-target {:on-drag-enter (drag-enter! :talon nil)
                           :on-drop (drop! :talon)
                           :id "talon-drop"} ; this could be an id, really. There is only one talon drop zone (this should be id, I'm using classes for display stuff and id for id)
       (if (last talon)
         (card (last talon) 0)
         ^{:key "empty-talon-card"}
         [:div {:class "card"}
          [:span {:class "center-card-back"}
           "X"]])]]]))

(defn score [state-map]
  (let [{:keys [stock talon]} @state-map]
    [:span {:id "score"}
     "Score: " (+ (count stock) (count talon))]))
