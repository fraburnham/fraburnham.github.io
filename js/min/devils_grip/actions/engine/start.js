// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('devils_grip.actions.engine.start');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('devils_grip.cards');
devils_grip.actions.engine.start.board_setup = (function devils_grip$actions$engine$start$board_setup(stock){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__13795_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,p1__13795_SHARP_);
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((8),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__13794_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,p1__13794_SHARP_);
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((1),cljs.core.take.cljs$core$IFn$_invoke$arity$2((24),stock)))));
});
devils_grip.actions.engine.start.advance = (function devils_grip$actions$engine$start$advance(p__13796){
var map__13797 = p__13796;
var map__13797__$1 = ((((!((map__13797 == null)))?((((map__13797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13797.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13797):map__13797);
var state_map = map__13797__$1;
var action_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13797__$1,cljs.core.cst$kw$action_DASH_state);
var stock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13797__$1,cljs.core.cst$kw$stock);
var talon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13797__$1,cljs.core.cst$kw$talon);
var board_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13797__$1,cljs.core.cst$kw$board_DASH_state);

var stock__$1 = devils_grip.cards.shuffle_stock.cljs$core$IFn$_invoke$arity$1(devils_grip.cards.make_stock((2)));
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$talon,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$board_DASH_state,devils_grip.actions.engine.start.board_setup(stock__$1),cljs.core.cst$kw$stock,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((24),stock__$1),cljs.core.cst$kw$action_DASH_state,cljs.core.PersistentArrayMap.EMPTY], null);
});
