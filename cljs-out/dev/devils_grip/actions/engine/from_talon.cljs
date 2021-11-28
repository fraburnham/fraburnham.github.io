(ns devils-grip.actions.engine.from-talon
  (:require-macros [devils-grip.actions.engine :refer [defadvancer]])
  (:require [devils-grip.cards :as cards]))

(defn talon->board [board-state action-state talon]
  (let [target (first (:selections action-state))]
    (update-in board-state target cards/merge-cards [(last talon)])))

(defadvancer
  {:dispatch-fn (fn [{:keys [action-state] :as state-map}]
                  (count (:selections action-state)))

   0 (fn [state-map]
       (update-in state-map [:action-state :help-text] (constantly "Select target cell")))

   1 (fn [{:keys [action-state talon] :as state-map}]
       (-> (update state-map :board-state talon->board action-state talon)
           (update :talon drop-last)
           (update :action-state (constantly {}))))})
