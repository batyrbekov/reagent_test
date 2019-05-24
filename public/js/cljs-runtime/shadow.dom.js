goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__34935 = coll;
var G__34936 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__34935,G__34936) : shadow.dom.lazy_native_coll_seq.call(null,G__34935,G__34936));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4131__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__34989 = arguments.length;
switch (G__34989) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__34995 = arguments.length;
switch (G__34995) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__34998 = arguments.length;
switch (G__34998) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__35004 = arguments.length;
switch (G__35004) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__35023 = arguments.length;
switch (G__35023) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__35024 = document;
var G__35025 = shadow.dom.dom_node(el);
return goog.dom.contains(G__35024,G__35025);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__35026 = shadow.dom.dom_node(parent);
var G__35027 = shadow.dom.dom_node(el);
return goog.dom.contains(G__35026,G__35027);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__35040 = shadow.dom.dom_node(el);
var G__35041 = cls;
return goog.dom.classlist.add(G__35040,G__35041);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__35043 = shadow.dom.dom_node(el);
var G__35044 = cls;
return goog.dom.classlist.remove(G__35043,G__35044);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__35048 = arguments.length;
switch (G__35048) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__35050 = shadow.dom.dom_node(el);
var G__35051 = cls;
return goog.dom.classlist.toggle(G__35050,G__35051);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e35057){if((e35057 instanceof Object)){
var e = e35057;
return console.log("didnt support attachEvent",el,e);
} else {
throw e35057;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__35076 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__35077 = null;
var count__35078 = (0);
var i__35079 = (0);
while(true){
if((i__35079 < count__35078)){
var el = chunk__35077.cljs$core$IIndexed$_nth$arity$2(null,i__35079);
var handler_35644__$1 = ((function (seq__35076,chunk__35077,count__35078,i__35079,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35076,chunk__35077,count__35078,i__35079,el))
;
var G__35099_35645 = el;
var G__35100_35646 = cljs.core.name(ev);
var G__35101_35647 = handler_35644__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35099_35645,G__35100_35646,G__35101_35647) : shadow.dom.dom_listen.call(null,G__35099_35645,G__35100_35646,G__35101_35647));


var G__35648 = seq__35076;
var G__35649 = chunk__35077;
var G__35650 = count__35078;
var G__35651 = (i__35079 + (1));
seq__35076 = G__35648;
chunk__35077 = G__35649;
count__35078 = G__35650;
i__35079 = G__35651;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35076);
if(temp__5720__auto__){
var seq__35076__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35076__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35076__$1);
var G__35652 = cljs.core.chunk_rest(seq__35076__$1);
var G__35653 = c__4550__auto__;
var G__35654 = cljs.core.count(c__4550__auto__);
var G__35655 = (0);
seq__35076 = G__35652;
chunk__35077 = G__35653;
count__35078 = G__35654;
i__35079 = G__35655;
continue;
} else {
var el = cljs.core.first(seq__35076__$1);
var handler_35656__$1 = ((function (seq__35076,chunk__35077,count__35078,i__35079,el,seq__35076__$1,temp__5720__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35076,chunk__35077,count__35078,i__35079,el,seq__35076__$1,temp__5720__auto__))
;
var G__35106_35657 = el;
var G__35107_35658 = cljs.core.name(ev);
var G__35108_35659 = handler_35656__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35106_35657,G__35107_35658,G__35108_35659) : shadow.dom.dom_listen.call(null,G__35106_35657,G__35107_35658,G__35108_35659));


var G__35660 = cljs.core.next(seq__35076__$1);
var G__35661 = null;
var G__35662 = (0);
var G__35663 = (0);
seq__35076 = G__35660;
chunk__35077 = G__35661;
count__35078 = G__35662;
i__35079 = G__35663;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__35110 = arguments.length;
switch (G__35110) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__35111 = shadow.dom.dom_node(el);
var G__35112 = cljs.core.name(ev);
var G__35113 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35111,G__35112,G__35113) : shadow.dom.dom_listen.call(null,G__35111,G__35112,G__35113));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__35114 = shadow.dom.dom_node(el);
var G__35115 = cljs.core.name(ev);
var G__35116 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__35114,G__35115,G__35116) : shadow.dom.dom_listen_remove.call(null,G__35114,G__35115,G__35116));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__35117 = cljs.core.seq(events);
var chunk__35118 = null;
var count__35119 = (0);
var i__35120 = (0);
while(true){
if((i__35120 < count__35119)){
var vec__35127 = chunk__35118.cljs$core$IIndexed$_nth$arity$2(null,i__35120);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35127,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35127,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35665 = seq__35117;
var G__35666 = chunk__35118;
var G__35667 = count__35119;
var G__35668 = (i__35120 + (1));
seq__35117 = G__35665;
chunk__35118 = G__35666;
count__35119 = G__35667;
i__35120 = G__35668;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35117);
if(temp__5720__auto__){
var seq__35117__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35117__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35117__$1);
var G__35670 = cljs.core.chunk_rest(seq__35117__$1);
var G__35671 = c__4550__auto__;
var G__35672 = cljs.core.count(c__4550__auto__);
var G__35673 = (0);
seq__35117 = G__35670;
chunk__35118 = G__35671;
count__35119 = G__35672;
i__35120 = G__35673;
continue;
} else {
var vec__35130 = cljs.core.first(seq__35117__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35130,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35130,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35675 = cljs.core.next(seq__35117__$1);
var G__35676 = null;
var G__35677 = (0);
var G__35678 = (0);
seq__35117 = G__35675;
chunk__35118 = G__35676;
count__35119 = G__35677;
i__35120 = G__35678;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__35144 = cljs.core.seq(styles);
var chunk__35145 = null;
var count__35146 = (0);
var i__35147 = (0);
while(true){
if((i__35147 < count__35146)){
var vec__35160 = chunk__35145.cljs$core$IIndexed$_nth$arity$2(null,i__35147);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35160,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35160,(1),null);
var G__35163_35679 = dom;
var G__35164_35680 = cljs.core.name(k);
var G__35165_35681 = (((v == null))?"":v);
goog.style.setStyle(G__35163_35679,G__35164_35680,G__35165_35681);


var G__35682 = seq__35144;
var G__35683 = chunk__35145;
var G__35684 = count__35146;
var G__35685 = (i__35147 + (1));
seq__35144 = G__35682;
chunk__35145 = G__35683;
count__35146 = G__35684;
i__35147 = G__35685;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35144);
if(temp__5720__auto__){
var seq__35144__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35144__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35144__$1);
var G__35686 = cljs.core.chunk_rest(seq__35144__$1);
var G__35687 = c__4550__auto__;
var G__35688 = cljs.core.count(c__4550__auto__);
var G__35689 = (0);
seq__35144 = G__35686;
chunk__35145 = G__35687;
count__35146 = G__35688;
i__35147 = G__35689;
continue;
} else {
var vec__35166 = cljs.core.first(seq__35144__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35166,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35166,(1),null);
var G__35169_35690 = dom;
var G__35170_35691 = cljs.core.name(k);
var G__35171_35692 = (((v == null))?"":v);
goog.style.setStyle(G__35169_35690,G__35170_35691,G__35171_35692);


var G__35693 = cljs.core.next(seq__35144__$1);
var G__35694 = null;
var G__35695 = (0);
var G__35696 = (0);
seq__35144 = G__35693;
chunk__35145 = G__35694;
count__35146 = G__35695;
i__35147 = G__35696;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__35172_35697 = key;
var G__35172_35698__$1 = (((G__35172_35697 instanceof cljs.core.Keyword))?G__35172_35697.fqn:null);
switch (G__35172_35698__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_35700 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_35700,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_35700,"aria-");
}
})())){
el.setAttribute(ks_35700,value);
} else {
(el[ks_35700] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__35173 = shadow.dom.dom_node(el);
var G__35174 = cls;
return goog.dom.classlist.contains(G__35173,G__35174);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__35222){
var map__35223 = p__35222;
var map__35223__$1 = (((((!((map__35223 == null))))?(((((map__35223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35223):map__35223);
var props = map__35223__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35223__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__35225 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35225,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35225,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35225,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__35228 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__35228,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__35228;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__35230 = arguments.length;
switch (G__35230) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__35231){
var vec__35232 = p__35231;
var seq__35233 = cljs.core.seq(vec__35232);
var first__35234 = cljs.core.first(seq__35233);
var seq__35233__$1 = cljs.core.next(seq__35233);
var nn = first__35234;
var first__35234__$1 = cljs.core.first(seq__35233__$1);
var seq__35233__$2 = cljs.core.next(seq__35233__$1);
var np = first__35234__$1;
var nc = seq__35233__$2;
var node = vec__35232;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35235 = nn;
var G__35236 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35235,G__35236) : create_fn.call(null,G__35235,G__35236));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35237 = nn;
var G__35238 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35237,G__35238) : create_fn.call(null,G__35237,G__35238));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__35239 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35239,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35239,(1),null);
var seq__35242_35704 = cljs.core.seq(node_children);
var chunk__35243_35705 = null;
var count__35244_35706 = (0);
var i__35245_35707 = (0);
while(true){
if((i__35245_35707 < count__35244_35706)){
var child_struct_35708 = chunk__35243_35705.cljs$core$IIndexed$_nth$arity$2(null,i__35245_35707);
var children_35709 = shadow.dom.dom_node(child_struct_35708);
if(cljs.core.seq_QMARK_(children_35709)){
var seq__35260_35710 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35709));
var chunk__35262_35711 = null;
var count__35263_35712 = (0);
var i__35264_35713 = (0);
while(true){
if((i__35264_35713 < count__35263_35712)){
var child_35714 = chunk__35262_35711.cljs$core$IIndexed$_nth$arity$2(null,i__35264_35713);
if(cljs.core.truth_(child_35714)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35714);


var G__35715 = seq__35260_35710;
var G__35716 = chunk__35262_35711;
var G__35717 = count__35263_35712;
var G__35718 = (i__35264_35713 + (1));
seq__35260_35710 = G__35715;
chunk__35262_35711 = G__35716;
count__35263_35712 = G__35717;
i__35264_35713 = G__35718;
continue;
} else {
var G__35719 = seq__35260_35710;
var G__35720 = chunk__35262_35711;
var G__35721 = count__35263_35712;
var G__35722 = (i__35264_35713 + (1));
seq__35260_35710 = G__35719;
chunk__35262_35711 = G__35720;
count__35263_35712 = G__35721;
i__35264_35713 = G__35722;
continue;
}
} else {
var temp__5720__auto___35723 = cljs.core.seq(seq__35260_35710);
if(temp__5720__auto___35723){
var seq__35260_35724__$1 = temp__5720__auto___35723;
if(cljs.core.chunked_seq_QMARK_(seq__35260_35724__$1)){
var c__4550__auto___35725 = cljs.core.chunk_first(seq__35260_35724__$1);
var G__35726 = cljs.core.chunk_rest(seq__35260_35724__$1);
var G__35727 = c__4550__auto___35725;
var G__35728 = cljs.core.count(c__4550__auto___35725);
var G__35729 = (0);
seq__35260_35710 = G__35726;
chunk__35262_35711 = G__35727;
count__35263_35712 = G__35728;
i__35264_35713 = G__35729;
continue;
} else {
var child_35730 = cljs.core.first(seq__35260_35724__$1);
if(cljs.core.truth_(child_35730)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35730);


var G__35731 = cljs.core.next(seq__35260_35724__$1);
var G__35732 = null;
var G__35733 = (0);
var G__35734 = (0);
seq__35260_35710 = G__35731;
chunk__35262_35711 = G__35732;
count__35263_35712 = G__35733;
i__35264_35713 = G__35734;
continue;
} else {
var G__35735 = cljs.core.next(seq__35260_35724__$1);
var G__35736 = null;
var G__35737 = (0);
var G__35738 = (0);
seq__35260_35710 = G__35735;
chunk__35262_35711 = G__35736;
count__35263_35712 = G__35737;
i__35264_35713 = G__35738;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35709);
}


var G__35739 = seq__35242_35704;
var G__35740 = chunk__35243_35705;
var G__35741 = count__35244_35706;
var G__35742 = (i__35245_35707 + (1));
seq__35242_35704 = G__35739;
chunk__35243_35705 = G__35740;
count__35244_35706 = G__35741;
i__35245_35707 = G__35742;
continue;
} else {
var temp__5720__auto___35743 = cljs.core.seq(seq__35242_35704);
if(temp__5720__auto___35743){
var seq__35242_35744__$1 = temp__5720__auto___35743;
if(cljs.core.chunked_seq_QMARK_(seq__35242_35744__$1)){
var c__4550__auto___35746 = cljs.core.chunk_first(seq__35242_35744__$1);
var G__35747 = cljs.core.chunk_rest(seq__35242_35744__$1);
var G__35748 = c__4550__auto___35746;
var G__35749 = cljs.core.count(c__4550__auto___35746);
var G__35750 = (0);
seq__35242_35704 = G__35747;
chunk__35243_35705 = G__35748;
count__35244_35706 = G__35749;
i__35245_35707 = G__35750;
continue;
} else {
var child_struct_35751 = cljs.core.first(seq__35242_35744__$1);
var children_35752 = shadow.dom.dom_node(child_struct_35751);
if(cljs.core.seq_QMARK_(children_35752)){
var seq__35288_35753 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35752));
var chunk__35290_35754 = null;
var count__35292_35755 = (0);
var i__35293_35756 = (0);
while(true){
if((i__35293_35756 < count__35292_35755)){
var child_35757 = chunk__35290_35754.cljs$core$IIndexed$_nth$arity$2(null,i__35293_35756);
if(cljs.core.truth_(child_35757)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35757);


var G__35758 = seq__35288_35753;
var G__35759 = chunk__35290_35754;
var G__35760 = count__35292_35755;
var G__35761 = (i__35293_35756 + (1));
seq__35288_35753 = G__35758;
chunk__35290_35754 = G__35759;
count__35292_35755 = G__35760;
i__35293_35756 = G__35761;
continue;
} else {
var G__35762 = seq__35288_35753;
var G__35763 = chunk__35290_35754;
var G__35764 = count__35292_35755;
var G__35765 = (i__35293_35756 + (1));
seq__35288_35753 = G__35762;
chunk__35290_35754 = G__35763;
count__35292_35755 = G__35764;
i__35293_35756 = G__35765;
continue;
}
} else {
var temp__5720__auto___35767__$1 = cljs.core.seq(seq__35288_35753);
if(temp__5720__auto___35767__$1){
var seq__35288_35768__$1 = temp__5720__auto___35767__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35288_35768__$1)){
var c__4550__auto___35770 = cljs.core.chunk_first(seq__35288_35768__$1);
var G__35771 = cljs.core.chunk_rest(seq__35288_35768__$1);
var G__35772 = c__4550__auto___35770;
var G__35773 = cljs.core.count(c__4550__auto___35770);
var G__35774 = (0);
seq__35288_35753 = G__35771;
chunk__35290_35754 = G__35772;
count__35292_35755 = G__35773;
i__35293_35756 = G__35774;
continue;
} else {
var child_35775 = cljs.core.first(seq__35288_35768__$1);
if(cljs.core.truth_(child_35775)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35775);


var G__35776 = cljs.core.next(seq__35288_35768__$1);
var G__35777 = null;
var G__35778 = (0);
var G__35779 = (0);
seq__35288_35753 = G__35776;
chunk__35290_35754 = G__35777;
count__35292_35755 = G__35778;
i__35293_35756 = G__35779;
continue;
} else {
var G__35780 = cljs.core.next(seq__35288_35768__$1);
var G__35781 = null;
var G__35782 = (0);
var G__35783 = (0);
seq__35288_35753 = G__35780;
chunk__35290_35754 = G__35781;
count__35292_35755 = G__35782;
i__35293_35756 = G__35783;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35752);
}


var G__35784 = cljs.core.next(seq__35242_35744__$1);
var G__35785 = null;
var G__35786 = (0);
var G__35787 = (0);
seq__35242_35704 = G__35784;
chunk__35243_35705 = G__35785;
count__35244_35706 = G__35786;
i__35245_35707 = G__35787;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__35305 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__35305);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__35308 = cljs.core.seq(node);
var chunk__35309 = null;
var count__35310 = (0);
var i__35311 = (0);
while(true){
if((i__35311 < count__35310)){
var n = chunk__35309.cljs$core$IIndexed$_nth$arity$2(null,i__35311);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35792 = seq__35308;
var G__35793 = chunk__35309;
var G__35794 = count__35310;
var G__35795 = (i__35311 + (1));
seq__35308 = G__35792;
chunk__35309 = G__35793;
count__35310 = G__35794;
i__35311 = G__35795;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35308);
if(temp__5720__auto__){
var seq__35308__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35308__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35308__$1);
var G__35796 = cljs.core.chunk_rest(seq__35308__$1);
var G__35797 = c__4550__auto__;
var G__35798 = cljs.core.count(c__4550__auto__);
var G__35799 = (0);
seq__35308 = G__35796;
chunk__35309 = G__35797;
count__35310 = G__35798;
i__35311 = G__35799;
continue;
} else {
var n = cljs.core.first(seq__35308__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35801 = cljs.core.next(seq__35308__$1);
var G__35802 = null;
var G__35803 = (0);
var G__35804 = (0);
seq__35308 = G__35801;
chunk__35309 = G__35802;
count__35310 = G__35803;
i__35311 = G__35804;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__35318 = shadow.dom.dom_node(new$);
var G__35319 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__35318,G__35319);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__35323 = arguments.length;
switch (G__35323) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__35329 = arguments.length;
switch (G__35329) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__35341 = arguments.length;
switch (G__35341) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4131__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35821 = arguments.length;
var i__4731__auto___35822 = (0);
while(true){
if((i__4731__auto___35822 < len__4730__auto___35821)){
args__4736__auto__.push((arguments[i__4731__auto___35822]));

var G__35823 = (i__4731__auto___35822 + (1));
i__4731__auto___35822 = G__35823;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__35355_35824 = cljs.core.seq(nodes);
var chunk__35356_35825 = null;
var count__35357_35826 = (0);
var i__35358_35827 = (0);
while(true){
if((i__35358_35827 < count__35357_35826)){
var node_35831 = chunk__35356_35825.cljs$core$IIndexed$_nth$arity$2(null,i__35358_35827);
fragment.appendChild(shadow.dom._to_dom(node_35831));


var G__35832 = seq__35355_35824;
var G__35833 = chunk__35356_35825;
var G__35834 = count__35357_35826;
var G__35835 = (i__35358_35827 + (1));
seq__35355_35824 = G__35832;
chunk__35356_35825 = G__35833;
count__35357_35826 = G__35834;
i__35358_35827 = G__35835;
continue;
} else {
var temp__5720__auto___35836 = cljs.core.seq(seq__35355_35824);
if(temp__5720__auto___35836){
var seq__35355_35837__$1 = temp__5720__auto___35836;
if(cljs.core.chunked_seq_QMARK_(seq__35355_35837__$1)){
var c__4550__auto___35838 = cljs.core.chunk_first(seq__35355_35837__$1);
var G__35839 = cljs.core.chunk_rest(seq__35355_35837__$1);
var G__35840 = c__4550__auto___35838;
var G__35841 = cljs.core.count(c__4550__auto___35838);
var G__35842 = (0);
seq__35355_35824 = G__35839;
chunk__35356_35825 = G__35840;
count__35357_35826 = G__35841;
i__35358_35827 = G__35842;
continue;
} else {
var node_35843 = cljs.core.first(seq__35355_35837__$1);
fragment.appendChild(shadow.dom._to_dom(node_35843));


var G__35844 = cljs.core.next(seq__35355_35837__$1);
var G__35845 = null;
var G__35846 = (0);
var G__35847 = (0);
seq__35355_35824 = G__35844;
chunk__35356_35825 = G__35845;
count__35357_35826 = G__35846;
i__35358_35827 = G__35847;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq35352){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35352));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35369_35848 = cljs.core.seq(scripts);
var chunk__35370_35849 = null;
var count__35371_35850 = (0);
var i__35372_35851 = (0);
while(true){
if((i__35372_35851 < count__35371_35850)){
var vec__35381_35852 = chunk__35370_35849.cljs$core$IIndexed$_nth$arity$2(null,i__35372_35851);
var script_tag_35853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35381_35852,(0),null);
var script_body_35854 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35381_35852,(1),null);
eval(script_body_35854);


var G__35855 = seq__35369_35848;
var G__35856 = chunk__35370_35849;
var G__35857 = count__35371_35850;
var G__35858 = (i__35372_35851 + (1));
seq__35369_35848 = G__35855;
chunk__35370_35849 = G__35856;
count__35371_35850 = G__35857;
i__35372_35851 = G__35858;
continue;
} else {
var temp__5720__auto___35859 = cljs.core.seq(seq__35369_35848);
if(temp__5720__auto___35859){
var seq__35369_35860__$1 = temp__5720__auto___35859;
if(cljs.core.chunked_seq_QMARK_(seq__35369_35860__$1)){
var c__4550__auto___35862 = cljs.core.chunk_first(seq__35369_35860__$1);
var G__35865 = cljs.core.chunk_rest(seq__35369_35860__$1);
var G__35866 = c__4550__auto___35862;
var G__35867 = cljs.core.count(c__4550__auto___35862);
var G__35868 = (0);
seq__35369_35848 = G__35865;
chunk__35370_35849 = G__35866;
count__35371_35850 = G__35867;
i__35372_35851 = G__35868;
continue;
} else {
var vec__35384_35869 = cljs.core.first(seq__35369_35860__$1);
var script_tag_35870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35384_35869,(0),null);
var script_body_35871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35384_35869,(1),null);
eval(script_body_35871);


var G__35872 = cljs.core.next(seq__35369_35860__$1);
var G__35873 = null;
var G__35874 = (0);
var G__35875 = (0);
seq__35369_35848 = G__35872;
chunk__35370_35849 = G__35873;
count__35371_35850 = G__35874;
i__35372_35851 = G__35875;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__35387){
var vec__35388 = p__35387;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35388,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35388,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__35391 = shadow.dom.dom_node(el);
var G__35392 = cls;
return goog.dom.getAncestorByClass(G__35391,G__35392);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__35394 = arguments.length;
switch (G__35394) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__35395 = shadow.dom.dom_node(el);
var G__35396 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__35395,G__35396);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__35397 = shadow.dom.dom_node(el);
var G__35398 = cljs.core.name(tag);
var G__35399 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__35397,G__35398,G__35399);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__35400 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__35400);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__35401 = shadow.dom.dom_node(dom);
var G__35402 = value;
return goog.dom.forms.setValue(G__35401,G__35402);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__35404 = cljs.core.seq(style_keys);
var chunk__35405 = null;
var count__35406 = (0);
var i__35407 = (0);
while(true){
if((i__35407 < count__35406)){
var it = chunk__35405.cljs$core$IIndexed$_nth$arity$2(null,i__35407);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35904 = seq__35404;
var G__35905 = chunk__35405;
var G__35906 = count__35406;
var G__35907 = (i__35407 + (1));
seq__35404 = G__35904;
chunk__35405 = G__35905;
count__35406 = G__35906;
i__35407 = G__35907;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35404);
if(temp__5720__auto__){
var seq__35404__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35404__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35404__$1);
var G__35908 = cljs.core.chunk_rest(seq__35404__$1);
var G__35909 = c__4550__auto__;
var G__35910 = cljs.core.count(c__4550__auto__);
var G__35911 = (0);
seq__35404 = G__35908;
chunk__35405 = G__35909;
count__35406 = G__35910;
i__35407 = G__35911;
continue;
} else {
var it = cljs.core.first(seq__35404__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35912 = cljs.core.next(seq__35404__$1);
var G__35913 = null;
var G__35914 = (0);
var G__35915 = (0);
seq__35404 = G__35912;
chunk__35405 = G__35913;
count__35406 = G__35914;
i__35407 = G__35915;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k35416,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__35424 = k35416;
var G__35424__$1 = (((G__35424 instanceof cljs.core.Keyword))?G__35424.fqn:null);
switch (G__35424__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35416,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__35427){
var vec__35428 = p__35427;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35428,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35428,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35415){
var self__ = this;
var G__35415__$1 = this;
return (new cljs.core.RecordIter((0),G__35415__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__35438 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__35438(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35417,other35418){
var self__ = this;
var this35417__$1 = this;
return (((!((other35418 == null)))) && ((this35417__$1.constructor === other35418.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35417__$1.x,other35418.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35417__$1.y,other35418.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35417__$1.__extmap,other35418.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__35415){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__35443 = cljs.core.keyword_identical_QMARK_;
var expr__35444 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__35446 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__35447 = expr__35444;
return (pred__35443.cljs$core$IFn$_invoke$arity$2 ? pred__35443.cljs$core$IFn$_invoke$arity$2(G__35446,G__35447) : pred__35443.call(null,G__35446,G__35447));
})())){
return (new shadow.dom.Coordinate(G__35415,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35448 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__35449 = expr__35444;
return (pred__35443.cljs$core$IFn$_invoke$arity$2 ? pred__35443.cljs$core$IFn$_invoke$arity$2(G__35448,G__35449) : pred__35443.call(null,G__35448,G__35449));
})())){
return (new shadow.dom.Coordinate(self__.x,G__35415,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__35415),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__35415){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35415,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35420){
var extmap__4424__auto__ = (function (){var G__35461 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35420,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35420)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35461);
} else {
return G__35461;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35420),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35420),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__35463 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__35463);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__35466 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__35466);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__35469 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__35469);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k35472,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__35478 = k35472;
var G__35478__$1 = (((G__35478 instanceof cljs.core.Keyword))?G__35478.fqn:null);
switch (G__35478__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35472,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__35481){
var vec__35482 = p__35481;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35482,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35482,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Size{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35471){
var self__ = this;
var G__35471__$1 = this;
return (new cljs.core.RecordIter((0),G__35471__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__35493 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__35493(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35473,other35474){
var self__ = this;
var this35473__$1 = this;
return (((!((other35474 == null)))) && ((this35473__$1.constructor === other35474.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35473__$1.w,other35474.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35473__$1.h,other35474.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35473__$1.__extmap,other35474.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__35471){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__35498 = cljs.core.keyword_identical_QMARK_;
var expr__35499 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__35501 = new cljs.core.Keyword(null,"w","w",354169001);
var G__35502 = expr__35499;
return (pred__35498.cljs$core$IFn$_invoke$arity$2 ? pred__35498.cljs$core$IFn$_invoke$arity$2(G__35501,G__35502) : pred__35498.call(null,G__35501,G__35502));
})())){
return (new shadow.dom.Size(G__35471,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35504 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__35505 = expr__35499;
return (pred__35498.cljs$core$IFn$_invoke$arity$2 ? pred__35498.cljs$core$IFn$_invoke$arity$2(G__35504,G__35505) : pred__35498.call(null,G__35504,G__35505));
})())){
return (new shadow.dom.Size(self__.w,G__35471,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__35471),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__35471){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35471,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35475){
var extmap__4424__auto__ = (function (){var G__35514 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35475,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35475)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35514);
} else {
return G__35514;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35475),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35475),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__35518 = shadow.dom.dom_node(el);
return goog.style.getSize(G__35518);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__35960 = (i + (1));
var G__35961 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__35960;
ret = G__35961;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35532){
var vec__35533 = p__35532;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35533,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35533,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__35541 = arguments.length;
switch (G__35541) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__35547_35963 = new_node;
var G__35548_35964 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__35547_35963,G__35548_35964);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__35551_35965 = new_node;
var G__35552_35966 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__35551_35965,G__35552_35966);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5718__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5718__auto__)){
var child = temp__5718__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__35967 = ps;
var G__35968 = (i + (1));
el__$1 = G__35967;
i = G__35968;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__35556 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__35556);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__35557 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__35557);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__35558 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__35558);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__35559 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35559,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35559,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35559,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35562_35971 = cljs.core.seq(props);
var chunk__35563_35972 = null;
var count__35564_35973 = (0);
var i__35565_35974 = (0);
while(true){
if((i__35565_35974 < count__35564_35973)){
var vec__35572_35976 = chunk__35563_35972.cljs$core$IIndexed$_nth$arity$2(null,i__35565_35974);
var k_35977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35572_35976,(0),null);
var v_35978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35572_35976,(1),null);
el.setAttributeNS((function (){var temp__5720__auto__ = cljs.core.namespace(k_35977);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35977),v_35978);


var G__35980 = seq__35562_35971;
var G__35981 = chunk__35563_35972;
var G__35982 = count__35564_35973;
var G__35983 = (i__35565_35974 + (1));
seq__35562_35971 = G__35980;
chunk__35563_35972 = G__35981;
count__35564_35973 = G__35982;
i__35565_35974 = G__35983;
continue;
} else {
var temp__5720__auto___35984 = cljs.core.seq(seq__35562_35971);
if(temp__5720__auto___35984){
var seq__35562_35985__$1 = temp__5720__auto___35984;
if(cljs.core.chunked_seq_QMARK_(seq__35562_35985__$1)){
var c__4550__auto___35986 = cljs.core.chunk_first(seq__35562_35985__$1);
var G__35987 = cljs.core.chunk_rest(seq__35562_35985__$1);
var G__35988 = c__4550__auto___35986;
var G__35989 = cljs.core.count(c__4550__auto___35986);
var G__35990 = (0);
seq__35562_35971 = G__35987;
chunk__35563_35972 = G__35988;
count__35564_35973 = G__35989;
i__35565_35974 = G__35990;
continue;
} else {
var vec__35575_35991 = cljs.core.first(seq__35562_35985__$1);
var k_35992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35575_35991,(0),null);
var v_35993 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35575_35991,(1),null);
el.setAttributeNS((function (){var temp__5720__auto____$1 = cljs.core.namespace(k_35992);
if(cljs.core.truth_(temp__5720__auto____$1)){
var ns = temp__5720__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35992),v_35993);


var G__35995 = cljs.core.next(seq__35562_35985__$1);
var G__35996 = null;
var G__35997 = (0);
var G__35998 = (0);
seq__35562_35971 = G__35995;
chunk__35563_35972 = G__35996;
count__35564_35973 = G__35997;
i__35565_35974 = G__35998;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__35579 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35579,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35579,(1),null);
var seq__35582_36029 = cljs.core.seq(node_children);
var chunk__35584_36030 = null;
var count__35585_36031 = (0);
var i__35586_36032 = (0);
while(true){
if((i__35586_36032 < count__35585_36031)){
var child_struct_36033 = chunk__35584_36030.cljs$core$IIndexed$_nth$arity$2(null,i__35586_36032);
if((!((child_struct_36033 == null)))){
if(typeof child_struct_36033 === 'string'){
var text_36034 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36034),child_struct_36033].join(''));
} else {
var children_36035 = shadow.dom.svg_node(child_struct_36033);
if(cljs.core.seq_QMARK_(children_36035)){
var seq__35600_36036 = cljs.core.seq(children_36035);
var chunk__35602_36037 = null;
var count__35603_36038 = (0);
var i__35604_36039 = (0);
while(true){
if((i__35604_36039 < count__35603_36038)){
var child_36040 = chunk__35602_36037.cljs$core$IIndexed$_nth$arity$2(null,i__35604_36039);
if(cljs.core.truth_(child_36040)){
node.appendChild(child_36040);


var G__36041 = seq__35600_36036;
var G__36042 = chunk__35602_36037;
var G__36043 = count__35603_36038;
var G__36044 = (i__35604_36039 + (1));
seq__35600_36036 = G__36041;
chunk__35602_36037 = G__36042;
count__35603_36038 = G__36043;
i__35604_36039 = G__36044;
continue;
} else {
var G__36045 = seq__35600_36036;
var G__36046 = chunk__35602_36037;
var G__36047 = count__35603_36038;
var G__36048 = (i__35604_36039 + (1));
seq__35600_36036 = G__36045;
chunk__35602_36037 = G__36046;
count__35603_36038 = G__36047;
i__35604_36039 = G__36048;
continue;
}
} else {
var temp__5720__auto___36049 = cljs.core.seq(seq__35600_36036);
if(temp__5720__auto___36049){
var seq__35600_36050__$1 = temp__5720__auto___36049;
if(cljs.core.chunked_seq_QMARK_(seq__35600_36050__$1)){
var c__4550__auto___36051 = cljs.core.chunk_first(seq__35600_36050__$1);
var G__36052 = cljs.core.chunk_rest(seq__35600_36050__$1);
var G__36053 = c__4550__auto___36051;
var G__36054 = cljs.core.count(c__4550__auto___36051);
var G__36055 = (0);
seq__35600_36036 = G__36052;
chunk__35602_36037 = G__36053;
count__35603_36038 = G__36054;
i__35604_36039 = G__36055;
continue;
} else {
var child_36056 = cljs.core.first(seq__35600_36050__$1);
if(cljs.core.truth_(child_36056)){
node.appendChild(child_36056);


var G__36057 = cljs.core.next(seq__35600_36050__$1);
var G__36058 = null;
var G__36059 = (0);
var G__36060 = (0);
seq__35600_36036 = G__36057;
chunk__35602_36037 = G__36058;
count__35603_36038 = G__36059;
i__35604_36039 = G__36060;
continue;
} else {
var G__36061 = cljs.core.next(seq__35600_36050__$1);
var G__36062 = null;
var G__36063 = (0);
var G__36064 = (0);
seq__35600_36036 = G__36061;
chunk__35602_36037 = G__36062;
count__35603_36038 = G__36063;
i__35604_36039 = G__36064;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36035);
}
}


var G__36065 = seq__35582_36029;
var G__36066 = chunk__35584_36030;
var G__36067 = count__35585_36031;
var G__36068 = (i__35586_36032 + (1));
seq__35582_36029 = G__36065;
chunk__35584_36030 = G__36066;
count__35585_36031 = G__36067;
i__35586_36032 = G__36068;
continue;
} else {
var G__36069 = seq__35582_36029;
var G__36070 = chunk__35584_36030;
var G__36071 = count__35585_36031;
var G__36072 = (i__35586_36032 + (1));
seq__35582_36029 = G__36069;
chunk__35584_36030 = G__36070;
count__35585_36031 = G__36071;
i__35586_36032 = G__36072;
continue;
}
} else {
var temp__5720__auto___36073 = cljs.core.seq(seq__35582_36029);
if(temp__5720__auto___36073){
var seq__35582_36074__$1 = temp__5720__auto___36073;
if(cljs.core.chunked_seq_QMARK_(seq__35582_36074__$1)){
var c__4550__auto___36075 = cljs.core.chunk_first(seq__35582_36074__$1);
var G__36076 = cljs.core.chunk_rest(seq__35582_36074__$1);
var G__36077 = c__4550__auto___36075;
var G__36078 = cljs.core.count(c__4550__auto___36075);
var G__36079 = (0);
seq__35582_36029 = G__36076;
chunk__35584_36030 = G__36077;
count__35585_36031 = G__36078;
i__35586_36032 = G__36079;
continue;
} else {
var child_struct_36080 = cljs.core.first(seq__35582_36074__$1);
if((!((child_struct_36080 == null)))){
if(typeof child_struct_36080 === 'string'){
var text_36081 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36081),child_struct_36080].join(''));
} else {
var children_36082 = shadow.dom.svg_node(child_struct_36080);
if(cljs.core.seq_QMARK_(children_36082)){
var seq__35606_36083 = cljs.core.seq(children_36082);
var chunk__35608_36084 = null;
var count__35609_36085 = (0);
var i__35610_36086 = (0);
while(true){
if((i__35610_36086 < count__35609_36085)){
var child_36087 = chunk__35608_36084.cljs$core$IIndexed$_nth$arity$2(null,i__35610_36086);
if(cljs.core.truth_(child_36087)){
node.appendChild(child_36087);


var G__36088 = seq__35606_36083;
var G__36089 = chunk__35608_36084;
var G__36090 = count__35609_36085;
var G__36091 = (i__35610_36086 + (1));
seq__35606_36083 = G__36088;
chunk__35608_36084 = G__36089;
count__35609_36085 = G__36090;
i__35610_36086 = G__36091;
continue;
} else {
var G__36092 = seq__35606_36083;
var G__36093 = chunk__35608_36084;
var G__36094 = count__35609_36085;
var G__36095 = (i__35610_36086 + (1));
seq__35606_36083 = G__36092;
chunk__35608_36084 = G__36093;
count__35609_36085 = G__36094;
i__35610_36086 = G__36095;
continue;
}
} else {
var temp__5720__auto___36096__$1 = cljs.core.seq(seq__35606_36083);
if(temp__5720__auto___36096__$1){
var seq__35606_36097__$1 = temp__5720__auto___36096__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35606_36097__$1)){
var c__4550__auto___36098 = cljs.core.chunk_first(seq__35606_36097__$1);
var G__36099 = cljs.core.chunk_rest(seq__35606_36097__$1);
var G__36100 = c__4550__auto___36098;
var G__36101 = cljs.core.count(c__4550__auto___36098);
var G__36102 = (0);
seq__35606_36083 = G__36099;
chunk__35608_36084 = G__36100;
count__35609_36085 = G__36101;
i__35610_36086 = G__36102;
continue;
} else {
var child_36103 = cljs.core.first(seq__35606_36097__$1);
if(cljs.core.truth_(child_36103)){
node.appendChild(child_36103);


var G__36104 = cljs.core.next(seq__35606_36097__$1);
var G__36105 = null;
var G__36106 = (0);
var G__36107 = (0);
seq__35606_36083 = G__36104;
chunk__35608_36084 = G__36105;
count__35609_36085 = G__36106;
i__35610_36086 = G__36107;
continue;
} else {
var G__36108 = cljs.core.next(seq__35606_36097__$1);
var G__36109 = null;
var G__36110 = (0);
var G__36111 = (0);
seq__35606_36083 = G__36108;
chunk__35608_36084 = G__36109;
count__35609_36085 = G__36110;
i__35610_36086 = G__36111;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36082);
}
}


var G__36112 = cljs.core.next(seq__35582_36074__$1);
var G__36113 = null;
var G__36114 = (0);
var G__36115 = (0);
seq__35582_36029 = G__36112;
chunk__35584_36030 = G__36113;
count__35585_36031 = G__36114;
i__35586_36032 = G__36115;
continue;
} else {
var G__36116 = cljs.core.next(seq__35582_36074__$1);
var G__36117 = null;
var G__36118 = (0);
var G__36119 = (0);
seq__35582_36029 = G__36116;
chunk__35584_36030 = G__36117;
count__35585_36031 = G__36118;
i__35586_36032 = G__36119;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__35612_36120 = shadow.dom._to_svg;
var G__35613_36121 = "string";
var G__35614_36122 = ((function (G__35612_36120,G__35613_36121){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__35612_36120,G__35613_36121))
;
goog.object.set(G__35612_36120,G__35613_36121,G__35614_36122);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__35615_36124 = shadow.dom._to_svg;
var G__35616_36125 = "null";
var G__35617_36126 = ((function (G__35615_36124,G__35616_36125){
return (function (_){
return null;
});})(G__35615_36124,G__35616_36125))
;
goog.object.set(G__35615_36124,G__35616_36125,G__35617_36126);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36127 = arguments.length;
var i__4731__auto___36128 = (0);
while(true){
if((i__4731__auto___36128 < len__4730__auto___36127)){
args__4736__auto__.push((arguments[i__4731__auto___36128]));

var G__36129 = (i__4731__auto___36128 + (1));
i__4731__auto___36128 = G__36129;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq35618){
var G__35619 = cljs.core.first(seq35618);
var seq35618__$1 = cljs.core.next(seq35618);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35619,seq35618__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__35621 = arguments.length;
switch (G__35621) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__35622_36133 = shadow.dom.dom_node(el);
var G__35623_36134 = cljs.core.name(event);
var G__35624_36135 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35622_36133,G__35623_36134,G__35624_36135) : shadow.dom.dom_listen.call(null,G__35622_36133,G__35623_36134,G__35624_36135));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__33251__auto___36136 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33251__auto___36136,buf,chan,event_fn){
return (function (){
var f__33252__auto__ = (function (){var switch__33175__auto__ = ((function (c__33251__auto___36136,buf,chan,event_fn){
return (function (state_35629){
var state_val_35630 = (state_35629[(1)]);
if((state_val_35630 === (1))){
var state_35629__$1 = state_35629;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35629__$1,(2),once_or_cleanup);
} else {
if((state_val_35630 === (2))){
var inst_35626 = (state_35629[(2)]);
var inst_35627 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_35629__$1 = (function (){var statearr_35631 = state_35629;
(statearr_35631[(7)] = inst_35626);

return statearr_35631;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35629__$1,inst_35627);
} else {
return null;
}
}
});})(c__33251__auto___36136,buf,chan,event_fn))
;
return ((function (switch__33175__auto__,c__33251__auto___36136,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__33176__auto__ = null;
var shadow$dom$state_machine__33176__auto____0 = (function (){
var statearr_35632 = [null,null,null,null,null,null,null,null];
(statearr_35632[(0)] = shadow$dom$state_machine__33176__auto__);

(statearr_35632[(1)] = (1));

return statearr_35632;
});
var shadow$dom$state_machine__33176__auto____1 = (function (state_35629){
while(true){
var ret_value__33177__auto__ = (function (){try{while(true){
var result__33178__auto__ = switch__33175__auto__(state_35629);
if(cljs.core.keyword_identical_QMARK_(result__33178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33178__auto__;
}
break;
}
}catch (e35633){if((e35633 instanceof Object)){
var ex__33179__auto__ = e35633;
var statearr_35634_36137 = state_35629;
(statearr_35634_36137[(5)] = ex__33179__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35633;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36138 = state_35629;
state_35629 = G__36138;
continue;
} else {
return ret_value__33177__auto__;
}
break;
}
});
shadow$dom$state_machine__33176__auto__ = function(state_35629){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__33176__auto____0.call(this);
case 1:
return shadow$dom$state_machine__33176__auto____1.call(this,state_35629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__33176__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__33176__auto____0;
shadow$dom$state_machine__33176__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__33176__auto____1;
return shadow$dom$state_machine__33176__auto__;
})()
;})(switch__33175__auto__,c__33251__auto___36136,buf,chan,event_fn))
})();
var state__33253__auto__ = (function (){var statearr_35635 = (f__33252__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33252__auto__.cljs$core$IFn$_invoke$arity$0() : f__33252__auto__.call(null));
(statearr_35635[(6)] = c__33251__auto___36136);

return statearr_35635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33253__auto__);
});})(c__33251__auto___36136,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
