goog.provide('giggin.api');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('giggin.state');
giggin.api.index_by = (function giggin$api$index_by(key,coll){

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(key,cljs.core.identity),coll));
});
giggin.api.handler = (function giggin$api$handler(response){
return cljs.core.reset_BANG_(giggin.state.gigs,giggin.api.index_by(new cljs.core.Keyword(null,"id","id",-1388402092),response));
});
giggin.api.error_handler = (function giggin$api$error_handler(p__26606){
var map__26607 = p__26606;
var map__26607__$1 = (((((!((map__26607 == null))))?(((((map__26607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26607):map__26607);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26607__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26607__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return console.log(["something bad happened: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
giggin.api.fetch_gigs = (function giggin$api$fetch_gigs(){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("https://gist.githubusercontent.com/jacekschae/8c10aa58a6163905fffcec33dd6f5a01/raw/20874f73b2c1d0ad08d828131d6ea8392950780a/gigs.json",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handler","handler",-195596612),giggin.api.handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),giggin.api.error_handler,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)], 0));
});

//# sourceMappingURL=giggin.api.js.map
