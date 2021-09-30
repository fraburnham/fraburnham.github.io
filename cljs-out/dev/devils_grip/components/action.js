// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('devils_grip.components.action');
goog.require('cljs.core');
goog.require('cljs.core.constants');
devils_grip.components.action.button = (function devils_grip$components$action$button(p__13608,action,text){
var map__13609 = p__13608;
var map__13609__$1 = cljs.core.__destructure_map(map__13609);
var set_action_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13609__$1,cljs.core.cst$kw$set_DASH_action_BANG_);
var advance_action_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13609__$1,cljs.core.cst$kw$advance_DASH_action_BANG_);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (_){
(set_action_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_action_BANG_.cljs$core$IFn$_invoke$arity$1(action) : set_action_BANG_.call(null,action));

return (advance_action_BANG_.cljs$core$IFn$_invoke$arity$0 ? advance_action_BANG_.cljs$core$IFn$_invoke$arity$0() : advance_action_BANG_.call(null));
})], null),text], null);
});
