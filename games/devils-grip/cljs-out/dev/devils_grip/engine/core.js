// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('devils_grip.engine.core');
goog.require('cljs.core');
goog.require('devils_grip.engine.game.drag');
goog.require('devils_grip.engine.game.draw');
goog.require('devils_grip.engine.game.fill_hole');
goog.require('devils_grip.engine.game.start');
goog.require('devils_grip.rules');
devils_grip.engine.core.deref_state_map = (function devils_grip$engine$core$deref_state_map(state_map){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__14912){
var vec__14913 = p__14912;
var k = cljs.core.nth.call(null,vec__14913,(0),null);
var v = cljs.core.nth.call(null,vec__14913,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.deref.call(null,v)], null);
}),state_map));
});
devils_grip.engine.core.update_state_map_BANG_ = (function devils_grip$engine$core$update_state_map_BANG_(old_state,new_state){
var seq__14916 = cljs.core.seq.call(null,new_state);
var chunk__14917 = null;
var count__14918 = (0);
var i__14919 = (0);
while(true){
if((i__14919 < count__14918)){
var vec__14926 = cljs.core._nth.call(null,chunk__14917,i__14919);
var k = cljs.core.nth.call(null,vec__14926,(0),null);
var v = cljs.core.nth.call(null,vec__14926,(1),null);
cljs.core.swap_BANG_.call(null,old_state.call(null,k),cljs.core.constantly.call(null,v));


var G__14932 = seq__14916;
var G__14933 = chunk__14917;
var G__14934 = count__14918;
var G__14935 = (i__14919 + (1));
seq__14916 = G__14932;
chunk__14917 = G__14933;
count__14918 = G__14934;
i__14919 = G__14935;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__14916);
if(temp__5720__auto__){
var seq__14916__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14916__$1)){
var c__4638__auto__ = cljs.core.chunk_first.call(null,seq__14916__$1);
var G__14936 = cljs.core.chunk_rest.call(null,seq__14916__$1);
var G__14937 = c__4638__auto__;
var G__14938 = cljs.core.count.call(null,c__4638__auto__);
var G__14939 = (0);
seq__14916 = G__14936;
chunk__14917 = G__14937;
count__14918 = G__14938;
i__14919 = G__14939;
continue;
} else {
var vec__14929 = cljs.core.first.call(null,seq__14916__$1);
var k = cljs.core.nth.call(null,vec__14929,(0),null);
var v = cljs.core.nth.call(null,vec__14929,(1),null);
cljs.core.swap_BANG_.call(null,old_state.call(null,k),cljs.core.constantly.call(null,v));


var G__14940 = cljs.core.next.call(null,seq__14916__$1);
var G__14941 = null;
var G__14942 = (0);
var G__14943 = (0);
seq__14916 = G__14940;
chunk__14917 = G__14941;
count__14918 = G__14942;
i__14919 = G__14943;
continue;
}
} else {
return null;
}
}
break;
}
});
if((typeof devils_grip !== 'undefined') && (typeof devils_grip.engine !== 'undefined') && (typeof devils_grip.engine.core !== 'undefined') && (typeof devils_grip.engine.core.advance !== 'undefined')){
} else {
devils_grip.engine.core.advance = (function (){var method_table__4701__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devils-grip.engine.core","advance"),(function (p__14948){
var map__14949 = p__14948;
var map__14949__$1 = cljs.core.__destructure_map.call(null,map__14949);
var action_state = cljs.core.get.call(null,map__14949__$1,new cljs.core.Keyword(null,"action-state","action-state",-1575944631));
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(action_state);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}

cljs.core._add_method.call(null,devils_grip.engine.core.advance,new cljs.core.Keyword(null,"draw","draw",1358331674),(function (state_map__8830__auto__){
return (function (p1__14944_SHARP_){
return devils_grip.engine.game.draw.advance.call(null,p1__14944_SHARP_);
}).call(null,state_map__8830__auto__);
}));

cljs.core._add_method.call(null,devils_grip.engine.core.advance,new cljs.core.Keyword(null,"fill-hole","fill-hole",-81318341),(function (state_map__8830__auto__){
return (function (p1__14945_SHARP_){
return devils_grip.engine.game.fill_hole.advance.call(null,p1__14945_SHARP_);
}).call(null,state_map__8830__auto__);
}));

cljs.core._add_method.call(null,devils_grip.engine.core.advance,new cljs.core.Keyword(null,"start","start",-355208981),(function (state_map__8830__auto__){
return (function (p1__14946_SHARP_){
return devils_grip.engine.game.start.advance.call(null,p1__14946_SHARP_);
}).call(null,state_map__8830__auto__);
}));

cljs.core._add_method.call(null,devils_grip.engine.core.advance,new cljs.core.Keyword(null,"drag","drag",449951290),(function (state_map__8830__auto__){
return (function (p1__14947_SHARP_){
return devils_grip.engine.game.drag.advance.call(null,p1__14947_SHARP_);
}).call(null,state_map__8830__auto__);
}));

cljs.core._add_method.call(null,devils_grip.engine.core.advance,new cljs.core.Keyword(null,"default","default",-1987822328),(function (state_map__8830__auto__){
return (function (state_map){
return cljs.core.assoc.call(null,state_map,new cljs.core.Keyword(null,"action-state","action-state",-1575944631),cljs.core.PersistentArrayMap.EMPTY);
}).call(null,state_map__8830__auto__);
}));
devils_grip.engine.core.advance_BANG_ = (function devils_grip$engine$core$advance_BANG_(p__14950){
var map__14951 = p__14950;
var map__14951__$1 = cljs.core.__destructure_map.call(null,map__14951);
var state_map = map__14951__$1;
var board_state = cljs.core.get.call(null,map__14951__$1,new cljs.core.Keyword(null,"board-state","board-state",1654825192));
var new_state_map = devils_grip.rules.validate.call(null,devils_grip.engine.core.advance.call(null,devils_grip.engine.core.deref_state_map.call(null,state_map)));
return devils_grip.engine.core.update_state_map_BANG_.call(null,state_map,(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(new_state_map))?(function (){
console.log("Error, rendering old map");

return cljs.core.update_in.call(null,cljs.core.update.call(null,devils_grip.engine.core.deref_state_map.call(null,state_map),new cljs.core.Keyword(null,"action-state","action-state",-1575944631),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"action-state","action-state",-1575944631),new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.constantly.call(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(new_state_map)));
})()
:new_state_map));
});

//# sourceMappingURL=core.js.map
