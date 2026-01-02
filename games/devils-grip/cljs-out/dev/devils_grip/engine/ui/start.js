// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('devils_grip.engine.ui.start');
goog.require('cljs.core');
devils_grip.engine.ui.start.row_defaults = (function devils_grip$engine$ui$start$row_defaults(){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var seq__19769 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(7)], null));
var chunk__19770 = null;
var count__19771 = (0);
var i__19772 = (0);
while(true){
if((i__19772 < count__19771)){
var i = cljs.core._nth.call(null,chunk__19770,i__19772);
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cell"], null)], null)], null);


var G__19773 = seq__19769;
var G__19774 = chunk__19770;
var G__19775 = count__19771;
var G__19776 = (i__19772 + (1));
seq__19769 = G__19773;
chunk__19770 = G__19774;
count__19771 = G__19775;
i__19772 = G__19776;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__19769);
if(temp__5720__auto__){
var seq__19769__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19769__$1)){
var c__4638__auto__ = cljs.core.chunk_first.call(null,seq__19769__$1);
var G__19777 = cljs.core.chunk_rest.call(null,seq__19769__$1);
var G__19778 = c__4638__auto__;
var G__19779 = cljs.core.count.call(null,c__4638__auto__);
var G__19780 = (0);
seq__19769 = G__19777;
chunk__19770 = G__19778;
count__19771 = G__19779;
i__19772 = G__19780;
continue;
} else {
var i = cljs.core.first.call(null,seq__19769__$1);
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cell"], null)], null)], null);


var G__19781 = cljs.core.next.call(null,seq__19769__$1);
var G__19782 = null;
var G__19783 = (0);
var G__19784 = (0);
seq__19769 = G__19781;
chunk__19770 = G__19782;
count__19771 = G__19783;
i__19772 = G__19784;
continue;
}
} else {
return null;
}
}
break;
}
})());
});
devils_grip.engine.ui.start.board_defaults = (function devils_grip$engine$ui$start$board_defaults(){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var seq__19785 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null));
var chunk__19786 = null;
var count__19787 = (0);
var i__19788 = (0);
while(true){
if((i__19788 < count__19787)){
var i = cljs.core._nth.call(null,chunk__19786,i__19788);
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,devils_grip.engine.ui.start.row_defaults.call(null)], null);


var G__19789 = seq__19785;
var G__19790 = chunk__19786;
var G__19791 = count__19787;
var G__19792 = (i__19788 + (1));
seq__19785 = G__19789;
chunk__19786 = G__19790;
count__19787 = G__19791;
i__19788 = G__19792;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__19785);
if(temp__5720__auto__){
var seq__19785__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19785__$1)){
var c__4638__auto__ = cljs.core.chunk_first.call(null,seq__19785__$1);
var G__19793 = cljs.core.chunk_rest.call(null,seq__19785__$1);
var G__19794 = c__4638__auto__;
var G__19795 = cljs.core.count.call(null,c__4638__auto__);
var G__19796 = (0);
seq__19785 = G__19793;
chunk__19786 = G__19794;
count__19787 = G__19795;
i__19788 = G__19796;
continue;
} else {
var i = cljs.core.first.call(null,seq__19785__$1);
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,devils_grip.engine.ui.start.row_defaults.call(null)], null);


var G__19797 = cljs.core.next.call(null,seq__19785__$1);
var G__19798 = null;
var G__19799 = (0);
var G__19800 = (0);
seq__19785 = G__19797;
chunk__19786 = G__19798;
count__19787 = G__19799;
i__19788 = G__19800;
continue;
}
} else {
return null;
}
}
break;
}
})());
});
devils_grip.engine.ui.start.advance = (function devils_grip$engine$ui$start$advance(state_map){
cljs.core.println.call(null,"Setting default ui state!");

return cljs.core.assoc_in.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"board","board",-1907017633)], null),devils_grip.engine.ui.start.board_defaults.call(null),cljs.core.assoc_in.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"stock","stock",-877288674),new cljs.core.Keyword(null,"classes","classes",2037804510)], null),cljs.core.PersistentVector.EMPTY,cljs.core.assoc_in.call(null,state_map,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"talon","talon",-969549371),new cljs.core.Keyword(null,"classes","classes",2037804510)], null),cljs.core.PersistentVector.EMPTY)));
});

//# sourceMappingURL=start.js.map
