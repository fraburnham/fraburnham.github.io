// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('devils_grip.engine.game.drag.talon');
goog.require('cljs.core');
goog.require('devils_grip.engine.game.from_talon');
if((typeof devils_grip !== 'undefined') && (typeof devils_grip.engine !== 'undefined') && (typeof devils_grip.engine.game !== 'undefined') && (typeof devils_grip.engine.game.drag !== 'undefined') && (typeof devils_grip.engine.game.drag.talon !== 'undefined') && (typeof devils_grip.engine.game.drag.talon.advance !== 'undefined')){
} else {
devils_grip.engine.game.drag.talon.advance = (function (){var method_table__4701__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devils-grip.engine.game.drag.talon","advance"),(function (p__18822){
var map__18823 = p__18822;
var map__18823__$1 = cljs.core.__destructure_map.call(null,map__18823);
var action_state = cljs.core.get.call(null,map__18823__$1,new cljs.core.Keyword(null,"action-state","action-state",-1575944631));
return cljs.core.count.call(null,new cljs.core.Keyword(null,"selections","selections",-1277610233).cljs$core$IFn$_invoke$arity$1(action_state));
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}

cljs.core._add_method.call(null,devils_grip.engine.game.drag.talon.advance,(0),(function (state_map__18766__auto__){
return (function (state_map){
return cljs.core.update_in.call(null,state_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"action-state","action-state",-1575944631),new cljs.core.Keyword(null,"selections","selections",-1277610233)], null),cljs.core.constantly.call(null,cljs.core.PersistentVector.EMPTY));
}).call(null,state_map__18766__auto__);
}));

cljs.core._add_method.call(null,devils_grip.engine.game.drag.talon.advance,(1),(function (state_map__18766__auto__){
return (function (state_map){
return state_map;
}).call(null,state_map__18766__auto__);
}));

cljs.core._add_method.call(null,devils_grip.engine.game.drag.talon.advance,(2),(function (state_map__18766__auto__){
return (function (state_map){
return devils_grip.engine.game.from_talon.advance.call(null,cljs.core.update_in.call(null,state_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"action-state","action-state",-1575944631),new cljs.core.Keyword(null,"selections","selections",-1277610233)], null),cljs.core.rest));
}).call(null,state_map__18766__auto__);
}));

cljs.core._add_method.call(null,devils_grip.engine.game.drag.talon.advance,new cljs.core.Keyword(null,"default","default",-1987822328),(function (state_map__18766__auto__){
return (function (state_map__18767__auto__){
return cljs.core.assoc.call(null,state_map__18767__auto__,new cljs.core.Keyword(null,"action-state","action-state",-1575944631),cljs.core.PersistentArrayMap.EMPTY);
}).call(null,state_map__18766__auto__);
}));

//# sourceMappingURL=talon.js.map
