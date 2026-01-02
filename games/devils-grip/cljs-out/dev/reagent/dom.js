// Compiled by ClojureScript 1.10.879 {:static-fns true, :optimize-constants true, :optimizations :advanced}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.input');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__10996 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__10997 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__10997);

try{var G__10998 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__10999 = container;
var G__11000 = (function (){
var _STAR_always_update_STAR__orig_val__11001 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__11002 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__11002);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__11001);
}});
return reagent.dom.global$module$react_dom.render(G__10998,G__10999,G__11000);
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__10996);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__11004 = arguments.length;
switch (G__11004) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__11005 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,cljs.core.cst$kw$callback.cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11005,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11005,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__11009_11025 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__11010_11026 = null;
var count__11011_11027 = (0);
var i__11012_11028 = (0);
while(true){
if((i__11012_11028 < count__11011_11027)){
var vec__11019_11029 = chunk__11010_11026.cljs$core$IIndexed$_nth$arity$2(null,i__11012_11028);
var container_11030 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11019_11029,(0),null);
var comp_11031 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11019_11029,(1),null);
reagent.dom.re_render_component(comp_11031,container_11030);


var G__11032 = seq__11009_11025;
var G__11033 = chunk__11010_11026;
var G__11034 = count__11011_11027;
var G__11035 = (i__11012_11028 + (1));
seq__11009_11025 = G__11032;
chunk__11010_11026 = G__11033;
count__11011_11027 = G__11034;
i__11012_11028 = G__11035;
continue;
} else {
var temp__5720__auto___11036 = cljs.core.seq(seq__11009_11025);
if(temp__5720__auto___11036){
var seq__11009_11037__$1 = temp__5720__auto___11036;
if(cljs.core.chunked_seq_QMARK_(seq__11009_11037__$1)){
var c__4638__auto___11038 = cljs.core.chunk_first(seq__11009_11037__$1);
var G__11039 = cljs.core.chunk_rest(seq__11009_11037__$1);
var G__11040 = c__4638__auto___11038;
var G__11041 = cljs.core.count(c__4638__auto___11038);
var G__11042 = (0);
seq__11009_11025 = G__11039;
chunk__11010_11026 = G__11040;
count__11011_11027 = G__11041;
i__11012_11028 = G__11042;
continue;
} else {
var vec__11022_11043 = cljs.core.first(seq__11009_11037__$1);
var container_11044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11022_11043,(0),null);
var comp_11045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11022_11043,(1),null);
reagent.dom.re_render_component(comp_11045,container_11044);


var G__11046 = cljs.core.next(seq__11009_11037__$1);
var G__11047 = null;
var G__11048 = (0);
var G__11049 = (0);
seq__11009_11025 = G__11046;
chunk__11010_11026 = G__11047;
count__11011_11027 = G__11048;
i__11012_11028 = G__11049;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});
