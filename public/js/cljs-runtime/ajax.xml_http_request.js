goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__26563 = e.target.readyState;
var fexpr__26562 = new cljs.core.PersistentArrayMap(null, 6, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276),new cljs.core.Keyword("cljs.analyzer","analyzed","cljs.analyzer/analyzed",-735094162),true], null);
return (fexpr__26562.cljs$core$IFn$_invoke$arity$1 ? fexpr__26562.cljs$core$IFn$_invoke$arity$1(G__26563) : fexpr__26562.call(null,G__26563));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__26566,handler){
var map__26567 = p__26566;
var map__26567__$1 = (((((!((map__26567 == null))))?(((((map__26567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26567):map__26567);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26567__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26567__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26567__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26567__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26567__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__26567__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26567__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__26567,map__26567__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__26565_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__26565_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__26567,map__26567__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5720__auto___26587 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5720__auto___26587)){
var response_type_26588 = temp__5720__auto___26587;
this$__$1.responseType = cljs.core.name(response_type_26588);
} else {
}

var seq__26570_26589 = cljs.core.seq(headers);
var chunk__26571_26590 = null;
var count__26572_26591 = (0);
var i__26573_26592 = (0);
while(true){
if((i__26573_26592 < count__26572_26591)){
var vec__26581_26593 = chunk__26571_26590.cljs$core$IIndexed$_nth$arity$2(null,i__26573_26592);
var k_26594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26581_26593,(0),null);
var v_26595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26581_26593,(1),null);
this$__$1.setRequestHeader(k_26594,v_26595);


var G__26596 = seq__26570_26589;
var G__26597 = chunk__26571_26590;
var G__26598 = count__26572_26591;
var G__26599 = (i__26573_26592 + (1));
seq__26570_26589 = G__26596;
chunk__26571_26590 = G__26597;
count__26572_26591 = G__26598;
i__26573_26592 = G__26599;
continue;
} else {
var temp__5720__auto___26600 = cljs.core.seq(seq__26570_26589);
if(temp__5720__auto___26600){
var seq__26570_26601__$1 = temp__5720__auto___26600;
if(cljs.core.chunked_seq_QMARK_(seq__26570_26601__$1)){
var c__4550__auto___26602 = cljs.core.chunk_first(seq__26570_26601__$1);
var G__26603 = cljs.core.chunk_rest(seq__26570_26601__$1);
var G__26604 = c__4550__auto___26602;
var G__26605 = cljs.core.count(c__4550__auto___26602);
var G__26606 = (0);
seq__26570_26589 = G__26603;
chunk__26571_26590 = G__26604;
count__26572_26591 = G__26605;
i__26573_26592 = G__26606;
continue;
} else {
var vec__26584_26607 = cljs.core.first(seq__26570_26601__$1);
var k_26608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26584_26607,(0),null);
var v_26609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26584_26607,(1),null);
this$__$1.setRequestHeader(k_26608,v_26609);


var G__26610 = cljs.core.next(seq__26570_26601__$1);
var G__26611 = null;
var G__26612 = (0);
var G__26613 = (0);
seq__26570_26589 = G__26610;
chunk__26571_26590 = G__26611;
count__26572_26591 = G__26612;
i__26573_26592 = G__26613;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4131__auto__ = body;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});

//# sourceMappingURL=ajax.xml_http_request.js.map
