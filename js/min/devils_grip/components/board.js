// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('devils_grip.components.board');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('devils_grip.cards');
devils_grip.components.board.card = (function devils_grip$components$board$card(p__13316,offset){
var vec__13317 = p__13316;
var suit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13317,(0),null);
var rank = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13317,(1),null);
if(cljs.core.truth_((function (){var and__7656__auto__ = suit;
if(cljs.core.truth_(and__7656__auto__)){
return rank;
} else {
return and__7656__auto__;
}
})())){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["card",(devils_grip.cards.suit__GT_color.cljs$core$IFn$_invoke$arity$1 ? devils_grip.cards.suit__GT_color.cljs$core$IFn$_invoke$arity$1(suit) : devils_grip.cards.suit__GT_color.call(null,suit))], null),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$z_DASH_index,offset,cljs.core.cst$kw$top,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((offset * 3.5)),"em"].join('')], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"top-left"], null),cljs.core.name(rank),(devils_grip.cards.suit__GT_symbol.cljs$core$IFn$_invoke$arity$1 ? devils_grip.cards.suit__GT_symbol.cljs$core$IFn$_invoke$arity$1(suit) : devils_grip.cards.suit__GT_symbol.call(null,suit))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"bottom-right"], null),cljs.core.name(rank),(devils_grip.cards.suit__GT_symbol.cljs$core$IFn$_invoke$arity$1 ? devils_grip.cards.suit__GT_symbol.cljs$core$IFn$_invoke$arity$1(suit) : devils_grip.cards.suit__GT_symbol.call(null,suit))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$suit,suit,cljs.core.cst$kw$rank,rank], null)], null));
} else {
return null;
}
});
devils_grip.components.board.cell = (function devils_grip$components$board$cell(advance_action_BANG_,selection_click_BANG_,row_num,col_num,cell_cards){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,"cell",cljs.core.cst$kw$id,["row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_num),"-col-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_num)].join(''),cljs.core.cst$kw$on_DASH_click,(function (_){
var G__13322_13323 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_num,col_num], null);
(selection_click_BANG_.cljs$core$IFn$_invoke$arity$1 ? selection_click_BANG_.cljs$core$IFn$_invoke$arity$1(G__13322_13323) : selection_click_BANG_.call(null,G__13322_13323));

return (advance_action_BANG_.cljs$core$IFn$_invoke$arity$0 ? advance_action_BANG_.cljs$core$IFn$_invoke$arity$0() : advance_action_BANG_.call(null));
})], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__13320_SHARP_,p2__13321_SHARP_){
return devils_grip.components.board.card(p1__13320_SHARP_,p2__13321_SHARP_);
}),cell_cards,cljs.core.range.cljs$core$IFn$_invoke$arity$0())], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$row,row_num,cljs.core.cst$kw$cell,col_num], null)], null));
});
devils_grip.components.board.row = (function devils_grip$components$board$row(advance_action_BANG_,selection_click_BANG_,row_num,row){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,["row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_num)].join(''),cljs.core.cst$kw$class,"row"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (cell_data,col_num){
return devils_grip.components.board.cell(advance_action_BANG_,selection_click_BANG_,row_num,col_num,cell_data);
}),row,cljs.core.range.cljs$core$IFn$_invoke$arity$0())], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$row,row_num], null)], null));
});
devils_grip.components.board.board = (function devils_grip$components$board$board(advance_action_BANG_,selection_click_BANG_,p__13324){
var map__13325 = p__13324;
var map__13325__$1 = ((((!((map__13325 == null)))?((((map__13325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13325.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13325):map__13325);
var board_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13325__$1,cljs.core.cst$kw$board_DASH_state);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["board"], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (map__13325,map__13325__$1,board_state){
return (function (row_data,row_num){
return devils_grip.components.board.row(advance_action_BANG_,selection_click_BANG_,row_num,row_data);
});})(map__13325,map__13325__$1,board_state))
,cljs.core.deref(board_state),cljs.core.range.cljs$core$IFn$_invoke$arity$0())], null);
});
devils_grip.components.board.stock = (function devils_grip$components$board$stock(p__13327){
var map__13328 = p__13327;
var map__13328__$1 = ((((!((map__13328 == null)))?((((map__13328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13328.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13328):map__13328);
var stock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13328__$1,cljs.core.cst$kw$stock);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"stock"], null),"Stock: ",cljs.core.count(cljs.core.deref(stock))], null);
});
devils_grip.components.board.talon = (function devils_grip$components$board$talon(p__13330){
var map__13331 = p__13330;
var map__13331__$1 = ((((!((map__13331 == null)))?((((map__13331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13331.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13331):map__13331);
var talon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13331__$1,cljs.core.cst$kw$talon);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"talon"], null),"Talon: ",devils_grip.components.board.card(cljs.core.last(cljs.core.deref(talon)),(0))], null);
});
devils_grip.components.board.score = (function devils_grip$components$board$score(p__13333){
var map__13334 = p__13333;
var map__13334__$1 = ((((!((map__13334 == null)))?((((map__13334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13334.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13334):map__13334);
var state_map = map__13334__$1;
var stock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13334__$1,cljs.core.cst$kw$stock);
var talon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13334__$1,cljs.core.cst$kw$talon);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"score"], null),"Score: ",(cljs.core.count(cljs.core.deref(stock)) + cljs.core.count(cljs.core.deref(talon)))], null);
});
