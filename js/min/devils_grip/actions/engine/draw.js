// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('devils_grip.actions.engine.draw');
goog.require('cljs.core');
goog.require('cljs.core.constants');
devils_grip.actions.engine.draw.draw = (function devils_grip$actions$engine$draw$draw(p__13817){
var map__13818 = p__13817;
var map__13818__$1 = ((((!((map__13818 == null)))?((((map__13818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13818.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13818):map__13818);
var state_map = map__13818__$1;
var stock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13818__$1,cljs.core.cst$kw$stock);
var talon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13818__$1,cljs.core.cst$kw$talon);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state_map,cljs.core.cst$kw$talon,((function (map__13818,map__13818__$1,state_map,stock,talon){
return (function (p1__13815_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p1__13815_SHARP_,cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),stock)));
});})(map__13818,map__13818__$1,state_map,stock,talon))
),cljs.core.cst$kw$stock,((function (map__13818,map__13818__$1,state_map,stock,talon){
return (function (p1__13816_SHARP_){
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),p1__13816_SHARP_);
});})(map__13818,map__13818__$1,state_map,stock,talon))
);
});
if(typeof devils_grip.actions.engine.draw.advance !== 'undefined'){
} else {
devils_grip.actions.engine.draw.advance = (function (){var method_table__8625__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__8626__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__8627__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__8628__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__8629__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devils-grip.actions.engine.draw","advance"),((function (method_table__8625__auto__,prefer_table__8626__auto__,method_cache__8627__auto__,cached_hierarchy__8628__auto__,hierarchy__8629__auto__){
return (function (p__13820){
var map__13821 = p__13820;
var map__13821__$1 = ((((!((map__13821 == null)))?((((map__13821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13821.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13821):map__13821);
var stock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13821__$1,cljs.core.cst$kw$stock);
if((cljs.core.count(stock) >= (3))){
return cljs.core.cst$kw$stock_DASH_full;
} else {
return cljs.core.cst$kw$stock_DASH_empty;
}
});})(method_table__8625__auto__,prefer_table__8626__auto__,method_cache__8627__auto__,cached_hierarchy__8628__auto__,hierarchy__8629__auto__))
,cljs.core.cst$kw$default,hierarchy__8629__auto__,method_table__8625__auto__,prefer_table__8626__auto__,method_cache__8627__auto__,cached_hierarchy__8628__auto__));
})();
}
devils_grip.actions.engine.draw.advance.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$stock_DASH_full,(function (state_map){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(devils_grip.actions.engine.draw.draw(state_map),cljs.core.cst$kw$action_DASH_state,cljs.core.PersistentArrayMap.EMPTY);
}));
devils_grip.actions.engine.draw.advance.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$stock_DASH_empty,(function (p__13824){
var map__13825 = p__13824;
var map__13825__$1 = ((((!((map__13825 == null)))?((((map__13825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13825.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13825):map__13825);
var state_map = map__13825__$1;
var stock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13825__$1,cljs.core.cst$kw$stock);
var talon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13825__$1,cljs.core.cst$kw$talon);
var G__13827 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state_map,cljs.core.cst$kw$stock,((function (map__13825,map__13825__$1,state_map,stock,talon){
return (function (p1__13823_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p1__13823_SHARP_,talon);
});})(map__13825,map__13825__$1,state_map,stock,talon))
),cljs.core.cst$kw$talon,cljs.core.constantly(cljs.core.PersistentVector.EMPTY));
return (devils_grip.actions.engine.draw.advance.cljs$core$IFn$_invoke$arity$1 ? devils_grip.actions.engine.draw.advance.cljs$core$IFn$_invoke$arity$1(G__13827) : devils_grip.actions.engine.draw.advance.call(null,G__13827));
}));
