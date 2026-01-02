(ns devils-grip.engine.game.select.board
  (:require-macros [devils-grip.engine :refer [defadvancer]])
  (:require
   [devils-grip.engine.game.merge-cells :as merge-cells]
   [devils-grip.engine.game.swap-cells :as swap-cells]
   [devils-grip.rules :as rules]))

(defadvancer advance :action-state
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
