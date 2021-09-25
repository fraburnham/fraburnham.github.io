// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('devils_grip.components.drag');
goog.require('cljs.core');
goog.require('cljs.core.constants');
devils_grip.components.drag.draggable = (function devils_grip$components$drag$draggable(var_args){
var args__4824__auto__ = [];
var len__4818__auto___13202 = arguments.length;
var i__4819__auto___13203 = (0);
while(true){
if((i__4819__auto___13203 < len__4818__auto___13202)){
args__4824__auto__.push((arguments[i__4819__auto___13203]));

var G__13204 = (i__4819__auto___13203 + (1));
i__4819__auto___13203 = G__13204;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return devils_grip.components.drag.draggable.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(devils_grip.components.drag.draggable.cljs$core$IFn$_invoke$arity$variadic = (function (drag_fns,children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$draggable,true,cljs.core.cst$kw$class,"drag-container"], null),drag_fns], 0)),children], null);
}));

(devils_grip.components.drag.draggable.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devils_grip.components.drag.draggable.cljs$lang$applyTo = (function (seq13200){
var G__13201 = cljs.core.first(seq13200);
var seq13200__$1 = cljs.core.next(seq13200);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13201,seq13200__$1);
}));

devils_grip.components.drag.drop_target = (function devils_grip$components$drag$drop_target(var_args){
var args__4824__auto__ = [];
var len__4818__auto___13208 = arguments.length;
var i__4819__auto___13209 = (0);
while(true){
if((i__4819__auto___13209 < len__4818__auto___13208)){
args__4824__auto__.push((arguments[i__4819__auto___13209]));

var G__13210 = (i__4819__auto___13209 + (1));
i__4819__auto___13209 = G__13210;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return devils_grip.components.drag.drop_target.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(devils_grip.components.drag.drop_target.cljs$core$IFn$_invoke$arity$variadic = (function (drag_fns,children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_drag_DASH_over,(function (p1__13205_SHARP_){
return p1__13205_SHARP_.preventDefault();
})], null),drag_fns], 0)),children], null);
}));

(devils_grip.components.drag.drop_target.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devils_grip.components.drag.drop_target.cljs$lang$applyTo = (function (seq13206){
var G__13207 = cljs.core.first(seq13206);
var seq13206__$1 = cljs.core.next(seq13206);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13207,seq13206__$1);
}));

