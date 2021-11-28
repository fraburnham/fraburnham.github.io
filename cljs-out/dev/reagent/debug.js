// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__10081__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__10081 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10082__i = 0, G__10082__a = new Array(arguments.length -  0);
while (G__10082__i < G__10082__a.length) {G__10082__a[G__10082__i] = arguments[G__10082__i + 0]; ++G__10082__i;}
  args = new cljs.core.IndexedSeq(G__10082__a,0,null);
} 
return G__10081__delegate.call(this,args);};
G__10081.cljs$lang$maxFixedArity = 0;
G__10081.cljs$lang$applyTo = (function (arglist__10083){
var args = cljs.core.seq(arglist__10083);
return G__10081__delegate(args);
});
G__10081.cljs$core$IFn$_invoke$arity$variadic = G__10081__delegate;
return G__10081;
})()
);

(o.error = (function() { 
var G__10084__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__10084 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10085__i = 0, G__10085__a = new Array(arguments.length -  0);
while (G__10085__i < G__10085__a.length) {G__10085__a[G__10085__i] = arguments[G__10085__i + 0]; ++G__10085__i;}
  args = new cljs.core.IndexedSeq(G__10085__a,0,null);
} 
return G__10084__delegate.call(this,args);};
G__10084.cljs$lang$maxFixedArity = 0;
G__10084.cljs$lang$applyTo = (function (arglist__10086){
var args = cljs.core.seq(arglist__10086);
return G__10084__delegate(args);
});
G__10084.cljs$core$IFn$_invoke$arity$variadic = G__10084__delegate;
return G__10084;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});
