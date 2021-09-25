// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('devils_grip.components.board');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('devils_grip.cards');
goog.require('devils_grip.components.drag');
devils_grip.components.board.card = (function devils_grip$components$board$card(p__13231,offset){
var vec__13232 = p__13231;
var suit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13232,(0),null);
var rank = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13232,(1),null);
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
devils_grip.components.board.cell = (function devils_grip$components$board$cell(p__13238,row_num,col_num,cell_cards){
var map__13239 = p__13238;
var map__13239__$1 = cljs.core.__destructure_map(map__13239);
var advance_action_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13239__$1,cljs.core.cst$kw$advance_DASH_action_BANG_);
var selection_click_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13239__$1,cljs.core.cst$kw$selection_DASH_click_BANG_);
var drag_end_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13239__$1,cljs.core.cst$kw$drag_DASH_end_BANG_);
var drag_start_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13239__$1,cljs.core.cst$kw$drag_DASH_start_BANG_);
var drop_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13239__$1,cljs.core.cst$kw$drop_BANG_);
var cell_id = ["row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_num),"-col-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_num)].join('');
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$class,"cell",cljs.core.cst$kw$id,cell_id,cljs.core.cst$kw$on_DASH_click,(function (_){
var G__13240_13244 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_num,col_num], null);
(selection_click_BANG_.cljs$core$IFn$_invoke$arity$1 ? selection_click_BANG_.cljs$core$IFn$_invoke$arity$1(G__13240_13244) : selection_click_BANG_.call(null,G__13240_13244));

return (advance_action_BANG_.cljs$core$IFn$_invoke$arity$0 ? advance_action_BANG_.cljs$core$IFn$_invoke$arity$0() : advance_action_BANG_.call(null));
}),cljs.core.cst$kw$on_DASH_drag_DASH_over,(function (p1__13235_SHARP_){
return p1__13235_SHARP_.preventDefault();
}),cljs.core.cst$kw$on_DASH_drag_DASH_enter,(function (event){
return document.getElementById(cell_id).classList.add("drop-target");
}),cljs.core.cst$kw$on_DASH_drag_DASH_exit,(function (event){
return (document.getElementById(cell_id).classList = "cell");
}),cljs.core.cst$kw$on_DASH_drop,(function (){var G__13241 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_num,col_num], null);
return (drop_BANG_.cljs$core$IFn$_invoke$arity$1 ? drop_BANG_.cljs$core$IFn$_invoke$arity$1(G__13241) : drop_BANG_.call(null,G__13241));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$class,"drag-container",cljs.core.cst$kw$id,["drag-row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_num),"-col-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col_num)].join(''),cljs.core.cst$kw$draggable,true,cljs.core.cst$kw$on_DASH_drag_DASH_start,(function (){var G__13242 = cljs.core.cst$kw$board;
var G__13243 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_num,col_num], null);
return (drag_start_BANG_.cljs$core$IFn$_invoke$arity$2 ? drag_start_BANG_.cljs$core$IFn$_invoke$arity$2(G__13242,G__13243) : drag_start_BANG_.call(null,G__13242,G__13243));
})(),cljs.core.cst$kw$on_DASH_drag_DASH_end,(drag_end_BANG_.cljs$core$IFn$_invoke$arity$2 ? drag_end_BANG_.cljs$core$IFn$_invoke$arity$2("drag-container","drop-target") : drag_end_BANG_.call(null,"drag-container","drop-target"))], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__13236_SHARP_,p2__13237_SHARP_){
return devils_grip.components.board.card(p1__13236_SHARP_,p2__13237_SHARP_);
}),cell_cards,cljs.core.range.cljs$core$IFn$_invoke$arity$0())], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$row,row_num,cljs.core.cst$kw$cell,col_num], null)], null));
});
devils_grip.components.board.row = (function devils_grip$components$board$row(state_fns,row_num,row){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,["row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_num)].join(''),cljs.core.cst$kw$class,"row"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (cell_data,col_num){
return devils_grip.components.board.cell(state_fns,row_num,col_num,cell_data);
}),row,cljs.core.range.cljs$core$IFn$_invoke$arity$0())], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$row,row_num], null)], null));
});
devils_grip.components.board.board = (function devils_grip$components$board$board(state_fns,p__13245){
var map__13246 = p__13245;
var map__13246__$1 = cljs.core.__destructure_map(map__13246);
var board_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13246__$1,cljs.core.cst$kw$board_DASH_state);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["board"], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (row_data,row_num){
return devils_grip.components.board.row(state_fns,row_num,row_data);
}),cljs.core.deref(board_state),cljs.core.range.cljs$core$IFn$_invoke$arity$0())], null);
});
devils_grip.components.board.stock = (function devils_grip$components$board$stock(p__13247,p__13248){
var map__13249 = p__13247;
var map__13249__$1 = cljs.core.__destructure_map(map__13249);
var drag_start_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13249__$1,cljs.core.cst$kw$drag_DASH_start_BANG_);
var drag_end_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13249__$1,cljs.core.cst$kw$drag_DASH_end_BANG_);
var map__13250 = p__13248;
var map__13250__$1 = cljs.core.__destructure_map(map__13250);
var stock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13250__$1,cljs.core.cst$kw$stock);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [devils_grip.components.drag.draggable,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_drag_DASH_start,(function (){var G__13251 = cljs.core.cst$kw$stock;
var G__13252 = null;
return (drag_start_BANG_.cljs$core$IFn$_invoke$arity$2 ? drag_start_BANG_.cljs$core$IFn$_invoke$arity$2(G__13251,G__13252) : drag_start_BANG_.call(null,G__13251,G__13252));
})(),cljs.core.cst$kw$on_DASH_drag_DASH_end,(drag_end_BANG_.cljs$core$IFn$_invoke$arity$2 ? drag_end_BANG_.cljs$core$IFn$_invoke$arity$2("drag-container","drop-target") : drag_end_BANG_.call(null,"drag-container","drop-target"))], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"card"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"stock"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"center-card-back"], null),cljs.core.count(cljs.core.deref(stock))], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,"stock-card"], null))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,"stock-draggable"], null));
});
devils_grip.components.board.talon = (function devils_grip$components$board$talon(p__13253,p__13254){
var map__13255 = p__13253;
var map__13255__$1 = cljs.core.__destructure_map(map__13255);
var drag_start_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13255__$1,cljs.core.cst$kw$drag_DASH_start_BANG_);
var drag_end_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13255__$1,cljs.core.cst$kw$drag_DASH_end_BANG_);
var drop_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13255__$1,cljs.core.cst$kw$drop_BANG_);
var map__13256 = p__13254;
var map__13256__$1 = cljs.core.__destructure_map(map__13256);
var talon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13256__$1,cljs.core.cst$kw$talon);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"talon"], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [devils_grip.components.drag.draggable,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_drag_DASH_start,(function (){var G__13257 = cljs.core.cst$kw$talon;
var G__13258 = null;
return (drag_start_BANG_.cljs$core$IFn$_invoke$arity$2 ? drag_start_BANG_.cljs$core$IFn$_invoke$arity$2(G__13257,G__13258) : drag_start_BANG_.call(null,G__13257,G__13258));
})(),cljs.core.cst$kw$on_DASH_drag_DASH_end,(drag_end_BANG_.cljs$core$IFn$_invoke$arity$2 ? drag_end_BANG_.cljs$core$IFn$_invoke$arity$2("drag-container","drop-target") : drag_end_BANG_.call(null,"drag-container","drop-target"))], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [devils_grip.components.drag.drop_target,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_drag_DASH_enter,(function (event){
return event.target.classList.add("drop-target");
}),cljs.core.cst$kw$on_DASH_drag_DASH_exit,(function (event){
return (event.target.classList = "card");
}),cljs.core.cst$kw$on_DASH_drop,(function (){var G__13259 = cljs.core.cst$kw$talon;
return (drop_BANG_.cljs$core$IFn$_invoke$arity$1 ? drop_BANG_.cljs$core$IFn$_invoke$arity$1(G__13259) : drop_BANG_.call(null,G__13259));
})()], null),(cljs.core.truth_(cljs.core.last(cljs.core.deref(talon)))?devils_grip.components.board.card(cljs.core.last(cljs.core.deref(talon)),(0)):cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"card"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"center-card-back"], null),"X"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,"empty-talon-card"], null)))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,"talon-drop"], null))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,"talon-drag"], null))], null);
});
devils_grip.components.board.score = (function devils_grip$components$board$score(p__13260){
var map__13261 = p__13260;
var map__13261__$1 = cljs.core.__destructure_map(map__13261);
var state_map = map__13261__$1;
var stock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13261__$1,cljs.core.cst$kw$stock);
var talon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13261__$1,cljs.core.cst$kw$talon);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"score"], null),"Score: ",(cljs.core.count(cljs.core.deref(stock)) + cljs.core.count(cljs.core.deref(talon)))], null);
});
