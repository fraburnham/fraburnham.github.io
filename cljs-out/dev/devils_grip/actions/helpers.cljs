(ns devils-grip.actions.helpers
  (:require
   [devils-grip.engine :as actions]
   [reagent.core :as reagent]))

(defn selection-click! [{:keys [action-state]} selection] ;; convert this to handle the whole bit? No. It is easier to let the caller pass in [row col] than it is to parse it
  (swap! action-state #(update % :selections conj selection)))

(defn set-action! [{:keys [action-state]} action-type]
  (swap! action-state #(assoc % :type action-type)))

(defn action-click! [action-state type] ; refactor to take state-map (or refactor callers to use set-action!)
  (swap! action-state #(dissoc % :error))
  (swap! action-state #(assoc % :type type)))

(defn draw! [state-map]
  (fn [_]
    (swap! (:action-state state-map) assoc :type :draw)
    (actions/advance! state-map)))

(defn drag-end! [state-map]
  (fn [draggable-class drop-target-class]
    ;; this potentially should stop any action that was ongoing (maybe after trying to advance?)
    (fn [event] ; these will end up being partials instead of closures, I think (once they have a final home)
      (set! (.-classList (.-target event)) draggable-class) ;; these should use removes. Drag and drop _could_ use the same class so all that I'd need was the doseq.
      (doseq [element (.getElementsByClassName js/document drop-target-class)]
        ;; making the bad but cheap assumption for now that the drop-target-class
        ;; will be the last class on the list
        ;; I think this^ is causing the talon rendering issues
        (set! (.-classList element) (apply reagent/class-names (drop-last (.-classList element))))))))

(defn drag-start! [state-map]
  (fn [drag-type location]
    (fn [event]
      (.add (.-classList (.-target event)) "dragging")
      (set-action! state-map :drag)
      (swap! (:action-state state-map) #(assoc % :drag-type drag-type))
      (actions/advance! state-map)
      (selection-click! state-map location))))

(defn drop! [state-map]
  (fn [location]
    (fn [event]
      (selection-click! state-map location)
      (actions/advance! state-map))))

#_(defn drag-enter! [])

;; making drag and double click separate for now
;; they can probably be factored to a single set of fns, but this should be easier to think about at first
(defn double-click! [{:keys [action-state] :as state-map}]
  (fn [click-type target-class location]
    (fn [event] ;; the actual logic in here needs to live in a multimethod
      ;; this is imperative. Does it need to be?
      (-> (.-target event) ;; this belongs in a ui helpers ns
          (.closest (str "." target-class))
          (.-classList)
          (.add "selected"))
      ;; make the action name more general and use the same for both
      ;; the event handlers differ slightly but that is somewhat minor.
      (set-action! state-map :drag) ; this could use a more generic event name, maybe a more generic flow...
      ;; this needs to only change the drag-type if there isn't a drag type
      ;; oof it needs a state management system for itself...
      (when-not (:drag-type @(:action-state state-map)) ;; oh this is still important
        (swap! (:action-state state-map) #(assoc % :drag-type click-type)))
      (actions/advance! state-map) ; Wonder if I can factor out the double advance...
      (selection-click! state-map location)
      (actions/advance! state-map)

      (when (empty? @action-state)
        ;; this belongs in a ui helpers, it should also get a more explicit instruction from the action-state. Maybe the place to blend them is in a `:ui-update` action?
        (let [elements (seq (.getElementsByClassName js/document "selected"))]
          (dotimes [i (count elements)] ; not sure why I couldn't make this work w/ doseq... A mystery for another time...
            (let [element (nth elements i)]
              (.remove (.-classList element) "selected"))))))))
