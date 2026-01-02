(ns devils-grip.actions.engine.drag.talon
  (:require-macros [devils-grip.actions.engine :refer [defadvancer]])
  (:require
   [devils-grip.actions.engine.from-talon :as from-talon]))

(defadvancer
  {:dispatch-fn (fn [{:keys [action-state]}]
                  (count (:selections action-state)))

   0 (fn [state-map]
       (update-in state-map [:action-state :selections] (constantly [])))

   1 (fn [state-map] state-map)

   2 (fn [state-map]
       (-> (update-in state-map [:action-state :selections] rest)
           from-talon/advance))})
