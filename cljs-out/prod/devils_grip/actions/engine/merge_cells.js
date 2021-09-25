// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('devils_grip.actions.engine.merge_cells');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('devils_grip.cards');
goog.require('devils_grip.actions.engine.fill_hole');
devils_grip.actions.engine.merge_cells.merge_cells = (function devils_grip$actions$engine$merge_cells$merge_cells(board,source,target){

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(board,target,devils_grip.cards.merge_cards,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,source)),source,cljs.core.constantly(cljs.core.PersistentVector.EMPTY));
});
if((typeof devils_grip !== 'undefined') && (typeof devils_grip.actions !== 'undefined') && (typeof devils_grip.actions.engine !== 'undefined') && (typeof devils_grip.actions.engine.merge_cells !== 'undefined') && (typeof devils_grip.actions.engine.merge_cells.advance !== 'undefined')){
} else {
devils_grip.actions.engine.merge_cells.advance = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__13466 = cljs.core.get_global_hierarchy;
return (fexpr__13466.cljs$core$IFn$_invoke$arity$0 ? fexpr__13466.cljs$core$IFn$_invoke$arity$0() : fexpr__13466.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devils-grip.actions.engine.merge-cells","advance"),(function (p__13467){
var map__13468 = p__13467;
var map__13468__$1 = cljs.core.__destructure_map(map__13468);
var action_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13468__$1,cljs.core.cst$kw$action_DASH_state);
return cljs.core.count(cljs.core.cst$kw$selections.cljs$core$IFn$_invoke$arity$1(action_state));
}),cljs.core.cst$kw$default,hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}
devils_grip.actions.engine.merge_cells.advance.cljs$core$IMultiFn$_add_method$arity$3(null,(0),(function (state_map){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$action_DASH_state,cljs.core.cst$kw$selections], null),cljs.core.constantly(cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$action_DASH_state,cljs.core.cst$kw$help_DASH_text], null),cljs.core.constantly("Select cell to take from"));
}));
devils_grip.actions.engine.merge_cells.advance.cljs$core$IMultiFn$_add_method$arity$3(null,(1),(function (state_map){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$action_DASH_state,cljs.core.cst$kw$help_DASH_text], null),cljs.core.constantly("Select cell to place in"));
}));
devils_grip.actions.engine.merge_cells.advance.cljs$core$IMultiFn$_add_method$arity$3(null,(2),(function (p__13469){
var map__13470 = p__13469;
var map__13470__$1 = cljs.core.__destructure_map(map__13470);
var state_map = map__13470__$1;
var action_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13470__$1,cljs.core.cst$kw$action_DASH_state);
var vec__13471 = cljs.core.cst$kw$selections.cljs$core$IFn$_invoke$arity$1(action_state);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13471,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13471,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state_map,cljs.core.cst$kw$action_DASH_state,cljs.core.constantly(cljs.core.PersistentArrayMap.EMPTY));
} else {
return devils_grip.actions.engine.fill_hole.advance(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$5(state_map,cljs.core.cst$kw$board_DASH_state,devils_grip.actions.engine.merge_cells.merge_cells,a,b),cljs.core.cst$kw$action_DASH_state,cljs.core.constantly(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$fill_DASH_hole], null))));
}
}));
