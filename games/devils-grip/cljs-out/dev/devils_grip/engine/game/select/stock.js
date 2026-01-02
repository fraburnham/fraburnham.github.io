// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('devils_grip.engine.game.select.stock');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('devils_grip.engine.game.draw');
if((typeof devils_grip !== 'undefined') && (typeof devils_grip.engine !== 'undefined') && (typeof devils_grip.engine.game !== 'undefined') && (typeof devils_grip.engine.game.select !== 'undefined') && (typeof devils_grip.engine.game.select.stock !== 'undefined') && (typeof devils_grip.engine.game.select.stock.advance !== 'undefined')){
} else {
devils_grip.engine.game.select.stock.advance = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__10809 = cljs.core.get_global_hierarchy;
return (fexpr__10809.cljs$core$IFn$_invoke$arity$0 ? fexpr__10809.cljs$core$IFn$_invoke$arity$0() : fexpr__10809.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devils-grip.engine.game.select.stock","advance"),(function (p__10810){
var map__10811 = p__10810;
var map__10811__$1 = cljs.core.__destructure_map(map__10811);
var action_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10811__$1,cljs.core.cst$kw$action_DASH_state);
return cljs.core.count(cljs.core.cst$kw$selections.cljs$core$IFn$_invoke$arity$1(action_state));
}),cljs.core.cst$kw$default,hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}

devils_grip.engine.game.select.stock.advance.cljs$core$IMultiFn$_add_method$arity$3(null,(0),(function (state_map__10354__auto__){
try{var fexpr__10813 = (function (state_map){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$action_DASH_state,cljs.core.cst$kw$selections], null),cljs.core.constantly(cljs.core.PersistentVector.EMPTY));
});
return fexpr__10813(state_map__10354__auto__);
}catch (e10812){var e__10355__auto__ = e10812;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Failure advancing state",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$state_DASH_map,state_map__10354__auto__,cljs.core.cst$kw$dispatch,(0),cljs.core.cst$kw$reset_DASH_state_DASH_key,cljs.core.cst$kw$action_DASH_state,cljs.core.cst$kw$advancer,devils_grip.engine.game.select.stock.advance], null),e__10355__auto__);
}}));

devils_grip.engine.game.select.stock.advance.cljs$core$IMultiFn$_add_method$arity$3(null,(1),(function (state_map__10354__auto__){
try{var fexpr__10815 = (function (state_map){
return state_map;
});
return fexpr__10815(state_map__10354__auto__);
}catch (e10814){var e__10355__auto__ = e10814;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Failure advancing state",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$state_DASH_map,state_map__10354__auto__,cljs.core.cst$kw$dispatch,(1),cljs.core.cst$kw$reset_DASH_state_DASH_key,cljs.core.cst$kw$action_DASH_state,cljs.core.cst$kw$advancer,devils_grip.engine.game.select.stock.advance], null),e__10355__auto__);
}}));

devils_grip.engine.game.select.stock.advance.cljs$core$IMultiFn$_add_method$arity$3(null,(2),(function (state_map__10354__auto__){
try{var fexpr__10819 = (function (p__10820){
var map__10821 = p__10820;
var map__10821__$1 = cljs.core.__destructure_map(map__10821);
var state_map = map__10821__$1;
var action_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10821__$1,cljs.core.cst$kw$action_DASH_state);
return (devils_grip.engine.game.draw.advance.cljs$core$IFn$_invoke$arity$1 ? devils_grip.engine.game.draw.advance.cljs$core$IFn$_invoke$arity$1(state_map) : devils_grip.engine.game.draw.advance.call(null,state_map));
});
return fexpr__10819(state_map__10354__auto__);
}catch (e10816){var e__10355__auto__ = e10816;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Failure advancing state",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$state_DASH_map,state_map__10354__auto__,cljs.core.cst$kw$dispatch,(2),cljs.core.cst$kw$reset_DASH_state_DASH_key,cljs.core.cst$kw$action_DASH_state,cljs.core.cst$kw$advancer,devils_grip.engine.game.select.stock.advance], null),e__10355__auto__);
}}));

devils_grip.engine.game.select.stock.advance.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (state_map__10354__auto__){
try{var fexpr__10823 = (function (state_map__10356__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_map__10356__auto__,cljs.core.cst$kw$action_DASH_state,cljs.core.PersistentArrayMap.EMPTY);
});
return fexpr__10823(state_map__10354__auto__);
}catch (e10822){var e__10355__auto__ = e10822;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Failure advancing state",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$state_DASH_map,state_map__10354__auto__,cljs.core.cst$kw$dispatch,cljs.core.cst$kw$default,cljs.core.cst$kw$reset_DASH_state_DASH_key,cljs.core.cst$kw$action_DASH_state,cljs.core.cst$kw$advancer,devils_grip.engine.game.select.stock.advance], null),e__10355__auto__);
}}));
