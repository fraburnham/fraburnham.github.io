(ns devils-grip.actions.engine.drag
  (:require-macros [devils-grip.actions.engine :refer [defadvancer]])
  (:require
   [devils-grip.actions.engine.drag.board :as board]
   [devils-grip.actions.engine.drag.stock :as stock]
   [devils-grip.actions.engine.drag.talon :as talon]))

(defadvancer
  {:dispatch-fn (fn [{:keys [action-state]}]
                  (:drag-type action-state))
   ;; need to fix up the macro to handle cases where a bare symbol will do
   :board #(board/advance %)
   :talon #(talon/advance %)
   :stock #(stock/advance %)})
