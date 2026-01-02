(ns devils-grip.engine.game.select.stock
  (:require-macros [devils-grip.engine :refer [defadvancer]])
  (:require [devils-grip.engine.game.draw :as draw]))

(defadvancer advance :action-state
  {:dispatch-fn (fn [{:keys [action-state]}]
                  (count (:selections action-state)))

   0 (fn [state-map]
       ;; this is in a lot of places now
       (update-in state-map [:action-state :selections] (constantly [])))

   1 (fn [state-map] state-map) ;; should have a noop helper?
   
   2 (fn [{:keys [action-state] :as state-map}]
       (draw/advance state-map))})
