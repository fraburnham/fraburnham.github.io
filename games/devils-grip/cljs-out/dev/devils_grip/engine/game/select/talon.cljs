(ns devils-grip.engine.game.select.talon
  (:require-macros [devils-grip.engine :refer [defadvancer]])
  (:require
   [devils-grip.engine.game.from-talon :as from-talon]))

(defadvancer advance :action-state
  {:dispatch-fn (fn [{:keys [action-state]}]
                  (count (:selections action-state)))

   0 (fn [state-map]
       (update-in state-map [:action-state :selections] (constantly [])))

   1 (fn [state-map] state-map)

   2 (fn [state-map]
       (-> (update-in state-map [:action-state :selections] rest)
           from-talon/advance))})
