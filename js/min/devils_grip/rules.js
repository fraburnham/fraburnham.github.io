// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('devils_grip.rules');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('devils_grip.cards');
devils_grip.rules.valid_gap_QMARK_ = (function devils_grip$rules$valid_gap_QMARK_(cards){
if((cljs.core.count(cards) <= (1))){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),(devils_grip.cards.rank__GT_value(cljs.core.second(cards)) - devils_grip.cards.rank__GT_value(cljs.core.first(cards))))){
var G__13338 = cljs.core.rest(cards);
return (devils_grip.rules.valid_gap_QMARK_.cljs$core$IFn$_invoke$arity$1 ? devils_grip.rules.valid_gap_QMARK_.cljs$core$IFn$_invoke$arity$1(G__13338) : devils_grip.rules.valid_gap_QMARK_.call(null,G__13338));
} else {
return false;
}
}
});
devils_grip.rules.same_suit_QMARK_ = (function devils_grip$rules$same_suit_QMARK_(cards){
var suit = cljs.core.first(cljs.core.first(cards));
return cljs.core.every_QMARK_(((function (suit){
return (function (p1__13339_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(suit,cljs.core.first(p1__13339_SHARP_));
});})(suit))
,cards);
});
devils_grip.rules.validators = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fail_DASH_message,"Card rank must be 3 greater than existing cards",cljs.core.cst$kw$fn,devils_grip.rules.valid_gap_QMARK_], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fail_DASH_message,"Cards must be the same suit to be played together",cljs.core.cst$kw$fn,devils_grip.rules.same_suit_QMARK_], null)], null);
devils_grip.rules.validate_cell = (function devils_grip$rules$validate_cell(cards){
return cljs.core.every_QMARK_(cljs.core.true_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13340_SHARP_){
var fexpr__13341 = cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(p1__13340_SHARP_);
return (fexpr__13341.cljs$core$IFn$_invoke$arity$1 ? fexpr__13341.cljs$core$IFn$_invoke$arity$1(cards) : fexpr__13341.call(null,cards));
}),devils_grip.rules.validators));
});
devils_grip.rules.validate_row = (function devils_grip$rules$validate_row(row){
return cljs.core.every_QMARK_(cljs.core.true_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(devils_grip.rules.validate_cell,row));
});
devils_grip.rules.validate_board = (function devils_grip$rules$validate_board(p__13342){
var map__13343 = p__13342;
var map__13343__$1 = ((((!((map__13343 == null)))?((((map__13343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13343.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13343):map__13343);
var board_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13343__$1,cljs.core.cst$kw$board_DASH_state);
return cljs.core.every_QMARK_(devils_grip.rules.validate_row,board_state);
});
devils_grip.rules.validate = (function devils_grip$rules$validate(state_map){
if(cljs.core.truth_(devils_grip.rules.validate_board(state_map))){
return state_map;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,"Inavlid move"], null);
}
});