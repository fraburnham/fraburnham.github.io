// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('devils_grip.components.action');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('devils_grip.actions.engine');
devils_grip.components.action.button = (function devils_grip$components$action$button(p__13919,action,text){
var map__13920 = p__13919;
var map__13920__$1 = ((((!((map__13920 == null)))?((((map__13920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13920.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13920):map__13920);
var state_map = map__13920__$1;
var action_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13920__$1,cljs.core.cst$kw$action_DASH_state);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (map__13920,map__13920__$1,state_map,action_state){
return (function (_){
devils_grip.actions.engine.action_click_BANG_(action_state,action);

return devils_grip.actions.engine.advance_BANG_(state_map);
});})(map__13920,map__13920__$1,state_map,action_state))
], null),text], null);
});
