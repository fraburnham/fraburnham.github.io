(ns devils-grip.engine.ui.drag.talon)

(defn advance [state-map]
  (-> (dissoc state-map :ui)
      (assoc-in [:ui :talon :classes] ["selected"])))
