// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('devils_grip.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('devils_grip.actions.engine');
goog.require('devils_grip.components.action');
goog.require('devils_grip.components.board');
goog.require('devils_grip.components.help');
if(typeof devils_grip.core.state_map !== 'undefined'){
} else {
devils_grip.core.state_map = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$action_DASH_state,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$stock,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null),cljs.core.cst$kw$talon,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),cljs.core.cst$kw$board_DASH_state,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)], null);
}
devils_grip.core.page = (function devils_grip$core$page(ratom){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"title"], null),"Devil's Grip Solitaire"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"board"], null),devils_grip.components.board.board((function (){
return devils_grip.actions.engine.advance_BANG_(devils_grip.core.state_map);
}),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devils_grip.actions.engine.selection_click_BANG_,devils_grip.core.state_map),devils_grip.core.state_map)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"actions"], null),devils_grip.components.action.button(devils_grip.core.state_map,cljs.core.cst$kw$draw,"Draw"),devils_grip.components.action.button(devils_grip.core.state_map,cljs.core.cst$kw$from_DASH_talon,"Place from talon"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),devils_grip.components.action.button(devils_grip.core.state_map,cljs.core.cst$kw$swap_DASH_cells,"Swap cells"),devils_grip.components.action.button(devils_grip.core.state_map,cljs.core.cst$kw$merge_DASH_cells,"Merge cells"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),devils_grip.components.action.button(devils_grip.core.state_map,cljs.core.cst$kw$abort,"Abort action"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),devils_grip.components.action.button(devils_grip.core.state_map,cljs.core.cst$kw$start,"New game")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"help",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$font_DASH_style,"italic",cljs.core.cst$kw$color,"blue"], null)], null),devils_grip.components.help.help(cljs.core.cst$kw$action_DASH_state.cljs$core$IFn$_invoke$arity$1(devils_grip.core.state_map))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"error",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$font_DASH_style,"italic",cljs.core.cst$kw$color,"red"], null)], null),devils_grip.components.help.error(cljs.core.cst$kw$action_DASH_state.cljs$core$IFn$_invoke$arity$1(devils_grip.core.state_map))], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,devils_grip.components.board.stock(devils_grip.core.state_map),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),devils_grip.components.board.talon(devils_grip.core.state_map),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),devils_grip.components.board.score(devils_grip.core.state_map)], null)], null)], null)], null)], null);
});
devils_grip.core.dev_setup = (function devils_grip$core$dev_setup(){
if(goog.DEBUG){
cljs.core.enable_console_print_BANG_();

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
devils_grip.core.reload = (function devils_grip$core$reload(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [devils_grip.core.page], null),document.getElementById("app"));
});
devils_grip.core.main = (function devils_grip$core$main(){
devils_grip.core.dev_setup();

return devils_grip.core.reload();
});
goog.exportSymbol('devils_grip.core.main', devils_grip.core.main);
