(ns devils-grip.actions.engine.drag.board
  (:require-macros [devils-grip.actions.engine :refer [defadvancer]])
  (:require
   [devils-grip.actions.engine.merge-cells :as merge-cells]
   [devils-grip.actions.engine.swap-cells :as swap-cells]
   [devils-grip.rules :as rules]))

(defadvancer
  {:dispatch-fn (fn [{:keys [action-state]}]
                  (count (:selections action-state)))

   0 (fn [state-map]
       (update-in state-map [:action-state :selections] (constantly [])))

   1 (fn [state-map] state-map)

   2 (fn [state-map]
       (let [new-state-map (-> (merge-cells/advance state-map)
                               rules/validate)]
         (-> (if (:error new-state-map)
               (swap-cells/advance state-map)
               new-state-map)
             (assoc :action-state {}))))})
