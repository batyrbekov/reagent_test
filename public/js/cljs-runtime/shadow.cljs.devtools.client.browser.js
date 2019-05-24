goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37222 = arguments.length;
var i__4731__auto___37223 = (0);
while(true){
if((i__4731__auto___37223 < len__4730__auto___37222)){
args__4736__auto__.push((arguments[i__4731__auto___37223]));

var G__37224 = (i__4731__auto___37223 + (1));
i__4731__auto___37223 = G__37224;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq36925){
var G__36926 = cljs.core.first(seq36925);
var seq36925__$1 = cljs.core.next(seq36925);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36926,seq36925__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5718__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5718__auto__)){
var s = temp__5718__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__36927){
var map__36928 = p__36927;
var map__36928__$1 = (((((!((map__36928 == null))))?(((((map__36928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36928):map__36928);
var src = map__36928__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36928__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36928__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__36936 = cljs.core.seq(sources);
var chunk__36937 = null;
var count__36938 = (0);
var i__36939 = (0);
while(true){
if((i__36939 < count__36938)){
var map__36994 = chunk__36937.cljs$core$IIndexed$_nth$arity$2(null,i__36939);
var map__36994__$1 = (((((!((map__36994 == null))))?(((((map__36994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36994):map__36994);
var src = map__36994__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36994__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36994__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36994__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36994__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__37239 = seq__36936;
var G__37240 = chunk__36937;
var G__37241 = count__36938;
var G__37242 = (i__36939 + (1));
seq__36936 = G__37239;
chunk__36937 = G__37240;
count__36938 = G__37241;
i__36939 = G__37242;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__36936);
if(temp__5720__auto__){
var seq__36936__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36936__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__36936__$1);
var G__37243 = cljs.core.chunk_rest(seq__36936__$1);
var G__37244 = c__4550__auto__;
var G__37245 = cljs.core.count(c__4550__auto__);
var G__37246 = (0);
seq__36936 = G__37243;
chunk__36937 = G__37244;
count__36938 = G__37245;
i__36939 = G__37246;
continue;
} else {
var map__36996 = cljs.core.first(seq__36936__$1);
var map__36996__$1 = (((((!((map__36996 == null))))?(((((map__36996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36996):map__36996);
var src = map__36996__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36996__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36996__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36996__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36996__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__37251 = cljs.core.next(seq__36936__$1);
var G__37252 = null;
var G__37253 = (0);
var G__37254 = (0);
seq__36936 = G__37251;
chunk__36937 = G__37252;
count__36938 = G__37253;
i__36939 = G__37254;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__37001 = cljs.core.seq(js_requires);
var chunk__37002 = null;
var count__37003 = (0);
var i__37004 = (0);
while(true){
if((i__37004 < count__37003)){
var js_ns = chunk__37002.cljs$core$IIndexed$_nth$arity$2(null,i__37004);
var require_str_37255 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37255);


var G__37256 = seq__37001;
var G__37257 = chunk__37002;
var G__37258 = count__37003;
var G__37259 = (i__37004 + (1));
seq__37001 = G__37256;
chunk__37002 = G__37257;
count__37003 = G__37258;
i__37004 = G__37259;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__37001);
if(temp__5720__auto__){
var seq__37001__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37001__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37001__$1);
var G__37260 = cljs.core.chunk_rest(seq__37001__$1);
var G__37261 = c__4550__auto__;
var G__37262 = cljs.core.count(c__4550__auto__);
var G__37263 = (0);
seq__37001 = G__37260;
chunk__37002 = G__37261;
count__37003 = G__37262;
i__37004 = G__37263;
continue;
} else {
var js_ns = cljs.core.first(seq__37001__$1);
var require_str_37264 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37264);


var G__37265 = cljs.core.next(seq__37001__$1);
var G__37266 = null;
var G__37267 = (0);
var G__37268 = (0);
seq__37001 = G__37265;
chunk__37002 = G__37266;
count__37003 = G__37267;
i__37004 = G__37268;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__37006 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__37006) : callback.call(null,G__37006));
} else {
var G__37007 = shadow.cljs.devtools.client.env.files_url();
var G__37008 = ((function (G__37007){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__37007))
;
var G__37009 = "POST";
var G__37010 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__37011 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__37007,G__37008,G__37009,G__37010,G__37011);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__37019){
var map__37020 = p__37019;
var map__37020__$1 = (((((!((map__37020 == null))))?(((((map__37020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37020):map__37020);
var msg = map__37020__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37020__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37020__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__37022 = info;
var map__37022__$1 = (((((!((map__37022 == null))))?(((((map__37022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37022):map__37022);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37022__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37022__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__37022,map__37022__$1,sources,compiled,map__37020,map__37020__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37024(s__37025){
return (new cljs.core.LazySeq(null,((function (map__37022,map__37022__$1,sources,compiled,map__37020,map__37020__$1,msg,info,reload_info){
return (function (){
var s__37025__$1 = s__37025;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__37025__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var map__37030 = cljs.core.first(xs__6277__auto__);
var map__37030__$1 = (((((!((map__37030 == null))))?(((((map__37030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37030.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37030):map__37030);
var src = map__37030__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37030__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37030__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__37025__$1,map__37030,map__37030__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__37022,map__37022__$1,sources,compiled,map__37020,map__37020__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37024_$_iter__37026(s__37027){
return (new cljs.core.LazySeq(null,((function (s__37025__$1,map__37030,map__37030__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__37022,map__37022__$1,sources,compiled,map__37020,map__37020__$1,msg,info,reload_info){
return (function (){
var s__37027__$1 = s__37027;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__37027__$1);
if(temp__5720__auto____$1){
var s__37027__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37027__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__37027__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__37029 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__37028 = (0);
while(true){
if((i__37028 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__37028);
cljs.core.chunk_append(b__37029,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37276 = (i__37028 + (1));
i__37028 = G__37276;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37029),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37024_$_iter__37026(cljs.core.chunk_rest(s__37027__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37029),null);
}
} else {
var warning = cljs.core.first(s__37027__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37024_$_iter__37026(cljs.core.rest(s__37027__$2)));
}
} else {
return null;
}
break;
}
});})(s__37025__$1,map__37030,map__37030__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__37022,map__37022__$1,sources,compiled,map__37020,map__37020__$1,msg,info,reload_info))
,null,null));
});})(s__37025__$1,map__37030,map__37030__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__37022,map__37022__$1,sources,compiled,map__37020,map__37020__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37024(cljs.core.rest(s__37025__$1)));
} else {
var G__37277 = cljs.core.rest(s__37025__$1);
s__37025__$1 = G__37277;
continue;
}
} else {
var G__37278 = cljs.core.rest(s__37025__$1);
s__37025__$1 = G__37278;
continue;
}
} else {
return null;
}
break;
}
});})(map__37022,map__37022__$1,sources,compiled,map__37020,map__37020__$1,msg,info,reload_info))
,null,null));
});})(map__37022,map__37022__$1,sources,compiled,map__37020,map__37020__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__37035_37279 = cljs.core.seq(warnings);
var chunk__37036_37280 = null;
var count__37037_37281 = (0);
var i__37038_37282 = (0);
while(true){
if((i__37038_37282 < count__37037_37281)){
var map__37043_37288 = chunk__37036_37280.cljs$core$IIndexed$_nth$arity$2(null,i__37038_37282);
var map__37043_37289__$1 = (((((!((map__37043_37288 == null))))?(((((map__37043_37288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37043_37288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37043_37288):map__37043_37288);
var w_37290 = map__37043_37289__$1;
var msg_37291__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37043_37289__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37292 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37043_37289__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37293 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37043_37289__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37294 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37043_37289__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37294)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37292),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37293),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37291__$1)].join(''));


var G__37295 = seq__37035_37279;
var G__37296 = chunk__37036_37280;
var G__37297 = count__37037_37281;
var G__37298 = (i__37038_37282 + (1));
seq__37035_37279 = G__37295;
chunk__37036_37280 = G__37296;
count__37037_37281 = G__37297;
i__37038_37282 = G__37298;
continue;
} else {
var temp__5720__auto___37299 = cljs.core.seq(seq__37035_37279);
if(temp__5720__auto___37299){
var seq__37035_37300__$1 = temp__5720__auto___37299;
if(cljs.core.chunked_seq_QMARK_(seq__37035_37300__$1)){
var c__4550__auto___37301 = cljs.core.chunk_first(seq__37035_37300__$1);
var G__37302 = cljs.core.chunk_rest(seq__37035_37300__$1);
var G__37303 = c__4550__auto___37301;
var G__37304 = cljs.core.count(c__4550__auto___37301);
var G__37305 = (0);
seq__37035_37279 = G__37302;
chunk__37036_37280 = G__37303;
count__37037_37281 = G__37304;
i__37038_37282 = G__37305;
continue;
} else {
var map__37046_37306 = cljs.core.first(seq__37035_37300__$1);
var map__37046_37307__$1 = (((((!((map__37046_37306 == null))))?(((((map__37046_37306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37046_37306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37046_37306):map__37046_37306);
var w_37308 = map__37046_37307__$1;
var msg_37309__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37046_37307__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37310 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37046_37307__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37311 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37046_37307__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37312 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37046_37307__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37312)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37310),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37311),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37309__$1)].join(''));


var G__37313 = cljs.core.next(seq__37035_37300__$1);
var G__37314 = null;
var G__37315 = (0);
var G__37316 = (0);
seq__37035_37279 = G__37313;
chunk__37036_37280 = G__37314;
count__37037_37281 = G__37315;
i__37038_37282 = G__37316;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__37022,map__37022__$1,sources,compiled,warnings,map__37020,map__37020__$1,msg,info,reload_info){
return (function (p__37048){
var map__37049 = p__37048;
var map__37049__$1 = (((((!((map__37049 == null))))?(((((map__37049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37049):map__37049);
var src = map__37049__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37049__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37049__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__37022,map__37022__$1,sources,compiled,warnings,map__37020,map__37020__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__37022,map__37022__$1,sources,compiled,warnings,map__37020,map__37020__$1,msg,info,reload_info){
return (function (p__37051){
var map__37052 = p__37051;
var map__37052__$1 = (((((!((map__37052 == null))))?(((((map__37052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37052):map__37052);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37052__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__37022,map__37022__$1,sources,compiled,warnings,map__37020,map__37020__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__37022,map__37022__$1,sources,compiled,warnings,map__37020,map__37020__$1,msg,info,reload_info){
return (function (p__37054){
var map__37066 = p__37054;
var map__37066__$1 = (((((!((map__37066 == null))))?(((((map__37066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37066):map__37066);
var rc = map__37066__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37066__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__37022,map__37022__$1,sources,compiled,warnings,map__37020,map__37020__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__37022,map__37022__$1,sources,compiled,warnings,map__37020,map__37020__$1,msg,info,reload_info){
return (function (p1__37018_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37018_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__37022,map__37022__$1,sources,compiled,warnings,map__37020,map__37020__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new),"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4120__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4120__auto____$1){
return new$;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__37068){
var map__37069 = p__37068;
var map__37069__$1 = (((((!((map__37069 == null))))?(((((map__37069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37069):map__37069);
var msg = map__37069__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37069__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__37071 = cljs.core.seq(updates);
var chunk__37073 = null;
var count__37074 = (0);
var i__37075 = (0);
while(true){
if((i__37075 < count__37074)){
var path = chunk__37073.cljs$core$IIndexed$_nth$arity$2(null,i__37075);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37132_37319 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37135_37320 = null;
var count__37136_37321 = (0);
var i__37137_37322 = (0);
while(true){
if((i__37137_37322 < count__37136_37321)){
var node_37323 = chunk__37135_37320.cljs$core$IIndexed$_nth$arity$2(null,i__37137_37322);
var path_match_37324 = shadow.cljs.devtools.client.browser.match_paths(node_37323.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37324)){
var new_link_37325 = (function (){var G__37146 = node_37323.cloneNode(true);
G__37146.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37324),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37146;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37324], 0));

goog.dom.insertSiblingAfter(new_link_37325,node_37323);

goog.dom.removeNode(node_37323);


var G__37326 = seq__37132_37319;
var G__37327 = chunk__37135_37320;
var G__37328 = count__37136_37321;
var G__37329 = (i__37137_37322 + (1));
seq__37132_37319 = G__37326;
chunk__37135_37320 = G__37327;
count__37136_37321 = G__37328;
i__37137_37322 = G__37329;
continue;
} else {
var G__37330 = seq__37132_37319;
var G__37331 = chunk__37135_37320;
var G__37332 = count__37136_37321;
var G__37333 = (i__37137_37322 + (1));
seq__37132_37319 = G__37330;
chunk__37135_37320 = G__37331;
count__37136_37321 = G__37332;
i__37137_37322 = G__37333;
continue;
}
} else {
var temp__5720__auto___37334 = cljs.core.seq(seq__37132_37319);
if(temp__5720__auto___37334){
var seq__37132_37335__$1 = temp__5720__auto___37334;
if(cljs.core.chunked_seq_QMARK_(seq__37132_37335__$1)){
var c__4550__auto___37336 = cljs.core.chunk_first(seq__37132_37335__$1);
var G__37337 = cljs.core.chunk_rest(seq__37132_37335__$1);
var G__37338 = c__4550__auto___37336;
var G__37339 = cljs.core.count(c__4550__auto___37336);
var G__37340 = (0);
seq__37132_37319 = G__37337;
chunk__37135_37320 = G__37338;
count__37136_37321 = G__37339;
i__37137_37322 = G__37340;
continue;
} else {
var node_37341 = cljs.core.first(seq__37132_37335__$1);
var path_match_37342 = shadow.cljs.devtools.client.browser.match_paths(node_37341.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37342)){
var new_link_37343 = (function (){var G__37153 = node_37341.cloneNode(true);
G__37153.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37342),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37153;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37342], 0));

goog.dom.insertSiblingAfter(new_link_37343,node_37341);

goog.dom.removeNode(node_37341);


var G__37344 = cljs.core.next(seq__37132_37335__$1);
var G__37345 = null;
var G__37346 = (0);
var G__37347 = (0);
seq__37132_37319 = G__37344;
chunk__37135_37320 = G__37345;
count__37136_37321 = G__37346;
i__37137_37322 = G__37347;
continue;
} else {
var G__37348 = cljs.core.next(seq__37132_37335__$1);
var G__37349 = null;
var G__37350 = (0);
var G__37351 = (0);
seq__37132_37319 = G__37348;
chunk__37135_37320 = G__37349;
count__37136_37321 = G__37350;
i__37137_37322 = G__37351;
continue;
}
}
} else {
}
}
break;
}


var G__37352 = seq__37071;
var G__37353 = chunk__37073;
var G__37354 = count__37074;
var G__37355 = (i__37075 + (1));
seq__37071 = G__37352;
chunk__37073 = G__37353;
count__37074 = G__37354;
i__37075 = G__37355;
continue;
} else {
var G__37356 = seq__37071;
var G__37357 = chunk__37073;
var G__37358 = count__37074;
var G__37359 = (i__37075 + (1));
seq__37071 = G__37356;
chunk__37073 = G__37357;
count__37074 = G__37358;
i__37075 = G__37359;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__37071);
if(temp__5720__auto__){
var seq__37071__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37071__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37071__$1);
var G__37360 = cljs.core.chunk_rest(seq__37071__$1);
var G__37361 = c__4550__auto__;
var G__37362 = cljs.core.count(c__4550__auto__);
var G__37363 = (0);
seq__37071 = G__37360;
chunk__37073 = G__37361;
count__37074 = G__37362;
i__37075 = G__37363;
continue;
} else {
var path = cljs.core.first(seq__37071__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37156_37364 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37159_37365 = null;
var count__37160_37366 = (0);
var i__37161_37367 = (0);
while(true){
if((i__37161_37367 < count__37160_37366)){
var node_37368 = chunk__37159_37365.cljs$core$IIndexed$_nth$arity$2(null,i__37161_37367);
var path_match_37369 = shadow.cljs.devtools.client.browser.match_paths(node_37368.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37369)){
var new_link_37370 = (function (){var G__37166 = node_37368.cloneNode(true);
G__37166.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37369),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37166;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37369], 0));

goog.dom.insertSiblingAfter(new_link_37370,node_37368);

goog.dom.removeNode(node_37368);


var G__37371 = seq__37156_37364;
var G__37372 = chunk__37159_37365;
var G__37373 = count__37160_37366;
var G__37374 = (i__37161_37367 + (1));
seq__37156_37364 = G__37371;
chunk__37159_37365 = G__37372;
count__37160_37366 = G__37373;
i__37161_37367 = G__37374;
continue;
} else {
var G__37376 = seq__37156_37364;
var G__37377 = chunk__37159_37365;
var G__37378 = count__37160_37366;
var G__37379 = (i__37161_37367 + (1));
seq__37156_37364 = G__37376;
chunk__37159_37365 = G__37377;
count__37160_37366 = G__37378;
i__37161_37367 = G__37379;
continue;
}
} else {
var temp__5720__auto___37380__$1 = cljs.core.seq(seq__37156_37364);
if(temp__5720__auto___37380__$1){
var seq__37156_37381__$1 = temp__5720__auto___37380__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37156_37381__$1)){
var c__4550__auto___37382 = cljs.core.chunk_first(seq__37156_37381__$1);
var G__37383 = cljs.core.chunk_rest(seq__37156_37381__$1);
var G__37384 = c__4550__auto___37382;
var G__37385 = cljs.core.count(c__4550__auto___37382);
var G__37386 = (0);
seq__37156_37364 = G__37383;
chunk__37159_37365 = G__37384;
count__37160_37366 = G__37385;
i__37161_37367 = G__37386;
continue;
} else {
var node_37387 = cljs.core.first(seq__37156_37381__$1);
var path_match_37388 = shadow.cljs.devtools.client.browser.match_paths(node_37387.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37388)){
var new_link_37389 = (function (){var G__37167 = node_37387.cloneNode(true);
G__37167.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37388),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37167;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37388], 0));

goog.dom.insertSiblingAfter(new_link_37389,node_37387);

goog.dom.removeNode(node_37387);


var G__37390 = cljs.core.next(seq__37156_37381__$1);
var G__37391 = null;
var G__37392 = (0);
var G__37393 = (0);
seq__37156_37364 = G__37390;
chunk__37159_37365 = G__37391;
count__37160_37366 = G__37392;
i__37161_37367 = G__37393;
continue;
} else {
var G__37394 = cljs.core.next(seq__37156_37381__$1);
var G__37395 = null;
var G__37396 = (0);
var G__37397 = (0);
seq__37156_37364 = G__37394;
chunk__37159_37365 = G__37395;
count__37160_37366 = G__37396;
i__37161_37367 = G__37397;
continue;
}
}
} else {
}
}
break;
}


var G__37398 = cljs.core.next(seq__37071__$1);
var G__37399 = null;
var G__37400 = (0);
var G__37401 = (0);
seq__37071 = G__37398;
chunk__37073 = G__37399;
count__37074 = G__37400;
i__37075 = G__37401;
continue;
} else {
var G__37402 = cljs.core.next(seq__37071__$1);
var G__37403 = null;
var G__37404 = (0);
var G__37405 = (0);
seq__37071 = G__37402;
chunk__37073 = G__37403;
count__37074 = G__37404;
i__37075 = G__37405;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__37168){
var map__37169 = p__37168;
var map__37169__$1 = (((((!((map__37169 == null))))?(((((map__37169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37169):map__37169);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37169__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37169__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__37169,map__37169__$1,id,js){
return (function (){
return eval(js);
});})(map__37169,map__37169__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__37171){
var map__37172 = p__37171;
var map__37172__$1 = (((((!((map__37172 == null))))?(((((map__37172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37172):map__37172);
var msg = map__37172__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37172__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37172__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37172__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37172__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__37172,map__37172__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__37174){
var map__37175 = p__37174;
var map__37175__$1 = (((((!((map__37175 == null))))?(((((map__37175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37175):map__37175);
var src = map__37175__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37175__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__37172,map__37172__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__37172,map__37172__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__37172,map__37172__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__37187){
var map__37188 = p__37187;
var map__37188__$1 = (((((!((map__37188 == null))))?(((((map__37188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37188):map__37188);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37188__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37188__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__37188,map__37188__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");
});})(map__37188,map__37188__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__37190){
var map__37191 = p__37190;
var map__37191__$1 = (((((!((map__37191 == null))))?(((((map__37191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37191):map__37191);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37191__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37191__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__37196){
var map__37197 = p__37196;
var map__37197__$1 = (((((!((map__37197 == null))))?(((((map__37197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37197):map__37197);
var msg = map__37197__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37197__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__37201 = type;
var G__37201__$1 = (((G__37201 instanceof cljs.core.Keyword))?G__37201.fqn:null);
switch (G__37201__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "repl/session-start":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
case "client/stale":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
return shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__37206 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__37207 = ((function (G__37206){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__37206))
;
var G__37208 = "POST";
var G__37209 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__37210 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__37206,G__37207,G__37208,G__37209,G__37210);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5720__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto__)){
var s = temp__5720__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4131__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e37213){var e = e37213;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5720__auto___37424 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto___37424)){
var s_37425 = temp__5720__auto___37424;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_37425.onclose = ((function (s_37425,temp__5720__auto___37424){
return (function (e){
return null;
});})(s_37425,temp__5720__auto___37424))
;

s_37425.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5720__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto__)){
var s = temp__5720__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4120__auto__ = document;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4120__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
