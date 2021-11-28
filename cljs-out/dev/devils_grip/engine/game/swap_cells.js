// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('devils_grip.engine.game.swap_cells');
goog.require('cljs.core');
goog.require('cljs.core.constants');
devils_grip.engine.game.swap_cells.swap_cells = (function devils_grip$engine$game$swap_cells$swap_cells(board,a,b){

var a_data = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,a);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(board,a,(function (_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,b);
})),b,(function (_){
return a_data;
}));
});
if((typeof devils_grip !== 'undefined') && (typeof devils_grip.engine !== 'undefined') && (typeof devils_grip.engine.game !== 'undefined') && (typeof devils_grip.engine.game.swap_cells !== 'undefined') && (typeof devils_grip.engine.game.swap_cells.advance !== 'undefined')){
} else {
devils_grip.engine.game.swap_cells.advance = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__10811 = cljs.core.get_global_hierarchy;
return (fexpr__10811.cljs$core$IFn$_invoke$arity$0 ? fexpr__10811.cljs$core$IFn$_invoke$arity$0() : fexpr__10811.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devils-grip.engine.game.swap-cells","advance"),(function (p__10812){
var map__10813 = p__10812;
var map__10813__$1 = cljs.core.__destructure_map(map__10813);
var action_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10813__$1,cljs.core.cst$kw$action_DASH_state);
return cljs.core.count(cljs.core.cst$kw$selections.cljs$core$IFn$_invoke$arity$1(action_state));
}),cljs.core.cst$kw$default,hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}

devils_grip.engine.game.swap_cells.advance.cljs$core$IMultiFn$_add_method$arity$3(null,(0),(function (state_map__10793__auto__){
try{var fexpr__10815 = (function (state_map){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$action_DASH_state,cljs.core.cst$kw$selections], null),cljs.core.constantly(cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$action_DASH_state,cljs.core.cst$kw$help_DASH_text], null),cljs.core.constantly("Select first cell to swap"));
});
return fexpr__10815(state_map__10793__auto__);
}catch (e10814){var e__10794__auto__ = e10814;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Failure advancing state",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$state_DASH_map,state_map__10793__auto__,cljs.core.cst$kw$dispatch,(0),cljs.core.cst$kw$reset_DASH_state_DASH_key,cljs.core.cst$kw$action_DASH_state,cljs.core.cst$kw$advancer,devils_grip.engine.game.swap_cells.advance], null),e__10794__auto__);
}}));

devils_grip.engine.game.swap_cells.advance.cljs$core$IMultiFn$_add_method$arity$3(null,(1),(function (state_map__10793__auto__){
try{var fexpr__10817 = (function (state_map){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$action_DASH_state,cljs.core.cst$kw$help_DASH_text], null),cljs.core.constantly("Select second cell to swap"));
});
return fexpr__10817(state_map__10793__auto__);
}catch (e10816){var e__10794__auto__ = e10816;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Failure advancing state",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$state_DASH_map,state_map__10793__auto__,cljs.core.cst$kw$dispatch,(1),cljs.core.cst$kw$reset_DASH_state_DASH_key,cljs.core.cst$kw$action_DASH_state,cljs.core.cst$kw$advancer,devils_grip.engine.game.swap_cells.advance], null),e__10794__auto__);
}}));

devils_grip.engine.game.swap_cells.advance.cljs$core$IMultiFn$_add_method$arity$3(null,(2),(function (state_map__10793__auto__){
try{var fexpr__10824 = (function (p__10825){
var map__10826 = p__10825;
var map__10826__$1 = cljs.core.__destructure_map(map__10826);
var state_map = map__10826__$1;
var action_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10826__$1,cljs.core.cst$kw$action_DASH_state);
var vec__10827 = cljs.core.cst$kw$selections.cljs$core$IFn$_invoke$arity$1(action_state);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10827,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10827,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$5(state_map,cljs.core.cst$kw$board_DASH_state,devils_grip.engine.game.swap_cells.swap_cells,a,b),cljs.core.cst$kw$action_DASH_state,cljs.core.constantly(cljs.core.PersistentArrayMap.EMPTY));
});
return fexpr__10824(state_map__10793__auto__);
}catch (e10818){var e__10794__auto__ = e10818;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Failure advancing state",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$state_DASH_map,state_map__10793__auto__,cljs.core.cst$kw$dispatch,(2),cljs.core.cst$kw$reset_DASH_state_DASH_key,cljs.core.cst$kw$action_DASH_state,cljs.core.cst$kw$advancer,devils_grip.engine.game.swap_cells.advance], null),e__10794__auto__);
}}));

devils_grip.engine.game.swap_cells.advance.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (state_map__10793__auto__){
try{var fexpr__10831 = (function (state_map__10795__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_map__10795__auto__,cljs.core.cst$kw$action_DASH_state,cljs.core.PersistentArrayMap.EMPTY);
});
return fexpr__10831(state_map__10793__auto__);
}catch (e10830){var e__10794__auto__ = e10830;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Failure advancing state",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$state_DASH_map,state_map__10793__auto__,cljs.core.cst$kw$dispatch,cljs.core.cst$kw$default,cljs.core.cst$kw$reset_DASH_state_DASH_key,cljs.core.cst$kw$action_DASH_state,cljs.core.cst$kw$advancer,devils_grip.engine.game.swap_cells.advance], null),e__10794__auto__);
}}));
