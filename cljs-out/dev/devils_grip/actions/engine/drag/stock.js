// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('devils_grip.actions.engine.drag.stock');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('devils_grip.actions.engine.draw');
if((typeof devils_grip !== 'undefined') && (typeof devils_grip.actions !== 'undefined') && (typeof devils_grip.actions.engine !== 'undefined') && (typeof devils_grip.actions.engine.drag !== 'undefined') && (typeof devils_grip.actions.engine.drag.stock !== 'undefined') && (typeof devils_grip.actions.engine.drag.stock.advance !== 'undefined')){
} else {
devils_grip.actions.engine.drag.stock.advance = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__13496 = cljs.core.get_global_hierarchy;
return (fexpr__13496.cljs$core$IFn$_invoke$arity$0 ? fexpr__13496.cljs$core$IFn$_invoke$arity$0() : fexpr__13496.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devils-grip.actions.engine.drag.stock","advance"),(function (p__13497){
var map__13498 = p__13497;
var map__13498__$1 = cljs.core.__destructure_map(map__13498);
var action_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13498__$1,cljs.core.cst$kw$action_DASH_state);
return cljs.core.count(cljs.core.cst$kw$selections.cljs$core$IFn$_invoke$arity$1(action_state));
}),cljs.core.cst$kw$default,hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}
devils_grip.actions.engine.drag.stock.advance.cljs$core$IMultiFn$_add_method$arity$3(null,(0),(function (state_map){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$action_DASH_state,cljs.core.cst$kw$selections], null),cljs.core.constantly(cljs.core.PersistentVector.EMPTY));
}));
devils_grip.actions.engine.drag.stock.advance.cljs$core$IMultiFn$_add_method$arity$3(null,(2),(function (p__13499){
var map__13500 = p__13499;
var map__13500__$1 = cljs.core.__destructure_map(map__13500);
var state_map = map__13500__$1;
var action_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13500__$1,cljs.core.cst$kw$action_DASH_state);
return (devils_grip.actions.engine.draw.advance.cljs$core$IFn$_invoke$arity$1 ? devils_grip.actions.engine.draw.advance.cljs$core$IFn$_invoke$arity$1(state_map) : devils_grip.actions.engine.draw.advance.call(null,state_map));
}));