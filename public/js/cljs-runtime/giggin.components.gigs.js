goog.provide('giggin.components.gigs');
goog.require('cljs.core');
goog.require('giggin.state');
goog.require('giggin.helpers');
goog.require('giggin.components.gig_editor');
goog.require('reagent.core');
goog.require('clojure.string');
var module$node_modules$$material_ui$icons$index=shadow.js.require("module$node_modules$$material_ui$icons$index", {});
var module$node_modules$$material_ui$core$index=shadow.js.require("module$node_modules$$material_ui$core$index", {});
goog.require('cljs_time.core');
giggin.components.gigs.button = reagent.core.adapt_react_class(module$node_modules$$material_ui$core$index.Button);
giggin.components.gigs.fab = reagent.core.adapt_react_class(module$node_modules$$material_ui$core$index.Fab);
giggin.components.gigs.icon = reagent.core.adapt_react_class(module$node_modules$$material_ui$core$index.Icon);
giggin.components.gigs.gigs = (function giggin$components$gigs$gigs(){
var modal = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),false], null));
var initial_values = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"desc","desc",2093485764),"",new cljs.core.Keyword(null,"start-date","start-date",295168731),"",new cljs.core.Keyword(null,"end-date","end-date",-208259642),"",new cljs.core.Keyword(null,"status","status",-1997798413),"scheduled",new cljs.core.Keyword(null,"timezone","timezone",1831928099),"GMT+0"], null);
var values = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(initial_values);
var toggle_modal = ((function (modal,initial_values,values){
return (function (p__26016){
var map__26017 = p__26016;
var map__26017__$1 = (((((!((map__26017 == null))))?(((((map__26017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26017):map__26017);
var active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26017__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var gig = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26017__$1,new cljs.core.Keyword(null,"gig","gig",-702014211));
console.log(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(gig),", ",new cljs.core.Keyword(null,"start-date","start-date",295168731).cljs$core$IFn$_invoke$arity$1(gig),",time: ",cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7((1986),(10),(14),(4),(3),(27),(456)));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(modal,cljs.core.assoc,new cljs.core.Keyword(null,"active","active",1895962068),active);

return cljs.core.reset_BANG_(values,gig);
});})(modal,initial_values,values))
;
var upsert_gig = ((function (modal,initial_values,values,toggle_modal){
return (function (p__26019){
var map__26020 = p__26019;
var map__26020__$1 = (((((!((map__26020 == null))))?(((((map__26020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26020):map__26020);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26020__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var desc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26020__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
var start_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26020__$1,new cljs.core.Keyword(null,"start-date","start-date",295168731));
var end_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26020__$1,new cljs.core.Keyword(null,"end-date","end-date",-208259642));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26020__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var timezone = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26020__$1,new cljs.core.Keyword(null,"timezone","timezone",1831928099));
var newid_26030 = (function (){var or__4131__auto__ = id;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ["apts-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())].join('');
}
})();
console.log("upsert id: ",id,", newid:",newid_26030);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(giggin.state.apts,cljs.core.assoc,newid_26030,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),newid_26030,new cljs.core.Keyword(null,"desc","desc",2093485764),clojure.string.trim(desc),new cljs.core.Keyword(null,"start-date","start-date",295168731),start_date,new cljs.core.Keyword(null,"end-date","end-date",-208259642),end_date,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"timezone","timezone",1831928099),timezone], null));

return toggle_modal(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),false,new cljs.core.Keyword(null,"gig","gig",-702014211),initial_values], null));
});})(modal,initial_values,values,toggle_modal))
;
return ((function (modal,initial_values,values,toggle_modal,upsert_gig){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [giggin.components.gigs.icon,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"Star",new cljs.core.Keyword(null,"color","color",1011675173),"primary"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [giggin.components.gigs.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),"contained",new cljs.core.Keyword(null,"color","color",1011675173),"primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (modal,initial_values,values,toggle_modal,upsert_gig){
return (function (){
return toggle_modal(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),true,new cljs.core.Keyword(null,"gig","gig",-702014211),initial_values], null));
});})(modal,initial_values,values,toggle_modal,upsert_gig))
], null),"Add Appointment"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [giggin.components.gig_editor.gig_editor,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"modal","modal",-1031880850),modal,new cljs.core.Keyword(null,"values","values",372645556),values,new cljs.core.Keyword(null,"upsert-gig","upsert-gig",-872060012),upsert_gig,new cljs.core.Keyword(null,"toggle-modal","toggle-modal",-437580),toggle_modal,new cljs.core.Keyword(null,"initial-values","initial-values",1392120293),initial_values], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.tbl","table.tbl",-1566051002),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"id"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"desc"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"start date"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"end date"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"status"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"timezone"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),""], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__4523__auto__ = ((function (modal,initial_values,values,toggle_modal,upsert_gig){
return (function giggin$components$gigs$gigs_$_iter__26022(s__26023){
return (new cljs.core.LazySeq(null,((function (modal,initial_values,values,toggle_modal,upsert_gig){
return (function (){
var s__26023__$1 = s__26023;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__26023__$1);
if(temp__5720__auto__){
var s__26023__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26023__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__26023__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__26025 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__26024 = (0);
while(true){
if((i__26024 < size__4522__auto__)){
var map__26026 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__26024);
var map__26026__$1 = (((((!((map__26026 == null))))?(((((map__26026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26026):map__26026);
var gig = map__26026__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26026__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var desc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26026__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
var start_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26026__$1,new cljs.core.Keyword(null,"start-date","start-date",295168731));
var end_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26026__$1,new cljs.core.Keyword(null,"end-date","end-date",-208259642));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26026__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var timezone = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26026__$1,new cljs.core.Keyword(null,"timezone","timezone",1831928099));
cljs.core.chunk_append(b__26025,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__26024,map__26026,map__26026__$1,gig,id,desc,start_date,end_date,status,timezone,c__4521__auto__,size__4522__auto__,b__26025,s__26023__$2,temp__5720__auto__,modal,initial_values,values,toggle_modal,upsert_gig){
return (function (){
return toggle_modal(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),true,new cljs.core.Keyword(null,"gig","gig",-702014211),gig], null));
});})(i__26024,map__26026,map__26026__$1,gig,id,desc,start_date,end_date,status,timezone,c__4521__auto__,size__4522__auto__,b__26025,s__26023__$2,temp__5720__auto__,modal,initial_values,values,toggle_modal,upsert_gig))
], null),desc], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),start_date], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),end_date], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),status], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),timezone], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [giggin.components.gigs.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"secondary",new cljs.core.Keyword(null,"variant","variant",-424354234),"contained",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__26024,map__26026,map__26026__$1,gig,id,desc,start_date,end_date,status,timezone,c__4521__auto__,size__4522__auto__,b__26025,s__26023__$2,temp__5720__auto__,modal,initial_values,values,toggle_modal,upsert_gig){
return (function (){
console.log("delete id:",id);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(giggin.state.apts,cljs.core.dissoc,id);
});})(i__26024,map__26026,map__26026__$1,gig,id,desc,start_date,end_date,status,timezone,c__4521__auto__,size__4522__auto__,b__26025,s__26023__$2,temp__5720__auto__,modal,initial_values,values,toggle_modal,upsert_gig))
], null),"Delete"], null)], null)], null));

var G__26031 = (i__26024 + (1));
i__26024 = G__26031;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26025),giggin$components$gigs$gigs_$_iter__26022(cljs.core.chunk_rest(s__26023__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26025),null);
}
} else {
var map__26028 = cljs.core.first(s__26023__$2);
var map__26028__$1 = (((((!((map__26028 == null))))?(((((map__26028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26028):map__26028);
var gig = map__26028__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26028__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var desc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26028__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
var start_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26028__$1,new cljs.core.Keyword(null,"start-date","start-date",295168731));
var end_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26028__$1,new cljs.core.Keyword(null,"end-date","end-date",-208259642));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26028__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var timezone = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26028__$1,new cljs.core.Keyword(null,"timezone","timezone",1831928099));
return cljs.core.cons(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__26028,map__26028__$1,gig,id,desc,start_date,end_date,status,timezone,s__26023__$2,temp__5720__auto__,modal,initial_values,values,toggle_modal,upsert_gig){
return (function (){
return toggle_modal(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),true,new cljs.core.Keyword(null,"gig","gig",-702014211),gig], null));
});})(map__26028,map__26028__$1,gig,id,desc,start_date,end_date,status,timezone,s__26023__$2,temp__5720__auto__,modal,initial_values,values,toggle_modal,upsert_gig))
], null),desc], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),start_date], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),end_date], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),status], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),timezone], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [giggin.components.gigs.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"secondary",new cljs.core.Keyword(null,"variant","variant",-424354234),"contained",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__26028,map__26028__$1,gig,id,desc,start_date,end_date,status,timezone,s__26023__$2,temp__5720__auto__,modal,initial_values,values,toggle_modal,upsert_gig){
return (function (){
console.log("delete id:",id);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(giggin.state.apts,cljs.core.dissoc,id);
});})(map__26028,map__26028__$1,gig,id,desc,start_date,end_date,status,timezone,s__26023__$2,temp__5720__auto__,modal,initial_values,values,toggle_modal,upsert_gig))
], null),"Delete"], null)], null)], null),giggin$components$gigs$gigs_$_iter__26022(cljs.core.rest(s__26023__$2)));
}
} else {
return null;
}
break;
}
});})(modal,initial_values,values,toggle_modal,upsert_gig))
,null,null));
});})(modal,initial_values,values,toggle_modal,upsert_gig))
;
return iter__4523__auto__(cljs.core.vals(cljs.core.deref(giggin.state.apts)));
})()], null)], null)], null)], null);
});
;})(modal,initial_values,values,toggle_modal,upsert_gig))
});

//# sourceMappingURL=giggin.components.gigs.js.map
