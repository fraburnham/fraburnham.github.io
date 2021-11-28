// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('devils_grip.engine.game.from_talon');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('devils_grip.cards');
devils_grip.engine.game.from_talon.talon__GT_board = (function devils_grip$engine$game$from_talon$talon__GT_board(board_state,action_state,talon){
var target = cljs.core.first(cljs.core.cst$kw$selections.cljs$core$IFn$_invoke$arity$1(action_state));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(board_state,target,devils_grip.cards.merge_cards,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last(talon)], null));
});
if((typeof devils_grip !== 'undefined') && (typeof devils_grip.engine !== 'undefined') && (typeof devils_grip.engine.game !== 'undefined') && (typeof devils_grip.engine.game.from_talon !== 'undefined') && (typeof devils_grip.engine.game.from_talon.advance !== 'undefined')){
} else {
devils_grip.engine.game.from_talon.advance = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__10891 = cljs.core.get_global_hierarchy;
return (fexpr__10891.cljs$core$IFn$_invoke$arity$0 ? fexpr__10891.cljs$core$IFn$_invoke$arity$0() : fexpr__10891.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devils-grip.engine.game.from-talon","advance"),(function (p__10892){
var map__10893 = p__10892;
var map__10893__$1 = cljs.core.__destructure_map(map__10893);
var state_map = map__10893__$1;
var action_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10893__$1,cljs.core.cst$kw$action_DASH_state);
return cljs.core.count(cljs.core.cst$kw$selections.cljs$core$IFn$_invoke$arity$1(action_state));
}),cljs.core.cst$kw$default,hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}

devils_grip.engine.game.from_talon.advance.cljs$core$IMultiFn$_add_method$arity$3(null,(0),(function (state_map__10793__auto__){
try{var fexpr__10895 = (function (state_map){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$action_DASH_state,cljs.core.cst$kw$help_DASH_text], null),cljs.core.constantly("Select target cell"));
});
return fexpr__10895(state_map__10793__auto__);
}catch (e10894){var e__10794__auto__ = e10894;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Failure advancing state",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$state_DASH_map,state_map__10793__auto__,cljs.core.cst$kw$dispatch,(0),cljs.core.cst$kw$reset_DASH_state_DASH_key,cljs.core.cst$kw$action_DASH_state,cljs.core.cst$kw$advancer,devils_grip.engine.game.from_talon.advance], null),e__10794__auto__);
}}));

devils_grip.engine.game.from_talon.advance.cljs$core$IMultiFn$_add_method$arity$3(null,(1),(function (state_map__10793__auto__){
try{var fexpr__10899 = (function (p__10900){
var map__10901 = p__10900;
var map__10901__$1 = cljs.core.__destructure_map(map__10901);
var state_map = map__10901__$1;
var action_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10901__$1,cljs.core.cst$kw$action_DASH_state);
var talon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10901__$1,cljs.core.cst$kw$talon);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$5(state_map,cljs.core.cst$kw$board_DASH_state,devils_grip.engine.game.from_talon.talon__GT_board,action_state,talon),cljs.core.cst$kw$talon,cljs.core.drop_last),cljs.core.cst$kw$action_DASH_state,cljs.core.constantly(cljs.core.PersistentArrayMap.EMPTY));
});
return fexpr__10899(state_map__10793__auto__);
}catch (e10896){var e__10794__auto__ = e10896;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Failure advancing state",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$state_DASH_map,state_map__10793__auto__,cljs.core.cst$kw$dispatch,(1),cljs.core.cst$kw$reset_DASH_state_DASH_key,cljs.core.cst$kw$action_DASH_state,cljs.core.cst$kw$advancer,devils_grip.engine.game.from_talon.advance], null),e__10794__auto__);
}}));

devils_grip.engine.game.from_talon.advance.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (state_map__10793__auto__){
try{var fexpr__10903 = (function (state_map__10795__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_map__10795__auto__,cljs.core.cst$kw$action_DASH_state,cljs.core.PersistentArrayMap.EMPTY);
});
return fexpr__10903(state_map__10793__auto__);
}catch (e10902){var e__10794__auto__ = e10902;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Failure advancing state",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$state_DASH_map,state_map__10793__auto__,cljs.core.cst$kw$dispatch,cljs.core.cst$kw$default,cljs.core.cst$kw$reset_DASH_state_DASH_key,cljs.core.cst$kw$action_DASH_state,cljs.core.cst$kw$advancer,devils_grip.engine.game.from_talon.advance], null),e__10794__auto__);
}}));
