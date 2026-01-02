(ns devils-grip.engine ; move this ns to a top level devils-grip.actions and drop the .engine from child ns
  (:require-macros [devils-grip.engine :refer [defadvancer]])
  (:require
   [devils-grip.engine.exceptions :as exceptions]
   [devils-grip.engine.game.select :as select]
   [devils-grip.engine.game.draw :as draw]
   [devils-grip.engine.game.fill-hole :as fill-hole]
   [devils-grip.engine.game.start :as start]
   [devils-grip.rules :as rules]
   [devils-grip.engine.ui.drag :as drag-ui]
   [devils-grip.engine.ui.select :as select-ui]))

;; old-state is a reagent atom
;; new-state is a map in the same shape as the reagent atom
(defn update-state-map! [old-state new-state]
  (swap! old-state (constantly new-state)))

(defn error-safe-advance [advance-fn]
  (fn [state-map]
    (try
      (advance-fn state-map)
      (catch ExceptionInfo e
        (exceptions/log-exception e)
        (dissoc state-map (:reset-state-key (ex-data e)))))))

(defadvancer advance-game :action-state
  {:dispatch-fn (fn [{:keys [action-state]}]
                  (:type action-state))

   :draw #(draw/advance %)
   :fill-hole #(fill-hole/advance %)
   :start #(start/advance %)
   :select #(select/advance %)})

(defadvancer advance-ui :ui
  {:dispatch-fn (fn [{:keys [action-state] :as state-map}]
                  (:type action-state))

   :drag #(drag-ui/advance %)
   :select #(select-ui/advance %)})

(defn advance-game! [state-map]
  (let [advance-game (error-safe-advance advance-game)
        new-state-map (->> (advance-game @state-map)
                           rules/validate)]
    (update-state-map!
     state-map
     (if (:error new-state-map) ; could move this error handling into the updater now that it is simplified...
       ;; could consider using exceptions since the exception path is worked out, actually...
       (do
         (.log js/console "Invalid game state, rendering old map")
         (-> (update @state-map :action-state {})
             (update-in [:action-state :error] (constantly (:error new-state-map)))))
       new-state-map))))

(defn advance-ui! [state-map]
  (let [advance-ui (error-safe-advance advance-ui)]
    (->> (advance-ui @state-map)
         (update-state-map! state-map))))

(defn advance! [state-map]
  (advance-game! state-map)
  (advance-ui! state-map))
