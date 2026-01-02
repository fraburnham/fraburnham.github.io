// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('devils_grip.actions.engine.drag.board');
goog.require('cljs.core');
goog.require('devils_grip.actions.engine.merge_cells');
goog.require('devils_grip.actions.engine.swap_cells');
goog.require('devils_grip.rules');
if((typeof devils_grip !== 'undefined') && (typeof devils_grip.actions !== 'undefined') && (typeof devils_grip.actions.engine !== 'undefined') && (typeof devils_grip.actions.engine.drag !== 'undefined') && (typeof devils_grip.actions.engine.drag.board !== 'undefined') && (typeof devils_grip.actions.engine.drag.board.advance !== 'undefined')){
} else {
devils_grip.actions.engine.drag.board.advance = (function (){var method_table__4701__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devils-grip.actions.engine.drag.board","advance"),(function (p__9559){
var map__9560 = p__9559;
var map__9560__$1 = cljs.core.__destructure_map.call(null,map__9560);
var action_state = cljs.core.get.call(null,map__9560__$1,new cljs.core.Keyword(null,"action-state","action-state",-1575944631));
return cljs.core.count.call(null,new cljs.core.Keyword(null,"selections","selections",-1277610233).cljs$core$IFn$_invoke$arity$1(action_state));
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}

cljs.core._add_method.call(null,devils_grip.actions.engine.drag.board.advance,(0),(function (state_map__9489__auto__){
return (function (state_map){
return cljs.core.update_in.call(null,state_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"action-state","action-state",-1575944631),new cljs.core.Keyword(null,"selections","selections",-1277610233)], null),cljs.core.constantly.call(null,cljs.core.PersistentVector.EMPTY));
}).call(null,state_map__9489__auto__);
}));

cljs.core._add_method.call(null,devils_grip.actions.engine.drag.board.advance,(1),(function (state_map__9489__auto__){
return (function (state_map){
return state_map;
}).call(null,state_map__9489__auto__);
}));

cljs.core._add_method.call(null,devils_grip.actions.engine.drag.board.advance,(2),(function (state_map__9489__auto__){
return (function (state_map){
var new_state_map = devils_grip.rules.validate.call(null,devils_grip.actions.engine.merge_cells.advance.call(null,state_map));
return cljs.core.assoc.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(new_state_map))?devils_grip.actions.engine.swap_cells.advance.call(null,state_map):new_state_map),new cljs.core.Keyword(null,"action-state","action-state",-1575944631),cljs.core.PersistentArrayMap.EMPTY);
}).call(null,state_map__9489__auto__);
}));

cljs.core._add_method.call(null,devils_grip.actions.engine.drag.board.advance,new cljs.core.Keyword(null,"default","default",-1987822328),(function (state_map__9489__auto__){
return (function (state_map){
return cljs.core.assoc.call(null,state_map,new cljs.core.Keyword(null,"action-state","action-state",-1575944631),cljs.core.PersistentArrayMap.EMPTY);
}).call(null,state_map__9489__auto__);
}));

//# sourceMappingURL=board.js.map
