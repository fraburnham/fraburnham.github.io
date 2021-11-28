(ns devils-grip.engine.ui.select.stock)

(defn advance [state-map]
  ;; maybe I should have the start-game so that I can set all the class details in a single place
  ;; then instead of assoc-in I do an update-in...
  (-> (dissoc state-map :ui)
      (assoc-in [:ui :stock :classes] ["selected"])))
