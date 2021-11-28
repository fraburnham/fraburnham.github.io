(ns devils-grip.engine.ui.select
  (:require-macros [devils-grip.engine :refer [defadvancer]])
  (:require
   [devils-grip.engine.ui.select.board :as board]
   [devils-grip.engine.ui.select.stock :as stock]
   [devils-grip.engine.ui.select.talon :as talon]))

(defadvancer advance :ui
  {:dispatch-fn (fn [{:keys [action-state]}]
                  (:drag-type action-state))

   :board #(board/advance %)
   :talon #(talon/advance %)
   :stock #(stock/advance %)})
