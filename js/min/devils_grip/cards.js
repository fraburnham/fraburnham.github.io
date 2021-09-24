// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('devils_grip.cards');
goog.require('cljs.core');
goog.require('cljs.core.constants');
devils_grip.cards.ranks = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$2,cljs.core.cst$kw$3,cljs.core.cst$kw$4,cljs.core.cst$kw$5,cljs.core.cst$kw$6,cljs.core.cst$kw$7,cljs.core.cst$kw$8,cljs.core.cst$kw$9,cljs.core.cst$kw$10,cljs.core.cst$kw$J,cljs.core.cst$kw$Q,cljs.core.cst$kw$K], null);
devils_grip.cards.suits = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$H,cljs.core.cst$kw$S,cljs.core.cst$kw$C,cljs.core.cst$kw$D], null);
devils_grip.cards._rank__GT_value = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$K,(13),cljs.core.cst$kw$Q,(12),cljs.core.cst$kw$J,(11)], null);
devils_grip.cards.suit__GT_color = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$H,"red",cljs.core.cst$kw$D,"red",cljs.core.cst$kw$C,"black",cljs.core.cst$kw$S,"black"], null);
devils_grip.cards.suit__GT_symbol = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$H,"\u2665",cljs.core.cst$kw$D,"\u2666",cljs.core.cst$kw$C,"\u2663",cljs.core.cst$kw$S,"\u2660"], null);
devils_grip.cards.drop_nth = (function devils_grip$cards$drop_nth(n,col){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,col),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((n + (1)),col));
});
devils_grip.cards.random_index = (function devils_grip$cards$random_index(total_count){
var G__13298 = (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() * total_count);
return Math.floor(G__13298);
});
devils_grip.cards.make_stock = (function devils_grip$cards$make_stock(num_decks){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (_){
var iter__8476__auto__ = (function devils_grip$cards$make_stock_$_iter__13299(s__13300){
return (new cljs.core.LazySeq(null,(function (){
var s__13300__$1 = s__13300;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13300__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var suit = cljs.core.first(xs__5205__auto__);
var iterys__8472__auto__ = ((function (s__13300__$1,suit,xs__5205__auto__,temp__4657__auto__){
return (function devils_grip$cards$make_stock_$_iter__13299_$_iter__13301(s__13302){
return (new cljs.core.LazySeq(null,((function (s__13300__$1,suit,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__13302__$1 = s__13302;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__13302__$1);
if(temp__4657__auto____$1){
var s__13302__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__13302__$2)){
var c__8474__auto__ = cljs.core.chunk_first(s__13302__$2);
var size__8475__auto__ = cljs.core.count(c__8474__auto__);
var b__13304 = cljs.core.chunk_buffer(size__8475__auto__);
if((function (){var i__13303 = (0);
while(true){
if((i__13303 < size__8475__auto__)){
var rank = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8474__auto__,i__13303);
cljs.core.chunk_append(b__13304,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [suit,rank], null));

var G__13305 = (i__13303 + (1));
i__13303 = G__13305;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13304),devils_grip$cards$make_stock_$_iter__13299_$_iter__13301(cljs.core.chunk_rest(s__13302__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13304),null);
}
} else {
var rank = cljs.core.first(s__13302__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [suit,rank], null),devils_grip$cards$make_stock_$_iter__13299_$_iter__13301(cljs.core.rest(s__13302__$2)));
}
} else {
return null;
}
break;
}
});})(s__13300__$1,suit,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__13300__$1,suit,xs__5205__auto__,temp__4657__auto__))
;
var fs__8473__auto__ = cljs.core.seq(iterys__8472__auto__(devils_grip.cards.ranks));
if(fs__8473__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__8473__auto__,devils_grip$cards$make_stock_$_iter__13299(cljs.core.rest(s__13300__$1)));
} else {
var G__13306 = cljs.core.rest(s__13300__$1);
s__13300__$1 = G__13306;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8476__auto__(devils_grip.cards.suits);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.range.cljs$core$IFn$_invoke$arity$1(num_decks)], 0));
});
devils_grip.cards.shuffle_stock = (function devils_grip$cards$shuffle_stock(var_args){
var G__13308 = arguments.length;
switch (G__13308) {
case 1:
return devils_grip.cards.shuffle_stock.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devils_grip.cards.shuffle_stock.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

devils_grip.cards.shuffle_stock.cljs$core$IFn$_invoke$arity$1 = (function (cards){
var n = devils_grip.cards.random_index(cljs.core.count(cards));
return devils_grip.cards.shuffle_stock.cljs$core$IFn$_invoke$arity$2(devils_grip.cards.drop_nth(n,cards),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cards,n)],null)));
});

devils_grip.cards.shuffle_stock.cljs$core$IFn$_invoke$arity$2 = (function (cards,stock){
if(cljs.core.truth_(cljs.core.not_empty(cards))){
var n = devils_grip.cards.random_index(cljs.core.count(cards));
return devils_grip.cards.shuffle_stock.cljs$core$IFn$_invoke$arity$2(devils_grip.cards.drop_nth(n,cards),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stock,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cards,n)));
} else {
return stock;
}
});

devils_grip.cards.shuffle_stock.cljs$lang$maxFixedArity = 2;

devils_grip.cards.rank__GT_value = (function devils_grip$cards$rank__GT_value(p__13310){
var vec__13311 = p__13310;
var suit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13311,(0),null);
var rank = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13311,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(devils_grip.cards._rank__GT_value,rank,cljs.core.name(rank));
});
devils_grip.cards.merge_cards = (function devils_grip$cards$merge_cards(existing_cards,new_cards){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(existing_cards,new_cards));
});