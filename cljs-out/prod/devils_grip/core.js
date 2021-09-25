// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('devils_grip.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('devils_grip.actions.engine');
goog.require('devils_grip.components.action');
goog.require('devils_grip.components.board');
goog.require('devils_grip.components.help');
goog.require('devils_grip.rules');
if((typeof devils_grip !== 'undefined') && (typeof devils_grip.core !== 'undefined') && (typeof devils_grip.core.state_map !== 'undefined')){
} else {
devils_grip.core.state_map = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$action_DASH_state,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$stock,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null),cljs.core.cst$kw$talon,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),cljs.core.cst$kw$board_DASH_state,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)], null);
}
devils_grip.core.state_fns = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$advance_DASH_action_BANG_,(function (){
return devils_grip.actions.engine.advance_BANG_(devils_grip.core.state_map);
}),cljs.core.cst$kw$selection_DASH_click_BANG_,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devils_grip.actions.engine.selection_click_BANG_,devils_grip.core.state_map),cljs.core.cst$kw$drag_DASH_end_BANG_,(function (draggable_class,drop_target_class){
return (function (event){
(event.target.classList = draggable_class);

var seq__13623 = cljs.core.seq(document.getElementsByClassName(drop_target_class));
var chunk__13624 = null;
var count__13625 = (0);
var i__13626 = (0);
while(true){
if((i__13626 < count__13625)){
var element = chunk__13624.cljs$core$IIndexed$_nth$arity$2(null,i__13626);
(element.classList = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.core.class_names,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(element.classList)));


var G__13627 = seq__13623;
var G__13628 = chunk__13624;
var G__13629 = count__13625;
var G__13630 = (i__13626 + (1));
seq__13623 = G__13627;
chunk__13624 = G__13628;
count__13625 = G__13629;
i__13626 = G__13630;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__13623);
if(temp__5720__auto__){
var seq__13623__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13623__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__13623__$1);
var G__13631 = cljs.core.chunk_rest(seq__13623__$1);
var G__13632 = c__4638__auto__;
var G__13633 = cljs.core.count(c__4638__auto__);
var G__13634 = (0);
seq__13623 = G__13631;
chunk__13624 = G__13632;
count__13625 = G__13633;
i__13626 = G__13634;
continue;
} else {
var element = cljs.core.first(seq__13623__$1);
(element.classList = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.core.class_names,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(element.classList)));


var G__13635 = cljs.core.next(seq__13623__$1);
var G__13636 = null;
var G__13637 = (0);
var G__13638 = (0);
seq__13623 = G__13635;
chunk__13624 = G__13636;
count__13625 = G__13637;
i__13626 = G__13638;
continue;
}
} else {
return null;
}
}
break;
}
});
}),cljs.core.cst$kw$drag_DASH_start_BANG_,(function (drag_type,location){
return (function (event){
event.target.classList.add("dragging");

devils_grip.actions.engine.set_action_BANG_(devils_grip.core.state_map,cljs.core.cst$kw$drag);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$action_DASH_state.cljs$core$IFn$_invoke$arity$1(devils_grip.core.state_map),(function (p1__13622_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__13622_SHARP_,cljs.core.cst$kw$drag_DASH_type,drag_type);
}));

devils_grip.actions.engine.advance_BANG_(devils_grip.core.state_map);

return devils_grip.actions.engine.selection_click_BANG_(devils_grip.core.state_map,location);
});
}),cljs.core.cst$kw$drop_BANG_,(function (location){
return (function (event){
devils_grip.actions.engine.selection_click_BANG_(devils_grip.core.state_map,location);

return devils_grip.actions.engine.advance_BANG_(devils_grip.core.state_map);
});
})], null);
devils_grip.core.page = (function devils_grip$core$page(ratom){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"title"], null),"Devil's Grip Solitaire"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"board"], null),devils_grip.components.board.board(devils_grip.core.state_fns,devils_grip.core.state_map)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"actions"], null),devils_grip.components.action.button(devils_grip.core.state_map,cljs.core.cst$kw$abort,"Abort action"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),devils_grip.components.action.button(devils_grip.core.state_map,cljs.core.cst$kw$start,"New game")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"help",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$font_DASH_style,"italic",cljs.core.cst$kw$color,"blue"], null)], null),devils_grip.components.help.help(cljs.core.cst$kw$action_DASH_state.cljs$core$IFn$_invoke$arity$1(devils_grip.core.state_map))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"error",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$font_DASH_style,"italic",cljs.core.cst$kw$color,"red"], null)], null),devils_grip.components.help.error(cljs.core.cst$kw$action_DASH_state.cljs$core$IFn$_invoke$arity$1(devils_grip.core.state_map))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,"flex"], null)], null),devils_grip.components.board.stock(devils_grip.core.state_fns,devils_grip.core.state_map),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"1em"], null)], null)], null),devils_grip.components.board.talon(devils_grip.core.state_fns,devils_grip.core.state_map)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),devils_grip.components.board.score(devils_grip.core.state_map)], null)], null)], null)], null)], null);
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
