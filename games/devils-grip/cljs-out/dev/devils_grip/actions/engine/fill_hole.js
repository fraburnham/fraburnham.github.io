// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('devils_grip.actions.engine.fill_hole');
goog.require('cljs.core');
devils_grip.actions.engine.fill_hole.fill_cell = (function devils_grip$actions$engine$fill_hole$fill_cell(p__9537){
var map__9538 = p__9537;
var map__9538__$1 = cljs.core.__destructure_map.call(null,map__9538);
var row_state = map__9538__$1;
var stock = cljs.core.get.call(null,map__9538__$1,new cljs.core.Keyword(null,"stock","stock",-877288674));
var talon = cljs.core.get.call(null,map__9538__$1,new cljs.core.Keyword(null,"talon","talon",-969549371));
if(cljs.core.empty_QMARK_.call(null,stock)){
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,row_state,new cljs.core.Keyword(null,"row","row",-570139521),cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,talon)], null)),new cljs.core.Keyword(null,"stock","stock",-877288674),cljs.core.constantly.call(null,cljs.core.rest.call(null,talon))),new cljs.core.Keyword(null,"talon","talon",-969549371),cljs.core.constantly.call(null,cljs.core.PersistentVector.EMPTY));
} else {
return cljs.core.update.call(null,cljs.core.update.call(null,row_state,new cljs.core.Keyword(null,"row","row",-570139521),cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stock)], null)),new cljs.core.Keyword(null,"stock","stock",-877288674),cljs.core.rest);
}
});
devils_grip.actions.engine.fill_hole.scan_cells = (function devils_grip$actions$engine$fill_hole$scan_cells(p__9539,row){
var map__9540 = p__9539;
var map__9540__$1 = cljs.core.__destructure_map.call(null,map__9540);
var state_map = map__9540__$1;
var stock = cljs.core.get.call(null,map__9540__$1,new cljs.core.Keyword(null,"stock","stock",-877288674));
var talon = cljs.core.get.call(null,map__9540__$1,new cljs.core.Keyword(null,"talon","talon",-969549371));
return cljs.core.reduce.call(null,(function (p__9541,cell){
var map__9542 = p__9541;
var map__9542__$1 = cljs.core.__destructure_map.call(null,map__9542);
var row_state = map__9542__$1;
var stock__$1 = cljs.core.get.call(null,map__9542__$1,new cljs.core.Keyword(null,"stock","stock",-877288674));
var talon__$1 = cljs.core.get.call(null,map__9542__$1,new cljs.core.Keyword(null,"talon","talon",-969549371));
var row__$1 = cljs.core.get.call(null,map__9542__$1,new cljs.core.Keyword(null,"row","row",-570139521));
if(cljs.core.empty_QMARK_.call(null,cell)){
return devils_grip.actions.engine.fill_hole.fill_cell.call(null,row_state);
} else {
return cljs.core.update.call(null,row_state,new cljs.core.Keyword(null,"row","row",-570139521),cljs.core.conj,cell);
}
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stock","stock",-877288674),stock,new cljs.core.Keyword(null,"talon","talon",-969549371),talon,new cljs.core.Keyword(null,"row","row",-570139521),cljs.core.PersistentVector.EMPTY], null),row);
});
devils_grip.actions.engine.fill_hole.scan_row = (function devils_grip$actions$engine$fill_hole$scan_row(p__9543,row){
var map__9544 = p__9543;
var map__9544__$1 = cljs.core.__destructure_map.call(null,map__9544);
var state_map = map__9544__$1;
var stock = cljs.core.get.call(null,map__9544__$1,new cljs.core.Keyword(null,"stock","stock",-877288674));
var board_state = cljs.core.get.call(null,map__9544__$1,new cljs.core.Keyword(null,"board-state","board-state",1654825192));
var map__9545 = devils_grip.actions.engine.fill_hole.scan_cells.call(null,state_map,row);
var map__9545__$1 = cljs.core.__destructure_map.call(null,map__9545);
var stock__$1 = cljs.core.get.call(null,map__9545__$1,new cljs.core.Keyword(null,"stock","stock",-877288674));
var talon = cljs.core.get.call(null,map__9545__$1,new cljs.core.Keyword(null,"talon","talon",-969549371));
var row__$1 = cljs.core.get.call(null,map__9545__$1,new cljs.core.Keyword(null,"row","row",-570139521));
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,state_map,new cljs.core.Keyword(null,"board-state","board-state",1654825192),cljs.core.conj,row__$1),new cljs.core.Keyword(null,"stock","stock",-877288674),cljs.core.constantly.call(null,stock__$1)),new cljs.core.Keyword(null,"talon","talon",-969549371),cljs.core.constantly.call(null,talon));
});
devils_grip.actions.engine.fill_hole.advance = (function devils_grip$actions$engine$fill_hole$advance(p__9546){
var map__9547 = p__9546;
var map__9547__$1 = cljs.core.__destructure_map.call(null,map__9547);
var state_map = map__9547__$1;
var board_state = cljs.core.get.call(null,map__9547__$1,new cljs.core.Keyword(null,"board-state","board-state",1654825192));
return cljs.core.reduce.call(null,devils_grip.actions.engine.fill_hole.scan_row,cljs.core.update.call(null,state_map,new cljs.core.Keyword(null,"board-state","board-state",1654825192),cljs.core.constantly.call(null,cljs.core.PersistentVector.EMPTY)),board_state);
});

//# sourceMappingURL=fill_hole.js.map
