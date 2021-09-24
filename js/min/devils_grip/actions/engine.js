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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__13877){
var vec__13878 = p__13877;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13878,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13878,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.deref(v)], null);
}),state_map));
});
devils_grip.actions.engine.update_state_map_BANG_ = (function devils_grip$actions$engine$update_state_map_BANG_(old_state,new_state){
var seq__13881 = cljs.core.seq(new_state);
var chunk__13882 = null;
var count__13883 = (0);
var i__13884 = (0);
while(true){
if((i__13884 < count__13883)){
var vec__13885 = chunk__13882.cljs$core$IIndexed$_nth$arity$2(null,i__13884);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13885,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13885,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((old_state.cljs$core$IFn$_invoke$arity$1 ? old_state.cljs$core$IFn$_invoke$arity$1(k) : old_state.call(null,k)),cljs.core.constantly(v));

var G__13891 = seq__13881;
var G__13892 = chunk__13882;
var G__13893 = count__13883;
var G__13894 = (i__13884 + (1));
seq__13881 = G__13891;
chunk__13882 = G__13892;
count__13883 = G__13893;
i__13884 = G__13894;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13881);
if(temp__4657__auto__){
var seq__13881__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13881__$1)){
var c__8507__auto__ = cljs.core.chunk_first(seq__13881__$1);
var G__13895 = cljs.core.chunk_rest(seq__13881__$1);
var G__13896 = c__8507__auto__;
var G__13897 = cljs.core.count(c__8507__auto__);
var G__13898 = (0);
seq__13881 = G__13895;
chunk__13882 = G__13896;
count__13883 = G__13897;
i__13884 = G__13898;
continue;
} else {
var vec__13888 = cljs.core.first(seq__13881__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13888,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13888,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((old_state.cljs$core$IFn$_invoke$arity$1 ? old_state.cljs$core$IFn$_invoke$arity$1(k) : old_state.call(null,k)),cljs.core.constantly(v));

var G__13899 = cljs.core.next(seq__13881__$1);
var G__13900 = null;
var G__13901 = (0);
var G__13902 = (0);
seq__13881 = G__13899;
chunk__13882 = G__13900;
count__13883 = G__13901;
i__13884 = G__13902;
continue;
}
} else {
return null;
}
}
break;
}
});
devils_grip.actions.engine.selection_click_BANG_ = (function devils_grip$actions$engine$selection_click_BANG_(p__13904,selection){
var map__13905 = p__13904;
var map__13905__$1 = ((((!((map__13905 == null)))?((((map__13905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13905.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13905):map__13905);
var action_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13905__$1,cljs.core.cst$kw$action_DASH_state);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(action_state,((function (map__13905,map__13905__$1,action_state){
return (function (p1__13903_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__13903_SHARP_,cljs.core.cst$kw$selections,cljs.core.conj,selection);
});})(map__13905,map__13905__$1,action_state))
);
});
devils_grip.actions.engine.action_click_BANG_ = (function devils_grip$actions$engine$action_click_BANG_(action_state,type){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(action_state,(function (p1__13907_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__13907_SHARP_,cljs.core.cst$kw$error);
}));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(action_state,(function (p1__13908_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__13908_SHARP_,cljs.core.cst$kw$type,type);
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
return (function (p__13909){
var map__13910 = p__13909;
var map__13910__$1 = ((((!((map__13910 == null)))?((((map__13910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13910.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13910):map__13910);
var action_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13910__$1,cljs.core.cst$kw$action_DASH_state);
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
var state_map__$1 = (devils_grip.actions.engine.merge_cells.advance.cljs$core$IFn$_invoke$arity$1 ? devils_grip.actions.engine.merge_cells.advance.cljs$core$IFn$_invoke$arity$1(state_map) : devils_grip.actions.engine.merge_cells.advance.call(null,state_map));
if(cljs.core.empty_QMARK_(cljs.core.cst$kw$action_DASH_state.cljs$core$IFn$_invoke$arity$1(state_map__$1))){
var G__13912 = cljs.core.assoc_in(state_map__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$action_DASH_state,cljs.core.cst$kw$type], null),cljs.core.cst$kw$fill_DASH_hole);
return (devils_grip.actions.engine.advance.cljs$core$IFn$_invoke$arity$1 ? devils_grip.actions.engine.advance.cljs$core$IFn$_invoke$arity$1(G__13912) : devils_grip.actions.engine.advance.call(null,G__13912));
} else {
return state_map__$1;
}
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
devils_grip.actions.engine.advance_BANG_ = (function devils_grip$actions$engine$advance_BANG_(p__13913){
var map__13914 = p__13913;
var map__13914__$1 = ((((!((map__13914 == null)))?((((map__13914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13914.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13914):map__13914);
var state_map = map__13914__$1;
var board_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13914__$1,cljs.core.cst$kw$board_DASH_state);
var new_state_map = devils_grip.rules.validate((function (){var G__13916 = devils_grip.actions.engine.deref_state_map(state_map);
return (devils_grip.actions.engine.advance.cljs$core$IFn$_invoke$arity$1 ? devils_grip.actions.engine.advance.cljs$core$IFn$_invoke$arity$1(G__13916) : devils_grip.actions.engine.advance.call(null,G__13916));
})());
return devils_grip.actions.engine.update_state_map_BANG_(state_map,(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(new_state_map))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(devils_grip.actions.engine.deref_state_map(state_map),cljs.core.cst$kw$action_DASH_state,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$action_DASH_state,cljs.core.cst$kw$error], null),cljs.core.constantly(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(new_state_map))):new_state_map));
});
