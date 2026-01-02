(ns devils-grip.engine.ui.select.talon)

(defn advance [state-map]
  (-> (dissoc state-map :ui)
      (assoc-in [:ui :talon :classes] ["selected"])))
