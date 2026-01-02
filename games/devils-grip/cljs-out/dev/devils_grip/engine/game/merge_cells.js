// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('devils_grip.engine.game.merge_cells');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('devils_grip.cards');
goog.require('devils_grip.engine.game.fill_hole');
devils_grip.engine.game.merge_cells.merge_cells = (function devils_grip$engine$game$merge_cells$merge_cells(board,source,target){

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(board,target,devils_grip.cards.merge_cards,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,source)),source,cljs.core.constantly(cljs.core.PersistentVector.EMPTY));
});
if((typeof devils_grip !== 'undefined') && (typeof devils_grip.engine !== 'undefined') && (typeof devils_grip.engine.game !== 'undefined') && (typeof devils_grip.engine.game.merge_cells !== 'undefined') && (typeof devils_grip.engine.game.merge_cells.advance !== 'undefined')){
} else {
devils_grip.engine.game.merge_cells.advance = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__10847 = cljs.core.get_global_hierarchy;
return (fexpr__10847.cljs$core$IFn$_invoke$arity$0 ? fexpr__10847.cljs$core$IFn$_invoke$arity$0() : fexpr__10847.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devils-grip.engine.game.merge-cells","advance"),(function (p__10848){
var map__10849 = p__10848;
var map__10849__$1 = cljs.core.__destructure_map(map__10849);
var action_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10849__$1,cljs.core.cst$kw$action_DASH_state);
return cljs.core.count(cljs.core.cst$kw$selections.cljs$core$IFn$_invoke$arity$1(action_state));
}),cljs.core.cst$kw$default,hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}

devils_grip.engine.game.merge_cells.advance.cljs$core$IMultiFn$_add_method$arity$3(null,(0),(function (state_map__10793__auto__){
try{var fexpr__10851 = (function (state_map){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$action_DASH_state,cljs.core.cst$kw$selections], null),cljs.core.constantly(cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$action_DASH_state,cljs.core.cst$kw$help_DASH_text], null),cljs.core.constantly("Select cell to take from"));
});
return fexpr__10851(state_map__10793__auto__);
}catch (e10850){var e__10794__auto__ = e10850;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Failure advancing state",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$state_DASH_map,state_map__10793__auto__,cljs.core.cst$kw$dispatch,(0),cljs.core.cst$kw$reset_DASH_state_DASH_key,cljs.core.cst$kw$action_DASH_state,cljs.core.cst$kw$advancer,devils_grip.engine.game.merge_cells.advance], null),e__10794__auto__);
}}));

devils_grip.engine.game.merge_cells.advance.cljs$core$IMultiFn$_add_method$arity$3(null,(1),(function (state_map__10793__auto__){
try{var fexpr__10853 = (function (state_map){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$action_DASH_state,cljs.core.cst$kw$help_DASH_text], null),cljs.core.constantly("Select cell to place in"));
});
return fexpr__10853(state_map__10793__auto__);
}catch (e10852){var e__10794__auto__ = e10852;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Failure advancing state",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$state_DASH_map,state_map__10793__auto__,cljs.core.cst$kw$dispatch,(1),cljs.core.cst$kw$reset_DASH_state_DASH_key,cljs.core.cst$kw$action_DASH_state,cljs.core.cst$kw$advancer,devils_grip.engine.game.merge_cells.advance], null),e__10794__auto__);
}}));

devils_grip.engine.game.merge_cells.advance.cljs$core$IMultiFn$_add_method$arity$3(null,(2),(function (state_map__10793__auto__){
try{var fexpr__10860 = (function (p__10861){
var map__10862 = p__10861;
var map__10862__$1 = cljs.core.__destructure_map(map__10862);
var state_map = map__10862__$1;
var action_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10862__$1,cljs.core.cst$kw$action_DASH_state);
var vec__10863 = cljs.core.cst$kw$selections.cljs$core$IFn$_invoke$arity$1(action_state);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10863,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10863,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state_map,cljs.core.cst$kw$action_DASH_state,cljs.core.constantly(cljs.core.PersistentArrayMap.EMPTY));
} else {
return devils_grip.engine.game.fill_hole.advance(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$5(state_map,cljs.core.cst$kw$board_DASH_state,devils_grip.engine.game.merge_cells.merge_cells,a,b),cljs.core.cst$kw$action_DASH_state,cljs.core.constantly(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$fill_DASH_hole], null))));
}
});
return fexpr__10860(state_map__10793__auto__);
}catch (e10854){var e__10794__auto__ = e10854;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Failure advancing state",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$state_DASH_map,state_map__10793__auto__,cljs.core.cst$kw$dispatch,(2),cljs.core.cst$kw$reset_DASH_state_DASH_key,cljs.core.cst$kw$action_DASH_state,cljs.core.cst$kw$advancer,devils_grip.engine.game.merge_cells.advance], null),e__10794__auto__);
}}));

devils_grip.engine.game.merge_cells.advance.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (state_map__10793__auto__){
try{var fexpr__10867 = (function (state_map__10795__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_map__10795__auto__,cljs.core.cst$kw$action_DASH_state,cljs.core.PersistentArrayMap.EMPTY);
});
return fexpr__10867(state_map__10793__auto__);
}catch (e10866){var e__10794__auto__ = e10866;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Failure advancing state",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$state_DASH_map,state_map__10793__auto__,cljs.core.cst$kw$dispatch,cljs.core.cst$kw$default,cljs.core.cst$kw$reset_DASH_state_DASH_key,cljs.core.cst$kw$action_DASH_state,cljs.core.cst$kw$advancer,devils_grip.engine.game.merge_cells.advance], null),e__10794__auto__);
}}));
