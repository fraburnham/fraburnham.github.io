// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('devils_grip.actions.engine');
goog.require('cljs.core');
goog.require('devils_grip.actions.engine.drag');
goog.require('devils_grip.actions.engine.draw');
goog.require('devils_grip.actions.engine.fill_hole');
goog.require('devils_grip.actions.engine.from_talon');
goog.require('devils_grip.actions.engine.merge_cells');
goog.require('devils_grip.actions.engine.start');
goog.require('devils_grip.actions.engine.swap_cells');
goog.require('devils_grip.rules');
devils_grip.actions.engine.deref_state_map = (function devils_grip$actions$engine$deref_state_map(state_map){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__9580){
var vec__9581 = p__9580;
var k = cljs.core.nth.call(null,vec__9581,(0),null);
var v = cljs.core.nth.call(null,vec__9581,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.deref.call(null,v)], null);
}),state_map));
});
devils_grip.actions.engine.update_state_map_BANG_ = (function devils_grip$actions$engine$update_state_map_BANG_(old_state,new_state){
var seq__9584 = cljs.core.seq.call(null,new_state);
var chunk__9585 = null;
var count__9586 = (0);
var i__9587 = (0);
while(true){
if((i__9587 < count__9586)){
var vec__9594 = cljs.core._nth.call(null,chunk__9585,i__9587);
var k = cljs.core.nth.call(null,vec__9594,(0),null);
var v = cljs.core.nth.call(null,vec__9594,(1),null);
cljs.core.swap_BANG_.call(null,old_state.call(null,k),cljs.core.constantly.call(null,v));


var G__9600 = seq__9584;
var G__9601 = chunk__9585;
var G__9602 = count__9586;
var G__9603 = (i__9587 + (1));
seq__9584 = G__9600;
chunk__9585 = G__9601;
count__9586 = G__9602;
i__9587 = G__9603;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__9584);
if(temp__5720__auto__){
var seq__9584__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9584__$1)){
var c__4638__auto__ = cljs.core.chunk_first.call(null,seq__9584__$1);
var G__9604 = cljs.core.chunk_rest.call(null,seq__9584__$1);
var G__9605 = c__4638__auto__;
var G__9606 = cljs.core.count.call(null,c__4638__auto__);
var G__9607 = (0);
seq__9584 = G__9604;
chunk__9585 = G__9605;
count__9586 = G__9606;
i__9587 = G__9607;
continue;
} else {
var vec__9597 = cljs.core.first.call(null,seq__9584__$1);
var k = cljs.core.nth.call(null,vec__9597,(0),null);
var v = cljs.core.nth.call(null,vec__9597,(1),null);
cljs.core.swap_BANG_.call(null,old_state.call(null,k),cljs.core.constantly.call(null,v));


var G__9608 = cljs.core.next.call(null,seq__9584__$1);
var G__9609 = null;
var G__9610 = (0);
var G__9611 = (0);
seq__9584 = G__9608;
chunk__9585 = G__9609;
count__9586 = G__9610;
i__9587 = G__9611;
continue;
}
} else {
return null;
}
}
break;
}
});
if((typeof devils_grip !== 'undefined') && (typeof devils_grip.actions !== 'undefined') && (typeof devils_grip.actions.engine !== 'undefined') && (typeof devils_grip.actions.engine.advance !== 'undefined')){
} else {
devils_grip.actions.engine.advance = (function (){var method_table__4701__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devils-grip.actions.engine","advance"),(function (p__9619){
var map__9620 = p__9619;
var map__9620__$1 = cljs.core.__destructure_map.call(null,map__9620);
var action_state = cljs.core.get.call(null,map__9620__$1,new cljs.core.Keyword(null,"action-state","action-state",-1575944631));
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(action_state);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}

cljs.core._add_method.call(null,devils_grip.actions.engine.advance,new cljs.core.Keyword(null,"draw","draw",1358331674),(function (state_map__9489__auto__){
return (function (p1__9612_SHARP_){
return devils_grip.actions.engine.draw.advance.call(null,p1__9612_SHARP_);
}).call(null,state_map__9489__auto__);
}));

cljs.core._add_method.call(null,devils_grip.actions.engine.advance,new cljs.core.Keyword(null,"fill-hole","fill-hole",-81318341),(function (state_map__9489__auto__){
return (function (p1__9613_SHARP_){
return devils_grip.actions.engine.fill_hole.advance.call(null,p1__9613_SHARP_);
}).call(null,state_map__9489__auto__);
}));

cljs.core._add_method.call(null,devils_grip.actions.engine.advance,new cljs.core.Keyword(null,"from-talon","from-talon",-61554934),(function (state_map__9489__auto__){
return (function (p1__9614_SHARP_){
return devils_grip.actions.engine.from_talon.advance.call(null,p1__9614_SHARP_);
}).call(null,state_map__9489__auto__);
}));

cljs.core._add_method.call(null,devils_grip.actions.engine.advance,new cljs.core.Keyword(null,"merge-cells","merge-cells",-683004493),(function (state_map__9489__auto__){
return (function (p1__9615_SHARP_){
return devils_grip.actions.engine.merge_cells.advance.call(null,p1__9615_SHARP_);
}).call(null,state_map__9489__auto__);
}));

cljs.core._add_method.call(null,devils_grip.actions.engine.advance,new cljs.core.Keyword(null,"start","start",-355208981),(function (state_map__9489__auto__){
return (function (p1__9616_SHARP_){
return devils_grip.actions.engine.start.advance.call(null,p1__9616_SHARP_);
}).call(null,state_map__9489__auto__);
}));

cljs.core._add_method.call(null,devils_grip.actions.engine.advance,new cljs.core.Keyword(null,"swap-cells","swap-cells",767497927),(function (state_map__9489__auto__){
return (function (p1__9617_SHARP_){
return devils_grip.actions.engine.swap_cells.advance.call(null,p1__9617_SHARP_);
}).call(null,state_map__9489__auto__);
}));

cljs.core._add_method.call(null,devils_grip.actions.engine.advance,new cljs.core.Keyword(null,"drag","drag",449951290),(function (state_map__9489__auto__){
return (function (p1__9618_SHARP_){
return devils_grip.actions.engine.drag.advance.call(null,p1__9618_SHARP_);
}).call(null,state_map__9489__auto__);
}));

cljs.core._add_method.call(null,devils_grip.actions.engine.advance,new cljs.core.Keyword(null,"default","default",-1987822328),(function (state_map__9489__auto__){
return (function (state_map){
return cljs.core.assoc.call(null,state_map,new cljs.core.Keyword(null,"action-state","action-state",-1575944631),cljs.core.PersistentArrayMap.EMPTY);
}).call(null,state_map__9489__auto__);
}));
devils_grip.actions.engine.advance_BANG_ = (function devils_grip$actions$engine$advance_BANG_(p__9621){
var map__9622 = p__9621;
var map__9622__$1 = cljs.core.__destructure_map.call(null,map__9622);
var state_map = map__9622__$1;
var board_state = cljs.core.get.call(null,map__9622__$1,new cljs.core.Keyword(null,"board-state","board-state",1654825192));
var new_state_map = devils_grip.rules.validate.call(null,devils_grip.actions.engine.advance.call(null,devils_grip.actions.engine.deref_state_map.call(null,state_map)));
return devils_grip.actions.engine.update_state_map_BANG_.call(null,state_map,(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(new_state_map))?(function (){
console.log("Error, rendering old map");

return cljs.core.update_in.call(null,cljs.core.update.call(null,devils_grip.actions.engine.deref_state_map.call(null,state_map),new cljs.core.Keyword(null,"action-state","action-state",-1575944631),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"action-state","action-state",-1575944631),new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.constantly.call(null,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(new_state_map)));
})()
:new_state_map));
});

//# sourceMappingURL=engine.js.map
