// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('devils_grip.actions.engine.from_talon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('devils_grip.cards');
devils_grip.actions.engine.from_talon.talon__GT_board = (function devils_grip$actions$engine$from_talon$talon__GT_board(board_state,action_state,talon){
var target = cljs.core.first(cljs.core.cst$kw$selections.cljs$core$IFn$_invoke$arity$1(action_state));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(board_state,target,devils_grip.cards.merge_cards,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last(talon)], null));
});
if((typeof devils_grip !== 'undefined') && (typeof devils_grip.actions !== 'undefined') && (typeof devils_grip.actions.engine !== 'undefined') && (typeof devils_grip.actions.engine.from_talon !== 'undefined') && (typeof devils_grip.actions.engine.from_talon.advance !== 'undefined')){
} else {
devils_grip.actions.engine.from_talon.advance = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__13483 = cljs.core.get_global_hierarchy;
return (fexpr__13483.cljs$core$IFn$_invoke$arity$0 ? fexpr__13483.cljs$core$IFn$_invoke$arity$0() : fexpr__13483.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devils-grip.actions.engine.from-talon","advance"),(function (p__13484){
var map__13485 = p__13484;
var map__13485__$1 = cljs.core.__destructure_map(map__13485);
var state_map = map__13485__$1;
var action_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13485__$1,cljs.core.cst$kw$action_DASH_state);
return cljs.core.count(cljs.core.cst$kw$selections.cljs$core$IFn$_invoke$arity$1(action_state));
}),cljs.core.cst$kw$default,hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}
devils_grip.actions.engine.from_talon.advance.cljs$core$IMultiFn$_add_method$arity$3(null,(0),(function (state_map){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$action_DASH_state,cljs.core.cst$kw$help_DASH_text], null),cljs.core.constantly("Select target cell"));
}));
devils_grip.actions.engine.from_talon.advance.cljs$core$IMultiFn$_add_method$arity$3(null,(1),(function (p__13486){
var map__13487 = p__13486;
var map__13487__$1 = cljs.core.__destructure_map(map__13487);
var state_map = map__13487__$1;
var action_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13487__$1,cljs.core.cst$kw$action_DASH_state);
var talon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13487__$1,cljs.core.cst$kw$talon);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$5(state_map,cljs.core.cst$kw$board_DASH_state,devils_grip.actions.engine.from_talon.talon__GT_board,action_state,talon),cljs.core.cst$kw$talon,cljs.core.drop_last),cljs.core.cst$kw$action_DASH_state,cljs.core.constantly(cljs.core.PersistentArrayMap.EMPTY));
}));
