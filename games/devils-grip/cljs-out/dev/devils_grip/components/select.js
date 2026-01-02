// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('devils_grip.components.select');
goog.require('cljs.core');
goog.require('cljs.core.constants');
devils_grip.components.select.draggable = (function devils_grip$components$select$draggable(var_args){
var args__4824__auto__ = [];
var len__4818__auto___11056 = arguments.length;
var i__4819__auto___11057 = (0);
while(true){
if((i__4819__auto___11057 < len__4818__auto___11056)){
args__4824__auto__.push((arguments[i__4819__auto___11057]));

var G__11058 = (i__4819__auto___11057 + (1));
i__4819__auto___11057 = G__11058;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return devils_grip.components.select.draggable.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(devils_grip.components.select.draggable.cljs$core$IFn$_invoke$arity$variadic = (function (properties,children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$draggable,true], null),properties], 0)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["drag-container"], null)], null)], 0)),children], null);
}));

(devils_grip.components.select.draggable.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devils_grip.components.select.draggable.cljs$lang$applyTo = (function (seq11054){
var G__11055 = cljs.core.first(seq11054);
var seq11054__$1 = cljs.core.next(seq11054);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11055,seq11054__$1);
}));

devils_grip.components.select.drop_target = (function devils_grip$components$select$drop_target(var_args){
var args__4824__auto__ = [];
var len__4818__auto___11062 = arguments.length;
var i__4819__auto___11063 = (0);
while(true){
if((i__4819__auto___11063 < len__4818__auto___11062)){
args__4824__auto__.push((arguments[i__4819__auto___11063]));

var G__11064 = (i__4819__auto___11063 + (1));
i__4819__auto___11063 = G__11064;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return devils_grip.components.select.drop_target.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(devils_grip.components.select.drop_target.cljs$core$IFn$_invoke$arity$variadic = (function (properties,children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_drag_DASH_over,(function (p1__11059_SHARP_){
return p1__11059_SHARP_.preventDefault();
})], null),properties], 0)),children], null);
}));

(devils_grip.components.select.drop_target.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devils_grip.components.select.drop_target.cljs$lang$applyTo = (function (seq11060){
var G__11061 = cljs.core.first(seq11060);
var seq11060__$1 = cljs.core.next(seq11060);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11061,seq11060__$1);
}));

