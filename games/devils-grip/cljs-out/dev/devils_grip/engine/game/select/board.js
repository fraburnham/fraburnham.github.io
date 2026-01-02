// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('devils_grip.engine.game.select.board');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('devils_grip.engine.game.merge_cells');
goog.require('devils_grip.engine.game.swap_cells');
goog.require('devils_grip.rules');
if((typeof devils_grip !== 'undefined') && (typeof devils_grip.engine !== 'undefined') && (typeof devils_grip.engine.game !== 'undefined') && (typeof devils_grip.engine.game.select !== 'undefined') && (typeof devils_grip.engine.game.select.board !== 'undefined') && (typeof devils_grip.engine.game.select.board.advance !== 'undefined')){
} else {
devils_grip.engine.game.select.board.advance = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__10870 = cljs.core.get_global_hierarchy;
return (fexpr__10870.cljs$core$IFn$_invoke$arity$0 ? fexpr__10870.cljs$core$IFn$_invoke$arity$0() : fexpr__10870.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devils-grip.engine.game.select.board","advance"),(function (p__10871){
var map__10872 = p__10871;
var map__10872__$1 = cljs.core.__destructure_map(map__10872);
var action_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10872__$1,cljs.core.cst$kw$action_DASH_state);
return cljs.core.count(cljs.core.cst$kw$selections.cljs$core$IFn$_invoke$arity$1(action_state));
}),cljs.core.cst$kw$default,hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}

devils_grip.engine.game.select.board.advance.cljs$core$IMultiFn$_add_method$arity$3(null,(0),(function (state_map__10793__auto__){
try{var fexpr__10874 = (function (state_map){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$action_DASH_state,cljs.core.cst$kw$selections], null),cljs.core.constantly(cljs.core.PersistentVector.EMPTY));
});
return fexpr__10874(state_map__10793__auto__);
}catch (e10873){var e__10794__auto__ = e10873;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Failure advancing state",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$state_DASH_map,state_map__10793__auto__,cljs.core.cst$kw$dispatch,(0),cljs.core.cst$kw$reset_DASH_state_DASH_key,cljs.core.cst$kw$action_DASH_state,cljs.core.cst$kw$advancer,devils_grip.engine.game.select.board.advance], null),e__10794__auto__);
}}));

devils_grip.engine.game.select.board.advance.cljs$core$IMultiFn$_add_method$arity$3(null,(1),(function (state_map__10793__auto__){
try{var fexpr__10876 = (function (state_map){
return state_map;
});
return fexpr__10876(state_map__10793__auto__);
}catch (e10875){var e__10794__auto__ = e10875;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Failure advancing state",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$state_DASH_map,state_map__10793__auto__,cljs.core.cst$kw$dispatch,(1),cljs.core.cst$kw$reset_DASH_state_DASH_key,cljs.core.cst$kw$action_DASH_state,cljs.core.cst$kw$advancer,devils_grip.engine.game.select.board.advance], null),e__10794__auto__);
}}));

devils_grip.engine.game.select.board.advance.cljs$core$IMultiFn$_add_method$arity$3(null,(2),(function (state_map__10793__auto__){
try{var fexpr__10878 = (function (state_map){
var new_state_map = devils_grip.rules.validate((devils_grip.engine.game.merge_cells.advance.cljs$core$IFn$_invoke$arity$1 ? devils_grip.engine.game.merge_cells.advance.cljs$core$IFn$_invoke$arity$1(state_map) : devils_grip.engine.game.merge_cells.advance.call(null,state_map)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(new_state_map))?(devils_grip.engine.game.swap_cells.advance.cljs$core$IFn$_invoke$arity$1 ? devils_grip.engine.game.swap_cells.advance.cljs$core$IFn$_invoke$arity$1(state_map) : devils_grip.engine.game.swap_cells.advance.call(null,state_map)):new_state_map),cljs.core.cst$kw$action_DASH_state,cljs.core.PersistentArrayMap.EMPTY);
});
return fexpr__10878(state_map__10793__auto__);
}catch (e10877){var e__10794__auto__ = e10877;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Failure advancing state",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$state_DASH_map,state_map__10793__auto__,cljs.core.cst$kw$dispatch,(2),cljs.core.cst$kw$reset_DASH_state_DASH_key,cljs.core.cst$kw$action_DASH_state,cljs.core.cst$kw$advancer,devils_grip.engine.game.select.board.advance], null),e__10794__auto__);
}}));

devils_grip.engine.game.select.board.advance.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (state_map__10793__auto__){
try{var fexpr__10880 = (function (state_map__10795__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_map__10795__auto__,cljs.core.cst$kw$action_DASH_state,cljs.core.PersistentArrayMap.EMPTY);
});
return fexpr__10880(state_map__10793__auto__);
}catch (e10879){var e__10794__auto__ = e10879;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Failure advancing state",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$state_DASH_map,state_map__10793__auto__,cljs.core.cst$kw$dispatch,cljs.core.cst$kw$default,cljs.core.cst$kw$reset_DASH_state_DASH_key,cljs.core.cst$kw$action_DASH_state,cljs.core.cst$kw$advancer,devils_grip.engine.game.select.board.advance], null),e__10794__auto__);
}}));
