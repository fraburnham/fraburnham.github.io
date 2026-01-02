(ns devils-grip.engine.game.merge-cells
  (:require-macros [devils-grip.engine :refer [defadvancer]])
  (:require
   [devils-grip.cards :as cards]
   [devils-grip.engine.game.fill-hole :as fill-hole]))

;; `source` and `target` should look like [row-num col-num]
(defn merge-cells [board source target]
  "Merge cells by moving cards from source to target"
  (-> (update-in board target cards/merge-cards (get-in board source))
      (update-in source (constantly []))))

(defadvancer advance :action-state
  {:dispatch-fn (fn [{:keys [action-state]}]
                  (count (:selections action-state)))

   0 (fn [state-map]
       (-> (update-in state-map [:action-state :selections] (constantly []))
           (update-in [:action-state :help-text] (constantly "Select cell to take from"))))

   1 (fn [state-map]
       (update-in state-map [:action-state :help-text] (constantly "Select cell to place in")))

   2 (fn [{:keys [action-state] :as state-map}]
       (let [[a b] (:selections action-state)]
         (if (= a b)
           (update state-map :action-state (constantly {}))
           (-> (update state-map :board-state merge-cells a b)
               (update :action-state (constantly {:type :fill-hole}))
               (fill-hole/advance)))))})

;; need to trap errors when adjusting the state map
;; if an error is hit revert the state and process the reversion
