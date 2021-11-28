// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('devils_grip.engine.game.fill_hole');
goog.require('cljs.core');
goog.require('cljs.core.constants');
devils_grip.engine.game.fill_hole.fill_cell = (function devils_grip$engine$game$fill_hole$fill_cell(p__10834){
var map__10835 = p__10834;
var map__10835__$1 = cljs.core.__destructure_map(map__10835);
var row_state = map__10835__$1;
var stock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10835__$1,cljs.core.cst$kw$stock);
var talon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10835__$1,cljs.core.cst$kw$talon);
if(cljs.core.empty_QMARK_(stock)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(row_state,cljs.core.cst$kw$row,cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(talon)], null)),cljs.core.cst$kw$stock,cljs.core.constantly(cljs.core.rest(talon))),cljs.core.cst$kw$talon,cljs.core.constantly(cljs.core.PersistentVector.EMPTY));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(row_state,cljs.core.cst$kw$row,cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stock)], null)),cljs.core.cst$kw$stock,cljs.core.rest);
}
});
devils_grip.engine.game.fill_hole.scan_cells = (function devils_grip$engine$game$fill_hole$scan_cells(p__10836,row){
var map__10837 = p__10836;
var map__10837__$1 = cljs.core.__destructure_map(map__10837);
var state_map = map__10837__$1;
var stock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10837__$1,cljs.core.cst$kw$stock);
var talon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10837__$1,cljs.core.cst$kw$talon);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__10838,cell){
var map__10839 = p__10838;
var map__10839__$1 = cljs.core.__destructure_map(map__10839);
var row_state = map__10839__$1;
var stock__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10839__$1,cljs.core.cst$kw$stock);
var talon__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10839__$1,cljs.core.cst$kw$talon);
var row__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10839__$1,cljs.core.cst$kw$row);
if(cljs.core.empty_QMARK_(cell)){
return devils_grip.engine.game.fill_hole.fill_cell(row_state);
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(row_state,cljs.core.cst$kw$row,cljs.core.conj,cell);
}
}),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$stock,stock,cljs.core.cst$kw$talon,talon,cljs.core.cst$kw$row,cljs.core.PersistentVector.EMPTY], null),row);
});
devils_grip.engine.game.fill_hole.scan_row = (function devils_grip$engine$game$fill_hole$scan_row(p__10840,row){
var map__10841 = p__10840;
var map__10841__$1 = cljs.core.__destructure_map(map__10841);
var state_map = map__10841__$1;
var stock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10841__$1,cljs.core.cst$kw$stock);
var board_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10841__$1,cljs.core.cst$kw$board_DASH_state);
var map__10842 = devils_grip.engine.game.fill_hole.scan_cells(state_map,row);
var map__10842__$1 = cljs.core.__destructure_map(map__10842);
var stock__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10842__$1,cljs.core.cst$kw$stock);
var talon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10842__$1,cljs.core.cst$kw$talon);
var row__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10842__$1,cljs.core.cst$kw$row);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state_map,cljs.core.cst$kw$board_DASH_state,cljs.core.conj,row__$1),cljs.core.cst$kw$stock,cljs.core.constantly(stock__$1)),cljs.core.cst$kw$talon,cljs.core.constantly(talon));
});
devils_grip.engine.game.fill_hole.advance = (function devils_grip$engine$game$fill_hole$advance(p__10843){
var map__10844 = p__10843;
var map__10844__$1 = cljs.core.__destructure_map(map__10844);
var state_map = map__10844__$1;
var board_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10844__$1,cljs.core.cst$kw$board_DASH_state);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(devils_grip.engine.game.fill_hole.scan_row,cljs.core.update.cljs$core$IFn$_invoke$arity$3(state_map,cljs.core.cst$kw$board_DASH_state,cljs.core.constantly(cljs.core.PersistentVector.EMPTY)),board_state);
});
