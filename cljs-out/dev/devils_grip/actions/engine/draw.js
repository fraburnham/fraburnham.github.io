// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('devils_grip.actions.engine.draw');
goog.require('cljs.core');
goog.require('cljs.core.constants');
devils_grip.actions.engine.draw.draw = (function devils_grip$actions$engine$draw$draw(p__13409){
var map__13410 = p__13409;
var map__13410__$1 = cljs.core.__destructure_map(map__13410);
var state_map = map__13410__$1;
var stock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13410__$1,cljs.core.cst$kw$stock);
var talon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13410__$1,cljs.core.cst$kw$talon);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state_map,cljs.core.cst$kw$talon,(function (p1__13407_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p1__13407_SHARP_,cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),stock)));
})),cljs.core.cst$kw$stock,(function (p1__13408_SHARP_){
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),p1__13408_SHARP_);
}));
});
if((typeof devils_grip !== 'undefined') && (typeof devils_grip.actions !== 'undefined') && (typeof devils_grip.actions.engine !== 'undefined') && (typeof devils_grip.actions.engine.draw !== 'undefined') && (typeof devils_grip.actions.engine.draw.advance !== 'undefined')){
} else {
devils_grip.actions.engine.draw.advance = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__13411 = cljs.core.get_global_hierarchy;
return (fexpr__13411.cljs$core$IFn$_invoke$arity$0 ? fexpr__13411.cljs$core$IFn$_invoke$arity$0() : fexpr__13411.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devils-grip.actions.engine.draw","advance"),(function (p__13412){
var map__13413 = p__13412;
var map__13413__$1 = cljs.core.__destructure_map(map__13413);
var stock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13413__$1,cljs.core.cst$kw$stock);
if((cljs.core.count(stock) >= (3))){
return cljs.core.cst$kw$stock_DASH_full;
} else {
return cljs.core.cst$kw$stock_DASH_empty;
}
}),cljs.core.cst$kw$default,hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}
devils_grip.actions.engine.draw.advance.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$stock_DASH_full,(function (state_map){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(devils_grip.actions.engine.draw.draw(state_map),cljs.core.cst$kw$action_DASH_state,cljs.core.PersistentArrayMap.EMPTY);
}));
devils_grip.actions.engine.draw.advance.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$stock_DASH_empty,(function (p__13415){
var map__13416 = p__13415;
var map__13416__$1 = cljs.core.__destructure_map(map__13416);
var state_map = map__13416__$1;
var stock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13416__$1,cljs.core.cst$kw$stock);
var talon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13416__$1,cljs.core.cst$kw$talon);
var G__13417 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state_map,cljs.core.cst$kw$stock,(function (p1__13414_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p1__13414_SHARP_,talon);
})),cljs.core.cst$kw$talon,cljs.core.constantly(cljs.core.PersistentVector.EMPTY));
return (devils_grip.actions.engine.draw.advance.cljs$core$IFn$_invoke$arity$1 ? devils_grip.actions.engine.draw.advance.cljs$core$IFn$_invoke$arity$1(G__13417) : devils_grip.actions.engine.draw.advance.call(null,G__13417));
}));
