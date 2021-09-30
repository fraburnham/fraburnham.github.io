// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('devils_grip.actions.engine.fill_hole');
goog.require('cljs.core');
goog.require('cljs.core.constants');
devils_grip.actions.engine.fill_hole.fill_cell = (function devils_grip$actions$engine$fill_hole$fill_cell(p__13433){
var map__13434 = p__13433;
var map__13434__$1 = cljs.core.__destructure_map(map__13434);
var row_state = map__13434__$1;
var stock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13434__$1,cljs.core.cst$kw$stock);
var talon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13434__$1,cljs.core.cst$kw$talon);
if(cljs.core.empty_QMARK_(stock)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(row_state,cljs.core.cst$kw$row,cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(talon)], null)),cljs.core.cst$kw$stock,cljs.core.constantly(cljs.core.rest(talon))),cljs.core.cst$kw$talon,cljs.core.constantly(cljs.core.PersistentVector.EMPTY));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(row_state,cljs.core.cst$kw$row,cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stock)], null)),cljs.core.cst$kw$stock,cljs.core.rest);
}
});
devils_grip.actions.engine.fill_hole.scan_cells = (function devils_grip$actions$engine$fill_hole$scan_cells(p__13435,row){
var map__13436 = p__13435;
var map__13436__$1 = cljs.core.__destructure_map(map__13436);
var state_map = map__13436__$1;
var stock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13436__$1,cljs.core.cst$kw$stock);
var talon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13436__$1,cljs.core.cst$kw$talon);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__13437,cell){
var map__13438 = p__13437;
var map__13438__$1 = cljs.core.__destructure_map(map__13438);
var row_state = map__13438__$1;
var stock__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13438__$1,cljs.core.cst$kw$stock);
var talon__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13438__$1,cljs.core.cst$kw$talon);
var row__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13438__$1,cljs.core.cst$kw$row);
if(cljs.core.empty_QMARK_(cell)){
return devils_grip.actions.engine.fill_hole.fill_cell(row_state);
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(row_state,cljs.core.cst$kw$row,cljs.core.conj,cell);
}
}),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$stock,stock,cljs.core.cst$kw$talon,talon,cljs.core.cst$kw$row,cljs.core.PersistentVector.EMPTY], null),row);
});
devils_grip.actions.engine.fill_hole.scan_row = (function devils_grip$actions$engine$fill_hole$scan_row(p__13439,row){
var map__13440 = p__13439;
var map__13440__$1 = cljs.core.__destructure_map(map__13440);
var state_map = map__13440__$1;
var stock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13440__$1,cljs.core.cst$kw$stock);
var board_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13440__$1,cljs.core.cst$kw$board_DASH_state);
var map__13441 = devils_grip.actions.engine.fill_hole.scan_cells(state_map,row);
var map__13441__$1 = cljs.core.__destructure_map(map__13441);
var stock__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13441__$1,cljs.core.cst$kw$stock);
var talon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13441__$1,cljs.core.cst$kw$talon);
var row__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13441__$1,cljs.core.cst$kw$row);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state_map,cljs.core.cst$kw$board_DASH_state,cljs.core.conj,row__$1),cljs.core.cst$kw$stock,cljs.core.constantly(stock__$1)),cljs.core.cst$kw$talon,cljs.core.constantly(talon));
});
devils_grip.actions.engine.fill_hole.advance = (function devils_grip$actions$engine$fill_hole$advance(p__13442){
var map__13443 = p__13442;
var map__13443__$1 = cljs.core.__destructure_map(map__13443);
var state_map = map__13443__$1;
var board_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13443__$1,cljs.core.cst$kw$board_DASH_state);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(devils_grip.actions.engine.fill_hole.scan_row,cljs.core.update.cljs$core$IFn$_invoke$arity$3(state_map,cljs.core.cst$kw$board_DASH_state,cljs.core.constantly(cljs.core.PersistentVector.EMPTY)),board_state);
});
