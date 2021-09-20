// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('devils_grip.actions.engine');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('devils_grip.actions.engine.draw');
goog.require('devils_grip.actions.engine.fill_hole');
goog.require('devils_grip.actions.engine.from_talon');
goog.require('devils_grip.actions.engine.merge_cells');
goog.require('devils_grip.actions.engine.start');
goog.require('devils_grip.actions.engine.swap_cells');
goog.require('devils_grip.rules');
devils_grip.actions.engine.deref_state_map = (function devils_grip$actions$engine$deref_state_map(state_map){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__13831){
var vec__13832 = p__13831;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13832,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13832,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.deref(v)], null);
}),state_map));
});
devils_grip.actions.engine.update_state_map_BANG_ = (function devils_grip$actions$engine$update_state_map_BANG_(old_state,new_state){
var seq__13835 = cljs.core.seq(new_state);
var chunk__13836 = null;
var count__13837 = (0);
var i__13838 = (0);
while(true){
if((i__13838 < count__13837)){
var vec__13839 = chunk__13836.cljs$core$IIndexed$_nth$arity$2(null,i__13838);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13839,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13839,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((old_state.cljs$core$IFn$_invoke$arity$1 ? old_state.cljs$core$IFn$_invoke$arity$1(k) : old_state.call(null,k)),cljs.core.constantly(v));

var G__13845 = seq__13835;
var G__13846 = chunk__13836;
var G__13847 = count__13837;
var G__13848 = (i__13838 + (1));
seq__13835 = G__13845;
chunk__13836 = G__13846;
count__13837 = G__13847;
i__13838 = G__13848;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13835);
if(temp__4657__auto__){
var seq__13835__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13835__$1)){
var c__8507__auto__ = cljs.core.chunk_first(seq__13835__$1);
var G__13849 = cljs.core.chunk_rest(seq__13835__$1);
var G__13850 = c__8507__auto__;
var G__13851 = cljs.core.count(c__8507__auto__);
var G__13852 = (0);
seq__13835 = G__13849;
chunk__13836 = G__13850;
count__13837 = G__13851;
i__13838 = G__13852;
continue;
} else {
var vec__13842 = cljs.core.first(seq__13835__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13842,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13842,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((old_state.cljs$core$IFn$_invoke$arity$1 ? old_state.cljs$core$IFn$_invoke$arity$1(k) : old_state.call(null,k)),cljs.core.constantly(v));

var G__13853 = cljs.core.next(seq__13835__$1);
var G__13854 = null;
var G__13855 = (0);
var G__13856 = (0);
seq__13835 = G__13853;
chunk__13836 = G__13854;
count__13837 = G__13855;
i__13838 = G__13856;
continue;
}
} else {
return null;
}
}
break;
}
});
devils_grip.actions.engine.selection_click_BANG_ = (function devils_grip$actions$engine$selection_click_BANG_(action_state,selection){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(action_state,(function (p1__13857_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__13857_SHARP_,cljs.core.cst$kw$selections,cljs.core.conj,selection);
}));
});
devils_grip.actions.engine.action_click_BANG_ = (function devils_grip$actions$engine$action_click_BANG_(action_state,type){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(action_state,(function (p1__13858_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__13858_SHARP_,cljs.core.cst$kw$error);
}));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(action_state,(function (p1__13859_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__13859_SHARP_,cljs.core.cst$kw$type,type);
}));
});
if(typeof devils_grip.actions.engine.advance !== 'undefined'){
} else {
devils_grip.actions.engine.advance = (function (){var method_table__8625__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__8626__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__8627__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__8628__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__8629__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devils-grip.actions.engine","advance"),((function (method_table__8625__auto__,prefer_table__8626__auto__,method_cache__8627__auto__,cached_hierarchy__8628__auto__,hierarchy__8629__auto__){
return (function (p__13860){
var map__13861 = p__13860;
var map__13861__$1 = ((((!((map__13861 == null)))?((((map__13861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13861.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13861):map__13861);
var state_map = map__13861__$1;
var action_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13861__$1,cljs.core.cst$kw$action_DASH_state);
var stock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13861__$1,cljs.core.cst$kw$stock);
var talon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13861__$1,cljs.core.cst$kw$talon);
var board_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13861__$1,cljs.core.cst$kw$board_DASH_state);
return cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(action_state);
});})(method_table__8625__auto__,prefer_table__8626__auto__,method_cache__8627__auto__,cached_hierarchy__8628__auto__,hierarchy__8629__auto__))
,cljs.core.cst$kw$default,hierarchy__8629__auto__,method_table__8625__auto__,prefer_table__8626__auto__,method_cache__8627__auto__,cached_hierarchy__8628__auto__));
})();
}
devils_grip.actions.engine.advance.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$draw,(function (state_map){
return (devils_grip.actions.engine.draw.advance.cljs$core$IFn$_invoke$arity$1 ? devils_grip.actions.engine.draw.advance.cljs$core$IFn$_invoke$arity$1(state_map) : devils_grip.actions.engine.draw.advance.call(null,state_map));
}));
devils_grip.actions.engine.advance.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fill_DASH_hole,(function (state_map){
return devils_grip.actions.engine.fill_hole.advance(state_map);
}));
devils_grip.actions.engine.advance.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$from_DASH_talon,(function (state_map){
return (devils_grip.actions.engine.from_talon.advance.cljs$core$IFn$_invoke$arity$1 ? devils_grip.actions.engine.from_talon.advance.cljs$core$IFn$_invoke$arity$1(state_map) : devils_grip.actions.engine.from_talon.advance.call(null,state_map));
}));
devils_grip.actions.engine.advance.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$merge_DASH_cells,(function (state_map){
return (devils_grip.actions.engine.merge_cells.advance.cljs$core$IFn$_invoke$arity$1 ? devils_grip.actions.engine.merge_cells.advance.cljs$core$IFn$_invoke$arity$1(state_map) : devils_grip.actions.engine.merge_cells.advance.call(null,state_map));
}));
devils_grip.actions.engine.advance.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$start,(function (state_map){
return devils_grip.actions.engine.start.advance(state_map);
}));
devils_grip.actions.engine.advance.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$swap_DASH_cells,(function (state_map){
return (devils_grip.actions.engine.swap_cells.advance.cljs$core$IFn$_invoke$arity$1 ? devils_grip.actions.engine.swap_cells.advance.cljs$core$IFn$_invoke$arity$1(state_map) : devils_grip.actions.engine.swap_cells.advance.call(null,state_map));
}));
devils_grip.actions.engine.advance.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (state_map){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state_map,cljs.core.cst$kw$action_DASH_state,cljs.core.constantly(cljs.core.PersistentArrayMap.EMPTY));
}));
devils_grip.actions.engine.advance_BANG_ = (function devils_grip$actions$engine$advance_BANG_(p__13863){
var map__13864 = p__13863;
var map__13864__$1 = ((((!((map__13864 == null)))?((((map__13864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13864.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13864):map__13864);
var state_map = map__13864__$1;
var board_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13864__$1,cljs.core.cst$kw$board_DASH_state);
var new_state_map = devils_grip.rules.validate((function (){var G__13866 = devils_grip.actions.engine.deref_state_map(state_map);
return (devils_grip.actions.engine.advance.cljs$core$IFn$_invoke$arity$1 ? devils_grip.actions.engine.advance.cljs$core$IFn$_invoke$arity$1(G__13866) : devils_grip.actions.engine.advance.call(null,G__13866));
})());
return devils_grip.actions.engine.update_state_map_BANG_(state_map,(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(new_state_map))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(devils_grip.actions.engine.deref_state_map(state_map),cljs.core.cst$kw$action_DASH_state,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$action_DASH_state,cljs.core.cst$kw$error], null),cljs.core.constantly(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(new_state_map))):new_state_map));
});
