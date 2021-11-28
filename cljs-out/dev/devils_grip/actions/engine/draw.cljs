(ns devils-grip.actions.engine.draw
  (:require-macros [devils-grip.actions.engine :refer [defadvancer]]))

(defn draw [{:keys [stock talon] :as state-map}]
  (-> (update state-map :talon #(into [] (concat % (take 3 stock))))
      (update :stock #(drop 3 %))))

(defadvancer
  {:dispatch-fn (fn [{:keys [stock]}]
                  (if (>= (count stock) 3)
                    :stock-full
                    :stock-empty))

   :stock-full (fn [state-map]
                 (-> (draw state-map)
                     (update :action-state {})))

   :stock-empty (fn [{:keys [stock talon] :as state-map}]
                  (-> (update state-map :stock #(->> (concat % talon)))
                      (update :talon (constantly []))
                      advance))})
