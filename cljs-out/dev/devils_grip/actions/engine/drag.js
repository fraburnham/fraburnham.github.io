// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('devils_grip.actions.engine.drag');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('devils_grip.actions.engine.drag.board');
goog.require('devils_grip.actions.engine.drag.stock');
goog.require('devils_grip.actions.engine.drag.talon');
if((typeof devils_grip !== 'undefined') && (typeof devils_grip.actions !== 'undefined') && (typeof devils_grip.actions.engine !== 'undefined') && (typeof devils_grip.actions.engine.drag !== 'undefined') && (typeof devils_grip.actions.engine.drag.advance !== 'undefined')){
} else {
devils_grip.actions.engine.drag.advance = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__13509 = cljs.core.get_global_hierarchy;
return (fexpr__13509.cljs$core$IFn$_invoke$arity$0 ? fexpr__13509.cljs$core$IFn$_invoke$arity$0() : fexpr__13509.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devils-grip.actions.engine.drag","advance"),(function (p__13510){
var map__13511 = p__13510;
var map__13511__$1 = cljs.core.__destructure_map(map__13511);
var action_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13511__$1,cljs.core.cst$kw$action_DASH_state);
return cljs.core.cst$kw$drag_DASH_type.cljs$core$IFn$_invoke$arity$1(action_state);
}),cljs.core.cst$kw$default,hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}
devils_grip.actions.engine.drag.advance.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$board,(function (state_map){
return (devils_grip.actions.engine.drag.board.advance.cljs$core$IFn$_invoke$arity$1 ? devils_grip.actions.engine.drag.board.advance.cljs$core$IFn$_invoke$arity$1(state_map) : devils_grip.actions.engine.drag.board.advance.call(null,state_map));
}));
devils_grip.actions.engine.drag.advance.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$talon,(function (state_map){
return (devils_grip.actions.engine.drag.talon.advance.cljs$core$IFn$_invoke$arity$1 ? devils_grip.actions.engine.drag.talon.advance.cljs$core$IFn$_invoke$arity$1(state_map) : devils_grip.actions.engine.drag.talon.advance.call(null,state_map));
}));
devils_grip.actions.engine.drag.advance.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$stock,(function (state_map){
return (devils_grip.actions.engine.drag.stock.advance.cljs$core$IFn$_invoke$arity$1 ? devils_grip.actions.engine.drag.stock.advance.cljs$core$IFn$_invoke$arity$1(state_map) : devils_grip.actions.engine.drag.stock.advance.call(null,state_map));
}));
