// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('devils_grip.engine.helpers');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('devils_grip.engine');
goog.require('reagent.core');
devils_grip.engine.helpers.selection_click_BANG_ = (function devils_grip$engine$helpers$selection_click_BANG_(state_map,selection){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_map,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$action_DASH_state,cljs.core.cst$kw$selections], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([selection], 0));
});
devils_grip.engine.helpers.set_action_BANG_ = (function devils_grip$engine$helpers$set_action_BANG_(state_map,action_type){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_map,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$action_DASH_state,cljs.core.cst$kw$type], null),action_type);
});
devils_grip.engine.helpers.draw_BANG_ = (function devils_grip$engine$helpers$draw_BANG_(state_map){
return (function (_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_map,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$action_DASH_state,cljs.core.cst$kw$type], null),cljs.core.cst$kw$draw);

return devils_grip.engine.advance_BANG_(state_map);
});
});
devils_grip.engine.helpers.drag_enter_BANG_ = (function devils_grip$engine$helpers$drag_enter_BANG_(state_map){
return (function (drag_type,location){
return (function (event){
var action_state = cljs.core.cst$kw$action_DASH_state.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_map));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_map,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$action_DASH_state,cljs.core.cst$kw$type], null),cljs.core.cst$kw$drag);

devils_grip.engine.helpers.selection_click_BANG_(state_map,location);

devils_grip.engine.advance_ui_BANG_(state_map);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_map,cljs.core.assoc,cljs.core.cst$kw$action_DASH_state,action_state);
});
});
});
devils_grip.engine.helpers.drag_start_BANG_ = (function devils_grip$engine$helpers$drag_start_BANG_(state_map){
return (function (drag_type,location){
return (function (event){
devils_grip.engine.helpers.set_action_BANG_(state_map,cljs.core.cst$kw$select);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_map,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$action_DASH_state,cljs.core.cst$kw$drag_DASH_type], null),drag_type);

devils_grip.engine.advance_BANG_(state_map);

devils_grip.engine.helpers.selection_click_BANG_(state_map,location);

return devils_grip.engine.advance_BANG_(state_map);
});
});
});
devils_grip.engine.helpers.drop_BANG_ = (function devils_grip$engine$helpers$drop_BANG_(state_map){
return (function (location){
return (function (event){
devils_grip.engine.helpers.selection_click_BANG_(state_map,location);

return devils_grip.engine.advance_BANG_(state_map);
});
});
});
devils_grip.engine.helpers.double_click_BANG_ = (function devils_grip$engine$helpers$double_click_BANG_(p__10930){
var map__10931 = p__10930;
var map__10931__$1 = cljs.core.__destructure_map(map__10931);
var state_map = map__10931__$1;
var action_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10931__$1,cljs.core.cst$kw$action_DASH_state);
return (function (click_type,target_class,location){
return (function (event){
devils_grip.engine.helpers.set_action_BANG_(state_map,cljs.core.cst$kw$select);

if(cljs.core.truth_(cljs.core.cst$kw$drag_DASH_type.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$action_DASH_state.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_map))))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_map,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$action_DASH_state,cljs.core.cst$kw$drag_DASH_type], null),click_type);
}

devils_grip.engine.advance_BANG_(state_map);

devils_grip.engine.helpers.selection_click_BANG_(state_map,location);

return devils_grip.engine.advance_BANG_(state_map);
});
});
});
