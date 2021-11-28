(ns devils-grip.engine.game.drag
  (:require-macros [devils-grip.engine :refer [defadvancer]])
  (:require
   [devils-grip.engine.game.drag.board :as board]
   [devils-grip.engine.game.drag.stock :as stock]
   [devils-grip.engine.game.drag.talon :as talon]))

(defadvancer advance :action-state
  {:dispatch-fn (fn [{:keys [action-state]}]
                  (:drag-type action-state))
   ;; need to fix up the macro to handle cases where a bare symbol will do
   :board #(board/advance %)
   :talon #(talon/advance %)
   :stock #(stock/advance %)})
