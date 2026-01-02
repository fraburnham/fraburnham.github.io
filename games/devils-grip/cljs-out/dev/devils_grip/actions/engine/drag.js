// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('devils_grip.actions.engine.drag');
goog.require('cljs.core');
goog.require('devils_grip.actions.engine.drag.board');
goog.require('devils_grip.actions.engine.drag.stock');
goog.require('devils_grip.actions.engine.drag.talon');
if((typeof devils_grip !== 'undefined') && (typeof devils_grip.actions !== 'undefined') && (typeof devils_grip.actions.engine !== 'undefined') && (typeof devils_grip.actions.engine.drag !== 'undefined') && (typeof devils_grip.actions.engine.drag.advance !== 'undefined')){
} else {
devils_grip.actions.engine.drag.advance = (function (){var method_table__4701__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devils-grip.actions.engine.drag","advance"),(function (p__9576){
var map__9577 = p__9576;
var map__9577__$1 = cljs.core.__destructure_map.call(null,map__9577);
var action_state = cljs.core.get.call(null,map__9577__$1,new cljs.core.Keyword(null,"action-state","action-state",-1575944631));
return new cljs.core.Keyword(null,"drag-type","drag-type",1652666979).cljs$core$IFn$_invoke$arity$1(action_state);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}

cljs.core._add_method.call(null,devils_grip.actions.engine.drag.advance,new cljs.core.Keyword(null,"board","board",-1907017633),(function (state_map__9489__auto__){
return (function (p1__9573_SHARP_){
return devils_grip.actions.engine.drag.board.advance.call(null,p1__9573_SHARP_);
}).call(null,state_map__9489__auto__);
}));

cljs.core._add_method.call(null,devils_grip.actions.engine.drag.advance,new cljs.core.Keyword(null,"talon","talon",-969549371),(function (state_map__9489__auto__){
return (function (p1__9574_SHARP_){
return devils_grip.actions.engine.drag.talon.advance.call(null,p1__9574_SHARP_);
}).call(null,state_map__9489__auto__);
}));

cljs.core._add_method.call(null,devils_grip.actions.engine.drag.advance,new cljs.core.Keyword(null,"stock","stock",-877288674),(function (state_map__9489__auto__){
return (function (p1__9575_SHARP_){
return devils_grip.actions.engine.drag.stock.advance.call(null,p1__9575_SHARP_);
}).call(null,state_map__9489__auto__);
}));

cljs.core._add_method.call(null,devils_grip.actions.engine.drag.advance,new cljs.core.Keyword(null,"default","default",-1987822328),(function (state_map__9489__auto__){
return (function (state_map){
return cljs.core.assoc.call(null,state_map,new cljs.core.Keyword(null,"action-state","action-state",-1575944631),cljs.core.PersistentArrayMap.EMPTY);
}).call(null,state_map__9489__auto__);
}));

//# sourceMappingURL=drag.js.map
