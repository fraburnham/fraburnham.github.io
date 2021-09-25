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
var G__12776__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12776 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12777__i = 0, G__12777__a = new Array(arguments.length -  0);
while (G__12777__i < G__12777__a.length) {G__12777__a[G__12777__i] = arguments[G__12777__i + 0]; ++G__12777__i;}
  args = new cljs.core.IndexedSeq(G__12777__a,0,null);
} 
return G__12776__delegate.call(this,args);};
G__12776.cljs$lang$maxFixedArity = 0;
G__12776.cljs$lang$applyTo = (function (arglist__12778){
var args = cljs.core.seq(arglist__12778);
return G__12776__delegate(args);
});
G__12776.cljs$core$IFn$_invoke$arity$variadic = G__12776__delegate;
return G__12776;
})()
);

(o.error = (function() { 
var G__12779__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12779 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12780__i = 0, G__12780__a = new Array(arguments.length -  0);
while (G__12780__i < G__12780__a.length) {G__12780__a[G__12780__i] = arguments[G__12780__i + 0]; ++G__12780__i;}
  args = new cljs.core.IndexedSeq(G__12780__a,0,null);
} 
return G__12779__delegate.call(this,args);};
G__12779.cljs$lang$maxFixedArity = 0;
G__12779.cljs$lang$applyTo = (function (arglist__12781){
var args = cljs.core.seq(arglist__12781);
return G__12779__delegate(args);
});
G__12779.cljs$core$IFn$_invoke$arity$variadic = G__12779__delegate;
return G__12779;
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
