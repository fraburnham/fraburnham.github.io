// Compiled by ClojureScript 1.10.879 {:optimizations :none}
goog.provide('devils_grip.actions.helpers');
goog.require('cljs.core');
goog.require('devils_grip.engine');
goog.require('reagent.core');
devils_grip.actions.helpers.selection_click_BANG_ = (function devils_grip$actions$helpers$selection_click_BANG_(p__9161,selection){
var map__9162 = p__9161;
var map__9162__$1 = cljs.core.__destructure_map.call(null,map__9162);
var action_state = cljs.core.get.call(null,map__9162__$1,new cljs.core.Keyword(null,"action-state","action-state",-1575944631));
return cljs.core.swap_BANG_.call(null,action_state,(function (p1__9160_SHARP_){
return cljs.core.update.call(null,p1__9160_SHARP_,new cljs.core.Keyword(null,"selections","selections",-1277610233),cljs.core.conj,selection);
}));
});
devils_grip.actions.helpers.set_action_BANG_ = (function devils_grip$actions$helpers$set_action_BANG_(p__9164,action_type){
var map__9165 = p__9164;
var map__9165__$1 = cljs.core.__destructure_map.call(null,map__9165);
var action_state = cljs.core.get.call(null,map__9165__$1,new cljs.core.Keyword(null,"action-state","action-state",-1575944631));
return cljs.core.swap_BANG_.call(null,action_state,(function (p1__9163_SHARP_){
return cljs.core.assoc.call(null,p1__9163_SHARP_,new cljs.core.Keyword(null,"type","type",1174270348),action_type);
}));
});
devils_grip.actions.helpers.action_click_BANG_ = (function devils_grip$actions$helpers$action_click_BANG_(action_state,type){
cljs.core.swap_BANG_.call(null,action_state,(function (p1__9166_SHARP_){
return cljs.core.dissoc.call(null,p1__9166_SHARP_,new cljs.core.Keyword(null,"error","error",-978969032));
}));

return cljs.core.swap_BANG_.call(null,action_state,(function (p1__9167_SHARP_){
return cljs.core.assoc.call(null,p1__9167_SHARP_,new cljs.core.Keyword(null,"type","type",1174270348),type);
}));
});
devils_grip.actions.helpers.draw_BANG_ = (function devils_grip$actions$helpers$draw_BANG_(state_map){
return (function (_){
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"action-state","action-state",-1575944631).cljs$core$IFn$_invoke$arity$1(state_map),cljs.core.assoc,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"draw","draw",1358331674));

return devils_grip.engine.advance_BANG_.call(null,state_map);
});
});
devils_grip.actions.helpers.drag_end_BANG_ = (function devils_grip$actions$helpers$drag_end_BANG_(state_map){
return (function (draggable_class,drop_target_class){
return (function (event){
(event.target.classList = draggable_class);

var seq__9168 = cljs.core.seq.call(null,document.getElementsByClassName(drop_target_class));
var chunk__9169 = null;
var count__9170 = (0);
var i__9171 = (0);
while(true){
if((i__9171 < count__9170)){
var element = cljs.core._nth.call(null,chunk__9169,i__9171);
(element.classList = cljs.core.apply.call(null,reagent.core.class_names,cljs.core.drop_last.call(null,element.classList)));


var G__9172 = seq__9168;
var G__9173 = chunk__9169;
var G__9174 = count__9170;
var G__9175 = (i__9171 + (1));
seq__9168 = G__9172;
chunk__9169 = G__9173;
count__9170 = G__9174;
i__9171 = G__9175;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__9168);
if(temp__5720__auto__){
var seq__9168__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9168__$1)){
var c__4638__auto__ = cljs.core.chunk_first.call(null,seq__9168__$1);
var G__9176 = cljs.core.chunk_rest.call(null,seq__9168__$1);
var G__9177 = c__4638__auto__;
var G__9178 = cljs.core.count.call(null,c__4638__auto__);
var G__9179 = (0);
seq__9168 = G__9176;
chunk__9169 = G__9177;
count__9170 = G__9178;
i__9171 = G__9179;
continue;
} else {
var element = cljs.core.first.call(null,seq__9168__$1);
(element.classList = cljs.core.apply.call(null,reagent.core.class_names,cljs.core.drop_last.call(null,element.classList)));


var G__9180 = cljs.core.next.call(null,seq__9168__$1);
var G__9181 = null;
var G__9182 = (0);
var G__9183 = (0);
seq__9168 = G__9180;
chunk__9169 = G__9181;
count__9170 = G__9182;
i__9171 = G__9183;
continue;
}
} else {
return null;
}
}
break;
}
});
});
});
devils_grip.actions.helpers.drag_start_BANG_ = (function devils_grip$actions$helpers$drag_start_BANG_(state_map){
return (function (drag_type,location){
return (function (event){
event.target.classList.add("dragging");

devils_grip.actions.helpers.set_action_BANG_.call(null,state_map,new cljs.core.Keyword(null,"drag","drag",449951290));

cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"action-state","action-state",-1575944631).cljs$core$IFn$_invoke$arity$1(state_map),(function (p1__9184_SHARP_){
return cljs.core.assoc.call(null,p1__9184_SHARP_,new cljs.core.Keyword(null,"drag-type","drag-type",1652666979),drag_type);
}));

devils_grip.engine.advance_BANG_.call(null,state_map);

return devils_grip.actions.helpers.selection_click_BANG_.call(null,state_map,location);
});
});
});
devils_grip.actions.helpers.drop_BANG_ = (function devils_grip$actions$helpers$drop_BANG_(state_map){
return (function (location){
return (function (event){
devils_grip.actions.helpers.selection_click_BANG_.call(null,state_map,location);

return devils_grip.engine.advance_BANG_.call(null,state_map);
});
});
});
devils_grip.actions.helpers.double_click_BANG_ = (function devils_grip$actions$helpers$double_click_BANG_(p__9186){
var map__9187 = p__9186;
var map__9187__$1 = cljs.core.__destructure_map.call(null,map__9187);
var state_map = map__9187__$1;
var action_state = cljs.core.get.call(null,map__9187__$1,new cljs.core.Keyword(null,"action-state","action-state",-1575944631));
return (function (click_type,target_class,location){
return (function (event){
event.target.closest([".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(target_class)].join('')).classList.add("selected");

devils_grip.actions.helpers.set_action_BANG_.call(null,state_map,new cljs.core.Keyword(null,"drag","drag",449951290));

if(cljs.core.truth_(new cljs.core.Keyword(null,"drag-type","drag-type",1652666979).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"action-state","action-state",-1575944631).cljs$core$IFn$_invoke$arity$1(state_map))))){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"action-state","action-state",-1575944631).cljs$core$IFn$_invoke$arity$1(state_map),(function (p1__9185_SHARP_){
return cljs.core.assoc.call(null,p1__9185_SHARP_,new cljs.core.Keyword(null,"drag-type","drag-type",1652666979),click_type);
}));
}

devils_grip.engine.advance_BANG_.call(null,state_map);

devils_grip.actions.helpers.selection_click_BANG_.call(null,state_map,location);

devils_grip.engine.advance_BANG_.call(null,state_map);

if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,action_state))){
var elements = cljs.core.seq.call(null,document.getElementsByClassName("selected"));
var n__4695__auto__ = cljs.core.count.call(null,elements);
var i = (0);
while(true){
if((i < n__4695__auto__)){
var element_9188 = cljs.core.nth.call(null,elements,i);
element_9188.classList.remove("selected");

var G__9189 = (i + (1));
i = G__9189;
continue;
} else {
return null;
}
break;
}
} else {
return null;
}
});
});
});

//# sourceMappingURL=helpers.js.map
