(ns devils-grip.engine.ui.drag.board
  (:require-macros [devils-grip.engine :refer [defadvancer]]))

(defadvancer advance :ui
  {:dispatch-fn (fn [{:keys [action-state]}]
                  (count (:selections action-state)))

   1 (fn [{:keys [action-state] :as state-map}]
       (let [[row-num col-num] (first (:selections action-state))]
         (assoc-in state-map [:ui :board row-num col-num :classes] ["selected"])))})
