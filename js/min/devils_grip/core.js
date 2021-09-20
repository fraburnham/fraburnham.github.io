// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('devils_grip.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('devils_grip.actions.engine');
goog.require('devils_grip.board');
goog.require('devils_grip.cards');
goog.require('devils_grip.help');
if(typeof devils_grip.core.stock !== 'undefined'){
} else {
devils_grip.core.stock = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if(typeof devils_grip.core.talon !== 'undefined'){
} else {
devils_grip.core.talon = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if(typeof devils_grip.core.board_state !== 'undefined'){
} else {
devils_grip.core.board_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if(typeof devils_grip.core.action_state !== 'undefined'){
} else {
devils_grip.core.action_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
devils_grip.core.state_map = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$action_DASH_state,devils_grip.core.action_state,cljs.core.cst$kw$stock,devils_grip.core.stock,cljs.core.cst$kw$talon,devils_grip.core.talon,cljs.core.cst$kw$board_DASH_state,devils_grip.core.board_state], null);
devils_grip.core.page = (function devils_grip$core$page(ratom){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"title"], null),"Devil's Grip Solitare"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"board"], null),devils_grip.board.board((function (){
return devils_grip.actions.engine.advance_BANG_(devils_grip.core.state_map);
}),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devils_grip.actions.engine.selection_click_BANG_,devils_grip.core.action_state),devils_grip.core.board_state)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"help",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$font_DASH_style,"italic",cljs.core.cst$kw$color,"blue"], null)], null),devils_grip.help.help(devils_grip.core.action_state)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"error",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$font_DASH_style,"italic",cljs.core.cst$kw$color,"red"], null)], null),devils_grip.help.error(devils_grip.core.action_state)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,devils_grip.board.stock(devils_grip.core.stock)," ",devils_grip.board.talon(devils_grip.core.talon)," ",devils_grip.board.score(devils_grip.core.stock,devils_grip.core.talon)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"actions"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (_){
devils_grip.actions.engine.action_click_BANG_(devils_grip.core.action_state,cljs.core.cst$kw$draw);

return devils_grip.actions.engine.advance_BANG_(devils_grip.core.state_map);
})], null),"Draw"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (_){
devils_grip.actions.engine.action_click_BANG_(devils_grip.core.action_state,cljs.core.cst$kw$from_DASH_talon);

return devils_grip.actions.engine.advance_BANG_(devils_grip.core.state_map);
})], null),"Place from talon"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (_){
devils_grip.actions.engine.action_click_BANG_(devils_grip.core.action_state,cljs.core.cst$kw$fill_DASH_hole);

return devils_grip.actions.engine.advance_BANG_(devils_grip.core.state_map);
})], null),"Fill empty cells"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (_){
devils_grip.actions.engine.action_click_BANG_(devils_grip.core.action_state,cljs.core.cst$kw$swap_DASH_cells);

return devils_grip.actions.engine.advance_BANG_(devils_grip.core.state_map);
})], null),"Swap cells"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (_){
devils_grip.actions.engine.action_click_BANG_(devils_grip.core.action_state,cljs.core.cst$kw$merge_DASH_cells);

return devils_grip.actions.engine.advance_BANG_(devils_grip.core.state_map);
})], null),"Merge cells"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (_){
devils_grip.actions.engine.action_click_BANG_(devils_grip.core.action_state,cljs.core.cst$kw$abort);

return devils_grip.actions.engine.advance_BANG_(devils_grip.core.state_map);
})], null),"Abort action"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (_){
devils_grip.actions.engine.action_click_BANG_(devils_grip.core.action_state,cljs.core.cst$kw$start);

return devils_grip.actions.engine.advance_BANG_(devils_grip.core.state_map);
})], null),"New game"], null)], null)], null)], null)], null);
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
