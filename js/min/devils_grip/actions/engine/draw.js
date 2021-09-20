// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('devils_grip.actions.engine.draw');
goog.require('cljs.core');
goog.require('cljs.core.constants');
devils_grip.actions.engine.draw.draw = (function devils_grip$actions$engine$draw$draw(p__13764){
var map__13765 = p__13764;
var map__13765__$1 = ((((!((map__13765 == null)))?((((map__13765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13765.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13765):map__13765);
var state_map = map__13765__$1;
var stock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13765__$1,cljs.core.cst$kw$stock);
var talon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13765__$1,cljs.core.cst$kw$talon);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state_map,cljs.core.cst$kw$talon,((function (map__13765,map__13765__$1,state_map,stock,talon){
return (function (p1__13762_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p1__13762_SHARP_,cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),stock)));
});})(map__13765,map__13765__$1,state_map,stock,talon))
),cljs.core.cst$kw$stock,((function (map__13765,map__13765__$1,state_map,stock,talon){
return (function (p1__13763_SHARP_){
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),p1__13763_SHARP_);
});})(map__13765,map__13765__$1,state_map,stock,talon))
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
return (function (p__13767){
var map__13768 = p__13767;
var map__13768__$1 = ((((!((map__13768 == null)))?((((map__13768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13768.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13768):map__13768);
var stock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13768__$1,cljs.core.cst$kw$stock);
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
devils_grip.actions.engine.draw.advance.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$stock_DASH_empty,(function (p__13771){
var map__13772 = p__13771;
var map__13772__$1 = ((((!((map__13772 == null)))?((((map__13772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13772.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13772):map__13772);
var state_map = map__13772__$1;
var stock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13772__$1,cljs.core.cst$kw$stock);
var talon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13772__$1,cljs.core.cst$kw$talon);
var G__13774 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state_map,cljs.core.cst$kw$stock,((function (map__13772,map__13772__$1,state_map,stock,talon){
return (function (p1__13770_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p1__13770_SHARP_,talon);
});})(map__13772,map__13772__$1,state_map,stock,talon))
),cljs.core.cst$kw$talon,cljs.core.constantly(cljs.core.PersistentVector.EMPTY));
return (devils_grip.actions.engine.draw.advance.cljs$core$IFn$_invoke$arity$1 ? devils_grip.actions.engine.draw.advance.cljs$core$IFn$_invoke$arity$1(G__13774) : devils_grip.actions.engine.draw.advance.call(null,G__13774));
}));
