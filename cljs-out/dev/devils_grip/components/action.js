// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('devils_grip.components.action');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('devils_grip.actions.engine');
devils_grip.components.action.button = (function devils_grip$components$action$button(p__13562,action,text){
var map__13563 = p__13562;
var map__13563__$1 = cljs.core.__destructure_map(map__13563);
var state_map = map__13563__$1;
var action_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13563__$1,cljs.core.cst$kw$action_DASH_state);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (_){
devils_grip.actions.engine.action_click_BANG_(action_state,action);

return devils_grip.actions.engine.advance_BANG_(state_map);
})], null),text], null);
});
