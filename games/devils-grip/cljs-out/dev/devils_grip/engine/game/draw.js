// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('devils_grip.engine.game.draw');
goog.require('cljs.core');
goog.require('cljs.core.constants');
devils_grip.engine.game.draw.draw = (function devils_grip$engine$game$draw$draw(p__10789){
var map__10790 = p__10789;
var map__10790__$1 = cljs.core.__destructure_map(map__10790);
var state_map = map__10790__$1;
var stock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10790__$1,cljs.core.cst$kw$stock);
var talon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10790__$1,cljs.core.cst$kw$talon);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state_map,cljs.core.cst$kw$talon,(function (p1__10787_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p1__10787_SHARP_,cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),stock)));
})),cljs.core.cst$kw$stock,(function (p1__10788_SHARP_){
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),p1__10788_SHARP_);
}));
});
if((typeof devils_grip !== 'undefined') && (typeof devils_grip.engine !== 'undefined') && (typeof devils_grip.engine.game !== 'undefined') && (typeof devils_grip.engine.game.draw !== 'undefined') && (typeof devils_grip.engine.game.draw.advance !== 'undefined')){
} else {
devils_grip.engine.game.draw.advance = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__10792 = cljs.core.get_global_hierarchy;
return (fexpr__10792.cljs$core$IFn$_invoke$arity$0 ? fexpr__10792.cljs$core$IFn$_invoke$arity$0() : fexpr__10792.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devils-grip.engine.game.draw","advance"),(function (p__10793){
var map__10794 = p__10793;
var map__10794__$1 = cljs.core.__destructure_map(map__10794);
var stock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10794__$1,cljs.core.cst$kw$stock);
if((cljs.core.count(stock) >= (3))){
return cljs.core.cst$kw$stock_DASH_full;
} else {
return cljs.core.cst$kw$stock_DASH_empty;
}
}),cljs.core.cst$kw$default,hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}

devils_grip.engine.game.draw.advance.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$stock_DASH_full,(function (state_map__10354__auto__){
try{var fexpr__10796 = (function (state_map){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(devils_grip.engine.game.draw.draw(state_map),cljs.core.cst$kw$action_DASH_state,cljs.core.PersistentArrayMap.EMPTY);
});
return fexpr__10796(state_map__10354__auto__);
}catch (e10795){var e__10355__auto__ = e10795;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Failure advancing state",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$state_DASH_map,state_map__10354__auto__,cljs.core.cst$kw$dispatch,cljs.core.cst$kw$stock_DASH_full,cljs.core.cst$kw$reset_DASH_state_DASH_key,cljs.core.cst$kw$action_DASH_state,cljs.core.cst$kw$advancer,devils_grip.engine.game.draw.advance], null),e__10355__auto__);
}}));

devils_grip.engine.game.draw.advance.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$stock_DASH_empty,(function (state_map__10354__auto__){
try{var fexpr__10801 = (function (p__10802){
var map__10803 = p__10802;
var map__10803__$1 = cljs.core.__destructure_map(map__10803);
var state_map = map__10803__$1;
var stock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10803__$1,cljs.core.cst$kw$stock);
var talon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10803__$1,cljs.core.cst$kw$talon);
var G__10804 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state_map,cljs.core.cst$kw$stock,(function (p1__10791_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p1__10791_SHARP_,talon);
})),cljs.core.cst$kw$talon,cljs.core.constantly(cljs.core.PersistentVector.EMPTY));
return (devils_grip.engine.game.draw.advance.cljs$core$IFn$_invoke$arity$1 ? devils_grip.engine.game.draw.advance.cljs$core$IFn$_invoke$arity$1(G__10804) : devils_grip.engine.game.draw.advance.call(null,G__10804));
});
return fexpr__10801(state_map__10354__auto__);
}catch (e10797){var e__10355__auto__ = e10797;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Failure advancing state",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$state_DASH_map,state_map__10354__auto__,cljs.core.cst$kw$dispatch,cljs.core.cst$kw$stock_DASH_empty,cljs.core.cst$kw$reset_DASH_state_DASH_key,cljs.core.cst$kw$action_DASH_state,cljs.core.cst$kw$advancer,devils_grip.engine.game.draw.advance], null),e__10355__auto__);
}}));

devils_grip.engine.game.draw.advance.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (state_map__10354__auto__){
try{var fexpr__10806 = (function (state_map__10356__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_map__10356__auto__,cljs.core.cst$kw$action_DASH_state,cljs.core.PersistentArrayMap.EMPTY);
});
return fexpr__10806(state_map__10354__auto__);
}catch (e10805){var e__10355__auto__ = e10805;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Failure advancing state",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$state_DASH_map,state_map__10354__auto__,cljs.core.cst$kw$dispatch,cljs.core.cst$kw$default,cljs.core.cst$kw$reset_DASH_state_DASH_key,cljs.core.cst$kw$action_DASH_state,cljs.core.cst$kw$advancer,devils_grip.engine.game.draw.advance], null),e__10355__auto__);
}}));
