// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('devils_grip.engine.ui.select');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('devils_grip.engine.ui.select.board');
goog.require('devils_grip.engine.ui.select.stock');
goog.require('devils_grip.engine.ui.select.talon');
if((typeof devils_grip !== 'undefined') && (typeof devils_grip.engine !== 'undefined') && (typeof devils_grip.engine.ui !== 'undefined') && (typeof devils_grip.engine.ui.select !== 'undefined') && (typeof devils_grip.engine.ui.select.advance !== 'undefined')){
} else {
devils_grip.engine.ui.select.advance = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__10881 = cljs.core.get_global_hierarchy;
return (fexpr__10881.cljs$core$IFn$_invoke$arity$0 ? fexpr__10881.cljs$core$IFn$_invoke$arity$0() : fexpr__10881.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devils-grip.engine.ui.select","advance"),(function (p__10882){
var map__10883 = p__10882;
var map__10883__$1 = cljs.core.__destructure_map(map__10883);
var action_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10883__$1,cljs.core.cst$kw$action_DASH_state);
return cljs.core.cst$kw$drag_DASH_type.cljs$core$IFn$_invoke$arity$1(action_state);
}),cljs.core.cst$kw$default,hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}

devils_grip.engine.ui.select.advance.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$board,(function (state_map__10354__auto__){
try{var fexpr__10885 = (function (p1__10878_SHARP_){
return (devils_grip.engine.ui.select.board.advance.cljs$core$IFn$_invoke$arity$1 ? devils_grip.engine.ui.select.board.advance.cljs$core$IFn$_invoke$arity$1(p1__10878_SHARP_) : devils_grip.engine.ui.select.board.advance.call(null,p1__10878_SHARP_));
});
return fexpr__10885(state_map__10354__auto__);
}catch (e10884){var e__10355__auto__ = e10884;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Failure advancing state",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$state_DASH_map,state_map__10354__auto__,cljs.core.cst$kw$dispatch,cljs.core.cst$kw$board,cljs.core.cst$kw$reset_DASH_state_DASH_key,cljs.core.cst$kw$ui,cljs.core.cst$kw$advancer,devils_grip.engine.ui.select.advance], null),e__10355__auto__);
}}));

devils_grip.engine.ui.select.advance.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$talon,(function (state_map__10354__auto__){
try{var fexpr__10887 = (function (p1__10879_SHARP_){
return devils_grip.engine.ui.select.talon.advance(p1__10879_SHARP_);
});
return fexpr__10887(state_map__10354__auto__);
}catch (e10886){var e__10355__auto__ = e10886;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Failure advancing state",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$state_DASH_map,state_map__10354__auto__,cljs.core.cst$kw$dispatch,cljs.core.cst$kw$talon,cljs.core.cst$kw$reset_DASH_state_DASH_key,cljs.core.cst$kw$ui,cljs.core.cst$kw$advancer,devils_grip.engine.ui.select.advance], null),e__10355__auto__);
}}));

devils_grip.engine.ui.select.advance.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$stock,(function (state_map__10354__auto__){
try{var fexpr__10889 = (function (p1__10880_SHARP_){
return devils_grip.engine.ui.select.stock.advance(p1__10880_SHARP_);
});
return fexpr__10889(state_map__10354__auto__);
}catch (e10888){var e__10355__auto__ = e10888;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Failure advancing state",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$state_DASH_map,state_map__10354__auto__,cljs.core.cst$kw$dispatch,cljs.core.cst$kw$stock,cljs.core.cst$kw$reset_DASH_state_DASH_key,cljs.core.cst$kw$ui,cljs.core.cst$kw$advancer,devils_grip.engine.ui.select.advance], null),e__10355__auto__);
}}));

devils_grip.engine.ui.select.advance.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (state_map__10354__auto__){
try{var fexpr__10891 = (function (state_map__10356__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_map__10356__auto__,cljs.core.cst$kw$ui,cljs.core.PersistentArrayMap.EMPTY);
});
return fexpr__10891(state_map__10354__auto__);
}catch (e10890){var e__10355__auto__ = e10890;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Failure advancing state",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$state_DASH_map,state_map__10354__auto__,cljs.core.cst$kw$dispatch,cljs.core.cst$kw$default,cljs.core.cst$kw$reset_DASH_state_DASH_key,cljs.core.cst$kw$ui,cljs.core.cst$kw$advancer,devils_grip.engine.ui.select.advance], null),e__10355__auto__);
}}));
