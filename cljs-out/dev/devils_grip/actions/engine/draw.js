// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('devils_grip.actions.engine.draw');
goog.require('cljs.core');
devils_grip.actions.engine.draw.draw = (function devils_grip$actions$engine$draw$draw(p__9516){
var map__9517 = p__9516;
var map__9517__$1 = cljs.core.__destructure_map.call(null,map__9517);
var state_map = map__9517__$1;
var stock = cljs.core.get.call(null,map__9517__$1,new cljs.core.Keyword(null,"stock","stock",-877288674));
var talon = cljs.core.get.call(null,map__9517__$1,new cljs.core.Keyword(null,"talon","talon",-969549371));
return cljs.core.update.call(null,cljs.core.update.call(null,state_map,new cljs.core.Keyword(null,"talon","talon",-969549371),(function (p1__9514_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,p1__9514_SHARP_,cljs.core.take.call(null,(3),stock)));
})),new cljs.core.Keyword(null,"stock","stock",-877288674),(function (p1__9515_SHARP_){
return cljs.core.drop.call(null,(3),p1__9515_SHARP_);
}));
});
if((typeof devils_grip !== 'undefined') && (typeof devils_grip.actions !== 'undefined') && (typeof devils_grip.actions.engine !== 'undefined') && (typeof devils_grip.actions.engine.draw !== 'undefined') && (typeof devils_grip.actions.engine.draw.advance !== 'undefined')){
} else {
devils_grip.actions.engine.draw.advance = (function (){var method_table__4701__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devils-grip.actions.engine.draw","advance"),(function (p__9519){
var map__9520 = p__9519;
var map__9520__$1 = cljs.core.__destructure_map.call(null,map__9520);
var stock = cljs.core.get.call(null,map__9520__$1,new cljs.core.Keyword(null,"stock","stock",-877288674));
if((cljs.core.count.call(null,stock) >= (3))){
return new cljs.core.Keyword(null,"stock-full","stock-full",-2087773385);
} else {
return new cljs.core.Keyword(null,"stock-empty","stock-empty",-222423402);
}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}

cljs.core._add_method.call(null,devils_grip.actions.engine.draw.advance,new cljs.core.Keyword(null,"stock-full","stock-full",-2087773385),(function (state_map__9489__auto__){
return (function (state_map){
return cljs.core.update.call(null,devils_grip.actions.engine.draw.draw.call(null,state_map),new cljs.core.Keyword(null,"action-state","action-state",-1575944631),cljs.core.PersistentArrayMap.EMPTY);
}).call(null,state_map__9489__auto__);
}));

cljs.core._add_method.call(null,devils_grip.actions.engine.draw.advance,new cljs.core.Keyword(null,"stock-empty","stock-empty",-222423402),(function (state_map__9489__auto__){
return (function (p__9521){
var map__9522 = p__9521;
var map__9522__$1 = cljs.core.__destructure_map.call(null,map__9522);
var state_map = map__9522__$1;
var stock = cljs.core.get.call(null,map__9522__$1,new cljs.core.Keyword(null,"stock","stock",-877288674));
var talon = cljs.core.get.call(null,map__9522__$1,new cljs.core.Keyword(null,"talon","talon",-969549371));
return devils_grip.actions.engine.draw.advance.call(null,cljs.core.update.call(null,cljs.core.update.call(null,state_map,new cljs.core.Keyword(null,"stock","stock",-877288674),(function (p1__9518_SHARP_){
return cljs.core.concat.call(null,p1__9518_SHARP_,talon);
})),new cljs.core.Keyword(null,"talon","talon",-969549371),cljs.core.constantly.call(null,cljs.core.PersistentVector.EMPTY)));
}).call(null,state_map__9489__auto__);
}));

cljs.core._add_method.call(null,devils_grip.actions.engine.draw.advance,new cljs.core.Keyword(null,"default","default",-1987822328),(function (state_map__9489__auto__){
return (function (state_map){
return cljs.core.assoc.call(null,state_map,new cljs.core.Keyword(null,"action-state","action-state",-1575944631),cljs.core.PersistentArrayMap.EMPTY);
}).call(null,state_map__9489__auto__);
}));

//# sourceMappingURL=draw.js.map
