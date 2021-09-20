// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('devils_grip.actions.engine.fill_hole');
goog.require('cljs.core');
goog.require('cljs.core.constants');
devils_grip.actions.engine.fill_hole.fill_cell = (function devils_grip$actions$engine$fill_hole$fill_cell(p__13801){
var map__13802 = p__13801;
var map__13802__$1 = ((((!((map__13802 == null)))?((((map__13802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13802.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13802):map__13802);
var row_state = map__13802__$1;
var stock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13802__$1,cljs.core.cst$kw$stock);
var talon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13802__$1,cljs.core.cst$kw$talon);
if(cljs.core.empty_QMARK_(stock)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(row_state,cljs.core.cst$kw$row,cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(talon)], null)),cljs.core.cst$kw$stock,cljs.core.constantly(cljs.core.rest(talon))),cljs.core.cst$kw$talon,cljs.core.constantly(cljs.core.PersistentVector.EMPTY));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(row_state,cljs.core.cst$kw$row,cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stock)], null)),cljs.core.cst$kw$stock,cljs.core.rest);
}
});
devils_grip.actions.engine.fill_hole.scan_cells = (function devils_grip$actions$engine$fill_hole$scan_cells(p__13804,row){
var map__13805 = p__13804;
var map__13805__$1 = ((((!((map__13805 == null)))?((((map__13805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13805.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13805):map__13805);
var state_map = map__13805__$1;
var stock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13805__$1,cljs.core.cst$kw$stock);
var talon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13805__$1,cljs.core.cst$kw$talon);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__13805,map__13805__$1,state_map,stock,talon){
return (function (p__13807,cell){
var map__13808 = p__13807;
var map__13808__$1 = ((((!((map__13808 == null)))?((((map__13808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13808.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13808):map__13808);
var row_state = map__13808__$1;
var stock__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13808__$1,cljs.core.cst$kw$stock);
var talon__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13808__$1,cljs.core.cst$kw$talon);
var row__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13808__$1,cljs.core.cst$kw$row);
if(cljs.core.empty_QMARK_(cell)){
return devils_grip.actions.engine.fill_hole.fill_cell(row_state);
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(row_state,cljs.core.cst$kw$row,cljs.core.conj,cell);
}
});})(map__13805,map__13805__$1,state_map,stock,talon))
,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$stock,stock,cljs.core.cst$kw$talon,talon,cljs.core.cst$kw$row,cljs.core.PersistentVector.EMPTY], null),row);
});
devils_grip.actions.engine.fill_hole.scan_row = (function devils_grip$actions$engine$fill_hole$scan_row(p__13810,row){
var map__13811 = p__13810;
var map__13811__$1 = ((((!((map__13811 == null)))?((((map__13811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13811.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13811):map__13811);
var state_map = map__13811__$1;
var stock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13811__$1,cljs.core.cst$kw$stock);
var board_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13811__$1,cljs.core.cst$kw$board_DASH_state);
var map__13813 = devils_grip.actions.engine.fill_hole.scan_cells(state_map,row);
var map__13813__$1 = ((((!((map__13813 == null)))?((((map__13813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13813.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13813):map__13813);
var stock__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13813__$1,cljs.core.cst$kw$stock);
var talon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13813__$1,cljs.core.cst$kw$talon);
var row__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13813__$1,cljs.core.cst$kw$row);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state_map,cljs.core.cst$kw$board_DASH_state,cljs.core.conj,row__$1),cljs.core.cst$kw$stock,cljs.core.constantly(stock__$1)),cljs.core.cst$kw$talon,cljs.core.constantly(talon));
});
devils_grip.actions.engine.fill_hole.advance = (function devils_grip$actions$engine$fill_hole$advance(p__13815){
var map__13816 = p__13815;
var map__13816__$1 = ((((!((map__13816 == null)))?((((map__13816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13816.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13816):map__13816);
var state_map = map__13816__$1;
var board_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13816__$1,cljs.core.cst$kw$board_DASH_state);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(devils_grip.actions.engine.fill_hole.scan_row,cljs.core.update.cljs$core$IFn$_invoke$arity$3(state_map,cljs.core.cst$kw$board_DASH_state,cljs.core.constantly(cljs.core.PersistentVector.EMPTY)),board_state);
});
