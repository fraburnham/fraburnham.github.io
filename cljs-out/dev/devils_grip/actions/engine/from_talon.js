// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('devils_grip.actions.engine.from_talon');
goog.require('cljs.core');
goog.require('devils_grip.cards');
devils_grip.actions.engine.from_talon.talon__GT_board = (function devils_grip$actions$engine$from_talon$talon__GT_board(board_state,action_state,talon){
var target = cljs.core.first.call(null,new cljs.core.Keyword(null,"selections","selections",-1277610233).cljs$core$IFn$_invoke$arity$1(action_state));
return cljs.core.update_in.call(null,board_state,target,devils_grip.cards.merge_cards,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last.call(null,talon)], null));
});
if((typeof devils_grip !== 'undefined') && (typeof devils_grip.actions !== 'undefined') && (typeof devils_grip.actions.engine !== 'undefined') && (typeof devils_grip.actions.engine.from_talon !== 'undefined') && (typeof devils_grip.actions.engine.from_talon.advance !== 'undefined')){
} else {
devils_grip.actions.engine.from_talon.advance = (function (){var method_table__4701__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devils-grip.actions.engine.from-talon","advance"),(function (p__9525){
var map__9526 = p__9525;
var map__9526__$1 = cljs.core.__destructure_map.call(null,map__9526);
var state_map = map__9526__$1;
var action_state = cljs.core.get.call(null,map__9526__$1,new cljs.core.Keyword(null,"action-state","action-state",-1575944631));
return cljs.core.count.call(null,new cljs.core.Keyword(null,"selections","selections",-1277610233).cljs$core$IFn$_invoke$arity$1(action_state));
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}

cljs.core._add_method.call(null,devils_grip.actions.engine.from_talon.advance,(0),(function (state_map__9489__auto__){
return (function (state_map){
return cljs.core.update_in.call(null,state_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"action-state","action-state",-1575944631),new cljs.core.Keyword(null,"help-text","help-text",1567653015)], null),cljs.core.constantly.call(null,"Select target cell"));
}).call(null,state_map__9489__auto__);
}));

cljs.core._add_method.call(null,devils_grip.actions.engine.from_talon.advance,(1),(function (state_map__9489__auto__){
return (function (p__9527){
var map__9528 = p__9527;
var map__9528__$1 = cljs.core.__destructure_map.call(null,map__9528);
var state_map = map__9528__$1;
var action_state = cljs.core.get.call(null,map__9528__$1,new cljs.core.Keyword(null,"action-state","action-state",-1575944631));
var talon = cljs.core.get.call(null,map__9528__$1,new cljs.core.Keyword(null,"talon","talon",-969549371));
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,state_map,new cljs.core.Keyword(null,"board-state","board-state",1654825192),devils_grip.actions.engine.from_talon.talon__GT_board,action_state,talon),new cljs.core.Keyword(null,"talon","talon",-969549371),cljs.core.drop_last),new cljs.core.Keyword(null,"action-state","action-state",-1575944631),cljs.core.constantly.call(null,cljs.core.PersistentArrayMap.EMPTY));
}).call(null,state_map__9489__auto__);
}));

cljs.core._add_method.call(null,devils_grip.actions.engine.from_talon.advance,new cljs.core.Keyword(null,"default","default",-1987822328),(function (state_map__9489__auto__){
return (function (state_map){
return cljs.core.assoc.call(null,state_map,new cljs.core.Keyword(null,"action-state","action-state",-1575944631),cljs.core.PersistentArrayMap.EMPTY);
}).call(null,state_map__9489__auto__);
}));

//# sourceMappingURL=from_talon.js.map
