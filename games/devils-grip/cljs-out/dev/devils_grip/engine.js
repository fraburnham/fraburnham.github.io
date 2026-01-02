// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('devils_grip.engine');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('devils_grip.engine.exceptions');
goog.require('devils_grip.engine.game.select');
goog.require('devils_grip.engine.game.draw');
goog.require('devils_grip.engine.game.fill_hole');
goog.require('devils_grip.engine.game.start');
goog.require('devils_grip.rules');
goog.require('devils_grip.engine.ui.drag');
goog.require('devils_grip.engine.ui.select');
devils_grip.engine.update_state_map_BANG_ = (function devils_grip$engine$update_state_map_BANG_(old_state,new_state){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(old_state,cljs.core.constantly(new_state));
});
devils_grip.engine.error_safe_advance = (function devils_grip$engine$error_safe_advance(advance_fn){
return (function (state_map){
try{return (advance_fn.cljs$core$IFn$_invoke$arity$1 ? advance_fn.cljs$core$IFn$_invoke$arity$1(state_map) : advance_fn.call(null,state_map));
}catch (e10897){if((e10897 instanceof cljs.core.ExceptionInfo)){
var e = e10897;
devils_grip.engine.exceptions.log_exception(e);

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state_map,cljs.core.cst$kw$reset_DASH_state_DASH_key.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(e)));
} else {
throw e10897;

}
}});
});
if((typeof devils_grip !== 'undefined') && (typeof devils_grip.engine !== 'undefined') && (typeof devils_grip.engine.advance_game !== 'undefined')){
} else {
devils_grip.engine.advance_game = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__10902 = cljs.core.get_global_hierarchy;
return (fexpr__10902.cljs$core$IFn$_invoke$arity$0 ? fexpr__10902.cljs$core$IFn$_invoke$arity$0() : fexpr__10902.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devils-grip.engine","advance-game"),(function (p__10903){
var map__10904 = p__10903;
var map__10904__$1 = cljs.core.__destructure_map(map__10904);
var action_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10904__$1,cljs.core.cst$kw$action_DASH_state);
return cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(action_state);
}),cljs.core.cst$kw$default,hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}

devils_grip.engine.advance_game.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$draw,(function (state_map__10354__auto__){
try{var fexpr__10906 = (function (p1__10898_SHARP_){
return (devils_grip.engine.game.draw.advance.cljs$core$IFn$_invoke$arity$1 ? devils_grip.engine.game.draw.advance.cljs$core$IFn$_invoke$arity$1(p1__10898_SHARP_) : devils_grip.engine.game.draw.advance.call(null,p1__10898_SHARP_));
});
return fexpr__10906(state_map__10354__auto__);
}catch (e10905){var e__10355__auto__ = e10905;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Failure advancing state",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$state_DASH_map,state_map__10354__auto__,cljs.core.cst$kw$dispatch,cljs.core.cst$kw$draw,cljs.core.cst$kw$reset_DASH_state_DASH_key,cljs.core.cst$kw$action_DASH_state,cljs.core.cst$kw$advancer,devils_grip.engine.advance_game], null),e__10355__auto__);
}}));

devils_grip.engine.advance_game.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fill_DASH_hole,(function (state_map__10354__auto__){
try{var fexpr__10908 = (function (p1__10899_SHARP_){
return devils_grip.engine.game.fill_hole.advance(p1__10899_SHARP_);
});
return fexpr__10908(state_map__10354__auto__);
}catch (e10907){var e__10355__auto__ = e10907;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Failure advancing state",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$state_DASH_map,state_map__10354__auto__,cljs.core.cst$kw$dispatch,cljs.core.cst$kw$fill_DASH_hole,cljs.core.cst$kw$reset_DASH_state_DASH_key,cljs.core.cst$kw$action_DASH_state,cljs.core.cst$kw$advancer,devils_grip.engine.advance_game], null),e__10355__auto__);
}}));

devils_grip.engine.advance_game.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$start,(function (state_map__10354__auto__){
try{var fexpr__10910 = (function (p1__10900_SHARP_){
return devils_grip.engine.game.start.advance(p1__10900_SHARP_);
});
return fexpr__10910(state_map__10354__auto__);
}catch (e10909){var e__10355__auto__ = e10909;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Failure advancing state",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$state_DASH_map,state_map__10354__auto__,cljs.core.cst$kw$dispatch,cljs.core.cst$kw$start,cljs.core.cst$kw$reset_DASH_state_DASH_key,cljs.core.cst$kw$action_DASH_state,cljs.core.cst$kw$advancer,devils_grip.engine.advance_game], null),e__10355__auto__);
}}));

devils_grip.engine.advance_game.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$select,(function (state_map__10354__auto__){
try{var fexpr__10912 = (function (p1__10901_SHARP_){
return (devils_grip.engine.game.select.advance.cljs$core$IFn$_invoke$arity$1 ? devils_grip.engine.game.select.advance.cljs$core$IFn$_invoke$arity$1(p1__10901_SHARP_) : devils_grip.engine.game.select.advance.call(null,p1__10901_SHARP_));
});
return fexpr__10912(state_map__10354__auto__);
}catch (e10911){var e__10355__auto__ = e10911;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Failure advancing state",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$state_DASH_map,state_map__10354__auto__,cljs.core.cst$kw$dispatch,cljs.core.cst$kw$select,cljs.core.cst$kw$reset_DASH_state_DASH_key,cljs.core.cst$kw$action_DASH_state,cljs.core.cst$kw$advancer,devils_grip.engine.advance_game], null),e__10355__auto__);
}}));

devils_grip.engine.advance_game.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (state_map__10354__auto__){
try{var fexpr__10914 = (function (state_map__10356__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_map__10356__auto__,cljs.core.cst$kw$action_DASH_state,cljs.core.PersistentArrayMap.EMPTY);
});
return fexpr__10914(state_map__10354__auto__);
}catch (e10913){var e__10355__auto__ = e10913;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Failure advancing state",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$state_DASH_map,state_map__10354__auto__,cljs.core.cst$kw$dispatch,cljs.core.cst$kw$default,cljs.core.cst$kw$reset_DASH_state_DASH_key,cljs.core.cst$kw$action_DASH_state,cljs.core.cst$kw$advancer,devils_grip.engine.advance_game], null),e__10355__auto__);
}}));
if((typeof devils_grip !== 'undefined') && (typeof devils_grip.engine !== 'undefined') && (typeof devils_grip.engine.advance_ui !== 'undefined')){
} else {
devils_grip.engine.advance_ui = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__10917 = cljs.core.get_global_hierarchy;
return (fexpr__10917.cljs$core$IFn$_invoke$arity$0 ? fexpr__10917.cljs$core$IFn$_invoke$arity$0() : fexpr__10917.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devils-grip.engine","advance-ui"),(function (p__10918){
var map__10919 = p__10918;
var map__10919__$1 = cljs.core.__destructure_map(map__10919);
var state_map = map__10919__$1;
var action_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10919__$1,cljs.core.cst$kw$action_DASH_state);
return cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(action_state);
}),cljs.core.cst$kw$default,hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}

devils_grip.engine.advance_ui.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$drag,(function (state_map__10354__auto__){
try{var fexpr__10921 = (function (p1__10915_SHARP_){
return devils_grip.engine.ui.drag.advance(p1__10915_SHARP_);
});
return fexpr__10921(state_map__10354__auto__);
}catch (e10920){var e__10355__auto__ = e10920;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Failure advancing state",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$state_DASH_map,state_map__10354__auto__,cljs.core.cst$kw$dispatch,cljs.core.cst$kw$drag,cljs.core.cst$kw$reset_DASH_state_DASH_key,cljs.core.cst$kw$ui,cljs.core.cst$kw$advancer,devils_grip.engine.advance_ui], null),e__10355__auto__);
}}));

devils_grip.engine.advance_ui.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$select,(function (state_map__10354__auto__){
try{var fexpr__10923 = (function (p1__10916_SHARP_){
return (devils_grip.engine.ui.select.advance.cljs$core$IFn$_invoke$arity$1 ? devils_grip.engine.ui.select.advance.cljs$core$IFn$_invoke$arity$1(p1__10916_SHARP_) : devils_grip.engine.ui.select.advance.call(null,p1__10916_SHARP_));
});
return fexpr__10923(state_map__10354__auto__);
}catch (e10922){var e__10355__auto__ = e10922;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Failure advancing state",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$state_DASH_map,state_map__10354__auto__,cljs.core.cst$kw$dispatch,cljs.core.cst$kw$select,cljs.core.cst$kw$reset_DASH_state_DASH_key,cljs.core.cst$kw$ui,cljs.core.cst$kw$advancer,devils_grip.engine.advance_ui], null),e__10355__auto__);
}}));

devils_grip.engine.advance_ui.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (state_map__10354__auto__){
try{var fexpr__10925 = (function (state_map__10356__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_map__10356__auto__,cljs.core.cst$kw$ui,cljs.core.PersistentArrayMap.EMPTY);
});
return fexpr__10925(state_map__10354__auto__);
}catch (e10924){var e__10355__auto__ = e10924;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Failure advancing state",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$state_DASH_map,state_map__10354__auto__,cljs.core.cst$kw$dispatch,cljs.core.cst$kw$default,cljs.core.cst$kw$reset_DASH_state_DASH_key,cljs.core.cst$kw$ui,cljs.core.cst$kw$advancer,devils_grip.engine.advance_ui], null),e__10355__auto__);
}}));
devils_grip.engine.advance_game_BANG_ = (function devils_grip$engine$advance_game_BANG_(state_map){
var advance_game = devils_grip.engine.error_safe_advance(devils_grip.engine.advance_game);
var new_state_map = devils_grip.rules.validate((function (){var G__10926 = cljs.core.deref(state_map);
return (advance_game.cljs$core$IFn$_invoke$arity$1 ? advance_game.cljs$core$IFn$_invoke$arity$1(G__10926) : advance_game.call(null,G__10926));
})());
return devils_grip.engine.update_state_map_BANG_(state_map,(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(new_state_map))?(function (){
console.log("Invalid game state, rendering old map");

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(state_map),cljs.core.cst$kw$action_DASH_state,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$action_DASH_state,cljs.core.cst$kw$error], null),cljs.core.constantly(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(new_state_map)));
})()
:new_state_map));
});
devils_grip.engine.advance_ui_BANG_ = (function devils_grip$engine$advance_ui_BANG_(state_map){
var advance_ui = devils_grip.engine.error_safe_advance(devils_grip.engine.advance_ui);
return devils_grip.engine.update_state_map_BANG_(state_map,(function (){var G__10927 = cljs.core.deref(state_map);
return (advance_ui.cljs$core$IFn$_invoke$arity$1 ? advance_ui.cljs$core$IFn$_invoke$arity$1(G__10927) : advance_ui.call(null,G__10927));
})());
});
devils_grip.engine.advance_BANG_ = (function devils_grip$engine$advance_BANG_(state_map){
devils_grip.engine.advance_game_BANG_(state_map);

return devils_grip.engine.advance_ui_BANG_(state_map);
});
