// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__13245__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__13245 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13246__i = 0, G__13246__a = new Array(arguments.length -  0);
while (G__13246__i < G__13246__a.length) {G__13246__a[G__13246__i] = arguments[G__13246__i + 0]; ++G__13246__i;}
  args = new cljs.core.IndexedSeq(G__13246__a,0,null);
} 
return G__13245__delegate.call(this,args);};
G__13245.cljs$lang$maxFixedArity = 0;
G__13245.cljs$lang$applyTo = (function (arglist__13247){
var args = cljs.core.seq(arglist__13247);
return G__13245__delegate(args);
});
G__13245.cljs$core$IFn$_invoke$arity$variadic = G__13245__delegate;
return G__13245;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__13248__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__13248 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13249__i = 0, G__13249__a = new Array(arguments.length -  0);
while (G__13249__i < G__13249__a.length) {G__13249__a[G__13249__i] = arguments[G__13249__i + 0]; ++G__13249__i;}
  args = new cljs.core.IndexedSeq(G__13249__a,0,null);
} 
return G__13248__delegate.call(this,args);};
G__13248.cljs$lang$maxFixedArity = 0;
G__13248.cljs$lang$applyTo = (function (arglist__13250){
var args = cljs.core.seq(arglist__13250);
return G__13248__delegate(args);
});
G__13248.cljs$core$IFn$_invoke$arity$variadic = G__13248__delegate;
return G__13248;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
