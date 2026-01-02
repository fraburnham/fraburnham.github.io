// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('devils_grip.engine.game.start');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('devils_grip.cards');
devils_grip.engine.game.start.board_setup = (function devils_grip$engine$game$start$board_setup(stock){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__10772_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,p1__10772_SHARP_);
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((8),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__10771_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,p1__10771_SHARP_);
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((1),cljs.core.take.cljs$core$IFn$_invoke$arity$2((24),stock)))));
});
devils_grip.engine.game.start.advance = (function devils_grip$engine$game$start$advance(p__10773){
var map__10774 = p__10773;
var map__10774__$1 = cljs.core.__destructure_map(map__10774);
var state_map = map__10774__$1;
var action_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10774__$1,cljs.core.cst$kw$action_DASH_state);
var stock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10774__$1,cljs.core.cst$kw$stock);
var talon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10774__$1,cljs.core.cst$kw$talon);
var board_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10774__$1,cljs.core.cst$kw$board_DASH_state);

var stock__$1 = devils_grip.cards.shuffle_stock.cljs$core$IFn$_invoke$arity$1(devils_grip.cards.make_stock((2)));
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$talon,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$board_DASH_state,devils_grip.engine.game.start.board_setup(stock__$1),cljs.core.cst$kw$stock,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((24),stock__$1),cljs.core.cst$kw$action_DASH_state,cljs.core.PersistentArrayMap.EMPTY], null);
});
