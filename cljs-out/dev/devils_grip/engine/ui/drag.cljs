(ns devils-grip.engine.ui.drag)

(defn advance [{:keys [action-state] :as state-map}]
  (reduce (fn [state-map [row-num col-num]]
            (update-in state-map [:ui (:drag-type action-state) row-num col-num :classes] conj "selected"))
          (assoc-in state-map [:ui (:drag-type action-state)] {})
          (:selections action-state)))
