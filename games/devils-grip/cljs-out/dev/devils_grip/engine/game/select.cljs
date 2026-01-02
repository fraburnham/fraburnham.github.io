(ns devils-grip.engine.game.select
  (:require-macros [devils-grip.engine :refer [defadvancer]])
  (:require
   [devils-grip.engine.game.select.board :as board]
   [devils-grip.engine.game.select.stock :as stock]
   [devils-grip.engine.game.select.talon :as talon]))

(defadvancer advance :action-state
  {:dispatch-fn (fn [{:keys [action-state]}]
                  (:drag-type action-state))
   ;; need to fix up the macro to handle cases where a bare symbol will do
   :board #(board/advance %)
   :talon #(talon/advance %)
   :stock #(stock/advance %)})
