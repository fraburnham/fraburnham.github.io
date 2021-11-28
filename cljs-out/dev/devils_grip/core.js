// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('devils_grip.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('devils_grip.engine');
goog.require('devils_grip.engine.helpers');
goog.require('devils_grip.components.action');
goog.require('devils_grip.components.board');
goog.require('devils_grip.components.help');
goog.require('devils_grip.rules');
if((typeof devils_grip !== 'undefined') && (typeof devils_grip.core !== 'undefined') && (typeof devils_grip.core.state_map !== 'undefined')){
} else {
devils_grip.core.state_map = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$action_DASH_state,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$stock,null,cljs.core.cst$kw$talon,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$board_DASH_state,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$ui,cljs.core.PersistentArrayMap.EMPTY], null));
}
devils_grip.core.state_fns = new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$advance_DASH_action_BANG_,(function (){
return devils_grip.engine.advance_BANG_(devils_grip.core.state_map);
}),cljs.core.cst$kw$selection_DASH_click_BANG_,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devils_grip.engine.helpers.selection_click_BANG_,devils_grip.core.state_map),cljs.core.cst$kw$set_DASH_action_BANG_,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devils_grip.engine.helpers.set_action_BANG_,devils_grip.core.state_map),cljs.core.cst$kw$double_DASH_click_BANG_,devils_grip.engine.helpers.double_click_BANG_(devils_grip.core.state_map),cljs.core.cst$kw$draw_BANG_,devils_grip.engine.helpers.draw_BANG_(devils_grip.core.state_map),cljs.core.cst$kw$drag_DASH_enter_BANG_,devils_grip.engine.helpers.drag_enter_BANG_(devils_grip.core.state_map),cljs.core.cst$kw$drag_DASH_start_BANG_,devils_grip.engine.helpers.drag_start_BANG_(devils_grip.core.state_map),cljs.core.cst$kw$drop_BANG_,devils_grip.engine.helpers.drop_BANG_(devils_grip.core.state_map)], null);
devils_grip.core.page = (function devils_grip$core$page(ratom){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"title"], null),"Devil's Grip Solitaire"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"board"], null),devils_grip.components.board.board(devils_grip.core.state_fns,devils_grip.core.state_map)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,"flex"], null)], null),devils_grip.components.board.stock(devils_grip.core.state_fns,devils_grip.core.state_map),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"1em"], null)], null)], null),devils_grip.components.board.talon(devils_grip.core.state_fns,devils_grip.core.state_map)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),devils_grip.components.board.score(devils_grip.core.state_map)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"actions"], null),devils_grip.components.action.button(devils_grip.core.state_fns,cljs.core.cst$kw$abort,"Abort action"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),devils_grip.components.action.button(devils_grip.core.state_fns,cljs.core.cst$kw$start,"New game")], null)], null)], null)], null);
});
devils_grip.core.get_app_element = (function devils_grip$core$get_app_element(){
return goog.dom.getElement("app");
});
devils_grip.core.mount = (function devils_grip$core$mount(el){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [devils_grip.core.page], null),el);
});
devils_grip.core.mount_app_element = (function devils_grip$core$mount_app_element(){
var temp__5720__auto__ = devils_grip.core.get_app_element();
if(cljs.core.truth_(temp__5720__auto__)){
var el = temp__5720__auto__;
return devils_grip.core.mount(el);
} else {
return null;
}
});
devils_grip.core.mount_app_element();
devils_grip.core.on_reload = (function devils_grip$core$on_reload(){
return devils_grip.core.mount_app_element();
});
