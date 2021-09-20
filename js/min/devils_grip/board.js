// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('devils_grip.board');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('devils_grip.cards');
devils_grip.board.card = (function devils_grip$board$card(p__13777){
var vec__13778 = p__13777;
var suit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13778,(0),null);
var rank = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13778,(1),null);
if(cljs.core.truth_((function (){var and__7656__auto__ = suit;
if(cljs.core.truth_(and__7656__auto__)){
return rank;
} else {
return and__7656__auto__;
}
})())){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,(devils_grip.cards.suit__GT_color.cljs$core$IFn$_invoke$arity$1 ? devils_grip.cards.suit__GT_color.cljs$core$IFn$_invoke$arity$1(suit) : devils_grip.cards.suit__GT_color.call(null,suit))], null)], null),cljs.core.name(rank),(devils_grip.cards.suit__GT_symbol.cljs$core$IFn$_invoke$arity$1 ? devils_grip.cards.suit__GT_symbol.cljs$core$IFn$_invoke$arity$1(suit) : devils_grip.cards.suit__GT_symbol.call(null,suit))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$suit,suit,cljs.core.cst$kw$rank,rank], null)], null));
} else {
return null;
}
});
devils_grip.board.cell = (function devils_grip$board$cell(advance_action_BANG_,selection_click_BANG_,row_num,col_num,cell_cards){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$border,"1px solid black"], null),cljs.core.cst$kw$id,["row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_num),"-col-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_num)].join(''),cljs.core.cst$kw$on_DASH_click,(function (_){
var G__13782_13783 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_num,col_num], null);
(selection_click_BANG_.cljs$core$IFn$_invoke$arity$1 ? selection_click_BANG_.cljs$core$IFn$_invoke$arity$1(G__13782_13783) : selection_click_BANG_.call(null,G__13782_13783));

return (advance_action_BANG_.cljs$core$IFn$_invoke$arity$0 ? advance_action_BANG_.cljs$core$IFn$_invoke$arity$0() : advance_action_BANG_.call(null));
})], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13781_SHARP_){
return devils_grip.board.card(p1__13781_SHARP_);
}),cell_cards)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$row,row_num,cljs.core.cst$kw$cell,col_num], null)], null));
});
devils_grip.board.row = (function devils_grip$board$row(advance_action_BANG_,selection_click_BANG_,row_num,row){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,["row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_num)].join('')], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (cell_data,col_num){
return devils_grip.board.cell(advance_action_BANG_,selection_click_BANG_,row_num,col_num,cell_data);
}),row,cljs.core.range.cljs$core$IFn$_invoke$arity$0())], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$row,row_num], null)], null));
});
devils_grip.board.board = (function devils_grip$board$board(advance_action_BANG_,selection_click_BANG_,board_state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"green"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (row_data,row_num){
return devils_grip.board.row(advance_action_BANG_,selection_click_BANG_,row_num,row_data);
}),cljs.core.deref(board_state),cljs.core.range.cljs$core$IFn$_invoke$arity$0())], null)], null);
});
devils_grip.board.stock = (function devils_grip$board$stock(stock){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"stock"], null),"Stock: ",cljs.core.count(cljs.core.deref(stock))], null);
});
devils_grip.board.talon = (function devils_grip$board$talon(talon){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"talon"], null),"Talon: ",devils_grip.board.card(cljs.core.last(cljs.core.deref(talon)))], null);
});
devils_grip.board.score = (function devils_grip$board$score(stock,talon){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"score"], null),"Score: ",(cljs.core.count(cljs.core.deref(stock)) + cljs.core.count(cljs.core.deref(talon)))], null);
});
