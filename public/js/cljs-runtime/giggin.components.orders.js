goog.provide('giggin.components.orders');
goog.require('cljs.core');
goog.require('giggin.state');
goog.require('giggin.helpers');
goog.require('giggin.components.checkout_modal');
giggin.components.orders.total = (function giggin$components$orders$total(){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__26609){
var vec__26610 = p__26609;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26610,(0),null);
var quant = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26610,(1),null);
return (quant * cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(giggin.state.gigs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"price","price",22129180)], null)));
}),cljs.core.deref(giggin.state.orders)));
});
giggin.components.orders.orders = (function giggin$components$orders$orders(){
var remove_from_order = (function (p1__26613_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(giggin.state.orders,cljs.core.dissoc,p1__26613_SHARP_);
});
var remove_all_orders = ((function (remove_from_order){
return (function (){
return cljs.core.reset_BANG_(giggin.state.orders,cljs.core.PersistentArrayMap.EMPTY);
});})(remove_from_order))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aside","aside",1414397537),((cljs.core.empty_QMARK_(cljs.core.deref(giggin.state.orders)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.empty","div.empty",47401225),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.title","div.title",-1929547732),"You don't have any orders"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.subtitle","div.subtitle",-1871234920),"Click on a + to add an order"], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.order","div.order",-190189494),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.body","div.body",-96313067),(function (){var iter__4523__auto__ = ((function (remove_from_order,remove_all_orders){
return (function giggin$components$orders$orders_$_iter__26614(s__26615){
return (new cljs.core.LazySeq(null,((function (remove_from_order,remove_all_orders){
return (function (){
var s__26615__$1 = s__26615;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__26615__$1);
if(temp__5720__auto__){
var s__26615__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26615__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__26615__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__26617 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__26616 = (0);
while(true){
if((i__26616 < size__4522__auto__)){
var vec__26621 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__26616);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26621,(0),null);
var quant = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26621,(1),null);
cljs.core.chunk_append(b__26617,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.img","div.img",2113685181),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(giggin.state.gigs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"img","img",1442687358)], null)),new cljs.core.Keyword(null,"alt","alt",-3214426),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(giggin.state.gigs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"title","title",636505583)], null))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.title","p.title",-1265013094),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(giggin.state.gigs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"title","title",636505583)], null)))," \u00D7 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(quant)].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.action","div.action",-2064981372),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.price","div.price",1541719866),giggin.helpers.format_price((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(giggin.state.gigs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"price","price",22129180)], null)) * quant))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn--link.tooltip","button.btn.btn--link.tooltip",-1501154667),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-tooltip","data-tooltip",121719926),"Remove",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__26616,vec__26621,id,quant,c__4521__auto__,size__4522__auto__,b__26617,s__26615__$2,temp__5720__auto__,remove_from_order,remove_all_orders){
return (function (){
return remove_from_order(id);
});})(i__26616,vec__26621,id,quant,c__4521__auto__,size__4522__auto__,b__26617,s__26615__$2,temp__5720__auto__,remove_from_order,remove_all_orders))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon.icon--cross","i.icon.icon--cross",-1116124260)], null)], null)], null)], null));

var G__26634 = (i__26616 + (1));
i__26616 = G__26634;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26617),giggin$components$orders$orders_$_iter__26614(cljs.core.chunk_rest(s__26615__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26617),null);
}
} else {
var vec__26624 = cljs.core.first(s__26615__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26624,(0),null);
var quant = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26624,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.img","div.img",2113685181),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(giggin.state.gigs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"img","img",1442687358)], null)),new cljs.core.Keyword(null,"alt","alt",-3214426),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(giggin.state.gigs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"title","title",636505583)], null))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.title","p.title",-1265013094),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(giggin.state.gigs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"title","title",636505583)], null)))," \u00D7 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(quant)].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.action","div.action",-2064981372),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.price","div.price",1541719866),giggin.helpers.format_price((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(giggin.state.gigs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"price","price",22129180)], null)) * quant))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn--link.tooltip","button.btn.btn--link.tooltip",-1501154667),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-tooltip","data-tooltip",121719926),"Remove",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__26624,id,quant,s__26615__$2,temp__5720__auto__,remove_from_order,remove_all_orders){
return (function (){
return remove_from_order(id);
});})(vec__26624,id,quant,s__26615__$2,temp__5720__auto__,remove_from_order,remove_all_orders))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon.icon--cross","i.icon.icon--cross",-1116124260)], null)], null)], null)], null),giggin$components$orders$orders_$_iter__26614(cljs.core.rest(s__26615__$2)));
}
} else {
return null;
}
break;
}
});})(remove_from_order,remove_all_orders))
,null,null));
});})(remove_from_order,remove_all_orders))
;
return iter__4523__auto__(cljs.core.deref(giggin.state.orders));
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.total","div.total",1164460301),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),"Total"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.action","div.action",-2064981372),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.price","div.price",1541719866),giggin.helpers.format_price(giggin.components.orders.total())], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn--link.tooltip","button.btn.btn--link.tooltip",-1501154667),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-tooltip","data-tooltip",121719926),"Remove all",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (remove_from_order,remove_all_orders){
return (function (){
return remove_all_orders();
});})(remove_from_order,remove_all_orders))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon.icon--delete","i.icon.icon--delete",1739225438)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [giggin.components.checkout_modal.checkout_modal], null)], null)], null))], null);
});

//# sourceMappingURL=giggin.components.orders.js.map
