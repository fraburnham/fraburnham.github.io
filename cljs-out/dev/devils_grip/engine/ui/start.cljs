(ns devils-grip.engine.ui.start)

(defn row-defaults []
  (->> (doseq [i [0 7]]
         [i {:classes ["cell"]}])
       (into {})))

(defn board-defaults []
  ;; do te hneedful looping to set up the board
  (->> (doseq [i [0 2]]
         [i (row-defaults)])
       (into {})))

(defn advance [state-map]
  ;; setup the default display classes for :board :talon :stock
  (println "Setting default ui state!")
  (->> (assoc-in state-map [:ui :talon :classes] [])
       (assoc-in [:ui :stock :classes] [])
       (assoc-in [:ui :board] (board-defaults))))
