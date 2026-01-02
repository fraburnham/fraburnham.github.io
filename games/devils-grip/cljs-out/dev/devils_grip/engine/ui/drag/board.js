// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('devils_grip.engine.ui.drag.board');
goog.require('cljs.core');
if((typeof devils_grip !== 'undefined') && (typeof devils_grip.engine !== 'undefined') && (typeof devils_grip.engine.ui !== 'undefined') && (typeof devils_grip.engine.ui.drag !== 'undefined') && (typeof devils_grip.engine.ui.drag.board !== 'undefined') && (typeof devils_grip.engine.ui.drag.board.advance !== 'undefined')){
} else {
devils_grip.engine.ui.drag.board.advance = (function (){var method_table__4701__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devils-grip.engine.ui.drag.board","advance"),(function (p__18783){
var map__18784 = p__18783;
var map__18784__$1 = cljs.core.__destructure_map.call(null,map__18784);
var action_state = cljs.core.get.call(null,map__18784__$1,new cljs.core.Keyword(null,"action-state","action-state",-1575944631));
return cljs.core.count.call(null,new cljs.core.Keyword(null,"selections","selections",-1277610233).cljs$core$IFn$_invoke$arity$1(action_state));
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}

cljs.core._add_method.call(null,devils_grip.engine.ui.drag.board.advance,(1),(function (state_map__18766__auto__){
return (function (p__18785){
var map__18786 = p__18785;
var map__18786__$1 = cljs.core.__destructure_map.call(null,map__18786);
var state_map = map__18786__$1;
var action_state = cljs.core.get.call(null,map__18786__$1,new cljs.core.Keyword(null,"action-state","action-state",-1575944631));
var vec__18787 = cljs.core.first.call(null,new cljs.core.Keyword(null,"selections","selections",-1277610233).cljs$core$IFn$_invoke$arity$1(action_state));
var row_num = cljs.core.nth.call(null,vec__18787,(0),null);
var col_num = cljs.core.nth.call(null,vec__18787,(1),null);
return cljs.core.assoc_in.call(null,state_map,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"board","board",-1907017633),row_num,col_num,new cljs.core.Keyword(null,"classes","classes",2037804510)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selected"], null));
}).call(null,state_map__18766__auto__);
}));

cljs.core._add_method.call(null,devils_grip.engine.ui.drag.board.advance,new cljs.core.Keyword(null,"default","default",-1987822328),(function (state_map__18766__auto__){
return (function (state_map__18767__auto__){
return cljs.core.assoc.call(null,state_map__18767__auto__,new cljs.core.Keyword(null,"ui","ui",-469653645),cljs.core.PersistentArrayMap.EMPTY);
}).call(null,state_map__18766__auto__);
}));

//# sourceMappingURL=board.js.map
