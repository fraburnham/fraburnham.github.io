// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('devils_grip.components.board');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('devils_grip.cards');
goog.require('devils_grip.components.drag');
devils_grip.components.board.card = (function devils_grip$components$board$card(p__10468,offset){
var vec__10469 = p__10468;
var suit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10469,(0),null);
var rank = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10469,(1),null);
if(cljs.core.truth_((function (){var and__4210__auto__ = suit;
if(cljs.core.truth_(and__4210__auto__)){
return rank;
} else {
return and__4210__auto__;
}
})())){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["card",(devils_grip.cards.suit__GT_color.cljs$core$IFn$_invoke$arity$1 ? devils_grip.cards.suit__GT_color.cljs$core$IFn$_invoke$arity$1(suit) : devils_grip.cards.suit__GT_color.call(null,suit))], null),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$z_DASH_index,offset,cljs.core.cst$kw$top,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((offset * 3.5)),"em"].join('')], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"top-left"], null),cljs.core.name(rank),(devils_grip.cards.suit__GT_symbol.cljs$core$IFn$_invoke$arity$1 ? devils_grip.cards.suit__GT_symbol.cljs$core$IFn$_invoke$arity$1(suit) : devils_grip.cards.suit__GT_symbol.call(null,suit))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"bottom-right"], null),cljs.core.name(rank),(devils_grip.cards.suit__GT_symbol.cljs$core$IFn$_invoke$arity$1 ? devils_grip.cards.suit__GT_symbol.cljs$core$IFn$_invoke$arity$1(suit) : devils_grip.cards.suit__GT_symbol.call(null,suit))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$suit,suit,cljs.core.cst$kw$rank,rank], null)], null));
} else {
return null;
}
});
devils_grip.components.board.cell = (function devils_grip$components$board$cell(state_map,p__10475,row_num,col_num,cell_cards){
var map__10476 = p__10475;
var map__10476__$1 = cljs.core.__destructure_map(map__10476);
var advance_action_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10476__$1,cljs.core.cst$kw$advance_DASH_action_BANG_);
var selection_click_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10476__$1,cljs.core.cst$kw$selection_DASH_click_BANG_);
var drag_start_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10476__$1,cljs.core.cst$kw$drag_DASH_start_BANG_);
var drag_enter_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10476__$1,cljs.core.cst$kw$drag_DASH_enter_BANG_);
var drop_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10476__$1,cljs.core.cst$kw$drop_BANG_);
var double_click_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10476__$1,cljs.core.cst$kw$double_DASH_click_BANG_);
var cell_id = ["row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_num),"-col-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_num)].join('');
var map__10477 = cljs.core.deref(state_map);
var map__10477__$1 = cljs.core.__destructure_map(map__10477);
var ui = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10477__$1,cljs.core.cst$kw$ui);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$class,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(ui,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$board,row_num,col_num,cljs.core.cst$kw$classes], null),cljs.core.PersistentVector.EMPTY),"cell"),cljs.core.cst$kw$id,cell_id,cljs.core.cst$kw$on_DASH_double_DASH_click,(function (){var G__10478 = cljs.core.cst$kw$board;
var G__10479 = "cell";
var G__10480 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_num,col_num], null);
return (double_click_BANG_.cljs$core$IFn$_invoke$arity$3 ? double_click_BANG_.cljs$core$IFn$_invoke$arity$3(G__10478,G__10479,G__10480) : double_click_BANG_.call(null,G__10478,G__10479,G__10480));
})(),cljs.core.cst$kw$on_DASH_drag_DASH_over,(function (p1__10472_SHARP_){
return p1__10472_SHARP_.preventDefault();
}),cljs.core.cst$kw$on_DASH_drag_DASH_enter,(function (){var G__10481 = cljs.core.cst$kw$board;
var G__10482 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_num,col_num], null);
return (drag_enter_BANG_.cljs$core$IFn$_invoke$arity$2 ? drag_enter_BANG_.cljs$core$IFn$_invoke$arity$2(G__10481,G__10482) : drag_enter_BANG_.call(null,G__10481,G__10482));
})(),cljs.core.cst$kw$on_DASH_drop,(function (){var G__10483 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_num,col_num], null);
return (drop_BANG_.cljs$core$IFn$_invoke$arity$1 ? drop_BANG_.cljs$core$IFn$_invoke$arity$1(G__10483) : drop_BANG_.call(null,G__10483));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,"drag-container",cljs.core.cst$kw$id,["drag-row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_num),"-col-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_num)].join(''),cljs.core.cst$kw$draggable,true,cljs.core.cst$kw$on_DASH_drag_DASH_start,(function (){var G__10484 = cljs.core.cst$kw$board;
var G__10485 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_num,col_num], null);
return (drag_start_BANG_.cljs$core$IFn$_invoke$arity$2 ? drag_start_BANG_.cljs$core$IFn$_invoke$arity$2(G__10484,G__10485) : drag_start_BANG_.call(null,G__10484,G__10485));
})()], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__10473_SHARP_,p2__10474_SHARP_){
return devils_grip.components.board.card(p1__10473_SHARP_,p2__10474_SHARP_);
}),cell_cards,cljs.core.range.cljs$core$IFn$_invoke$arity$0())], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$row,row_num,cljs.core.cst$kw$cell,col_num], null)], null));
});
devils_grip.components.board.row = (function devils_grip$components$board$row(state_map,state_fns,row_num,row){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,["row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_num)].join(''),cljs.core.cst$kw$class,"row"], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (cell_data,col_num){
return devils_grip.components.board.cell(state_map,state_fns,row_num,col_num,cell_data);
}),row,cljs.core.range.cljs$core$IFn$_invoke$arity$0()))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$row,row_num], null)], null));
});
devils_grip.components.board.board = (function devils_grip$components$board$board(state_fns,state_map){
var map__10486 = cljs.core.deref(state_map);
var map__10486__$1 = cljs.core.__destructure_map(map__10486);
var board_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10486__$1,cljs.core.cst$kw$board_DASH_state);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["board"], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (row_data,row_num){
return devils_grip.components.board.row(state_map,state_fns,row_num,row_data);
}),board_state,cljs.core.range.cljs$core$IFn$_invoke$arity$0()))], null);
});
devils_grip.components.board.stock = (function devils_grip$components$board$stock(p__10487,state_map){
var map__10488 = p__10487;
var map__10488__$1 = cljs.core.__destructure_map(map__10488);
var drag_start_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10488__$1,cljs.core.cst$kw$drag_DASH_start_BANG_);
var drag_enter_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10488__$1,cljs.core.cst$kw$drag_DASH_enter_BANG_);
var draw_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10488__$1,cljs.core.cst$kw$draw_BANG_);
var map__10489 = cljs.core.deref(state_map);
var map__10489__$1 = cljs.core.__destructure_map(map__10489);
var stock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10489__$1,cljs.core.cst$kw$stock);
var ui = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10489__$1,cljs.core.cst$kw$ui);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [devils_grip.components.drag.draggable,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_drag_DASH_start,(function (){var G__10490 = cljs.core.cst$kw$stock;
var G__10491 = null;
return (drag_start_BANG_.cljs$core$IFn$_invoke$arity$2 ? drag_start_BANG_.cljs$core$IFn$_invoke$arity$2(G__10490,G__10491) : drag_start_BANG_.call(null,G__10490,G__10491));
})(),cljs.core.cst$kw$on_DASH_double_DASH_click,draw_BANG_,cljs.core.cst$kw$class,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ui,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stock,cljs.core.cst$kw$classes], null))], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"card"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"stock"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"center-card-back"], null),cljs.core.count(stock)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,"stock-card"], null))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,"stock-draggable"], null));
});
devils_grip.components.board.talon = (function devils_grip$components$board$talon(p__10492,state_map){
var map__10493 = p__10492;
var map__10493__$1 = cljs.core.__destructure_map(map__10493);
var drag_start_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10493__$1,cljs.core.cst$kw$drag_DASH_start_BANG_);
var drag_enter_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10493__$1,cljs.core.cst$kw$drag_DASH_enter_BANG_);
var drop_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10493__$1,cljs.core.cst$kw$drop_BANG_);
var double_click_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10493__$1,cljs.core.cst$kw$double_DASH_click_BANG_);
var map__10494 = cljs.core.deref(state_map);
var map__10494__$1 = cljs.core.__destructure_map(map__10494);
var talon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10494__$1,cljs.core.cst$kw$talon);
var ui = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10494__$1,cljs.core.cst$kw$ui);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"talon"], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [devils_grip.components.drag.draggable,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_drag_DASH_start,(function (){var G__10495 = cljs.core.cst$kw$talon;
var G__10496 = null;
return (drag_start_BANG_.cljs$core$IFn$_invoke$arity$2 ? drag_start_BANG_.cljs$core$IFn$_invoke$arity$2(G__10495,G__10496) : drag_start_BANG_.call(null,G__10495,G__10496));
})(),cljs.core.cst$kw$on_DASH_double_DASH_click,(function (){var G__10497 = cljs.core.cst$kw$talon;
var G__10498 = "drag-container";
var G__10499 = null;
return (double_click_BANG_.cljs$core$IFn$_invoke$arity$3 ? double_click_BANG_.cljs$core$IFn$_invoke$arity$3(G__10497,G__10498,G__10499) : double_click_BANG_.call(null,G__10497,G__10498,G__10499));
})(),cljs.core.cst$kw$class,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ui,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$talon,cljs.core.cst$kw$classes], null))], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [devils_grip.components.drag.drop_target,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_drag_DASH_enter,(function (){var G__10500 = cljs.core.cst$kw$talon;
var G__10501 = null;
return (drag_enter_BANG_.cljs$core$IFn$_invoke$arity$2 ? drag_enter_BANG_.cljs$core$IFn$_invoke$arity$2(G__10500,G__10501) : drag_enter_BANG_.call(null,G__10500,G__10501));
})(),cljs.core.cst$kw$on_DASH_drop,(function (){var G__10502 = cljs.core.cst$kw$talon;
return (drop_BANG_.cljs$core$IFn$_invoke$arity$1 ? drop_BANG_.cljs$core$IFn$_invoke$arity$1(G__10502) : drop_BANG_.call(null,G__10502));
})(),cljs.core.cst$kw$id,"talon-drop"], null),(cljs.core.truth_(cljs.core.last(talon))?devils_grip.components.board.card(cljs.core.last(talon),(0)):cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"card"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"center-card-back"], null),"X"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,"empty-talon-card"], null)))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,"talon-drop"], null))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,"talon-drag"], null))], null);
});
devils_grip.components.board.score = (function devils_grip$components$board$score(state_map){
var map__10503 = cljs.core.deref(state_map);
var map__10503__$1 = cljs.core.__destructure_map(map__10503);
var stock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10503__$1,cljs.core.cst$kw$stock);
var talon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10503__$1,cljs.core.cst$kw$talon);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"score"], null),"Score: ",(cljs.core.count(stock) + cljs.core.count(talon))], null);
});
