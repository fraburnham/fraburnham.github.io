// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('devils_grip.engine.ui.select.board');
goog.require('cljs.core');
goog.require('cljs.core.constants');
if((typeof devils_grip !== 'undefined') && (typeof devils_grip.engine !== 'undefined') && (typeof devils_grip.engine.ui !== 'undefined') && (typeof devils_grip.engine.ui.select !== 'undefined') && (typeof devils_grip.engine.ui.select.board !== 'undefined') && (typeof devils_grip.engine.ui.select.board.advance !== 'undefined')){
} else {
devils_grip.engine.ui.select.board.advance = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__10857 = cljs.core.get_global_hierarchy;
return (fexpr__10857.cljs$core$IFn$_invoke$arity$0 ? fexpr__10857.cljs$core$IFn$_invoke$arity$0() : fexpr__10857.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devils-grip.engine.ui.select.board","advance"),(function (p__10858){
var map__10859 = p__10858;
var map__10859__$1 = cljs.core.__destructure_map(map__10859);
var action_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10859__$1,cljs.core.cst$kw$action_DASH_state);
return cljs.core.count(cljs.core.cst$kw$selections.cljs$core$IFn$_invoke$arity$1(action_state));
}),cljs.core.cst$kw$default,hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}

devils_grip.engine.ui.select.board.advance.cljs$core$IMultiFn$_add_method$arity$3(null,(1),(function (state_map__10354__auto__){
try{var fexpr__10866 = (function (p__10867){
var map__10868 = p__10867;
var map__10868__$1 = cljs.core.__destructure_map(map__10868);
var state_map = map__10868__$1;
var action_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10868__$1,cljs.core.cst$kw$action_DASH_state);
var vec__10869 = cljs.core.first(cljs.core.cst$kw$selections.cljs$core$IFn$_invoke$arity$1(action_state));
var row_num = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10869,(0),null);
var col_num = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10869,(1),null);
return cljs.core.assoc_in(state_map,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ui,cljs.core.cst$kw$board,row_num,col_num,cljs.core.cst$kw$classes], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selected"], null));
});
return fexpr__10866(state_map__10354__auto__);
}catch (e10860){var e__10355__auto__ = e10860;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Failure advancing state",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$state_DASH_map,state_map__10354__auto__,cljs.core.cst$kw$dispatch,(1),cljs.core.cst$kw$reset_DASH_state_DASH_key,cljs.core.cst$kw$ui,cljs.core.cst$kw$advancer,devils_grip.engine.ui.select.board.advance], null),e__10355__auto__);
}}));

devils_grip.engine.ui.select.board.advance.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (state_map__10354__auto__){
try{var fexpr__10873 = (function (state_map__10356__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_map__10356__auto__,cljs.core.cst$kw$ui,cljs.core.PersistentArrayMap.EMPTY);
});
return fexpr__10873(state_map__10354__auto__);
}catch (e10872){var e__10355__auto__ = e10872;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Failure advancing state",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$state_DASH_map,state_map__10354__auto__,cljs.core.cst$kw$dispatch,cljs.core.cst$kw$default,cljs.core.cst$kw$reset_DASH_state_DASH_key,cljs.core.cst$kw$ui,cljs.core.cst$kw$advancer,devils_grip.engine.ui.select.board.advance], null),e__10355__auto__);
}}));
