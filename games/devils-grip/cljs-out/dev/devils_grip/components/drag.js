// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('devils_grip.components.drag');
goog.require('cljs.core');
goog.require('cljs.core.constants');
devils_grip.components.drag.draggable = (function devils_grip$components$drag$draggable(var_args){
var args__4824__auto__ = [];
var len__4818__auto___10325 = arguments.length;
var i__4819__auto___10326 = (0);
while(true){
if((i__4819__auto___10326 < len__4818__auto___10325)){
args__4824__auto__.push((arguments[i__4819__auto___10326]));

var G__10327 = (i__4819__auto___10326 + (1));
i__4819__auto___10326 = G__10327;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return devils_grip.components.drag.draggable.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(devils_grip.components.drag.draggable.cljs$core$IFn$_invoke$arity$variadic = (function (properties,children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$draggable,true], null),properties], 0)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["drag-container"], null)], null)], 0)),children], null);
}));

(devils_grip.components.drag.draggable.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devils_grip.components.drag.draggable.cljs$lang$applyTo = (function (seq10323){
var G__10324 = cljs.core.first(seq10323);
var seq10323__$1 = cljs.core.next(seq10323);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10324,seq10323__$1);
}));

devils_grip.components.drag.drop_target = (function devils_grip$components$drag$drop_target(var_args){
var args__4824__auto__ = [];
var len__4818__auto___10331 = arguments.length;
var i__4819__auto___10332 = (0);
while(true){
if((i__4819__auto___10332 < len__4818__auto___10331)){
args__4824__auto__.push((arguments[i__4819__auto___10332]));

var G__10333 = (i__4819__auto___10332 + (1));
i__4819__auto___10332 = G__10333;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return devils_grip.components.drag.drop_target.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(devils_grip.components.drag.drop_target.cljs$core$IFn$_invoke$arity$variadic = (function (properties,children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_drag_DASH_over,(function (p1__10328_SHARP_){
return p1__10328_SHARP_.preventDefault();
})], null),properties], 0)),children], null);
}));

(devils_grip.components.drag.drop_target.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devils_grip.components.drag.drop_target.cljs$lang$applyTo = (function (seq10329){
var G__10330 = cljs.core.first(seq10329);
var seq10329__$1 = cljs.core.next(seq10329);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10330,seq10329__$1);
}));

