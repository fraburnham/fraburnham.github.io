// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19660){
var map__19661 = p__19660;
var map__19661__$1 = cljs.core.__destructure_map.call(null,map__19661);
var m = map__19661__$1;
var n = cljs.core.get.call(null,map__19661__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__19661__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4212__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19662_19690 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19663_19691 = null;
var count__19664_19692 = (0);
var i__19665_19693 = (0);
while(true){
if((i__19665_19693 < count__19664_19692)){
var f_19694 = cljs.core._nth.call(null,chunk__19663_19691,i__19665_19693);
cljs.core.println.call(null,"  ",f_19694);


var G__19695 = seq__19662_19690;
var G__19696 = chunk__19663_19691;
var G__19697 = count__19664_19692;
var G__19698 = (i__19665_19693 + (1));
seq__19662_19690 = G__19695;
chunk__19663_19691 = G__19696;
count__19664_19692 = G__19697;
i__19665_19693 = G__19698;
continue;
} else {
var temp__5720__auto___19699 = cljs.core.seq.call(null,seq__19662_19690);
if(temp__5720__auto___19699){
var seq__19662_19700__$1 = temp__5720__auto___19699;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19662_19700__$1)){
var c__4638__auto___19701 = cljs.core.chunk_first.call(null,seq__19662_19700__$1);
var G__19702 = cljs.core.chunk_rest.call(null,seq__19662_19700__$1);
var G__19703 = c__4638__auto___19701;
var G__19704 = cljs.core.count.call(null,c__4638__auto___19701);
var G__19705 = (0);
seq__19662_19690 = G__19702;
chunk__19663_19691 = G__19703;
count__19664_19692 = G__19704;
i__19665_19693 = G__19705;
continue;
} else {
var f_19706 = cljs.core.first.call(null,seq__19662_19700__$1);
cljs.core.println.call(null,"  ",f_19706);


var G__19707 = cljs.core.next.call(null,seq__19662_19700__$1);
var G__19708 = null;
var G__19709 = (0);
var G__19710 = (0);
seq__19662_19690 = G__19707;
chunk__19663_19691 = G__19708;
count__19664_19692 = G__19709;
i__19665_19693 = G__19710;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19711 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4212__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_19711);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_19711)))?cljs.core.second.call(null,arglists_19711):arglists_19711));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19666_19712 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19667_19713 = null;
var count__19668_19714 = (0);
var i__19669_19715 = (0);
while(true){
if((i__19669_19715 < count__19668_19714)){
var vec__19678_19716 = cljs.core._nth.call(null,chunk__19667_19713,i__19669_19715);
var name_19717 = cljs.core.nth.call(null,vec__19678_19716,(0),null);
var map__19681_19718 = cljs.core.nth.call(null,vec__19678_19716,(1),null);
var map__19681_19719__$1 = cljs.core.__destructure_map.call(null,map__19681_19718);
var doc_19720 = cljs.core.get.call(null,map__19681_19719__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19721 = cljs.core.get.call(null,map__19681_19719__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_19717);

cljs.core.println.call(null," ",arglists_19721);

if(cljs.core.truth_(doc_19720)){
cljs.core.println.call(null," ",doc_19720);
} else {
}


var G__19722 = seq__19666_19712;
var G__19723 = chunk__19667_19713;
var G__19724 = count__19668_19714;
var G__19725 = (i__19669_19715 + (1));
seq__19666_19712 = G__19722;
chunk__19667_19713 = G__19723;
count__19668_19714 = G__19724;
i__19669_19715 = G__19725;
continue;
} else {
var temp__5720__auto___19726 = cljs.core.seq.call(null,seq__19666_19712);
if(temp__5720__auto___19726){
var seq__19666_19727__$1 = temp__5720__auto___19726;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19666_19727__$1)){
var c__4638__auto___19728 = cljs.core.chunk_first.call(null,seq__19666_19727__$1);
var G__19729 = cljs.core.chunk_rest.call(null,seq__19666_19727__$1);
var G__19730 = c__4638__auto___19728;
var G__19731 = cljs.core.count.call(null,c__4638__auto___19728);
var G__19732 = (0);
seq__19666_19712 = G__19729;
chunk__19667_19713 = G__19730;
count__19668_19714 = G__19731;
i__19669_19715 = G__19732;
continue;
} else {
var vec__19682_19733 = cljs.core.first.call(null,seq__19666_19727__$1);
var name_19734 = cljs.core.nth.call(null,vec__19682_19733,(0),null);
var map__19685_19735 = cljs.core.nth.call(null,vec__19682_19733,(1),null);
var map__19685_19736__$1 = cljs.core.__destructure_map.call(null,map__19685_19735);
var doc_19737 = cljs.core.get.call(null,map__19685_19736__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19738 = cljs.core.get.call(null,map__19685_19736__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_19734);

cljs.core.println.call(null," ",arglists_19738);

if(cljs.core.truth_(doc_19737)){
cljs.core.println.call(null," ",doc_19737);
} else {
}


var G__19739 = cljs.core.next.call(null,seq__19666_19727__$1);
var G__19740 = null;
var G__19741 = (0);
var G__19742 = (0);
seq__19666_19712 = G__19739;
chunk__19667_19713 = G__19740;
count__19668_19714 = G__19741;
i__19669_19715 = G__19742;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__19686 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19687 = null;
var count__19688 = (0);
var i__19689 = (0);
while(true){
if((i__19689 < count__19688)){
var role = cljs.core._nth.call(null,chunk__19687,i__19689);
var temp__5720__auto___19743__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___19743__$1)){
var spec_19744 = temp__5720__auto___19743__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_19744));
} else {
}


var G__19745 = seq__19686;
var G__19746 = chunk__19687;
var G__19747 = count__19688;
var G__19748 = (i__19689 + (1));
seq__19686 = G__19745;
chunk__19687 = G__19746;
count__19688 = G__19747;
i__19689 = G__19748;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__19686);
if(temp__5720__auto____$1){
var seq__19686__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19686__$1)){
var c__4638__auto__ = cljs.core.chunk_first.call(null,seq__19686__$1);
var G__19749 = cljs.core.chunk_rest.call(null,seq__19686__$1);
var G__19750 = c__4638__auto__;
var G__19751 = cljs.core.count.call(null,c__4638__auto__);
var G__19752 = (0);
seq__19686 = G__19749;
chunk__19687 = G__19750;
count__19688 = G__19751;
i__19689 = G__19752;
continue;
} else {
var role = cljs.core.first.call(null,seq__19686__$1);
var temp__5720__auto___19753__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___19753__$2)){
var spec_19754 = temp__5720__auto___19753__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_19754));
} else {
}


var G__19755 = cljs.core.next.call(null,seq__19686__$1);
var G__19756 = null;
var G__19757 = (0);
var G__19758 = (0);
seq__19686 = G__19755;
chunk__19687 = G__19756;
count__19688 = G__19757;
i__19689 = G__19758;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__19759 = cljs.core.conj.call(null,via,t);
var G__19760 = cljs.core.ex_cause.call(null,t);
via = G__19759;
t = G__19760;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__19763 = datafied_throwable;
var map__19763__$1 = cljs.core.__destructure_map.call(null,map__19763);
var via = cljs.core.get.call(null,map__19763__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__19763__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__19763__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19764 = cljs.core.last.call(null,via);
var map__19764__$1 = cljs.core.__destructure_map.call(null,map__19764);
var type = cljs.core.get.call(null,map__19764__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__19764__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__19764__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19765 = data;
var map__19765__$1 = cljs.core.__destructure_map.call(null,map__19765);
var problems = cljs.core.get.call(null,map__19765__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__19765__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__19765__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19766 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__19766__$1 = cljs.core.__destructure_map.call(null,map__19766);
var top_data = map__19766__$1;
var source = cljs.core.get.call(null,map__19766__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__19767 = phase;
var G__19767__$1 = (((G__19767 instanceof cljs.core.Keyword))?G__19767.fqn:null);
switch (G__19767__$1) {
case "read-source":
var map__19768 = data;
var map__19768__$1 = cljs.core.__destructure_map.call(null,map__19768);
var line = cljs.core.get.call(null,map__19768__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__19768__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19769 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__19769__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__19769,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19769);
var G__19769__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__19769__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19769__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__19769__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19769__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19770 = top_data;
var G__19770__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__19770,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19770);
var G__19770__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__19770__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19770__$1);
var G__19770__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__19770__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19770__$2);
var G__19770__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__19770__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19770__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__19770__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19770__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19771 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__19771,(0),null);
var method = cljs.core.nth.call(null,vec__19771,(1),null);
var file = cljs.core.nth.call(null,vec__19771,(2),null);
var line = cljs.core.nth.call(null,vec__19771,(3),null);
var G__19774 = top_data;
var G__19774__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__19774,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19774);
var G__19774__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__19774__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19774__$1);
var G__19774__$3 = (cljs.core.truth_((function (){var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
})())?cljs.core.assoc.call(null,G__19774__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19774__$2);
var G__19774__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__19774__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19774__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__19774__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19774__$4;
}

break;
case "execution":
var vec__19775 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__19775,(0),null);
var method = cljs.core.nth.call(null,vec__19775,(1),null);
var file = cljs.core.nth.call(null,vec__19775,(2),null);
var line = cljs.core.nth.call(null,vec__19775,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__19762_SHARP_){
var or__4212__auto__ = (p1__19762_SHARP_ == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__19762_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4212__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return line;
}
})();
var G__19778 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19778__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__19778,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19778);
var G__19778__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__19778__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19778__$1);
var G__19778__$3 = (cljs.core.truth_((function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
}
})())?cljs.core.assoc.call(null,G__19778__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19778__$2);
var G__19778__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__19778__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19778__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__19778__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19778__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19767__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19782){
var map__19783 = p__19782;
var map__19783__$1 = cljs.core.__destructure_map.call(null,map__19783);
var triage_data = map__19783__$1;
var phase = cljs.core.get.call(null,map__19783__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__19783__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__19783__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__19783__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__19783__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__19783__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__19783__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__19783__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = source;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = line;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4212__auto__ = class$;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__19784 = phase;
var G__19784__$1 = (((G__19784 instanceof cljs.core.Keyword))?G__19784.fqn:null);
switch (G__19784__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19785_19794 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19786_19795 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19787_19796 = true;
var _STAR_print_fn_STAR__temp_val__19788_19797 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19787_19796);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19788_19797);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__19780_SHARP_){
return cljs.core.dissoc.call(null,p1__19780_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19786_19795);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19785_19794);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19789_19798 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19790_19799 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19791_19800 = true;
var _STAR_print_fn_STAR__temp_val__19792_19801 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19791_19800);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19792_19801);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__19781_SHARP_){
return cljs.core.dissoc.call(null,p1__19781_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19790_19799);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19789_19798);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19784__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
