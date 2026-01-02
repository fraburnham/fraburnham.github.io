(ns devils-grip.actions.engine ; move this ns to a top level devils-grip.actions and drop the .engine from child ns
  (:require-macros [devils-grip.actions.engine :refer [defadvancer]])
  (:require
   [devils-grip.actions.engine.drag :as drag]
   [devils-grip.actions.engine.draw :as draw]
   [devils-grip.actions.engine.fill-hole :as fill-hole]
   [devils-grip.actions.engine.from-talon :as from-talon]
   [devils-grip.actions.engine.merge-cells :as merge-cells]
   [devils-grip.actions.engine.start :as start]
   [devils-grip.actions.engine.swap-cells :as swap-cells]
   [devils-grip.rules :as rules]))

(defn deref-state-map [state-map]
  (->> (map (fn [[k v]] [k (deref v)]) state-map)
       (into {})))

;; new state is a plain map
;; old state is full of atoms
(defn update-state-map! [old-state new-state]
  (doseq [[k v] new-state]
    (swap! (old-state k) (constantly v))))

(defadvancer
  {:dispatch-fn (fn [{:keys [action-state]}]
                  (:type action-state))

   :draw #(draw/advance %)
   :fill-hole #(fill-hole/advance %)
   :from-talon #(from-talon/advance %) ; junk?
   :merge-cells #(merge-cells/advance %) ; junk?
   :start #(start/advance %)
   :swap-cells #(swap-cells/advance %) ; junk?
   :drag #(drag/advance %)})

(defn advance! [{:keys [board-state] :as state-map}]
  (let [new-state-map (->> (deref-state-map state-map)
                           advance
                           rules/validate)]
    (update-state-map!
     state-map
     (if (:error new-state-map)
       (do
         (.log js/console "Error, rendering old map")
         (-> (deref-state-map state-map)
             (update :action-state {})
             (update-in [:action-state :error] (constantly (:error new-state-map)))))
       new-state-map))))
