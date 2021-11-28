(ns devils-grip.components.select)

(defn draggable [properties & children]
  [:span (merge-with into
                     ;; first override any settings
                     (merge {:draggable true}
                            properties)
                     ;; then add classes
                     {:class ["drag-container"]})
   children])

(defn drop-target [properties & children]
  [:span (merge {:on-drag-over #(.preventDefault %)}
                properties)
   children])

