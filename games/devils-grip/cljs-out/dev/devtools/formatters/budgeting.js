// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('devtools.formatters.budgeting');
goog.require('cljs.core');
goog.require('devtools.formatters.templating');
goog.require('devtools.formatters.state');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.markup');
devtools.formatters.budgeting.header_expander_depth_cost = (2);
devtools.formatters.budgeting.over_budget_values = (((typeof WeakSet !== 'undefined'))?(new WeakSet()):cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY));
devtools.formatters.budgeting.add_over_budget_value_BANG_ = (function devtools$formatters$budgeting$add_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.conj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__11334__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__11334__auto__["add"]).call(o__11334__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.disj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__11334__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__11334__auto__["delete"]).call(o__11334__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__11334__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__11334__auto__["has"]).call(o__11334__auto__,value);
}
});
devtools.formatters.budgeting.object_reference_QMARK_ = (function devtools$formatters$budgeting$object_reference_QMARK_(json_ml){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,json_ml),"object");
});
devtools.formatters.budgeting.determine_depth = (function devtools$formatters$budgeting$determine_depth(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
return (cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,devtools.formatters.budgeting.determine_depth,json_ml)) + (1));
} else {
return (0);
}
});
devtools.formatters.budgeting.has_any_object_reference_QMARK_ = (function devtools$formatters$budgeting$has_any_object_reference_QMARK_(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
if(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml)){
return true;
} else {
return cljs.core.some.call(null,devtools.formatters.budgeting.has_any_object_reference_QMARK_,json_ml);
}
} else {
return null;
}
});
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_ = (function devtools$formatters$budgeting$transfer_remaining_depth_budget_BANG_(object_reference,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

var data = cljs.core.second.call(null,object_reference);
var _ = ((cljs.core.object_QMARK_.call(null,data))?null:(function(){throw (new Error("Assert failed: (object? data)"))})());
var config = (data["config"]);
var G__12816 = data;
var target__11339__auto__ = G__12816;
if(cljs.core.truth_(target__11339__auto__)){
} else {
throw (new Error(["Assert failed: ",["unable to locate object path ",null," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12816)].join(''),"\n","target__11339__auto__"].join('')));
}

(target__11339__auto__["config"] = devtools.formatters.state.set_depth_budget.call(null,config,depth_budget));

return G__12816;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.array_QMARK_.call(null,json_ml)){
var new_depth_budget_12821 = (depth_budget - (1));
if(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml)){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_.call(null,json_ml,new_depth_budget_12821);
} else {
var seq__12817_12822 = cljs.core.seq.call(null,json_ml);
var chunk__12818_12823 = null;
var count__12819_12824 = (0);
var i__12820_12825 = (0);
while(true){
if((i__12820_12825 < count__12819_12824)){
var item_12826 = cljs.core._nth.call(null,chunk__12818_12823,i__12820_12825);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_12826,new_depth_budget_12821);


var G__12827 = seq__12817_12822;
var G__12828 = chunk__12818_12823;
var G__12829 = count__12819_12824;
var G__12830 = (i__12820_12825 + (1));
seq__12817_12822 = G__12827;
chunk__12818_12823 = G__12828;
count__12819_12824 = G__12829;
i__12820_12825 = G__12830;
continue;
} else {
var temp__5720__auto___12831 = cljs.core.seq.call(null,seq__12817_12822);
if(temp__5720__auto___12831){
var seq__12817_12832__$1 = temp__5720__auto___12831;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12817_12832__$1)){
var c__4638__auto___12833 = cljs.core.chunk_first.call(null,seq__12817_12832__$1);
var G__12834 = cljs.core.chunk_rest.call(null,seq__12817_12832__$1);
var G__12835 = c__4638__auto___12833;
var G__12836 = cljs.core.count.call(null,c__4638__auto___12833);
var G__12837 = (0);
seq__12817_12822 = G__12834;
chunk__12818_12823 = G__12835;
count__12819_12824 = G__12836;
i__12820_12825 = G__12837;
continue;
} else {
var item_12838 = cljs.core.first.call(null,seq__12817_12832__$1);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_12838,new_depth_budget_12821);


var G__12839 = cljs.core.next.call(null,seq__12817_12832__$1);
var G__12840 = null;
var G__12841 = (0);
var G__12842 = (0);
seq__12817_12822 = G__12839;
chunk__12818_12823 = G__12840;
count__12819_12824 = G__12841;
i__12820_12825 = G__12842;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return json_ml;
});
devtools.formatters.budgeting.was_over_budget_QMARK__BANG_ = (function devtools$formatters$budgeting$was_over_budget_QMARK__BANG_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.has_over_budget_value_QMARK_.call(null,value))){
devtools.formatters.budgeting.delete_over_budget_value_BANG_.call(null,value);

return true;
} else {
return null;
}
});
devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_ = (function devtools$formatters$budgeting$alter_json_ml_to_fit_in_remaining_budget_BANG_(value,json_ml){
var temp__5718__auto__ = devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807));
if(cljs.core.truth_(temp__5718__auto__)){
var initial_hierarchy_depth_budget = temp__5718__auto__;
var remaining_depth_budget = (function (){var or__4212__auto__ = devtools.formatters.state.get_depth_budget.call(null);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (initial_hierarchy_depth_budget - (1));
}
})();
var depth = devtools.formatters.budgeting.determine_depth.call(null,json_ml);
var final_QMARK_ = cljs.core.not.call(null,devtools.formatters.budgeting.has_any_object_reference_QMARK_.call(null,json_ml));
var needed_depth = ((final_QMARK_)?depth:(depth + devtools.formatters.budgeting.header_expander_depth_cost));
if((remaining_depth_budget >= needed_depth)){
return devtools.formatters.budgeting.distribute_budget_BANG_.call(null,json_ml,remaining_depth_budget);
} else {
var expander_ml = devtools.formatters.templating.render_markup.call(null,devtools.formatters.markup._LT_header_expander_GT_.call(null,value));
devtools.formatters.budgeting.add_over_budget_value_BANG_.call(null,value);

return expander_ml;
}
} else {
return json_ml;
}
});

//# sourceMappingURL=budgeting.js.map
