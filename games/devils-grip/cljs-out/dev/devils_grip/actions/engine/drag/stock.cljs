(ns devils-grip.actions.engine.drag.stock
  (:require-macros [devils-grip.actions.engine :refer [defadvancer]])
  (:require [devils-grip.actions.engine.draw :as draw]))

(defadvancer
  {:dispatch-fn (fn [{:keys [action-state]}]
                  (count (:selections action-state)))

   0 (fn [state-map]
       ;; this is in a lot of places now
       (update-in state-map [:action-state :selections] (constantly [])))

   1 (fn [state-map] state-map) ;; should have a noop helper?
   
   2 (fn [{:keys [action-state] :as state-map}]
       (draw/advance state-map))})
