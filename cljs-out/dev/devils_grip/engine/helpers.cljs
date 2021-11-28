(ns devils-grip.engine.helpers
  (:require
   [devils-grip.engine :as actions]
   [reagent.core :as reagent]))

;; rename this to `set-selection!`
(defn selection-click! [state-map selection]
  (swap! state-map update-in [:action-state :selections] conj selection))

(defn set-action! [state-map action-type]
  (swap! state-map assoc-in [:action-state :type] action-type))

(defn draw! [state-map]
  (fn [_]
    (swap! state-map assoc-in [:action-state :type] :draw)
    (actions/advance! state-map)))

(defn drag-enter! [state-map]
  ;; to refactor: `drag-type` is #{:board :stock :talon} which may be data that belongs on the location...
  (fn [drag-type location]
    (fn [event]
      (let [action-state (:action-state @state-map)]
        (swap! state-map assoc-in [:action-state :type] :drag)
        (selection-click! state-map location)
        (actions/advance-ui! state-map)
        (swap! state-map assoc :action-state action-state)))))

(defn drag-start! [state-map]
  ;; to refactor: `drag-type` is #{:board :stock :talon} which may be data that belongs on the location...
  (fn [drag-type location]
    (fn [event]
      (set-action! state-map :select)
      (swap! state-map assoc-in [:action-state :drag-type] drag-type) ; this fn should be provided by the engine advancer ns that handles it so the keys are consistent and consolidated
      ;; the first advance sets up the [:action-state :selections] as a vector
      ;; so the conj order is as expected
      (actions/advance! state-map)
      (selection-click! state-map location)
      (actions/advance! state-map))))

(defn drop! [state-map]
  (fn [location]
    (fn [event]
      (selection-click! state-map location)
      (actions/advance! state-map))))

(defn double-click! [{:keys [action-state] :as state-map}]
  (fn [click-type target-class location]
    (fn [event]
      (set-action! state-map :select)
      ;; TODO: rename `:drag-type` to `:selection-type`
      (when-not (:drag-type (:action-state @state-map)) ;; oh this is still important
        (swap! state-map assoc-in [:action-state :drag-type] click-type))
      (actions/advance! state-map) ; Wonder if I can factor out the double advance...
      (selection-click! state-map location)
      (actions/advance! state-map))))
