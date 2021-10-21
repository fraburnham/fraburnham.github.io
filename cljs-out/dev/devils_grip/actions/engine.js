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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__13554){
var vec__13555 = p__13554;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13555,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13555,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.deref(v)], null);
}),state_map));
});
devils_grip.actions.engine.update_state_map_BANG_ = (function devils_grip$actions$engine$update_state_map_BANG_(old_state,new_state){
var seq__13558 = cljs.core.seq(new_state);
var chunk__13559 = null;
var count__13560 = (0);
var i__13561 = (0);
while(true){
if((i__13561 < count__13560)){
var vec__13568 = chunk__13559.cljs$core$IIndexed$_nth$arity$2(null,i__13561);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13568,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13568,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((old_state.cljs$core$IFn$_invoke$arity$1 ? old_state.cljs$core$IFn$_invoke$arity$1(k) : old_state.call(null,k)),cljs.core.constantly(v));


var G__13574 = seq__13558;
var G__13575 = chunk__13559;
var G__13576 = count__13560;
var G__13577 = (i__13561 + (1));
seq__13558 = G__13574;
chunk__13559 = G__13575;
count__13560 = G__13576;
i__13561 = G__13577;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__13558);
if(temp__5720__auto__){
var seq__13558__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13558__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__13558__$1);
var G__13578 = cljs.core.chunk_rest(seq__13558__$1);
var G__13579 = c__4638__auto__;
var G__13580 = cljs.core.count(c__4638__auto__);
var G__13581 = (0);
seq__13558 = G__13578;
chunk__13559 = G__13579;
count__13560 = G__13580;
i__13561 = G__13581;
continue;
} else {
var vec__13571 = cljs.core.first(seq__13558__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13571,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13571,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((old_state.cljs$core$IFn$_invoke$arity$1 ? old_state.cljs$core$IFn$_invoke$arity$1(k) : old_state.call(null,k)),cljs.core.constantly(v));


var G__13582 = cljs.core.next(seq__13558__$1);
var G__13583 = null;
var G__13584 = (0);
var G__13585 = (0);
seq__13558 = G__13582;
chunk__13559 = G__13583;
count__13560 = G__13584;
i__13561 = G__13585;
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
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__13593 = cljs.core.get_global_hierarchy;
return (fexpr__13593.cljs$core$IFn$_invoke$arity$0 ? fexpr__13593.cljs$core$IFn$_invoke$arity$0() : fexpr__13593.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devils-grip.actions.engine","advance"),(function (p__13594){
var map__13595 = p__13594;
var map__13595__$1 = cljs.core.__destructure_map(map__13595);
var action_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13595__$1,cljs.core.cst$kw$action_DASH_state);
return cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(action_state);
}),cljs.core.cst$kw$default,hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}

devils_grip.actions.engine.advance.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$draw,(function (state_map__13405__auto__){
var fexpr__13596 = (function (p1__13586_SHARP_){
return (devils_grip.actions.engine.draw.advance.cljs$core$IFn$_invoke$arity$1 ? devils_grip.actions.engine.draw.advance.cljs$core$IFn$_invoke$arity$1(p1__13586_SHARP_) : devils_grip.actions.engine.draw.advance.call(null,p1__13586_SHARP_));
});
return fexpr__13596(state_map__13405__auto__);
}));

devils_grip.actions.engine.advance.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fill_DASH_hole,(function (state_map__13405__auto__){
var fexpr__13597 = (function (p1__13587_SHARP_){
return devils_grip.actions.engine.fill_hole.advance(p1__13587_SHARP_);
});
return fexpr__13597(state_map__13405__auto__);
}));

devils_grip.actions.engine.advance.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$from_DASH_talon,(function (state_map__13405__auto__){
var fexpr__13598 = (function (p1__13588_SHARP_){
return (devils_grip.actions.engine.from_talon.advance.cljs$core$IFn$_invoke$arity$1 ? devils_grip.actions.engine.from_talon.advance.cljs$core$IFn$_invoke$arity$1(p1__13588_SHARP_) : devils_grip.actions.engine.from_talon.advance.call(null,p1__13588_SHARP_));
});
return fexpr__13598(state_map__13405__auto__);
}));

devils_grip.actions.engine.advance.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$merge_DASH_cells,(function (state_map__13405__auto__){
var fexpr__13599 = (function (p1__13589_SHARP_){
return (devils_grip.actions.engine.merge_cells.advance.cljs$core$IFn$_invoke$arity$1 ? devils_grip.actions.engine.merge_cells.advance.cljs$core$IFn$_invoke$arity$1(p1__13589_SHARP_) : devils_grip.actions.engine.merge_cells.advance.call(null,p1__13589_SHARP_));
});
return fexpr__13599(state_map__13405__auto__);
}));

devils_grip.actions.engine.advance.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$start,(function (state_map__13405__auto__){
var fexpr__13600 = (function (p1__13590_SHARP_){
return devils_grip.actions.engine.start.advance(p1__13590_SHARP_);
});
return fexpr__13600(state_map__13405__auto__);
}));

devils_grip.actions.engine.advance.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$swap_DASH_cells,(function (state_map__13405__auto__){
var fexpr__13601 = (function (p1__13591_SHARP_){
return (devils_grip.actions.engine.swap_cells.advance.cljs$core$IFn$_invoke$arity$1 ? devils_grip.actions.engine.swap_cells.advance.cljs$core$IFn$_invoke$arity$1(p1__13591_SHARP_) : devils_grip.actions.engine.swap_cells.advance.call(null,p1__13591_SHARP_));
});
return fexpr__13601(state_map__13405__auto__);
}));

devils_grip.actions.engine.advance.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$drag,(function (state_map__13405__auto__){
var fexpr__13602 = (function (p1__13592_SHARP_){
return (devils_grip.actions.engine.drag.advance.cljs$core$IFn$_invoke$arity$1 ? devils_grip.actions.engine.drag.advance.cljs$core$IFn$_invoke$arity$1(p1__13592_SHARP_) : devils_grip.actions.engine.drag.advance.call(null,p1__13592_SHARP_));
});
return fexpr__13602(state_map__13405__auto__);
}));

devils_grip.actions.engine.advance.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (state_map__13405__auto__){
var fexpr__13603 = (function (state_map){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_map,cljs.core.cst$kw$action_DASH_state,cljs.core.PersistentArrayMap.EMPTY);
});
return fexpr__13603(state_map__13405__auto__);
}));
devils_grip.actions.engine.advance_BANG_ = (function devils_grip$actions$engine$advance_BANG_(p__13604){
var map__13605 = p__13604;
var map__13605__$1 = cljs.core.__destructure_map(map__13605);
var state_map = map__13605__$1;
var board_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13605__$1,cljs.core.cst$kw$board_DASH_state);
var new_state_map = devils_grip.rules.validate((function (){var G__13606 = devils_grip.actions.engine.deref_state_map(state_map);
return (devils_grip.actions.engine.advance.cljs$core$IFn$_invoke$arity$1 ? devils_grip.actions.engine.advance.cljs$core$IFn$_invoke$arity$1(G__13606) : devils_grip.actions.engine.advance.call(null,G__13606));
})());
return devils_grip.actions.engine.update_state_map_BANG_(state_map,(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(new_state_map))?(function (){
console.log("Error, rendering old map");

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(devils_grip.actions.engine.deref_state_map(state_map),cljs.core.cst$kw$action_DASH_state,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$action_DASH_state,cljs.core.cst$kw$error], null),cljs.core.constantly(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(new_state_map)));
})()
:new_state_map));
});
