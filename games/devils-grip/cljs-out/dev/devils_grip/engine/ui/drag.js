// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('devils_grip.engine.ui.drag');
goog.require('cljs.core');
goog.require('cljs.core.constants');
devils_grip.engine.ui.drag.advance = (function devils_grip$engine$ui$drag$advance(p__10883){
var map__10884 = p__10883;
var map__10884__$1 = cljs.core.__destructure_map(map__10884);
var state_map = map__10884__$1;
var action_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10884__$1,cljs.core.cst$kw$action_DASH_state);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (state_map__$1,p__10885){
var vec__10886 = p__10885;
var row_num = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10886,(0),null);
var col_num = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10886,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state_map__$1,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$drag_DASH_type.cljs$core$IFn$_invoke$arity$1(action_state),row_num,col_num,cljs.core.cst$kw$classes], null),cljs.core.conj,"selected");
}),cljs.core.assoc_in(state_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$drag_DASH_type.cljs$core$IFn$_invoke$arity$1(action_state)], null),cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$selections.cljs$core$IFn$_invoke$arity$1(action_state));
});
