// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('devils_grip.engine.exceptions');
goog.require('cljs.core');
goog.require('cljs.core.constants');

/**
 * @interface
 */
devils_grip.engine.exceptions.ExceptionLogger = function(){};

var devils_grip$engine$exceptions$ExceptionLogger$log_exception$dyn_10894 = (function (e){
var x__4509__auto__ = (((e == null))?null:e);
var m__4510__auto__ = (devils_grip.engine.exceptions.log_exception[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(e) : m__4510__auto__.call(null,e));
} else {
var m__4508__auto__ = (devils_grip.engine.exceptions.log_exception["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(e) : m__4508__auto__.call(null,e));
} else {
throw cljs.core.missing_protocol("ExceptionLogger.log-exception",e);
}
}
});
/**
 * Handle logging an exception to js/console
 */
devils_grip.engine.exceptions.log_exception = (function devils_grip$engine$exceptions$log_exception(e){
if((((!((e == null)))) && ((!((e.devils_grip$engine$exceptions$ExceptionLogger$log_exception$arity$1 == null)))))){
return e.devils_grip$engine$exceptions$ExceptionLogger$log_exception$arity$1(e);
} else {
return devils_grip$engine$exceptions$ExceptionLogger$log_exception$dyn_10894(e);
}
});

(cljs.core.ExceptionInfo.prototype.devils_grip$engine$exceptions$ExceptionLogger$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.ExceptionInfo.prototype.devils_grip$engine$exceptions$ExceptionLogger$log_exception$arity$1 = (function (e){
var e__$1 = this;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Exception message:",cljs.core.ex_message(e__$1)], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Exception data:",cljs.core.ex_data(e__$1)], 0));

if(cljs.core.truth_(cljs.core.ex_cause(e__$1))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Caused by:"], 0));

return devils_grip.engine.exceptions.log_exception(cljs.core.ex_cause(e__$1));
} else {
return null;
}
}));

goog.object.set(devils_grip.engine.exceptions.ExceptionLogger,"object",true);

goog.object.set(devils_grip.engine.exceptions.log_exception,"object",(function (e){
return console.log(e);
}));
