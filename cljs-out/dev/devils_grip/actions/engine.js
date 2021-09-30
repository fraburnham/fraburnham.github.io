// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('devils_grip.actions.engine');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('devils_grip.actions.engine.drag');
goog.require('devils_grip.actions.engine.draw');
goog.require('devils_grip.actions.engine.fill_hole');
goog.require('devils_grip.actions.engine.from_talon');
goog.require('devils_grip.actions.engine.merge_cells');
goog.require('devils_grip.actions.engine.start');
goog.require('devils_grip.actions.engine.swap_cells');
goog.require('devils_grip.rules');
devils_grip.actions.engine.deref_state_map = (function devils_grip$actions$engine$deref_state_map(state_map){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__13495){
var vec__13496 = p__13495;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13496,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13496,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.deref(v)], null);
}),state_map));
});
devils_grip.actions.engine.update_state_map_BANG_ = (function devils_grip$actions$engine$update_state_map_BANG_(old_state,new_state){
var seq__13499 = cljs.core.seq(new_state);
var chunk__13500 = null;
var count__13501 = (0);
var i__13502 = (0);
while(true){
if((i__13502 < count__13501)){
var vec__13509 = chunk__13500.cljs$core$IIndexed$_nth$arity$2(null,i__13502);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13509,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13509,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((old_state.cljs$core$IFn$_invoke$arity$1 ? old_state.cljs$core$IFn$_invoke$arity$1(k) : old_state.call(null,k)),cljs.core.constantly(v));


var G__13515 = seq__13499;
var G__13516 = chunk__13500;
var G__13517 = count__13501;
var G__13518 = (i__13502 + (1));
seq__13499 = G__13515;
chunk__13500 = G__13516;
count__13501 = G__13517;
i__13502 = G__13518;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__13499);
if(temp__5720__auto__){
var seq__13499__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13499__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__13499__$1);
var G__13519 = cljs.core.chunk_rest(seq__13499__$1);
var G__13520 = c__4638__auto__;
var G__13521 = cljs.core.count(c__4638__auto__);
var G__13522 = (0);
seq__13499 = G__13519;
chunk__13500 = G__13520;
count__13501 = G__13521;
i__13502 = G__13522;
continue;
} else {
var vec__13512 = cljs.core.first(seq__13499__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13512,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13512,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((old_state.cljs$core$IFn$_invoke$arity$1 ? old_state.cljs$core$IFn$_invoke$arity$1(k) : old_state.call(null,k)),cljs.core.constantly(v));


var G__13523 = cljs.core.next(seq__13499__$1);
var G__13524 = null;
var G__13525 = (0);
var G__13526 = (0);
seq__13499 = G__13523;
chunk__13500 = G__13524;
count__13501 = G__13525;
i__13502 = G__13526;
continue;
}
} else {
return null;
}
}
break;
}
});
if((typeof devils_grip !== 'undefined') && (typeof devils_grip.actions !== 'undefined') && (typeof devils_grip.actions.engine !== 'undefined') && (typeof devils_grip.actions.engine.advance !== 'undefined')){
} else {
devils_grip.actions.engine.advance = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__13527 = cljs.core.get_global_hierarchy;
return (fexpr__13527.cljs$core$IFn$_invoke$arity$0 ? fexpr__13527.cljs$core$IFn$_invoke$arity$0() : fexpr__13527.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devils-grip.actions.engine","advance"),(function (p__13528){
var map__13529 = p__13528;
var map__13529__$1 = cljs.core.__destructure_map(map__13529);
var action_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13529__$1,cljs.core.cst$kw$action_DASH_state);
return cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(action_state);
}),cljs.core.cst$kw$default,hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}
devils_grip.actions.engine.advance.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$draw,(function (state_map__13487__auto__){
return (devils_grip.actions.engine.draw.advance.cljs$core$IFn$_invoke$arity$1 ? devils_grip.actions.engine.draw.advance.cljs$core$IFn$_invoke$arity$1(state_map__13487__auto__) : devils_grip.actions.engine.draw.advance.call(null,state_map__13487__auto__));
}));
devils_grip.actions.engine.advance.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fill_DASH_hole,(function (state_map__13487__auto__){
return devils_grip.actions.engine.fill_hole.advance(state_map__13487__auto__);
}));
devils_grip.actions.engine.advance.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$from_DASH_talon,(function (state_map__13487__auto__){
return (devils_grip.actions.engine.from_talon.advance.cljs$core$IFn$_invoke$arity$1 ? devils_grip.actions.engine.from_talon.advance.cljs$core$IFn$_invoke$arity$1(state_map__13487__auto__) : devils_grip.actions.engine.from_talon.advance.call(null,state_map__13487__auto__));
}));
devils_grip.actions.engine.advance.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$merge_DASH_cells,(function (state_map__13487__auto__){
return (devils_grip.actions.engine.merge_cells.advance.cljs$core$IFn$_invoke$arity$1 ? devils_grip.actions.engine.merge_cells.advance.cljs$core$IFn$_invoke$arity$1(state_map__13487__auto__) : devils_grip.actions.engine.merge_cells.advance.call(null,state_map__13487__auto__));
}));
devils_grip.actions.engine.advance.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$start,(function (state_map__13487__auto__){
return devils_grip.actions.engine.start.advance(state_map__13487__auto__);
}));
devils_grip.actions.engine.advance.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$swap_DASH_cells,(function (state_map__13487__auto__){
return (devils_grip.actions.engine.swap_cells.advance.cljs$core$IFn$_invoke$arity$1 ? devils_grip.actions.engine.swap_cells.advance.cljs$core$IFn$_invoke$arity$1(state_map__13487__auto__) : devils_grip.actions.engine.swap_cells.advance.call(null,state_map__13487__auto__));
}));
devils_grip.actions.engine.advance.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$drag,(function (state_map__13487__auto__){
return (devils_grip.actions.engine.drag.advance.cljs$core$IFn$_invoke$arity$1 ? devils_grip.actions.engine.drag.advance.cljs$core$IFn$_invoke$arity$1(state_map__13487__auto__) : devils_grip.actions.engine.drag.advance.call(null,state_map__13487__auto__));
}));
devils_grip.actions.engine.advance.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (state_map__13487__auto__){
var fexpr__13531 = (function (p1__13530_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__13530_SHARP_,cljs.core.cst$kw$action_DASH_state,cljs.core.constantly(cljs.core.PersistentArrayMap.EMPTY));
});
return fexpr__13531(state_map__13487__auto__);
}));
devils_grip.actions.engine.advance_BANG_ = (function devils_grip$actions$engine$advance_BANG_(p__13532){
var map__13533 = p__13532;
var map__13533__$1 = cljs.core.__destructure_map(map__13533);
var state_map = map__13533__$1;
var board_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13533__$1,cljs.core.cst$kw$board_DASH_state);
var new_state_map = devils_grip.rules.validate((function (){var G__13534 = devils_grip.actions.engine.deref_state_map(state_map);
return (devils_grip.actions.engine.advance.cljs$core$IFn$_invoke$arity$1 ? devils_grip.actions.engine.advance.cljs$core$IFn$_invoke$arity$1(G__13534) : devils_grip.actions.engine.advance.call(null,G__13534));
})());
return devils_grip.actions.engine.update_state_map_BANG_(state_map,(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(new_state_map))?(function (){
console.log("Error, rendering old map");

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(devils_grip.actions.engine.deref_state_map(state_map),cljs.core.cst$kw$action_DASH_state,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$action_DASH_state,cljs.core.cst$kw$error], null),cljs.core.constantly(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(new_state_map)));
})()
:new_state_map));
});
