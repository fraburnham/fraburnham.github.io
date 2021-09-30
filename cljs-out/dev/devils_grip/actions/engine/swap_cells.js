// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('devils_grip.actions.engine.swap_cells');
goog.require('cljs.core');
goog.require('cljs.core.constants');
devils_grip.actions.engine.swap_cells.swap_cells = (function devils_grip$actions$engine$swap_cells$swap_cells(board,a,b){

var a_data = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,a);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(board,a,(function (_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,b);
})),b,(function (_){
return a_data;
}));
});
if((typeof devils_grip !== 'undefined') && (typeof devils_grip.actions !== 'undefined') && (typeof devils_grip.actions.engine !== 'undefined') && (typeof devils_grip.actions.engine.swap_cells !== 'undefined') && (typeof devils_grip.actions.engine.swap_cells.advance !== 'undefined')){
} else {
devils_grip.actions.engine.swap_cells.advance = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__13397 = cljs.core.get_global_hierarchy;
return (fexpr__13397.cljs$core$IFn$_invoke$arity$0 ? fexpr__13397.cljs$core$IFn$_invoke$arity$0() : fexpr__13397.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devils-grip.actions.engine.swap-cells","advance"),(function (p__13398){
var map__13399 = p__13398;
var map__13399__$1 = cljs.core.__destructure_map(map__13399);
var action_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13399__$1,cljs.core.cst$kw$action_DASH_state);
return cljs.core.count(cljs.core.cst$kw$selections.cljs$core$IFn$_invoke$arity$1(action_state));
}),cljs.core.cst$kw$default,hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}
devils_grip.actions.engine.swap_cells.advance.cljs$core$IMultiFn$_add_method$arity$3(null,(0),(function (state_map){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$action_DASH_state,cljs.core.cst$kw$selections], null),cljs.core.constantly(cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$action_DASH_state,cljs.core.cst$kw$help_DASH_text], null),cljs.core.constantly("Select first cell to swap"));
}));
devils_grip.actions.engine.swap_cells.advance.cljs$core$IMultiFn$_add_method$arity$3(null,(1),(function (state_map){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$action_DASH_state,cljs.core.cst$kw$help_DASH_text], null),cljs.core.constantly("Select second cell to swap"));
}));
devils_grip.actions.engine.swap_cells.advance.cljs$core$IMultiFn$_add_method$arity$3(null,(2),(function (p__13400){
var map__13401 = p__13400;
var map__13401__$1 = cljs.core.__destructure_map(map__13401);
var state_map = map__13401__$1;
var action_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13401__$1,cljs.core.cst$kw$action_DASH_state);
var vec__13402 = cljs.core.cst$kw$selections.cljs$core$IFn$_invoke$arity$1(action_state);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13402,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13402,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$5(state_map,cljs.core.cst$kw$board_DASH_state,devils_grip.actions.engine.swap_cells.swap_cells,a,b),cljs.core.cst$kw$action_DASH_state,cljs.core.constantly(cljs.core.PersistentArrayMap.EMPTY));
}));
