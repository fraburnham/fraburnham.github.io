(ns devils-grip.components.action)

(defn button [{:keys [set-action! advance-action!]} action text]
  [:button
   {:style {:z-index 100}
    :on-click
    (fn [_] ;; should the on-click! come from state-fns? Could allow for more consistent setup later...
      (set-action! action)
      (advance-action!))}
   text])
