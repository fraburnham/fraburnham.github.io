// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('devils_grip.actions.engine.start');
goog.require('cljs.core');
goog.require('devils_grip.cards');
devils_grip.actions.engine.start.board_setup = (function devils_grip$actions$engine$start$board_setup(stock){
return cljs.core.mapv.call(null,(function (p1__9532_SHARP_){
return cljs.core.apply.call(null,cljs.core.vector,p1__9532_SHARP_);
}),cljs.core.partition.call(null,(8),cljs.core.mapv.call(null,(function (p1__9531_SHARP_){
return cljs.core.apply.call(null,cljs.core.vector,p1__9531_SHARP_);
}),cljs.core.partition.call(null,(1),cljs.core.take.call(null,(24),stock)))));
});
devils_grip.actions.engine.start.advance = (function devils_grip$actions$engine$start$advance(p__9533){
var map__9534 = p__9533;
var map__9534__$1 = cljs.core.__destructure_map.call(null,map__9534);
var state_map = map__9534__$1;
var action_state = cljs.core.get.call(null,map__9534__$1,new cljs.core.Keyword(null,"action-state","action-state",-1575944631));
var stock = cljs.core.get.call(null,map__9534__$1,new cljs.core.Keyword(null,"stock","stock",-877288674));
var talon = cljs.core.get.call(null,map__9534__$1,new cljs.core.Keyword(null,"talon","talon",-969549371));
var board_state = cljs.core.get.call(null,map__9534__$1,new cljs.core.Keyword(null,"board-state","board-state",1654825192));

var stock__$1 = devils_grip.cards.shuffle_stock.call(null,devils_grip.cards.make_stock.call(null,(2)));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"talon","talon",-969549371),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"board-state","board-state",1654825192),devils_grip.actions.engine.start.board_setup.call(null,stock__$1),new cljs.core.Keyword(null,"stock","stock",-877288674),cljs.core.drop.call(null,(24),stock__$1),new cljs.core.Keyword(null,"action-state","action-state",-1575944631),cljs.core.PersistentArrayMap.EMPTY], null);
});

//# sourceMappingURL=start.js.map
