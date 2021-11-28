// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('devils_grip.engine.game.drag');
goog.require('cljs.core');
goog.require('devils_grip.engine.game.drag.board');
goog.require('devils_grip.engine.game.drag.stock');
goog.require('devils_grip.engine.game.drag.talon');
if((typeof devils_grip !== 'undefined') && (typeof devils_grip.engine !== 'undefined') && (typeof devils_grip.engine.game !== 'undefined') && (typeof devils_grip.engine.game.drag !== 'undefined') && (typeof devils_grip.engine.game.drag.advance !== 'undefined')){
} else {
devils_grip.engine.game.drag.advance = (function (){var method_table__4701__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devils-grip.engine.game.drag","advance"),(function (p__18851){
var map__18852 = p__18851;
var map__18852__$1 = cljs.core.__destructure_map.call(null,map__18852);
var action_state = cljs.core.get.call(null,map__18852__$1,new cljs.core.Keyword(null,"action-state","action-state",-1575944631));
return new cljs.core.Keyword(null,"drag-type","drag-type",1652666979).cljs$core$IFn$_invoke$arity$1(action_state);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}

cljs.core._add_method.call(null,devils_grip.engine.game.drag.advance,new cljs.core.Keyword(null,"board","board",-1907017633),(function (state_map__18766__auto__){
return (function (p1__18848_SHARP_){
return devils_grip.engine.game.drag.board.advance.call(null,p1__18848_SHARP_);
}).call(null,state_map__18766__auto__);
}));

cljs.core._add_method.call(null,devils_grip.engine.game.drag.advance,new cljs.core.Keyword(null,"talon","talon",-969549371),(function (state_map__18766__auto__){
return (function (p1__18849_SHARP_){
return devils_grip.engine.game.drag.talon.advance.call(null,p1__18849_SHARP_);
}).call(null,state_map__18766__auto__);
}));

cljs.core._add_method.call(null,devils_grip.engine.game.drag.advance,new cljs.core.Keyword(null,"stock","stock",-877288674),(function (state_map__18766__auto__){
return (function (p1__18850_SHARP_){
return devils_grip.engine.game.drag.stock.advance.call(null,p1__18850_SHARP_);
}).call(null,state_map__18766__auto__);
}));

cljs.core._add_method.call(null,devils_grip.engine.game.drag.advance,new cljs.core.Keyword(null,"default","default",-1987822328),(function (state_map__18766__auto__){
return (function (state_map__18767__auto__){
return cljs.core.assoc.call(null,state_map__18767__auto__,new cljs.core.Keyword(null,"action-state","action-state",-1575944631),cljs.core.PersistentArrayMap.EMPTY);
}).call(null,state_map__18766__auto__);
}));

//# sourceMappingURL=drag.js.map
