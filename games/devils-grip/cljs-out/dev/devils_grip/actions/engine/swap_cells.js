// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('devils_grip.actions.engine.swap_cells');
goog.require('cljs.core');
devils_grip.actions.engine.swap_cells.swap_cells = (function devils_grip$actions$engine$swap_cells$swap_cells(board,a,b){

var a_data = cljs.core.get_in.call(null,board,a);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,board,a,(function (_){
return cljs.core.get_in.call(null,board,b);
})),b,(function (_){
return a_data;
}));
});
if((typeof devils_grip !== 'undefined') && (typeof devils_grip.actions !== 'undefined') && (typeof devils_grip.actions.engine !== 'undefined') && (typeof devils_grip.actions.engine.swap_cells !== 'undefined') && (typeof devils_grip.actions.engine.swap_cells.advance !== 'undefined')){
} else {
devils_grip.actions.engine.swap_cells.advance = (function (){var method_table__4701__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devils-grip.actions.engine.swap-cells","advance"),(function (p__9505){
var map__9506 = p__9505;
var map__9506__$1 = cljs.core.__destructure_map.call(null,map__9506);
var action_state = cljs.core.get.call(null,map__9506__$1,new cljs.core.Keyword(null,"action-state","action-state",-1575944631));
return cljs.core.count.call(null,new cljs.core.Keyword(null,"selections","selections",-1277610233).cljs$core$IFn$_invoke$arity$1(action_state));
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}

cljs.core._add_method.call(null,devils_grip.actions.engine.swap_cells.advance,(0),(function (state_map__9489__auto__){
return (function (state_map){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,state_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"action-state","action-state",-1575944631),new cljs.core.Keyword(null,"selections","selections",-1277610233)], null),cljs.core.constantly.call(null,cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"action-state","action-state",-1575944631),new cljs.core.Keyword(null,"help-text","help-text",1567653015)], null),cljs.core.constantly.call(null,"Select first cell to swap"));
}).call(null,state_map__9489__auto__);
}));

cljs.core._add_method.call(null,devils_grip.actions.engine.swap_cells.advance,(1),(function (state_map__9489__auto__){
return (function (state_map){
return cljs.core.update_in.call(null,state_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"action-state","action-state",-1575944631),new cljs.core.Keyword(null,"help-text","help-text",1567653015)], null),cljs.core.constantly.call(null,"Select second cell to swap"));
}).call(null,state_map__9489__auto__);
}));

cljs.core._add_method.call(null,devils_grip.actions.engine.swap_cells.advance,(2),(function (state_map__9489__auto__){
return (function (p__9507){
var map__9508 = p__9507;
var map__9508__$1 = cljs.core.__destructure_map.call(null,map__9508);
var state_map = map__9508__$1;
var action_state = cljs.core.get.call(null,map__9508__$1,new cljs.core.Keyword(null,"action-state","action-state",-1575944631));
var vec__9509 = new cljs.core.Keyword(null,"selections","selections",-1277610233).cljs$core$IFn$_invoke$arity$1(action_state);
var a = cljs.core.nth.call(null,vec__9509,(0),null);
var b = cljs.core.nth.call(null,vec__9509,(1),null);
return cljs.core.update.call(null,cljs.core.update.call(null,state_map,new cljs.core.Keyword(null,"board-state","board-state",1654825192),devils_grip.actions.engine.swap_cells.swap_cells,a,b),new cljs.core.Keyword(null,"action-state","action-state",-1575944631),cljs.core.constantly.call(null,cljs.core.PersistentArrayMap.EMPTY));
}).call(null,state_map__9489__auto__);
}));

cljs.core._add_method.call(null,devils_grip.actions.engine.swap_cells.advance,new cljs.core.Keyword(null,"default","default",-1987822328),(function (state_map__9489__auto__){
return (function (state_map){
return cljs.core.assoc.call(null,state_map,new cljs.core.Keyword(null,"action-state","action-state",-1575944631),cljs.core.PersistentArrayMap.EMPTY);
}).call(null,state_map__9489__auto__);
}));

//# sourceMappingURL=swap_cells.js.map
