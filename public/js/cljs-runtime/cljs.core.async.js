goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33336 = arguments.length;
switch (G__33336) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33337 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33337 = (function (f,blockable,meta33338){
this.f = f;
this.blockable = blockable;
this.meta33338 = meta33338;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33339,meta33338__$1){
var self__ = this;
var _33339__$1 = this;
return (new cljs.core.async.t_cljs$core$async33337(self__.f,self__.blockable,meta33338__$1));
});

cljs.core.async.t_cljs$core$async33337.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33339){
var self__ = this;
var _33339__$1 = this;
return self__.meta33338;
});

cljs.core.async.t_cljs$core$async33337.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33337.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33337.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async33337.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async33337.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33338","meta33338",855421018,null)], null);
});

cljs.core.async.t_cljs$core$async33337.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33337.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33337";

cljs.core.async.t_cljs$core$async33337.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async33337");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33337.
 */
cljs.core.async.__GT_t_cljs$core$async33337 = (function cljs$core$async$__GT_t_cljs$core$async33337(f__$1,blockable__$1,meta33338){
return (new cljs.core.async.t_cljs$core$async33337(f__$1,blockable__$1,meta33338));
});

}

return (new cljs.core.async.t_cljs$core$async33337(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__33342 = arguments.length;
switch (G__33342) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__33344 = arguments.length;
switch (G__33344) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__33346 = arguments.length;
switch (G__33346) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_34808 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34808) : fn1.call(null,val_34808));
} else {
cljs.core.async.impl.dispatch.run(((function (val_34808,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34808) : fn1.call(null,val_34808));
});})(val_34808,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__33348 = arguments.length;
switch (G__33348) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5718__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___34820 = n;
var x_34821 = (0);
while(true){
if((x_34821 < n__4607__auto___34820)){
(a[x_34821] = (0));

var G__34822 = (x_34821 + (1));
x_34821 = G__34822;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__34823 = (i + (1));
i = G__34823;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33349 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33349 = (function (flag,meta33350){
this.flag = flag;
this.meta33350 = meta33350;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33351,meta33350__$1){
var self__ = this;
var _33351__$1 = this;
return (new cljs.core.async.t_cljs$core$async33349(self__.flag,meta33350__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async33349.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33351){
var self__ = this;
var _33351__$1 = this;
return self__.meta33350;
});})(flag))
;

cljs.core.async.t_cljs$core$async33349.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33349.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async33349.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33349.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33349.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33350","meta33350",2055807511,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async33349.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33349.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33349";

cljs.core.async.t_cljs$core$async33349.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async33349");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33349.
 */
cljs.core.async.__GT_t_cljs$core$async33349 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33349(flag__$1,meta33350){
return (new cljs.core.async.t_cljs$core$async33349(flag__$1,meta33350));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async33349(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33352 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33352 = (function (flag,cb,meta33353){
this.flag = flag;
this.cb = cb;
this.meta33353 = meta33353;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33354,meta33353__$1){
var self__ = this;
var _33354__$1 = this;
return (new cljs.core.async.t_cljs$core$async33352(self__.flag,self__.cb,meta33353__$1));
});

cljs.core.async.t_cljs$core$async33352.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33354){
var self__ = this;
var _33354__$1 = this;
return self__.meta33353;
});

cljs.core.async.t_cljs$core$async33352.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33352.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async33352.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33352.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async33352.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33353","meta33353",-241501213,null)], null);
});

cljs.core.async.t_cljs$core$async33352.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33352.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33352";

cljs.core.async.t_cljs$core$async33352.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async33352");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33352.
 */
cljs.core.async.__GT_t_cljs$core$async33352 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33352(flag__$1,cb__$1,meta33353){
return (new cljs.core.async.t_cljs$core$async33352(flag__$1,cb__$1,meta33353));
});

}

return (new cljs.core.async.t_cljs$core$async33352(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33355_SHARP_){
var G__33357 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33355_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33357) : fret.call(null,G__33357));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33356_SHARP_){
var G__33358 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33356_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33358) : fret.call(null,G__33358));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34830 = (i + (1));
i = G__34830;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34831 = arguments.length;
var i__4731__auto___34832 = (0);
while(true){
if((i__4731__auto___34832 < len__4730__auto___34831)){
args__4736__auto__.push((arguments[i__4731__auto___34832]));

var G__34833 = (i__4731__auto___34832 + (1));
i__4731__auto___34832 = G__34833;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33361){
var map__33362 = p__33361;
var map__33362__$1 = (((((!((map__33362 == null))))?(((((map__33362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33362):map__33362);
var opts = map__33362__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33359){
var G__33360 = cljs.core.first(seq33359);
var seq33359__$1 = cljs.core.next(seq33359);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33360,seq33359__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__33365 = arguments.length;
switch (G__33365) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33251__auto___34838 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33251__auto___34838){
return (function (){
var f__33252__auto__ = (function (){var switch__33175__auto__ = ((function (c__33251__auto___34838){
return (function (state_33389){
var state_val_33390 = (state_33389[(1)]);
if((state_val_33390 === (7))){
var inst_33385 = (state_33389[(2)]);
var state_33389__$1 = state_33389;
var statearr_33391_34839 = state_33389__$1;
(statearr_33391_34839[(2)] = inst_33385);

(statearr_33391_34839[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (1))){
var state_33389__$1 = state_33389;
var statearr_33392_34842 = state_33389__$1;
(statearr_33392_34842[(2)] = null);

(statearr_33392_34842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (4))){
var inst_33368 = (state_33389[(7)]);
var inst_33368__$1 = (state_33389[(2)]);
var inst_33369 = (inst_33368__$1 == null);
var state_33389__$1 = (function (){var statearr_33393 = state_33389;
(statearr_33393[(7)] = inst_33368__$1);

return statearr_33393;
})();
if(cljs.core.truth_(inst_33369)){
var statearr_33394_34845 = state_33389__$1;
(statearr_33394_34845[(1)] = (5));

} else {
var statearr_33395_34846 = state_33389__$1;
(statearr_33395_34846[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (13))){
var state_33389__$1 = state_33389;
var statearr_33396_34847 = state_33389__$1;
(statearr_33396_34847[(2)] = null);

(statearr_33396_34847[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (6))){
var inst_33368 = (state_33389[(7)]);
var state_33389__$1 = state_33389;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33389__$1,(11),to,inst_33368);
} else {
if((state_val_33390 === (3))){
var inst_33387 = (state_33389[(2)]);
var state_33389__$1 = state_33389;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33389__$1,inst_33387);
} else {
if((state_val_33390 === (12))){
var state_33389__$1 = state_33389;
var statearr_33397_34848 = state_33389__$1;
(statearr_33397_34848[(2)] = null);

(statearr_33397_34848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (2))){
var state_33389__$1 = state_33389;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33389__$1,(4),from);
} else {
if((state_val_33390 === (11))){
var inst_33378 = (state_33389[(2)]);
var state_33389__$1 = state_33389;
if(cljs.core.truth_(inst_33378)){
var statearr_33398_34849 = state_33389__$1;
(statearr_33398_34849[(1)] = (12));

} else {
var statearr_33399_34850 = state_33389__$1;
(statearr_33399_34850[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (9))){
var state_33389__$1 = state_33389;
var statearr_33400_34851 = state_33389__$1;
(statearr_33400_34851[(2)] = null);

(statearr_33400_34851[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (5))){
var state_33389__$1 = state_33389;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33401_34852 = state_33389__$1;
(statearr_33401_34852[(1)] = (8));

} else {
var statearr_33402_34853 = state_33389__$1;
(statearr_33402_34853[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (14))){
var inst_33383 = (state_33389[(2)]);
var state_33389__$1 = state_33389;
var statearr_33403_34854 = state_33389__$1;
(statearr_33403_34854[(2)] = inst_33383);

(statearr_33403_34854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (10))){
var inst_33375 = (state_33389[(2)]);
var state_33389__$1 = state_33389;
var statearr_33404_34855 = state_33389__$1;
(statearr_33404_34855[(2)] = inst_33375);

(statearr_33404_34855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33390 === (8))){
var inst_33372 = cljs.core.async.close_BANG_(to);
var state_33389__$1 = state_33389;
var statearr_33405_34856 = state_33389__$1;
(statearr_33405_34856[(2)] = inst_33372);

(statearr_33405_34856[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33251__auto___34838))
;
return ((function (switch__33175__auto__,c__33251__auto___34838){
return (function() {
var cljs$core$async$state_machine__33176__auto__ = null;
var cljs$core$async$state_machine__33176__auto____0 = (function (){
var statearr_33406 = [null,null,null,null,null,null,null,null];
(statearr_33406[(0)] = cljs$core$async$state_machine__33176__auto__);

(statearr_33406[(1)] = (1));

return statearr_33406;
});
var cljs$core$async$state_machine__33176__auto____1 = (function (state_33389){
while(true){
var ret_value__33177__auto__ = (function (){try{while(true){
var result__33178__auto__ = switch__33175__auto__(state_33389);
if(cljs.core.keyword_identical_QMARK_(result__33178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33178__auto__;
}
break;
}
}catch (e33407){if((e33407 instanceof Object)){
var ex__33179__auto__ = e33407;
var statearr_33408_34857 = state_33389;
(statearr_33408_34857[(5)] = ex__33179__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33389);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33407;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34858 = state_33389;
state_33389 = G__34858;
continue;
} else {
return ret_value__33177__auto__;
}
break;
}
});
cljs$core$async$state_machine__33176__auto__ = function(state_33389){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33176__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33176__auto____1.call(this,state_33389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33176__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33176__auto____0;
cljs$core$async$state_machine__33176__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33176__auto____1;
return cljs$core$async$state_machine__33176__auto__;
})()
;})(switch__33175__auto__,c__33251__auto___34838))
})();
var state__33253__auto__ = (function (){var statearr_33409 = (f__33252__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33252__auto__.cljs$core$IFn$_invoke$arity$0() : f__33252__auto__.call(null));
(statearr_33409[(6)] = c__33251__auto___34838);

return statearr_33409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33253__auto__);
});})(c__33251__auto___34838))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__33410){
var vec__33411 = p__33410;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33411,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33411,(1),null);
var job = vec__33411;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33251__auto___34861 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33251__auto___34861,res,vec__33411,v,p,job,jobs,results){
return (function (){
var f__33252__auto__ = (function (){var switch__33175__auto__ = ((function (c__33251__auto___34861,res,vec__33411,v,p,job,jobs,results){
return (function (state_33418){
var state_val_33419 = (state_33418[(1)]);
if((state_val_33419 === (1))){
var state_33418__$1 = state_33418;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33418__$1,(2),res,v);
} else {
if((state_val_33419 === (2))){
var inst_33415 = (state_33418[(2)]);
var inst_33416 = cljs.core.async.close_BANG_(res);
var state_33418__$1 = (function (){var statearr_33420 = state_33418;
(statearr_33420[(7)] = inst_33415);

return statearr_33420;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33418__$1,inst_33416);
} else {
return null;
}
}
});})(c__33251__auto___34861,res,vec__33411,v,p,job,jobs,results))
;
return ((function (switch__33175__auto__,c__33251__auto___34861,res,vec__33411,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33176__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33176__auto____0 = (function (){
var statearr_33421 = [null,null,null,null,null,null,null,null];
(statearr_33421[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33176__auto__);

(statearr_33421[(1)] = (1));

return statearr_33421;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33176__auto____1 = (function (state_33418){
while(true){
var ret_value__33177__auto__ = (function (){try{while(true){
var result__33178__auto__ = switch__33175__auto__(state_33418);
if(cljs.core.keyword_identical_QMARK_(result__33178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33178__auto__;
}
break;
}
}catch (e33422){if((e33422 instanceof Object)){
var ex__33179__auto__ = e33422;
var statearr_33423_34866 = state_33418;
(statearr_33423_34866[(5)] = ex__33179__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33422;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34867 = state_33418;
state_33418 = G__34867;
continue;
} else {
return ret_value__33177__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33176__auto__ = function(state_33418){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33176__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33176__auto____1.call(this,state_33418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33176__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33176__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33176__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33176__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33176__auto__;
})()
;})(switch__33175__auto__,c__33251__auto___34861,res,vec__33411,v,p,job,jobs,results))
})();
var state__33253__auto__ = (function (){var statearr_33424 = (f__33252__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33252__auto__.cljs$core$IFn$_invoke$arity$0() : f__33252__auto__.call(null));
(statearr_33424[(6)] = c__33251__auto___34861);

return statearr_33424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33253__auto__);
});})(c__33251__auto___34861,res,vec__33411,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__33425){
var vec__33426 = p__33425;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33426,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33426,(1),null);
var job = vec__33426;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___34872 = n;
var __34873 = (0);
while(true){
if((__34873 < n__4607__auto___34872)){
var G__33429_34874 = type;
var G__33429_34875__$1 = (((G__33429_34874 instanceof cljs.core.Keyword))?G__33429_34874.fqn:null);
switch (G__33429_34875__$1) {
case "compute":
var c__33251__auto___34877 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34873,c__33251__auto___34877,G__33429_34874,G__33429_34875__$1,n__4607__auto___34872,jobs,results,process,async){
return (function (){
var f__33252__auto__ = (function (){var switch__33175__auto__ = ((function (__34873,c__33251__auto___34877,G__33429_34874,G__33429_34875__$1,n__4607__auto___34872,jobs,results,process,async){
return (function (state_33442){
var state_val_33443 = (state_33442[(1)]);
if((state_val_33443 === (1))){
var state_33442__$1 = state_33442;
var statearr_33444_34878 = state_33442__$1;
(statearr_33444_34878[(2)] = null);

(statearr_33444_34878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33443 === (2))){
var state_33442__$1 = state_33442;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33442__$1,(4),jobs);
} else {
if((state_val_33443 === (3))){
var inst_33440 = (state_33442[(2)]);
var state_33442__$1 = state_33442;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33442__$1,inst_33440);
} else {
if((state_val_33443 === (4))){
var inst_33432 = (state_33442[(2)]);
var inst_33433 = process(inst_33432);
var state_33442__$1 = state_33442;
if(cljs.core.truth_(inst_33433)){
var statearr_33445_34882 = state_33442__$1;
(statearr_33445_34882[(1)] = (5));

} else {
var statearr_33446_34883 = state_33442__$1;
(statearr_33446_34883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33443 === (5))){
var state_33442__$1 = state_33442;
var statearr_33447_34886 = state_33442__$1;
(statearr_33447_34886[(2)] = null);

(statearr_33447_34886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33443 === (6))){
var state_33442__$1 = state_33442;
var statearr_33448_34887 = state_33442__$1;
(statearr_33448_34887[(2)] = null);

(statearr_33448_34887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33443 === (7))){
var inst_33438 = (state_33442[(2)]);
var state_33442__$1 = state_33442;
var statearr_33449_34888 = state_33442__$1;
(statearr_33449_34888[(2)] = inst_33438);

(statearr_33449_34888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34873,c__33251__auto___34877,G__33429_34874,G__33429_34875__$1,n__4607__auto___34872,jobs,results,process,async))
;
return ((function (__34873,switch__33175__auto__,c__33251__auto___34877,G__33429_34874,G__33429_34875__$1,n__4607__auto___34872,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33176__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33176__auto____0 = (function (){
var statearr_33450 = [null,null,null,null,null,null,null];
(statearr_33450[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33176__auto__);

(statearr_33450[(1)] = (1));

return statearr_33450;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33176__auto____1 = (function (state_33442){
while(true){
var ret_value__33177__auto__ = (function (){try{while(true){
var result__33178__auto__ = switch__33175__auto__(state_33442);
if(cljs.core.keyword_identical_QMARK_(result__33178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33178__auto__;
}
break;
}
}catch (e33451){if((e33451 instanceof Object)){
var ex__33179__auto__ = e33451;
var statearr_33452_34893 = state_33442;
(statearr_33452_34893[(5)] = ex__33179__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33451;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34894 = state_33442;
state_33442 = G__34894;
continue;
} else {
return ret_value__33177__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33176__auto__ = function(state_33442){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33176__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33176__auto____1.call(this,state_33442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33176__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33176__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33176__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33176__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33176__auto__;
})()
;})(__34873,switch__33175__auto__,c__33251__auto___34877,G__33429_34874,G__33429_34875__$1,n__4607__auto___34872,jobs,results,process,async))
})();
var state__33253__auto__ = (function (){var statearr_33453 = (f__33252__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33252__auto__.cljs$core$IFn$_invoke$arity$0() : f__33252__auto__.call(null));
(statearr_33453[(6)] = c__33251__auto___34877);

return statearr_33453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33253__auto__);
});})(__34873,c__33251__auto___34877,G__33429_34874,G__33429_34875__$1,n__4607__auto___34872,jobs,results,process,async))
);


break;
case "async":
var c__33251__auto___34895 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34873,c__33251__auto___34895,G__33429_34874,G__33429_34875__$1,n__4607__auto___34872,jobs,results,process,async){
return (function (){
var f__33252__auto__ = (function (){var switch__33175__auto__ = ((function (__34873,c__33251__auto___34895,G__33429_34874,G__33429_34875__$1,n__4607__auto___34872,jobs,results,process,async){
return (function (state_33466){
var state_val_33467 = (state_33466[(1)]);
if((state_val_33467 === (1))){
var state_33466__$1 = state_33466;
var statearr_33468_34896 = state_33466__$1;
(statearr_33468_34896[(2)] = null);

(statearr_33468_34896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33467 === (2))){
var state_33466__$1 = state_33466;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33466__$1,(4),jobs);
} else {
if((state_val_33467 === (3))){
var inst_33464 = (state_33466[(2)]);
var state_33466__$1 = state_33466;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33466__$1,inst_33464);
} else {
if((state_val_33467 === (4))){
var inst_33456 = (state_33466[(2)]);
var inst_33457 = async(inst_33456);
var state_33466__$1 = state_33466;
if(cljs.core.truth_(inst_33457)){
var statearr_33469_34897 = state_33466__$1;
(statearr_33469_34897[(1)] = (5));

} else {
var statearr_33470_34898 = state_33466__$1;
(statearr_33470_34898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33467 === (5))){
var state_33466__$1 = state_33466;
var statearr_33471_34899 = state_33466__$1;
(statearr_33471_34899[(2)] = null);

(statearr_33471_34899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33467 === (6))){
var state_33466__$1 = state_33466;
var statearr_33472_34900 = state_33466__$1;
(statearr_33472_34900[(2)] = null);

(statearr_33472_34900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33467 === (7))){
var inst_33462 = (state_33466[(2)]);
var state_33466__$1 = state_33466;
var statearr_33473_34901 = state_33466__$1;
(statearr_33473_34901[(2)] = inst_33462);

(statearr_33473_34901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34873,c__33251__auto___34895,G__33429_34874,G__33429_34875__$1,n__4607__auto___34872,jobs,results,process,async))
;
return ((function (__34873,switch__33175__auto__,c__33251__auto___34895,G__33429_34874,G__33429_34875__$1,n__4607__auto___34872,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33176__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33176__auto____0 = (function (){
var statearr_33474 = [null,null,null,null,null,null,null];
(statearr_33474[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33176__auto__);

(statearr_33474[(1)] = (1));

return statearr_33474;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33176__auto____1 = (function (state_33466){
while(true){
var ret_value__33177__auto__ = (function (){try{while(true){
var result__33178__auto__ = switch__33175__auto__(state_33466);
if(cljs.core.keyword_identical_QMARK_(result__33178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33178__auto__;
}
break;
}
}catch (e33475){if((e33475 instanceof Object)){
var ex__33179__auto__ = e33475;
var statearr_33476_34902 = state_33466;
(statearr_33476_34902[(5)] = ex__33179__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33466);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33475;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34904 = state_33466;
state_33466 = G__34904;
continue;
} else {
return ret_value__33177__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33176__auto__ = function(state_33466){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33176__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33176__auto____1.call(this,state_33466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33176__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33176__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33176__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33176__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33176__auto__;
})()
;})(__34873,switch__33175__auto__,c__33251__auto___34895,G__33429_34874,G__33429_34875__$1,n__4607__auto___34872,jobs,results,process,async))
})();
var state__33253__auto__ = (function (){var statearr_33477 = (f__33252__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33252__auto__.cljs$core$IFn$_invoke$arity$0() : f__33252__auto__.call(null));
(statearr_33477[(6)] = c__33251__auto___34895);

return statearr_33477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33253__auto__);
});})(__34873,c__33251__auto___34895,G__33429_34874,G__33429_34875__$1,n__4607__auto___34872,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33429_34875__$1)].join('')));

}

var G__34905 = (__34873 + (1));
__34873 = G__34905;
continue;
} else {
}
break;
}

var c__33251__auto___34906 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33251__auto___34906,jobs,results,process,async){
return (function (){
var f__33252__auto__ = (function (){var switch__33175__auto__ = ((function (c__33251__auto___34906,jobs,results,process,async){
return (function (state_33499){
var state_val_33500 = (state_33499[(1)]);
if((state_val_33500 === (7))){
var inst_33495 = (state_33499[(2)]);
var state_33499__$1 = state_33499;
var statearr_33501_34907 = state_33499__$1;
(statearr_33501_34907[(2)] = inst_33495);

(statearr_33501_34907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33500 === (1))){
var state_33499__$1 = state_33499;
var statearr_33502_34909 = state_33499__$1;
(statearr_33502_34909[(2)] = null);

(statearr_33502_34909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33500 === (4))){
var inst_33480 = (state_33499[(7)]);
var inst_33480__$1 = (state_33499[(2)]);
var inst_33481 = (inst_33480__$1 == null);
var state_33499__$1 = (function (){var statearr_33503 = state_33499;
(statearr_33503[(7)] = inst_33480__$1);

return statearr_33503;
})();
if(cljs.core.truth_(inst_33481)){
var statearr_33504_34910 = state_33499__$1;
(statearr_33504_34910[(1)] = (5));

} else {
var statearr_33505_34911 = state_33499__$1;
(statearr_33505_34911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33500 === (6))){
var inst_33480 = (state_33499[(7)]);
var inst_33485 = (state_33499[(8)]);
var inst_33485__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_33486 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33487 = [inst_33480,inst_33485__$1];
var inst_33488 = (new cljs.core.PersistentVector(null,2,(5),inst_33486,inst_33487,null));
var state_33499__$1 = (function (){var statearr_33506 = state_33499;
(statearr_33506[(8)] = inst_33485__$1);

return statearr_33506;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33499__$1,(8),jobs,inst_33488);
} else {
if((state_val_33500 === (3))){
var inst_33497 = (state_33499[(2)]);
var state_33499__$1 = state_33499;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33499__$1,inst_33497);
} else {
if((state_val_33500 === (2))){
var state_33499__$1 = state_33499;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33499__$1,(4),from);
} else {
if((state_val_33500 === (9))){
var inst_33492 = (state_33499[(2)]);
var state_33499__$1 = (function (){var statearr_33507 = state_33499;
(statearr_33507[(9)] = inst_33492);

return statearr_33507;
})();
var statearr_33508_34912 = state_33499__$1;
(statearr_33508_34912[(2)] = null);

(statearr_33508_34912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33500 === (5))){
var inst_33483 = cljs.core.async.close_BANG_(jobs);
var state_33499__$1 = state_33499;
var statearr_33509_34913 = state_33499__$1;
(statearr_33509_34913[(2)] = inst_33483);

(statearr_33509_34913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33500 === (8))){
var inst_33485 = (state_33499[(8)]);
var inst_33490 = (state_33499[(2)]);
var state_33499__$1 = (function (){var statearr_33510 = state_33499;
(statearr_33510[(10)] = inst_33490);

return statearr_33510;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33499__$1,(9),results,inst_33485);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__33251__auto___34906,jobs,results,process,async))
;
return ((function (switch__33175__auto__,c__33251__auto___34906,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33176__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33176__auto____0 = (function (){
var statearr_33511 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33511[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33176__auto__);

(statearr_33511[(1)] = (1));

return statearr_33511;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33176__auto____1 = (function (state_33499){
while(true){
var ret_value__33177__auto__ = (function (){try{while(true){
var result__33178__auto__ = switch__33175__auto__(state_33499);
if(cljs.core.keyword_identical_QMARK_(result__33178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33178__auto__;
}
break;
}
}catch (e33512){if((e33512 instanceof Object)){
var ex__33179__auto__ = e33512;
var statearr_33513_34922 = state_33499;
(statearr_33513_34922[(5)] = ex__33179__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33499);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33512;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34924 = state_33499;
state_33499 = G__34924;
continue;
} else {
return ret_value__33177__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33176__auto__ = function(state_33499){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33176__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33176__auto____1.call(this,state_33499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33176__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33176__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33176__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33176__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33176__auto__;
})()
;})(switch__33175__auto__,c__33251__auto___34906,jobs,results,process,async))
})();
var state__33253__auto__ = (function (){var statearr_33514 = (f__33252__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33252__auto__.cljs$core$IFn$_invoke$arity$0() : f__33252__auto__.call(null));
(statearr_33514[(6)] = c__33251__auto___34906);

return statearr_33514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33253__auto__);
});})(c__33251__auto___34906,jobs,results,process,async))
);


var c__33251__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33251__auto__,jobs,results,process,async){
return (function (){
var f__33252__auto__ = (function (){var switch__33175__auto__ = ((function (c__33251__auto__,jobs,results,process,async){
return (function (state_33552){
var state_val_33553 = (state_33552[(1)]);
if((state_val_33553 === (7))){
var inst_33548 = (state_33552[(2)]);
var state_33552__$1 = state_33552;
var statearr_33554_34925 = state_33552__$1;
(statearr_33554_34925[(2)] = inst_33548);

(statearr_33554_34925[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (20))){
var state_33552__$1 = state_33552;
var statearr_33555_34926 = state_33552__$1;
(statearr_33555_34926[(2)] = null);

(statearr_33555_34926[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (1))){
var state_33552__$1 = state_33552;
var statearr_33556_34927 = state_33552__$1;
(statearr_33556_34927[(2)] = null);

(statearr_33556_34927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (4))){
var inst_33517 = (state_33552[(7)]);
var inst_33517__$1 = (state_33552[(2)]);
var inst_33518 = (inst_33517__$1 == null);
var state_33552__$1 = (function (){var statearr_33557 = state_33552;
(statearr_33557[(7)] = inst_33517__$1);

return statearr_33557;
})();
if(cljs.core.truth_(inst_33518)){
var statearr_33558_34928 = state_33552__$1;
(statearr_33558_34928[(1)] = (5));

} else {
var statearr_33559_34929 = state_33552__$1;
(statearr_33559_34929[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (15))){
var inst_33530 = (state_33552[(8)]);
var state_33552__$1 = state_33552;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33552__$1,(18),to,inst_33530);
} else {
if((state_val_33553 === (21))){
var inst_33543 = (state_33552[(2)]);
var state_33552__$1 = state_33552;
var statearr_33560_34930 = state_33552__$1;
(statearr_33560_34930[(2)] = inst_33543);

(statearr_33560_34930[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (13))){
var inst_33545 = (state_33552[(2)]);
var state_33552__$1 = (function (){var statearr_33561 = state_33552;
(statearr_33561[(9)] = inst_33545);

return statearr_33561;
})();
var statearr_33562_34931 = state_33552__$1;
(statearr_33562_34931[(2)] = null);

(statearr_33562_34931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (6))){
var inst_33517 = (state_33552[(7)]);
var state_33552__$1 = state_33552;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33552__$1,(11),inst_33517);
} else {
if((state_val_33553 === (17))){
var inst_33538 = (state_33552[(2)]);
var state_33552__$1 = state_33552;
if(cljs.core.truth_(inst_33538)){
var statearr_33563_34932 = state_33552__$1;
(statearr_33563_34932[(1)] = (19));

} else {
var statearr_33564_34933 = state_33552__$1;
(statearr_33564_34933[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (3))){
var inst_33550 = (state_33552[(2)]);
var state_33552__$1 = state_33552;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33552__$1,inst_33550);
} else {
if((state_val_33553 === (12))){
var inst_33527 = (state_33552[(10)]);
var state_33552__$1 = state_33552;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33552__$1,(14),inst_33527);
} else {
if((state_val_33553 === (2))){
var state_33552__$1 = state_33552;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33552__$1,(4),results);
} else {
if((state_val_33553 === (19))){
var state_33552__$1 = state_33552;
var statearr_33565_34934 = state_33552__$1;
(statearr_33565_34934[(2)] = null);

(statearr_33565_34934[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (11))){
var inst_33527 = (state_33552[(2)]);
var state_33552__$1 = (function (){var statearr_33566 = state_33552;
(statearr_33566[(10)] = inst_33527);

return statearr_33566;
})();
var statearr_33567_34937 = state_33552__$1;
(statearr_33567_34937[(2)] = null);

(statearr_33567_34937[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (9))){
var state_33552__$1 = state_33552;
var statearr_33568_34938 = state_33552__$1;
(statearr_33568_34938[(2)] = null);

(statearr_33568_34938[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (5))){
var state_33552__$1 = state_33552;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33569_34939 = state_33552__$1;
(statearr_33569_34939[(1)] = (8));

} else {
var statearr_33570_34940 = state_33552__$1;
(statearr_33570_34940[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (14))){
var inst_33532 = (state_33552[(11)]);
var inst_33530 = (state_33552[(8)]);
var inst_33530__$1 = (state_33552[(2)]);
var inst_33531 = (inst_33530__$1 == null);
var inst_33532__$1 = cljs.core.not(inst_33531);
var state_33552__$1 = (function (){var statearr_33571 = state_33552;
(statearr_33571[(11)] = inst_33532__$1);

(statearr_33571[(8)] = inst_33530__$1);

return statearr_33571;
})();
if(inst_33532__$1){
var statearr_33572_34941 = state_33552__$1;
(statearr_33572_34941[(1)] = (15));

} else {
var statearr_33573_34942 = state_33552__$1;
(statearr_33573_34942[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (16))){
var inst_33532 = (state_33552[(11)]);
var state_33552__$1 = state_33552;
var statearr_33574_34943 = state_33552__$1;
(statearr_33574_34943[(2)] = inst_33532);

(statearr_33574_34943[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (10))){
var inst_33524 = (state_33552[(2)]);
var state_33552__$1 = state_33552;
var statearr_33575_34944 = state_33552__$1;
(statearr_33575_34944[(2)] = inst_33524);

(statearr_33575_34944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (18))){
var inst_33535 = (state_33552[(2)]);
var state_33552__$1 = state_33552;
var statearr_33576_34945 = state_33552__$1;
(statearr_33576_34945[(2)] = inst_33535);

(statearr_33576_34945[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33553 === (8))){
var inst_33521 = cljs.core.async.close_BANG_(to);
var state_33552__$1 = state_33552;
var statearr_33577_34946 = state_33552__$1;
(statearr_33577_34946[(2)] = inst_33521);

(statearr_33577_34946[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33251__auto__,jobs,results,process,async))
;
return ((function (switch__33175__auto__,c__33251__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33176__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33176__auto____0 = (function (){
var statearr_33578 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33578[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33176__auto__);

(statearr_33578[(1)] = (1));

return statearr_33578;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33176__auto____1 = (function (state_33552){
while(true){
var ret_value__33177__auto__ = (function (){try{while(true){
var result__33178__auto__ = switch__33175__auto__(state_33552);
if(cljs.core.keyword_identical_QMARK_(result__33178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33178__auto__;
}
break;
}
}catch (e33579){if((e33579 instanceof Object)){
var ex__33179__auto__ = e33579;
var statearr_33580_34947 = state_33552;
(statearr_33580_34947[(5)] = ex__33179__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33579;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34948 = state_33552;
state_33552 = G__34948;
continue;
} else {
return ret_value__33177__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33176__auto__ = function(state_33552){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33176__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33176__auto____1.call(this,state_33552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33176__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33176__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33176__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33176__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33176__auto__;
})()
;})(switch__33175__auto__,c__33251__auto__,jobs,results,process,async))
})();
var state__33253__auto__ = (function (){var statearr_33581 = (f__33252__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33252__auto__.cljs$core$IFn$_invoke$arity$0() : f__33252__auto__.call(null));
(statearr_33581[(6)] = c__33251__auto__);

return statearr_33581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33253__auto__);
});})(c__33251__auto__,jobs,results,process,async))
);

return c__33251__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__33583 = arguments.length;
switch (G__33583) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__33585 = arguments.length;
switch (G__33585) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__33587 = arguments.length;
switch (G__33587) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__33251__auto___34954 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33251__auto___34954,tc,fc){
return (function (){
var f__33252__auto__ = (function (){var switch__33175__auto__ = ((function (c__33251__auto___34954,tc,fc){
return (function (state_33613){
var state_val_33614 = (state_33613[(1)]);
if((state_val_33614 === (7))){
var inst_33609 = (state_33613[(2)]);
var state_33613__$1 = state_33613;
var statearr_33615_34955 = state_33613__$1;
(statearr_33615_34955[(2)] = inst_33609);

(statearr_33615_34955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (1))){
var state_33613__$1 = state_33613;
var statearr_33616_34956 = state_33613__$1;
(statearr_33616_34956[(2)] = null);

(statearr_33616_34956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (4))){
var inst_33590 = (state_33613[(7)]);
var inst_33590__$1 = (state_33613[(2)]);
var inst_33591 = (inst_33590__$1 == null);
var state_33613__$1 = (function (){var statearr_33617 = state_33613;
(statearr_33617[(7)] = inst_33590__$1);

return statearr_33617;
})();
if(cljs.core.truth_(inst_33591)){
var statearr_33618_34957 = state_33613__$1;
(statearr_33618_34957[(1)] = (5));

} else {
var statearr_33619_34958 = state_33613__$1;
(statearr_33619_34958[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (13))){
var state_33613__$1 = state_33613;
var statearr_33620_34959 = state_33613__$1;
(statearr_33620_34959[(2)] = null);

(statearr_33620_34959[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (6))){
var inst_33590 = (state_33613[(7)]);
var inst_33596 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33590) : p.call(null,inst_33590));
var state_33613__$1 = state_33613;
if(cljs.core.truth_(inst_33596)){
var statearr_33621_34960 = state_33613__$1;
(statearr_33621_34960[(1)] = (9));

} else {
var statearr_33622_34961 = state_33613__$1;
(statearr_33622_34961[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (3))){
var inst_33611 = (state_33613[(2)]);
var state_33613__$1 = state_33613;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33613__$1,inst_33611);
} else {
if((state_val_33614 === (12))){
var state_33613__$1 = state_33613;
var statearr_33623_34962 = state_33613__$1;
(statearr_33623_34962[(2)] = null);

(statearr_33623_34962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (2))){
var state_33613__$1 = state_33613;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33613__$1,(4),ch);
} else {
if((state_val_33614 === (11))){
var inst_33590 = (state_33613[(7)]);
var inst_33600 = (state_33613[(2)]);
var state_33613__$1 = state_33613;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33613__$1,(8),inst_33600,inst_33590);
} else {
if((state_val_33614 === (9))){
var state_33613__$1 = state_33613;
var statearr_33624_34963 = state_33613__$1;
(statearr_33624_34963[(2)] = tc);

(statearr_33624_34963[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (5))){
var inst_33593 = cljs.core.async.close_BANG_(tc);
var inst_33594 = cljs.core.async.close_BANG_(fc);
var state_33613__$1 = (function (){var statearr_33625 = state_33613;
(statearr_33625[(8)] = inst_33593);

return statearr_33625;
})();
var statearr_33626_34964 = state_33613__$1;
(statearr_33626_34964[(2)] = inst_33594);

(statearr_33626_34964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (14))){
var inst_33607 = (state_33613[(2)]);
var state_33613__$1 = state_33613;
var statearr_33627_34965 = state_33613__$1;
(statearr_33627_34965[(2)] = inst_33607);

(statearr_33627_34965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (10))){
var state_33613__$1 = state_33613;
var statearr_33628_34966 = state_33613__$1;
(statearr_33628_34966[(2)] = fc);

(statearr_33628_34966[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33614 === (8))){
var inst_33602 = (state_33613[(2)]);
var state_33613__$1 = state_33613;
if(cljs.core.truth_(inst_33602)){
var statearr_33629_34971 = state_33613__$1;
(statearr_33629_34971[(1)] = (12));

} else {
var statearr_33630_34972 = state_33613__$1;
(statearr_33630_34972[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33251__auto___34954,tc,fc))
;
return ((function (switch__33175__auto__,c__33251__auto___34954,tc,fc){
return (function() {
var cljs$core$async$state_machine__33176__auto__ = null;
var cljs$core$async$state_machine__33176__auto____0 = (function (){
var statearr_33631 = [null,null,null,null,null,null,null,null,null];
(statearr_33631[(0)] = cljs$core$async$state_machine__33176__auto__);

(statearr_33631[(1)] = (1));

return statearr_33631;
});
var cljs$core$async$state_machine__33176__auto____1 = (function (state_33613){
while(true){
var ret_value__33177__auto__ = (function (){try{while(true){
var result__33178__auto__ = switch__33175__auto__(state_33613);
if(cljs.core.keyword_identical_QMARK_(result__33178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33178__auto__;
}
break;
}
}catch (e33632){if((e33632 instanceof Object)){
var ex__33179__auto__ = e33632;
var statearr_33633_34973 = state_33613;
(statearr_33633_34973[(5)] = ex__33179__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33632;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34975 = state_33613;
state_33613 = G__34975;
continue;
} else {
return ret_value__33177__auto__;
}
break;
}
});
cljs$core$async$state_machine__33176__auto__ = function(state_33613){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33176__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33176__auto____1.call(this,state_33613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33176__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33176__auto____0;
cljs$core$async$state_machine__33176__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33176__auto____1;
return cljs$core$async$state_machine__33176__auto__;
})()
;})(switch__33175__auto__,c__33251__auto___34954,tc,fc))
})();
var state__33253__auto__ = (function (){var statearr_33634 = (f__33252__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33252__auto__.cljs$core$IFn$_invoke$arity$0() : f__33252__auto__.call(null));
(statearr_33634[(6)] = c__33251__auto___34954);

return statearr_33634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33253__auto__);
});})(c__33251__auto___34954,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33251__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33251__auto__){
return (function (){
var f__33252__auto__ = (function (){var switch__33175__auto__ = ((function (c__33251__auto__){
return (function (state_33655){
var state_val_33656 = (state_33655[(1)]);
if((state_val_33656 === (7))){
var inst_33651 = (state_33655[(2)]);
var state_33655__$1 = state_33655;
var statearr_33657_34978 = state_33655__$1;
(statearr_33657_34978[(2)] = inst_33651);

(statearr_33657_34978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (1))){
var inst_33635 = init;
var state_33655__$1 = (function (){var statearr_33658 = state_33655;
(statearr_33658[(7)] = inst_33635);

return statearr_33658;
})();
var statearr_33659_34979 = state_33655__$1;
(statearr_33659_34979[(2)] = null);

(statearr_33659_34979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (4))){
var inst_33638 = (state_33655[(8)]);
var inst_33638__$1 = (state_33655[(2)]);
var inst_33639 = (inst_33638__$1 == null);
var state_33655__$1 = (function (){var statearr_33660 = state_33655;
(statearr_33660[(8)] = inst_33638__$1);

return statearr_33660;
})();
if(cljs.core.truth_(inst_33639)){
var statearr_33661_34980 = state_33655__$1;
(statearr_33661_34980[(1)] = (5));

} else {
var statearr_33662_34981 = state_33655__$1;
(statearr_33662_34981[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (6))){
var inst_33635 = (state_33655[(7)]);
var inst_33638 = (state_33655[(8)]);
var inst_33642 = (state_33655[(9)]);
var inst_33642__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33635,inst_33638) : f.call(null,inst_33635,inst_33638));
var inst_33643 = cljs.core.reduced_QMARK_(inst_33642__$1);
var state_33655__$1 = (function (){var statearr_33663 = state_33655;
(statearr_33663[(9)] = inst_33642__$1);

return statearr_33663;
})();
if(inst_33643){
var statearr_33664_34982 = state_33655__$1;
(statearr_33664_34982[(1)] = (8));

} else {
var statearr_33665_34983 = state_33655__$1;
(statearr_33665_34983[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (3))){
var inst_33653 = (state_33655[(2)]);
var state_33655__$1 = state_33655;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33655__$1,inst_33653);
} else {
if((state_val_33656 === (2))){
var state_33655__$1 = state_33655;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33655__$1,(4),ch);
} else {
if((state_val_33656 === (9))){
var inst_33642 = (state_33655[(9)]);
var inst_33635 = inst_33642;
var state_33655__$1 = (function (){var statearr_33666 = state_33655;
(statearr_33666[(7)] = inst_33635);

return statearr_33666;
})();
var statearr_33667_34987 = state_33655__$1;
(statearr_33667_34987[(2)] = null);

(statearr_33667_34987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (5))){
var inst_33635 = (state_33655[(7)]);
var state_33655__$1 = state_33655;
var statearr_33668_34988 = state_33655__$1;
(statearr_33668_34988[(2)] = inst_33635);

(statearr_33668_34988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (10))){
var inst_33649 = (state_33655[(2)]);
var state_33655__$1 = state_33655;
var statearr_33669_34990 = state_33655__$1;
(statearr_33669_34990[(2)] = inst_33649);

(statearr_33669_34990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33656 === (8))){
var inst_33642 = (state_33655[(9)]);
var inst_33645 = cljs.core.deref(inst_33642);
var state_33655__$1 = state_33655;
var statearr_33670_34991 = state_33655__$1;
(statearr_33670_34991[(2)] = inst_33645);

(statearr_33670_34991[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__33251__auto__))
;
return ((function (switch__33175__auto__,c__33251__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__33176__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33176__auto____0 = (function (){
var statearr_33671 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33671[(0)] = cljs$core$async$reduce_$_state_machine__33176__auto__);

(statearr_33671[(1)] = (1));

return statearr_33671;
});
var cljs$core$async$reduce_$_state_machine__33176__auto____1 = (function (state_33655){
while(true){
var ret_value__33177__auto__ = (function (){try{while(true){
var result__33178__auto__ = switch__33175__auto__(state_33655);
if(cljs.core.keyword_identical_QMARK_(result__33178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33178__auto__;
}
break;
}
}catch (e33672){if((e33672 instanceof Object)){
var ex__33179__auto__ = e33672;
var statearr_33673_34992 = state_33655;
(statearr_33673_34992[(5)] = ex__33179__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33672;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34994 = state_33655;
state_33655 = G__34994;
continue;
} else {
return ret_value__33177__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33176__auto__ = function(state_33655){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33176__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33176__auto____1.call(this,state_33655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33176__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33176__auto____0;
cljs$core$async$reduce_$_state_machine__33176__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33176__auto____1;
return cljs$core$async$reduce_$_state_machine__33176__auto__;
})()
;})(switch__33175__auto__,c__33251__auto__))
})();
var state__33253__auto__ = (function (){var statearr_33674 = (f__33252__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33252__auto__.cljs$core$IFn$_invoke$arity$0() : f__33252__auto__.call(null));
(statearr_33674[(6)] = c__33251__auto__);

return statearr_33674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33253__auto__);
});})(c__33251__auto__))
);

return c__33251__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__33251__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33251__auto__,f__$1){
return (function (){
var f__33252__auto__ = (function (){var switch__33175__auto__ = ((function (c__33251__auto__,f__$1){
return (function (state_33680){
var state_val_33681 = (state_33680[(1)]);
if((state_val_33681 === (1))){
var inst_33675 = cljs.core.async.reduce(f__$1,init,ch);
var state_33680__$1 = state_33680;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33680__$1,(2),inst_33675);
} else {
if((state_val_33681 === (2))){
var inst_33677 = (state_33680[(2)]);
var inst_33678 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33677) : f__$1.call(null,inst_33677));
var state_33680__$1 = state_33680;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33680__$1,inst_33678);
} else {
return null;
}
}
});})(c__33251__auto__,f__$1))
;
return ((function (switch__33175__auto__,c__33251__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__33176__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33176__auto____0 = (function (){
var statearr_33682 = [null,null,null,null,null,null,null];
(statearr_33682[(0)] = cljs$core$async$transduce_$_state_machine__33176__auto__);

(statearr_33682[(1)] = (1));

return statearr_33682;
});
var cljs$core$async$transduce_$_state_machine__33176__auto____1 = (function (state_33680){
while(true){
var ret_value__33177__auto__ = (function (){try{while(true){
var result__33178__auto__ = switch__33175__auto__(state_33680);
if(cljs.core.keyword_identical_QMARK_(result__33178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33178__auto__;
}
break;
}
}catch (e33683){if((e33683 instanceof Object)){
var ex__33179__auto__ = e33683;
var statearr_33684_34997 = state_33680;
(statearr_33684_34997[(5)] = ex__33179__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33680);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33683;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34999 = state_33680;
state_33680 = G__34999;
continue;
} else {
return ret_value__33177__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33176__auto__ = function(state_33680){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33176__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33176__auto____1.call(this,state_33680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33176__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33176__auto____0;
cljs$core$async$transduce_$_state_machine__33176__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33176__auto____1;
return cljs$core$async$transduce_$_state_machine__33176__auto__;
})()
;})(switch__33175__auto__,c__33251__auto__,f__$1))
})();
var state__33253__auto__ = (function (){var statearr_33685 = (f__33252__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33252__auto__.cljs$core$IFn$_invoke$arity$0() : f__33252__auto__.call(null));
(statearr_33685[(6)] = c__33251__auto__);

return statearr_33685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33253__auto__);
});})(c__33251__auto__,f__$1))
);

return c__33251__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__33687 = arguments.length;
switch (G__33687) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33251__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33251__auto__){
return (function (){
var f__33252__auto__ = (function (){var switch__33175__auto__ = ((function (c__33251__auto__){
return (function (state_33712){
var state_val_33713 = (state_33712[(1)]);
if((state_val_33713 === (7))){
var inst_33694 = (state_33712[(2)]);
var state_33712__$1 = state_33712;
var statearr_33714_35001 = state_33712__$1;
(statearr_33714_35001[(2)] = inst_33694);

(statearr_33714_35001[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33713 === (1))){
var inst_33688 = cljs.core.seq(coll);
var inst_33689 = inst_33688;
var state_33712__$1 = (function (){var statearr_33715 = state_33712;
(statearr_33715[(7)] = inst_33689);

return statearr_33715;
})();
var statearr_33716_35003 = state_33712__$1;
(statearr_33716_35003[(2)] = null);

(statearr_33716_35003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33713 === (4))){
var inst_33689 = (state_33712[(7)]);
var inst_33692 = cljs.core.first(inst_33689);
var state_33712__$1 = state_33712;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33712__$1,(7),ch,inst_33692);
} else {
if((state_val_33713 === (13))){
var inst_33706 = (state_33712[(2)]);
var state_33712__$1 = state_33712;
var statearr_33717_35005 = state_33712__$1;
(statearr_33717_35005[(2)] = inst_33706);

(statearr_33717_35005[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33713 === (6))){
var inst_33697 = (state_33712[(2)]);
var state_33712__$1 = state_33712;
if(cljs.core.truth_(inst_33697)){
var statearr_33718_35006 = state_33712__$1;
(statearr_33718_35006[(1)] = (8));

} else {
var statearr_33719_35007 = state_33712__$1;
(statearr_33719_35007[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33713 === (3))){
var inst_33710 = (state_33712[(2)]);
var state_33712__$1 = state_33712;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33712__$1,inst_33710);
} else {
if((state_val_33713 === (12))){
var state_33712__$1 = state_33712;
var statearr_33720_35008 = state_33712__$1;
(statearr_33720_35008[(2)] = null);

(statearr_33720_35008[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33713 === (2))){
var inst_33689 = (state_33712[(7)]);
var state_33712__$1 = state_33712;
if(cljs.core.truth_(inst_33689)){
var statearr_33721_35010 = state_33712__$1;
(statearr_33721_35010[(1)] = (4));

} else {
var statearr_33722_35011 = state_33712__$1;
(statearr_33722_35011[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33713 === (11))){
var inst_33703 = cljs.core.async.close_BANG_(ch);
var state_33712__$1 = state_33712;
var statearr_33723_35012 = state_33712__$1;
(statearr_33723_35012[(2)] = inst_33703);

(statearr_33723_35012[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33713 === (9))){
var state_33712__$1 = state_33712;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33724_35013 = state_33712__$1;
(statearr_33724_35013[(1)] = (11));

} else {
var statearr_33725_35014 = state_33712__$1;
(statearr_33725_35014[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33713 === (5))){
var inst_33689 = (state_33712[(7)]);
var state_33712__$1 = state_33712;
var statearr_33726_35017 = state_33712__$1;
(statearr_33726_35017[(2)] = inst_33689);

(statearr_33726_35017[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33713 === (10))){
var inst_33708 = (state_33712[(2)]);
var state_33712__$1 = state_33712;
var statearr_33727_35018 = state_33712__$1;
(statearr_33727_35018[(2)] = inst_33708);

(statearr_33727_35018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33713 === (8))){
var inst_33689 = (state_33712[(7)]);
var inst_33699 = cljs.core.next(inst_33689);
var inst_33689__$1 = inst_33699;
var state_33712__$1 = (function (){var statearr_33728 = state_33712;
(statearr_33728[(7)] = inst_33689__$1);

return statearr_33728;
})();
var statearr_33729_35019 = state_33712__$1;
(statearr_33729_35019[(2)] = null);

(statearr_33729_35019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33251__auto__))
;
return ((function (switch__33175__auto__,c__33251__auto__){
return (function() {
var cljs$core$async$state_machine__33176__auto__ = null;
var cljs$core$async$state_machine__33176__auto____0 = (function (){
var statearr_33730 = [null,null,null,null,null,null,null,null];
(statearr_33730[(0)] = cljs$core$async$state_machine__33176__auto__);

(statearr_33730[(1)] = (1));

return statearr_33730;
});
var cljs$core$async$state_machine__33176__auto____1 = (function (state_33712){
while(true){
var ret_value__33177__auto__ = (function (){try{while(true){
var result__33178__auto__ = switch__33175__auto__(state_33712);
if(cljs.core.keyword_identical_QMARK_(result__33178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33178__auto__;
}
break;
}
}catch (e33731){if((e33731 instanceof Object)){
var ex__33179__auto__ = e33731;
var statearr_33732_35020 = state_33712;
(statearr_33732_35020[(5)] = ex__33179__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33731;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35021 = state_33712;
state_33712 = G__35021;
continue;
} else {
return ret_value__33177__auto__;
}
break;
}
});
cljs$core$async$state_machine__33176__auto__ = function(state_33712){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33176__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33176__auto____1.call(this,state_33712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33176__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33176__auto____0;
cljs$core$async$state_machine__33176__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33176__auto____1;
return cljs$core$async$state_machine__33176__auto__;
})()
;})(switch__33175__auto__,c__33251__auto__))
})();
var state__33253__auto__ = (function (){var statearr_33733 = (f__33252__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33252__auto__.cljs$core$IFn$_invoke$arity$0() : f__33252__auto__.call(null));
(statearr_33733[(6)] = c__33251__auto__);

return statearr_33733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33253__auto__);
});})(c__33251__auto__))
);

return c__33251__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33734 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33734 = (function (ch,cs,meta33735){
this.ch = ch;
this.cs = cs;
this.meta33735 = meta33735;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33734.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33736,meta33735__$1){
var self__ = this;
var _33736__$1 = this;
return (new cljs.core.async.t_cljs$core$async33734(self__.ch,self__.cs,meta33735__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async33734.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33736){
var self__ = this;
var _33736__$1 = this;
return self__.meta33735;
});})(cs))
;

cljs.core.async.t_cljs$core$async33734.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33734.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async33734.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33734.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33734.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33734.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33734.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33735","meta33735",-2116085410,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async33734.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33734.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33734";

cljs.core.async.t_cljs$core$async33734.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async33734");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33734.
 */
cljs.core.async.__GT_t_cljs$core$async33734 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async33734(ch__$1,cs__$1,meta33735){
return (new cljs.core.async.t_cljs$core$async33734(ch__$1,cs__$1,meta33735));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async33734(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__33251__auto___35029 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33251__auto___35029,cs,m,dchan,dctr,done){
return (function (){
var f__33252__auto__ = (function (){var switch__33175__auto__ = ((function (c__33251__auto___35029,cs,m,dchan,dctr,done){
return (function (state_33871){
var state_val_33872 = (state_33871[(1)]);
if((state_val_33872 === (7))){
var inst_33867 = (state_33871[(2)]);
var state_33871__$1 = state_33871;
var statearr_33873_35030 = state_33871__$1;
(statearr_33873_35030[(2)] = inst_33867);

(statearr_33873_35030[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (20))){
var inst_33770 = (state_33871[(7)]);
var inst_33782 = cljs.core.first(inst_33770);
var inst_33783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33782,(0),null);
var inst_33784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33782,(1),null);
var state_33871__$1 = (function (){var statearr_33874 = state_33871;
(statearr_33874[(8)] = inst_33783);

return statearr_33874;
})();
if(cljs.core.truth_(inst_33784)){
var statearr_33875_35031 = state_33871__$1;
(statearr_33875_35031[(1)] = (22));

} else {
var statearr_33876_35032 = state_33871__$1;
(statearr_33876_35032[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (27))){
var inst_33812 = (state_33871[(9)]);
var inst_33739 = (state_33871[(10)]);
var inst_33819 = (state_33871[(11)]);
var inst_33814 = (state_33871[(12)]);
var inst_33819__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_33812,inst_33814);
var inst_33820 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33819__$1,inst_33739,done);
var state_33871__$1 = (function (){var statearr_33877 = state_33871;
(statearr_33877[(11)] = inst_33819__$1);

return statearr_33877;
})();
if(cljs.core.truth_(inst_33820)){
var statearr_33878_35033 = state_33871__$1;
(statearr_33878_35033[(1)] = (30));

} else {
var statearr_33879_35034 = state_33871__$1;
(statearr_33879_35034[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (1))){
var state_33871__$1 = state_33871;
var statearr_33880_35035 = state_33871__$1;
(statearr_33880_35035[(2)] = null);

(statearr_33880_35035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (24))){
var inst_33770 = (state_33871[(7)]);
var inst_33789 = (state_33871[(2)]);
var inst_33790 = cljs.core.next(inst_33770);
var inst_33748 = inst_33790;
var inst_33749 = null;
var inst_33750 = (0);
var inst_33751 = (0);
var state_33871__$1 = (function (){var statearr_33881 = state_33871;
(statearr_33881[(13)] = inst_33751);

(statearr_33881[(14)] = inst_33748);

(statearr_33881[(15)] = inst_33749);

(statearr_33881[(16)] = inst_33750);

(statearr_33881[(17)] = inst_33789);

return statearr_33881;
})();
var statearr_33882_35036 = state_33871__$1;
(statearr_33882_35036[(2)] = null);

(statearr_33882_35036[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (39))){
var state_33871__$1 = state_33871;
var statearr_33886_35037 = state_33871__$1;
(statearr_33886_35037[(2)] = null);

(statearr_33886_35037[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (4))){
var inst_33739 = (state_33871[(10)]);
var inst_33739__$1 = (state_33871[(2)]);
var inst_33740 = (inst_33739__$1 == null);
var state_33871__$1 = (function (){var statearr_33887 = state_33871;
(statearr_33887[(10)] = inst_33739__$1);

return statearr_33887;
})();
if(cljs.core.truth_(inst_33740)){
var statearr_33888_35038 = state_33871__$1;
(statearr_33888_35038[(1)] = (5));

} else {
var statearr_33889_35039 = state_33871__$1;
(statearr_33889_35039[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (15))){
var inst_33751 = (state_33871[(13)]);
var inst_33748 = (state_33871[(14)]);
var inst_33749 = (state_33871[(15)]);
var inst_33750 = (state_33871[(16)]);
var inst_33766 = (state_33871[(2)]);
var inst_33767 = (inst_33751 + (1));
var tmp33883 = inst_33748;
var tmp33884 = inst_33749;
var tmp33885 = inst_33750;
var inst_33748__$1 = tmp33883;
var inst_33749__$1 = tmp33884;
var inst_33750__$1 = tmp33885;
var inst_33751__$1 = inst_33767;
var state_33871__$1 = (function (){var statearr_33890 = state_33871;
(statearr_33890[(13)] = inst_33751__$1);

(statearr_33890[(14)] = inst_33748__$1);

(statearr_33890[(15)] = inst_33749__$1);

(statearr_33890[(16)] = inst_33750__$1);

(statearr_33890[(18)] = inst_33766);

return statearr_33890;
})();
var statearr_33891_35042 = state_33871__$1;
(statearr_33891_35042[(2)] = null);

(statearr_33891_35042[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (21))){
var inst_33793 = (state_33871[(2)]);
var state_33871__$1 = state_33871;
var statearr_33895_35045 = state_33871__$1;
(statearr_33895_35045[(2)] = inst_33793);

(statearr_33895_35045[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (31))){
var inst_33819 = (state_33871[(11)]);
var inst_33823 = done(null);
var inst_33824 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33819);
var state_33871__$1 = (function (){var statearr_33896 = state_33871;
(statearr_33896[(19)] = inst_33823);

return statearr_33896;
})();
var statearr_33897_35047 = state_33871__$1;
(statearr_33897_35047[(2)] = inst_33824);

(statearr_33897_35047[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (32))){
var inst_33811 = (state_33871[(20)]);
var inst_33813 = (state_33871[(21)]);
var inst_33812 = (state_33871[(9)]);
var inst_33814 = (state_33871[(12)]);
var inst_33826 = (state_33871[(2)]);
var inst_33827 = (inst_33814 + (1));
var tmp33892 = inst_33811;
var tmp33893 = inst_33813;
var tmp33894 = inst_33812;
var inst_33811__$1 = tmp33892;
var inst_33812__$1 = tmp33894;
var inst_33813__$1 = tmp33893;
var inst_33814__$1 = inst_33827;
var state_33871__$1 = (function (){var statearr_33898 = state_33871;
(statearr_33898[(22)] = inst_33826);

(statearr_33898[(20)] = inst_33811__$1);

(statearr_33898[(21)] = inst_33813__$1);

(statearr_33898[(9)] = inst_33812__$1);

(statearr_33898[(12)] = inst_33814__$1);

return statearr_33898;
})();
var statearr_33899_35049 = state_33871__$1;
(statearr_33899_35049[(2)] = null);

(statearr_33899_35049[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (40))){
var inst_33839 = (state_33871[(23)]);
var inst_33843 = done(null);
var inst_33844 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33839);
var state_33871__$1 = (function (){var statearr_33900 = state_33871;
(statearr_33900[(24)] = inst_33843);

return statearr_33900;
})();
var statearr_33901_35052 = state_33871__$1;
(statearr_33901_35052[(2)] = inst_33844);

(statearr_33901_35052[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (33))){
var inst_33830 = (state_33871[(25)]);
var inst_33832 = cljs.core.chunked_seq_QMARK_(inst_33830);
var state_33871__$1 = state_33871;
if(inst_33832){
var statearr_33902_35053 = state_33871__$1;
(statearr_33902_35053[(1)] = (36));

} else {
var statearr_33903_35054 = state_33871__$1;
(statearr_33903_35054[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (13))){
var inst_33760 = (state_33871[(26)]);
var inst_33763 = cljs.core.async.close_BANG_(inst_33760);
var state_33871__$1 = state_33871;
var statearr_33904_35055 = state_33871__$1;
(statearr_33904_35055[(2)] = inst_33763);

(statearr_33904_35055[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (22))){
var inst_33783 = (state_33871[(8)]);
var inst_33786 = cljs.core.async.close_BANG_(inst_33783);
var state_33871__$1 = state_33871;
var statearr_33905_35056 = state_33871__$1;
(statearr_33905_35056[(2)] = inst_33786);

(statearr_33905_35056[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (36))){
var inst_33830 = (state_33871[(25)]);
var inst_33834 = cljs.core.chunk_first(inst_33830);
var inst_33835 = cljs.core.chunk_rest(inst_33830);
var inst_33836 = cljs.core.count(inst_33834);
var inst_33811 = inst_33835;
var inst_33812 = inst_33834;
var inst_33813 = inst_33836;
var inst_33814 = (0);
var state_33871__$1 = (function (){var statearr_33906 = state_33871;
(statearr_33906[(20)] = inst_33811);

(statearr_33906[(21)] = inst_33813);

(statearr_33906[(9)] = inst_33812);

(statearr_33906[(12)] = inst_33814);

return statearr_33906;
})();
var statearr_33907_35058 = state_33871__$1;
(statearr_33907_35058[(2)] = null);

(statearr_33907_35058[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (41))){
var inst_33830 = (state_33871[(25)]);
var inst_33846 = (state_33871[(2)]);
var inst_33847 = cljs.core.next(inst_33830);
var inst_33811 = inst_33847;
var inst_33812 = null;
var inst_33813 = (0);
var inst_33814 = (0);
var state_33871__$1 = (function (){var statearr_33908 = state_33871;
(statearr_33908[(20)] = inst_33811);

(statearr_33908[(27)] = inst_33846);

(statearr_33908[(21)] = inst_33813);

(statearr_33908[(9)] = inst_33812);

(statearr_33908[(12)] = inst_33814);

return statearr_33908;
})();
var statearr_33909_35059 = state_33871__$1;
(statearr_33909_35059[(2)] = null);

(statearr_33909_35059[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (43))){
var state_33871__$1 = state_33871;
var statearr_33910_35060 = state_33871__$1;
(statearr_33910_35060[(2)] = null);

(statearr_33910_35060[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (29))){
var inst_33855 = (state_33871[(2)]);
var state_33871__$1 = state_33871;
var statearr_33911_35061 = state_33871__$1;
(statearr_33911_35061[(2)] = inst_33855);

(statearr_33911_35061[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (44))){
var inst_33864 = (state_33871[(2)]);
var state_33871__$1 = (function (){var statearr_33912 = state_33871;
(statearr_33912[(28)] = inst_33864);

return statearr_33912;
})();
var statearr_33913_35062 = state_33871__$1;
(statearr_33913_35062[(2)] = null);

(statearr_33913_35062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (6))){
var inst_33803 = (state_33871[(29)]);
var inst_33802 = cljs.core.deref(cs);
var inst_33803__$1 = cljs.core.keys(inst_33802);
var inst_33804 = cljs.core.count(inst_33803__$1);
var inst_33805 = cljs.core.reset_BANG_(dctr,inst_33804);
var inst_33810 = cljs.core.seq(inst_33803__$1);
var inst_33811 = inst_33810;
var inst_33812 = null;
var inst_33813 = (0);
var inst_33814 = (0);
var state_33871__$1 = (function (){var statearr_33914 = state_33871;
(statearr_33914[(20)] = inst_33811);

(statearr_33914[(30)] = inst_33805);

(statearr_33914[(21)] = inst_33813);

(statearr_33914[(9)] = inst_33812);

(statearr_33914[(29)] = inst_33803__$1);

(statearr_33914[(12)] = inst_33814);

return statearr_33914;
})();
var statearr_33915_35063 = state_33871__$1;
(statearr_33915_35063[(2)] = null);

(statearr_33915_35063[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (28))){
var inst_33811 = (state_33871[(20)]);
var inst_33830 = (state_33871[(25)]);
var inst_33830__$1 = cljs.core.seq(inst_33811);
var state_33871__$1 = (function (){var statearr_33916 = state_33871;
(statearr_33916[(25)] = inst_33830__$1);

return statearr_33916;
})();
if(inst_33830__$1){
var statearr_33917_35064 = state_33871__$1;
(statearr_33917_35064[(1)] = (33));

} else {
var statearr_33918_35065 = state_33871__$1;
(statearr_33918_35065[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (25))){
var inst_33813 = (state_33871[(21)]);
var inst_33814 = (state_33871[(12)]);
var inst_33816 = (inst_33814 < inst_33813);
var inst_33817 = inst_33816;
var state_33871__$1 = state_33871;
if(cljs.core.truth_(inst_33817)){
var statearr_33919_35066 = state_33871__$1;
(statearr_33919_35066[(1)] = (27));

} else {
var statearr_33920_35067 = state_33871__$1;
(statearr_33920_35067[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (34))){
var state_33871__$1 = state_33871;
var statearr_33921_35068 = state_33871__$1;
(statearr_33921_35068[(2)] = null);

(statearr_33921_35068[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (17))){
var state_33871__$1 = state_33871;
var statearr_33922_35069 = state_33871__$1;
(statearr_33922_35069[(2)] = null);

(statearr_33922_35069[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (3))){
var inst_33869 = (state_33871[(2)]);
var state_33871__$1 = state_33871;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33871__$1,inst_33869);
} else {
if((state_val_33872 === (12))){
var inst_33798 = (state_33871[(2)]);
var state_33871__$1 = state_33871;
var statearr_33923_35070 = state_33871__$1;
(statearr_33923_35070[(2)] = inst_33798);

(statearr_33923_35070[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (2))){
var state_33871__$1 = state_33871;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33871__$1,(4),ch);
} else {
if((state_val_33872 === (23))){
var state_33871__$1 = state_33871;
var statearr_33924_35071 = state_33871__$1;
(statearr_33924_35071[(2)] = null);

(statearr_33924_35071[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (35))){
var inst_33853 = (state_33871[(2)]);
var state_33871__$1 = state_33871;
var statearr_33925_35072 = state_33871__$1;
(statearr_33925_35072[(2)] = inst_33853);

(statearr_33925_35072[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (19))){
var inst_33770 = (state_33871[(7)]);
var inst_33774 = cljs.core.chunk_first(inst_33770);
var inst_33775 = cljs.core.chunk_rest(inst_33770);
var inst_33776 = cljs.core.count(inst_33774);
var inst_33748 = inst_33775;
var inst_33749 = inst_33774;
var inst_33750 = inst_33776;
var inst_33751 = (0);
var state_33871__$1 = (function (){var statearr_33926 = state_33871;
(statearr_33926[(13)] = inst_33751);

(statearr_33926[(14)] = inst_33748);

(statearr_33926[(15)] = inst_33749);

(statearr_33926[(16)] = inst_33750);

return statearr_33926;
})();
var statearr_33927_35073 = state_33871__$1;
(statearr_33927_35073[(2)] = null);

(statearr_33927_35073[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (11))){
var inst_33770 = (state_33871[(7)]);
var inst_33748 = (state_33871[(14)]);
var inst_33770__$1 = cljs.core.seq(inst_33748);
var state_33871__$1 = (function (){var statearr_33928 = state_33871;
(statearr_33928[(7)] = inst_33770__$1);

return statearr_33928;
})();
if(inst_33770__$1){
var statearr_33929_35074 = state_33871__$1;
(statearr_33929_35074[(1)] = (16));

} else {
var statearr_33930_35075 = state_33871__$1;
(statearr_33930_35075[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (9))){
var inst_33800 = (state_33871[(2)]);
var state_33871__$1 = state_33871;
var statearr_33931_35080 = state_33871__$1;
(statearr_33931_35080[(2)] = inst_33800);

(statearr_33931_35080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (5))){
var inst_33746 = cljs.core.deref(cs);
var inst_33747 = cljs.core.seq(inst_33746);
var inst_33748 = inst_33747;
var inst_33749 = null;
var inst_33750 = (0);
var inst_33751 = (0);
var state_33871__$1 = (function (){var statearr_33932 = state_33871;
(statearr_33932[(13)] = inst_33751);

(statearr_33932[(14)] = inst_33748);

(statearr_33932[(15)] = inst_33749);

(statearr_33932[(16)] = inst_33750);

return statearr_33932;
})();
var statearr_33933_35081 = state_33871__$1;
(statearr_33933_35081[(2)] = null);

(statearr_33933_35081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (14))){
var state_33871__$1 = state_33871;
var statearr_33934_35085 = state_33871__$1;
(statearr_33934_35085[(2)] = null);

(statearr_33934_35085[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (45))){
var inst_33861 = (state_33871[(2)]);
var state_33871__$1 = state_33871;
var statearr_33935_35086 = state_33871__$1;
(statearr_33935_35086[(2)] = inst_33861);

(statearr_33935_35086[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (26))){
var inst_33803 = (state_33871[(29)]);
var inst_33857 = (state_33871[(2)]);
var inst_33858 = cljs.core.seq(inst_33803);
var state_33871__$1 = (function (){var statearr_33936 = state_33871;
(statearr_33936[(31)] = inst_33857);

return statearr_33936;
})();
if(inst_33858){
var statearr_33937_35087 = state_33871__$1;
(statearr_33937_35087[(1)] = (42));

} else {
var statearr_33938_35088 = state_33871__$1;
(statearr_33938_35088[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (16))){
var inst_33770 = (state_33871[(7)]);
var inst_33772 = cljs.core.chunked_seq_QMARK_(inst_33770);
var state_33871__$1 = state_33871;
if(inst_33772){
var statearr_33939_35089 = state_33871__$1;
(statearr_33939_35089[(1)] = (19));

} else {
var statearr_33940_35090 = state_33871__$1;
(statearr_33940_35090[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (38))){
var inst_33850 = (state_33871[(2)]);
var state_33871__$1 = state_33871;
var statearr_33941_35091 = state_33871__$1;
(statearr_33941_35091[(2)] = inst_33850);

(statearr_33941_35091[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (30))){
var state_33871__$1 = state_33871;
var statearr_33942_35092 = state_33871__$1;
(statearr_33942_35092[(2)] = null);

(statearr_33942_35092[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (10))){
var inst_33751 = (state_33871[(13)]);
var inst_33749 = (state_33871[(15)]);
var inst_33759 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_33749,inst_33751);
var inst_33760 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33759,(0),null);
var inst_33761 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33759,(1),null);
var state_33871__$1 = (function (){var statearr_33943 = state_33871;
(statearr_33943[(26)] = inst_33760);

return statearr_33943;
})();
if(cljs.core.truth_(inst_33761)){
var statearr_33944_35093 = state_33871__$1;
(statearr_33944_35093[(1)] = (13));

} else {
var statearr_33945_35097 = state_33871__$1;
(statearr_33945_35097[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (18))){
var inst_33796 = (state_33871[(2)]);
var state_33871__$1 = state_33871;
var statearr_33946_35098 = state_33871__$1;
(statearr_33946_35098[(2)] = inst_33796);

(statearr_33946_35098[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (42))){
var state_33871__$1 = state_33871;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33871__$1,(45),dchan);
} else {
if((state_val_33872 === (37))){
var inst_33839 = (state_33871[(23)]);
var inst_33830 = (state_33871[(25)]);
var inst_33739 = (state_33871[(10)]);
var inst_33839__$1 = cljs.core.first(inst_33830);
var inst_33840 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33839__$1,inst_33739,done);
var state_33871__$1 = (function (){var statearr_33947 = state_33871;
(statearr_33947[(23)] = inst_33839__$1);

return statearr_33947;
})();
if(cljs.core.truth_(inst_33840)){
var statearr_33948_35102 = state_33871__$1;
(statearr_33948_35102[(1)] = (39));

} else {
var statearr_33949_35103 = state_33871__$1;
(statearr_33949_35103[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33872 === (8))){
var inst_33751 = (state_33871[(13)]);
var inst_33750 = (state_33871[(16)]);
var inst_33753 = (inst_33751 < inst_33750);
var inst_33754 = inst_33753;
var state_33871__$1 = state_33871;
if(cljs.core.truth_(inst_33754)){
var statearr_33950_35104 = state_33871__$1;
(statearr_33950_35104[(1)] = (10));

} else {
var statearr_33951_35105 = state_33871__$1;
(statearr_33951_35105[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33251__auto___35029,cs,m,dchan,dctr,done))
;
return ((function (switch__33175__auto__,c__33251__auto___35029,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33176__auto__ = null;
var cljs$core$async$mult_$_state_machine__33176__auto____0 = (function (){
var statearr_33952 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33952[(0)] = cljs$core$async$mult_$_state_machine__33176__auto__);

(statearr_33952[(1)] = (1));

return statearr_33952;
});
var cljs$core$async$mult_$_state_machine__33176__auto____1 = (function (state_33871){
while(true){
var ret_value__33177__auto__ = (function (){try{while(true){
var result__33178__auto__ = switch__33175__auto__(state_33871);
if(cljs.core.keyword_identical_QMARK_(result__33178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33178__auto__;
}
break;
}
}catch (e33953){if((e33953 instanceof Object)){
var ex__33179__auto__ = e33953;
var statearr_33954_35133 = state_33871;
(statearr_33954_35133[(5)] = ex__33179__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33953;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35134 = state_33871;
state_33871 = G__35134;
continue;
} else {
return ret_value__33177__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33176__auto__ = function(state_33871){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33176__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33176__auto____1.call(this,state_33871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33176__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33176__auto____0;
cljs$core$async$mult_$_state_machine__33176__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33176__auto____1;
return cljs$core$async$mult_$_state_machine__33176__auto__;
})()
;})(switch__33175__auto__,c__33251__auto___35029,cs,m,dchan,dctr,done))
})();
var state__33253__auto__ = (function (){var statearr_33955 = (f__33252__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33252__auto__.cljs$core$IFn$_invoke$arity$0() : f__33252__auto__.call(null));
(statearr_33955[(6)] = c__33251__auto___35029);

return statearr_33955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33253__auto__);
});})(c__33251__auto___35029,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__33957 = arguments.length;
switch (G__33957) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35136 = arguments.length;
var i__4731__auto___35137 = (0);
while(true){
if((i__4731__auto___35137 < len__4730__auto___35136)){
args__4736__auto__.push((arguments[i__4731__auto___35137]));

var G__35138 = (i__4731__auto___35137 + (1));
i__4731__auto___35137 = G__35138;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33962){
var map__33963 = p__33962;
var map__33963__$1 = (((((!((map__33963 == null))))?(((((map__33963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33963):map__33963);
var opts = map__33963__$1;
var statearr_33965_35139 = state;
(statearr_33965_35139[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts(((function (map__33963,map__33963__$1,opts){
return (function (val){
var statearr_33966_35140 = state;
(statearr_33966_35140[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__33963,map__33963__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_33967_35141 = state;
(statearr_33967_35141[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33958){
var G__33959 = cljs.core.first(seq33958);
var seq33958__$1 = cljs.core.next(seq33958);
var G__33960 = cljs.core.first(seq33958__$1);
var seq33958__$2 = cljs.core.next(seq33958__$1);
var G__33961 = cljs.core.first(seq33958__$2);
var seq33958__$3 = cljs.core.next(seq33958__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33959,G__33960,G__33961,seq33958__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33968 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33968 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33969){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33969 = meta33969;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33968.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33970,meta33969__$1){
var self__ = this;
var _33970__$1 = this;
return (new cljs.core.async.t_cljs$core$async33968(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33969__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33968.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33970){
var self__ = this;
var _33970__$1 = this;
return self__.meta33969;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33968.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33968.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33968.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33968.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33968.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33968.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33968.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33968.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33968.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33969","meta33969",-1180131842,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33968.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33968.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33968";

cljs.core.async.t_cljs$core$async33968.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async33968");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33968.
 */
cljs.core.async.__GT_t_cljs$core$async33968 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async33968(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33969){
return (new cljs.core.async.t_cljs$core$async33968(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33969));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async33968(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33251__auto___35142 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33251__auto___35142,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33252__auto__ = (function (){var switch__33175__auto__ = ((function (c__33251__auto___35142,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_34072){
var state_val_34073 = (state_34072[(1)]);
if((state_val_34073 === (7))){
var inst_33987 = (state_34072[(2)]);
var state_34072__$1 = state_34072;
var statearr_34074_35143 = state_34072__$1;
(statearr_34074_35143[(2)] = inst_33987);

(statearr_34074_35143[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (20))){
var inst_33999 = (state_34072[(7)]);
var state_34072__$1 = state_34072;
var statearr_34075_35175 = state_34072__$1;
(statearr_34075_35175[(2)] = inst_33999);

(statearr_34075_35175[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (27))){
var state_34072__$1 = state_34072;
var statearr_34076_35176 = state_34072__$1;
(statearr_34076_35176[(2)] = null);

(statearr_34076_35176[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (1))){
var inst_33974 = (state_34072[(8)]);
var inst_33974__$1 = calc_state();
var inst_33976 = (inst_33974__$1 == null);
var inst_33977 = cljs.core.not(inst_33976);
var state_34072__$1 = (function (){var statearr_34077 = state_34072;
(statearr_34077[(8)] = inst_33974__$1);

return statearr_34077;
})();
if(inst_33977){
var statearr_34078_35177 = state_34072__$1;
(statearr_34078_35177[(1)] = (2));

} else {
var statearr_34079_35178 = state_34072__$1;
(statearr_34079_35178[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (24))){
var inst_34032 = (state_34072[(9)]);
var inst_34046 = (state_34072[(10)]);
var inst_34023 = (state_34072[(11)]);
var inst_34046__$1 = (inst_34023.cljs$core$IFn$_invoke$arity$1 ? inst_34023.cljs$core$IFn$_invoke$arity$1(inst_34032) : inst_34023.call(null,inst_34032));
var state_34072__$1 = (function (){var statearr_34080 = state_34072;
(statearr_34080[(10)] = inst_34046__$1);

return statearr_34080;
})();
if(cljs.core.truth_(inst_34046__$1)){
var statearr_34081_35179 = state_34072__$1;
(statearr_34081_35179[(1)] = (29));

} else {
var statearr_34082_35180 = state_34072__$1;
(statearr_34082_35180[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (4))){
var inst_33990 = (state_34072[(2)]);
var state_34072__$1 = state_34072;
if(cljs.core.truth_(inst_33990)){
var statearr_34083_35181 = state_34072__$1;
(statearr_34083_35181[(1)] = (8));

} else {
var statearr_34084_35182 = state_34072__$1;
(statearr_34084_35182[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (15))){
var inst_34017 = (state_34072[(2)]);
var state_34072__$1 = state_34072;
if(cljs.core.truth_(inst_34017)){
var statearr_34085_35183 = state_34072__$1;
(statearr_34085_35183[(1)] = (19));

} else {
var statearr_34086_35184 = state_34072__$1;
(statearr_34086_35184[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (21))){
var inst_34022 = (state_34072[(12)]);
var inst_34022__$1 = (state_34072[(2)]);
var inst_34023 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34022__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34024 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34022__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34025 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34022__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34072__$1 = (function (){var statearr_34087 = state_34072;
(statearr_34087[(13)] = inst_34024);

(statearr_34087[(12)] = inst_34022__$1);

(statearr_34087[(11)] = inst_34023);

return statearr_34087;
})();
return cljs.core.async.ioc_alts_BANG_(state_34072__$1,(22),inst_34025);
} else {
if((state_val_34073 === (31))){
var inst_34054 = (state_34072[(2)]);
var state_34072__$1 = state_34072;
if(cljs.core.truth_(inst_34054)){
var statearr_34088_35185 = state_34072__$1;
(statearr_34088_35185[(1)] = (32));

} else {
var statearr_34089_35186 = state_34072__$1;
(statearr_34089_35186[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (32))){
var inst_34031 = (state_34072[(14)]);
var state_34072__$1 = state_34072;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34072__$1,(35),out,inst_34031);
} else {
if((state_val_34073 === (33))){
var inst_34022 = (state_34072[(12)]);
var inst_33999 = inst_34022;
var state_34072__$1 = (function (){var statearr_34090 = state_34072;
(statearr_34090[(7)] = inst_33999);

return statearr_34090;
})();
var statearr_34091_35187 = state_34072__$1;
(statearr_34091_35187[(2)] = null);

(statearr_34091_35187[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (13))){
var inst_33999 = (state_34072[(7)]);
var inst_34006 = inst_33999.cljs$lang$protocol_mask$partition0$;
var inst_34007 = (inst_34006 & (64));
var inst_34008 = inst_33999.cljs$core$ISeq$;
var inst_34009 = (cljs.core.PROTOCOL_SENTINEL === inst_34008);
var inst_34010 = ((inst_34007) || (inst_34009));
var state_34072__$1 = state_34072;
if(cljs.core.truth_(inst_34010)){
var statearr_34092_35188 = state_34072__$1;
(statearr_34092_35188[(1)] = (16));

} else {
var statearr_34093_35189 = state_34072__$1;
(statearr_34093_35189[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (22))){
var inst_34032 = (state_34072[(9)]);
var inst_34031 = (state_34072[(14)]);
var inst_34030 = (state_34072[(2)]);
var inst_34031__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34030,(0),null);
var inst_34032__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34030,(1),null);
var inst_34033 = (inst_34031__$1 == null);
var inst_34034 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34032__$1,change);
var inst_34035 = ((inst_34033) || (inst_34034));
var state_34072__$1 = (function (){var statearr_34094 = state_34072;
(statearr_34094[(9)] = inst_34032__$1);

(statearr_34094[(14)] = inst_34031__$1);

return statearr_34094;
})();
if(cljs.core.truth_(inst_34035)){
var statearr_34095_35190 = state_34072__$1;
(statearr_34095_35190[(1)] = (23));

} else {
var statearr_34096_35191 = state_34072__$1;
(statearr_34096_35191[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (36))){
var inst_34022 = (state_34072[(12)]);
var inst_33999 = inst_34022;
var state_34072__$1 = (function (){var statearr_34097 = state_34072;
(statearr_34097[(7)] = inst_33999);

return statearr_34097;
})();
var statearr_34098_35192 = state_34072__$1;
(statearr_34098_35192[(2)] = null);

(statearr_34098_35192[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (29))){
var inst_34046 = (state_34072[(10)]);
var state_34072__$1 = state_34072;
var statearr_34099_35193 = state_34072__$1;
(statearr_34099_35193[(2)] = inst_34046);

(statearr_34099_35193[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (6))){
var state_34072__$1 = state_34072;
var statearr_34100_35194 = state_34072__$1;
(statearr_34100_35194[(2)] = false);

(statearr_34100_35194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (28))){
var inst_34042 = (state_34072[(2)]);
var inst_34043 = calc_state();
var inst_33999 = inst_34043;
var state_34072__$1 = (function (){var statearr_34101 = state_34072;
(statearr_34101[(7)] = inst_33999);

(statearr_34101[(15)] = inst_34042);

return statearr_34101;
})();
var statearr_34102_35195 = state_34072__$1;
(statearr_34102_35195[(2)] = null);

(statearr_34102_35195[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (25))){
var inst_34068 = (state_34072[(2)]);
var state_34072__$1 = state_34072;
var statearr_34103_35196 = state_34072__$1;
(statearr_34103_35196[(2)] = inst_34068);

(statearr_34103_35196[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (34))){
var inst_34066 = (state_34072[(2)]);
var state_34072__$1 = state_34072;
var statearr_34104_35197 = state_34072__$1;
(statearr_34104_35197[(2)] = inst_34066);

(statearr_34104_35197[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (17))){
var state_34072__$1 = state_34072;
var statearr_34105_35198 = state_34072__$1;
(statearr_34105_35198[(2)] = false);

(statearr_34105_35198[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (3))){
var state_34072__$1 = state_34072;
var statearr_34106_35199 = state_34072__$1;
(statearr_34106_35199[(2)] = false);

(statearr_34106_35199[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (12))){
var inst_34070 = (state_34072[(2)]);
var state_34072__$1 = state_34072;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34072__$1,inst_34070);
} else {
if((state_val_34073 === (2))){
var inst_33974 = (state_34072[(8)]);
var inst_33979 = inst_33974.cljs$lang$protocol_mask$partition0$;
var inst_33980 = (inst_33979 & (64));
var inst_33981 = inst_33974.cljs$core$ISeq$;
var inst_33982 = (cljs.core.PROTOCOL_SENTINEL === inst_33981);
var inst_33983 = ((inst_33980) || (inst_33982));
var state_34072__$1 = state_34072;
if(cljs.core.truth_(inst_33983)){
var statearr_34107_35200 = state_34072__$1;
(statearr_34107_35200[(1)] = (5));

} else {
var statearr_34108_35201 = state_34072__$1;
(statearr_34108_35201[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (23))){
var inst_34031 = (state_34072[(14)]);
var inst_34037 = (inst_34031 == null);
var state_34072__$1 = state_34072;
if(cljs.core.truth_(inst_34037)){
var statearr_34109_35202 = state_34072__$1;
(statearr_34109_35202[(1)] = (26));

} else {
var statearr_34110_35203 = state_34072__$1;
(statearr_34110_35203[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (35))){
var inst_34057 = (state_34072[(2)]);
var state_34072__$1 = state_34072;
if(cljs.core.truth_(inst_34057)){
var statearr_34111_35204 = state_34072__$1;
(statearr_34111_35204[(1)] = (36));

} else {
var statearr_34112_35205 = state_34072__$1;
(statearr_34112_35205[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (19))){
var inst_33999 = (state_34072[(7)]);
var inst_34019 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_33999);
var state_34072__$1 = state_34072;
var statearr_34113_35206 = state_34072__$1;
(statearr_34113_35206[(2)] = inst_34019);

(statearr_34113_35206[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (11))){
var inst_33999 = (state_34072[(7)]);
var inst_34003 = (inst_33999 == null);
var inst_34004 = cljs.core.not(inst_34003);
var state_34072__$1 = state_34072;
if(inst_34004){
var statearr_34114_35207 = state_34072__$1;
(statearr_34114_35207[(1)] = (13));

} else {
var statearr_34115_35208 = state_34072__$1;
(statearr_34115_35208[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (9))){
var inst_33974 = (state_34072[(8)]);
var state_34072__$1 = state_34072;
var statearr_34116_35209 = state_34072__$1;
(statearr_34116_35209[(2)] = inst_33974);

(statearr_34116_35209[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (5))){
var state_34072__$1 = state_34072;
var statearr_34117_35210 = state_34072__$1;
(statearr_34117_35210[(2)] = true);

(statearr_34117_35210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (14))){
var state_34072__$1 = state_34072;
var statearr_34118_35211 = state_34072__$1;
(statearr_34118_35211[(2)] = false);

(statearr_34118_35211[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (26))){
var inst_34032 = (state_34072[(9)]);
var inst_34039 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_34032);
var state_34072__$1 = state_34072;
var statearr_34119_35212 = state_34072__$1;
(statearr_34119_35212[(2)] = inst_34039);

(statearr_34119_35212[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (16))){
var state_34072__$1 = state_34072;
var statearr_34120_35213 = state_34072__$1;
(statearr_34120_35213[(2)] = true);

(statearr_34120_35213[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (38))){
var inst_34062 = (state_34072[(2)]);
var state_34072__$1 = state_34072;
var statearr_34121_35214 = state_34072__$1;
(statearr_34121_35214[(2)] = inst_34062);

(statearr_34121_35214[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (30))){
var inst_34032 = (state_34072[(9)]);
var inst_34024 = (state_34072[(13)]);
var inst_34023 = (state_34072[(11)]);
var inst_34049 = cljs.core.empty_QMARK_(inst_34023);
var inst_34050 = (inst_34024.cljs$core$IFn$_invoke$arity$1 ? inst_34024.cljs$core$IFn$_invoke$arity$1(inst_34032) : inst_34024.call(null,inst_34032));
var inst_34051 = cljs.core.not(inst_34050);
var inst_34052 = ((inst_34049) && (inst_34051));
var state_34072__$1 = state_34072;
var statearr_34122_35215 = state_34072__$1;
(statearr_34122_35215[(2)] = inst_34052);

(statearr_34122_35215[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (10))){
var inst_33974 = (state_34072[(8)]);
var inst_33995 = (state_34072[(2)]);
var inst_33996 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33995,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33997 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33995,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33998 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33995,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33999 = inst_33974;
var state_34072__$1 = (function (){var statearr_34123 = state_34072;
(statearr_34123[(7)] = inst_33999);

(statearr_34123[(16)] = inst_33998);

(statearr_34123[(17)] = inst_33996);

(statearr_34123[(18)] = inst_33997);

return statearr_34123;
})();
var statearr_34124_35216 = state_34072__$1;
(statearr_34124_35216[(2)] = null);

(statearr_34124_35216[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (18))){
var inst_34014 = (state_34072[(2)]);
var state_34072__$1 = state_34072;
var statearr_34125_35217 = state_34072__$1;
(statearr_34125_35217[(2)] = inst_34014);

(statearr_34125_35217[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (37))){
var state_34072__$1 = state_34072;
var statearr_34126_35218 = state_34072__$1;
(statearr_34126_35218[(2)] = null);

(statearr_34126_35218[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34073 === (8))){
var inst_33974 = (state_34072[(8)]);
var inst_33992 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_33974);
var state_34072__$1 = state_34072;
var statearr_34127_35219 = state_34072__$1;
(statearr_34127_35219[(2)] = inst_33992);

(statearr_34127_35219[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33251__auto___35142,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33175__auto__,c__33251__auto___35142,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33176__auto__ = null;
var cljs$core$async$mix_$_state_machine__33176__auto____0 = (function (){
var statearr_34128 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34128[(0)] = cljs$core$async$mix_$_state_machine__33176__auto__);

(statearr_34128[(1)] = (1));

return statearr_34128;
});
var cljs$core$async$mix_$_state_machine__33176__auto____1 = (function (state_34072){
while(true){
var ret_value__33177__auto__ = (function (){try{while(true){
var result__33178__auto__ = switch__33175__auto__(state_34072);
if(cljs.core.keyword_identical_QMARK_(result__33178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33178__auto__;
}
break;
}
}catch (e34129){if((e34129 instanceof Object)){
var ex__33179__auto__ = e34129;
var statearr_34130_35220 = state_34072;
(statearr_34130_35220[(5)] = ex__33179__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34072);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34129;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35221 = state_34072;
state_34072 = G__35221;
continue;
} else {
return ret_value__33177__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33176__auto__ = function(state_34072){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33176__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33176__auto____1.call(this,state_34072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33176__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33176__auto____0;
cljs$core$async$mix_$_state_machine__33176__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33176__auto____1;
return cljs$core$async$mix_$_state_machine__33176__auto__;
})()
;})(switch__33175__auto__,c__33251__auto___35142,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33253__auto__ = (function (){var statearr_34131 = (f__33252__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33252__auto__.cljs$core$IFn$_invoke$arity$0() : f__33252__auto__.call(null));
(statearr_34131[(6)] = c__33251__auto___35142);

return statearr_34131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33253__auto__);
});})(c__33251__auto___35142,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34133 = arguments.length;
switch (G__34133) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__34136 = arguments.length;
switch (G__34136) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__34134_SHARP_){
if(cljs.core.truth_((p1__34134_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34134_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__34134_SHARP_.call(null,topic)))){
return p1__34134_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34134_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34137 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34137 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34138){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34138 = meta34138;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34139,meta34138__$1){
var self__ = this;
var _34139__$1 = this;
return (new cljs.core.async.t_cljs$core$async34137(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34138__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34137.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34139){
var self__ = this;
var _34139__$1 = this;
return self__.meta34138;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34137.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34137.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34137.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34137.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34137.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34137.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34137.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34137.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34138","meta34138",-1526378639,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34137.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34137.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34137";

cljs.core.async.t_cljs$core$async34137.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34137");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34137.
 */
cljs.core.async.__GT_t_cljs$core$async34137 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async34137(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34138){
return (new cljs.core.async.t_cljs$core$async34137(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34138));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async34137(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33251__auto___35266 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33251__auto___35266,mults,ensure_mult,p){
return (function (){
var f__33252__auto__ = (function (){var switch__33175__auto__ = ((function (c__33251__auto___35266,mults,ensure_mult,p){
return (function (state_34211){
var state_val_34212 = (state_34211[(1)]);
if((state_val_34212 === (7))){
var inst_34207 = (state_34211[(2)]);
var state_34211__$1 = state_34211;
var statearr_34213_35267 = state_34211__$1;
(statearr_34213_35267[(2)] = inst_34207);

(statearr_34213_35267[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34212 === (20))){
var state_34211__$1 = state_34211;
var statearr_34214_35268 = state_34211__$1;
(statearr_34214_35268[(2)] = null);

(statearr_34214_35268[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34212 === (1))){
var state_34211__$1 = state_34211;
var statearr_34215_35269 = state_34211__$1;
(statearr_34215_35269[(2)] = null);

(statearr_34215_35269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34212 === (24))){
var inst_34190 = (state_34211[(7)]);
var inst_34199 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_34190);
var state_34211__$1 = state_34211;
var statearr_34216_35270 = state_34211__$1;
(statearr_34216_35270[(2)] = inst_34199);

(statearr_34216_35270[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34212 === (4))){
var inst_34142 = (state_34211[(8)]);
var inst_34142__$1 = (state_34211[(2)]);
var inst_34143 = (inst_34142__$1 == null);
var state_34211__$1 = (function (){var statearr_34217 = state_34211;
(statearr_34217[(8)] = inst_34142__$1);

return statearr_34217;
})();
if(cljs.core.truth_(inst_34143)){
var statearr_34218_35271 = state_34211__$1;
(statearr_34218_35271[(1)] = (5));

} else {
var statearr_34219_35272 = state_34211__$1;
(statearr_34219_35272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34212 === (15))){
var inst_34184 = (state_34211[(2)]);
var state_34211__$1 = state_34211;
var statearr_34220_35273 = state_34211__$1;
(statearr_34220_35273[(2)] = inst_34184);

(statearr_34220_35273[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34212 === (21))){
var inst_34204 = (state_34211[(2)]);
var state_34211__$1 = (function (){var statearr_34221 = state_34211;
(statearr_34221[(9)] = inst_34204);

return statearr_34221;
})();
var statearr_34222_35274 = state_34211__$1;
(statearr_34222_35274[(2)] = null);

(statearr_34222_35274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34212 === (13))){
var inst_34166 = (state_34211[(10)]);
var inst_34168 = cljs.core.chunked_seq_QMARK_(inst_34166);
var state_34211__$1 = state_34211;
if(inst_34168){
var statearr_34223_35275 = state_34211__$1;
(statearr_34223_35275[(1)] = (16));

} else {
var statearr_34224_35276 = state_34211__$1;
(statearr_34224_35276[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34212 === (22))){
var inst_34196 = (state_34211[(2)]);
var state_34211__$1 = state_34211;
if(cljs.core.truth_(inst_34196)){
var statearr_34225_35277 = state_34211__$1;
(statearr_34225_35277[(1)] = (23));

} else {
var statearr_34226_35278 = state_34211__$1;
(statearr_34226_35278[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34212 === (6))){
var inst_34142 = (state_34211[(8)]);
var inst_34190 = (state_34211[(7)]);
var inst_34192 = (state_34211[(11)]);
var inst_34190__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_34142) : topic_fn.call(null,inst_34142));
var inst_34191 = cljs.core.deref(mults);
var inst_34192__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34191,inst_34190__$1);
var state_34211__$1 = (function (){var statearr_34227 = state_34211;
(statearr_34227[(7)] = inst_34190__$1);

(statearr_34227[(11)] = inst_34192__$1);

return statearr_34227;
})();
if(cljs.core.truth_(inst_34192__$1)){
var statearr_34228_35279 = state_34211__$1;
(statearr_34228_35279[(1)] = (19));

} else {
var statearr_34229_35280 = state_34211__$1;
(statearr_34229_35280[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34212 === (25))){
var inst_34201 = (state_34211[(2)]);
var state_34211__$1 = state_34211;
var statearr_34230_35281 = state_34211__$1;
(statearr_34230_35281[(2)] = inst_34201);

(statearr_34230_35281[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34212 === (17))){
var inst_34166 = (state_34211[(10)]);
var inst_34175 = cljs.core.first(inst_34166);
var inst_34176 = cljs.core.async.muxch_STAR_(inst_34175);
var inst_34177 = cljs.core.async.close_BANG_(inst_34176);
var inst_34178 = cljs.core.next(inst_34166);
var inst_34152 = inst_34178;
var inst_34153 = null;
var inst_34154 = (0);
var inst_34155 = (0);
var state_34211__$1 = (function (){var statearr_34231 = state_34211;
(statearr_34231[(12)] = inst_34152);

(statearr_34231[(13)] = inst_34155);

(statearr_34231[(14)] = inst_34154);

(statearr_34231[(15)] = inst_34153);

(statearr_34231[(16)] = inst_34177);

return statearr_34231;
})();
var statearr_34232_35282 = state_34211__$1;
(statearr_34232_35282[(2)] = null);

(statearr_34232_35282[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34212 === (3))){
var inst_34209 = (state_34211[(2)]);
var state_34211__$1 = state_34211;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34211__$1,inst_34209);
} else {
if((state_val_34212 === (12))){
var inst_34186 = (state_34211[(2)]);
var state_34211__$1 = state_34211;
var statearr_34233_35283 = state_34211__$1;
(statearr_34233_35283[(2)] = inst_34186);

(statearr_34233_35283[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34212 === (2))){
var state_34211__$1 = state_34211;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34211__$1,(4),ch);
} else {
if((state_val_34212 === (23))){
var state_34211__$1 = state_34211;
var statearr_34234_35284 = state_34211__$1;
(statearr_34234_35284[(2)] = null);

(statearr_34234_35284[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34212 === (19))){
var inst_34142 = (state_34211[(8)]);
var inst_34192 = (state_34211[(11)]);
var inst_34194 = cljs.core.async.muxch_STAR_(inst_34192);
var state_34211__$1 = state_34211;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34211__$1,(22),inst_34194,inst_34142);
} else {
if((state_val_34212 === (11))){
var inst_34152 = (state_34211[(12)]);
var inst_34166 = (state_34211[(10)]);
var inst_34166__$1 = cljs.core.seq(inst_34152);
var state_34211__$1 = (function (){var statearr_34235 = state_34211;
(statearr_34235[(10)] = inst_34166__$1);

return statearr_34235;
})();
if(inst_34166__$1){
var statearr_34236_35285 = state_34211__$1;
(statearr_34236_35285[(1)] = (13));

} else {
var statearr_34237_35286 = state_34211__$1;
(statearr_34237_35286[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34212 === (9))){
var inst_34188 = (state_34211[(2)]);
var state_34211__$1 = state_34211;
var statearr_34238_35287 = state_34211__$1;
(statearr_34238_35287[(2)] = inst_34188);

(statearr_34238_35287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34212 === (5))){
var inst_34149 = cljs.core.deref(mults);
var inst_34150 = cljs.core.vals(inst_34149);
var inst_34151 = cljs.core.seq(inst_34150);
var inst_34152 = inst_34151;
var inst_34153 = null;
var inst_34154 = (0);
var inst_34155 = (0);
var state_34211__$1 = (function (){var statearr_34239 = state_34211;
(statearr_34239[(12)] = inst_34152);

(statearr_34239[(13)] = inst_34155);

(statearr_34239[(14)] = inst_34154);

(statearr_34239[(15)] = inst_34153);

return statearr_34239;
})();
var statearr_34240_35291 = state_34211__$1;
(statearr_34240_35291[(2)] = null);

(statearr_34240_35291[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34212 === (14))){
var state_34211__$1 = state_34211;
var statearr_34244_35295 = state_34211__$1;
(statearr_34244_35295[(2)] = null);

(statearr_34244_35295[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34212 === (16))){
var inst_34166 = (state_34211[(10)]);
var inst_34170 = cljs.core.chunk_first(inst_34166);
var inst_34171 = cljs.core.chunk_rest(inst_34166);
var inst_34172 = cljs.core.count(inst_34170);
var inst_34152 = inst_34171;
var inst_34153 = inst_34170;
var inst_34154 = inst_34172;
var inst_34155 = (0);
var state_34211__$1 = (function (){var statearr_34245 = state_34211;
(statearr_34245[(12)] = inst_34152);

(statearr_34245[(13)] = inst_34155);

(statearr_34245[(14)] = inst_34154);

(statearr_34245[(15)] = inst_34153);

return statearr_34245;
})();
var statearr_34246_35296 = state_34211__$1;
(statearr_34246_35296[(2)] = null);

(statearr_34246_35296[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34212 === (10))){
var inst_34152 = (state_34211[(12)]);
var inst_34155 = (state_34211[(13)]);
var inst_34154 = (state_34211[(14)]);
var inst_34153 = (state_34211[(15)]);
var inst_34160 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34153,inst_34155);
var inst_34161 = cljs.core.async.muxch_STAR_(inst_34160);
var inst_34162 = cljs.core.async.close_BANG_(inst_34161);
var inst_34163 = (inst_34155 + (1));
var tmp34241 = inst_34152;
var tmp34242 = inst_34154;
var tmp34243 = inst_34153;
var inst_34152__$1 = tmp34241;
var inst_34153__$1 = tmp34243;
var inst_34154__$1 = tmp34242;
var inst_34155__$1 = inst_34163;
var state_34211__$1 = (function (){var statearr_34247 = state_34211;
(statearr_34247[(12)] = inst_34152__$1);

(statearr_34247[(13)] = inst_34155__$1);

(statearr_34247[(14)] = inst_34154__$1);

(statearr_34247[(17)] = inst_34162);

(statearr_34247[(15)] = inst_34153__$1);

return statearr_34247;
})();
var statearr_34248_35297 = state_34211__$1;
(statearr_34248_35297[(2)] = null);

(statearr_34248_35297[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34212 === (18))){
var inst_34181 = (state_34211[(2)]);
var state_34211__$1 = state_34211;
var statearr_34249_35298 = state_34211__$1;
(statearr_34249_35298[(2)] = inst_34181);

(statearr_34249_35298[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34212 === (8))){
var inst_34155 = (state_34211[(13)]);
var inst_34154 = (state_34211[(14)]);
var inst_34157 = (inst_34155 < inst_34154);
var inst_34158 = inst_34157;
var state_34211__$1 = state_34211;
if(cljs.core.truth_(inst_34158)){
var statearr_34250_35299 = state_34211__$1;
(statearr_34250_35299[(1)] = (10));

} else {
var statearr_34251_35300 = state_34211__$1;
(statearr_34251_35300[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33251__auto___35266,mults,ensure_mult,p))
;
return ((function (switch__33175__auto__,c__33251__auto___35266,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33176__auto__ = null;
var cljs$core$async$state_machine__33176__auto____0 = (function (){
var statearr_34252 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34252[(0)] = cljs$core$async$state_machine__33176__auto__);

(statearr_34252[(1)] = (1));

return statearr_34252;
});
var cljs$core$async$state_machine__33176__auto____1 = (function (state_34211){
while(true){
var ret_value__33177__auto__ = (function (){try{while(true){
var result__33178__auto__ = switch__33175__auto__(state_34211);
if(cljs.core.keyword_identical_QMARK_(result__33178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33178__auto__;
}
break;
}
}catch (e34253){if((e34253 instanceof Object)){
var ex__33179__auto__ = e34253;
var statearr_34254_35301 = state_34211;
(statearr_34254_35301[(5)] = ex__33179__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34253;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35302 = state_34211;
state_34211 = G__35302;
continue;
} else {
return ret_value__33177__auto__;
}
break;
}
});
cljs$core$async$state_machine__33176__auto__ = function(state_34211){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33176__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33176__auto____1.call(this,state_34211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33176__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33176__auto____0;
cljs$core$async$state_machine__33176__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33176__auto____1;
return cljs$core$async$state_machine__33176__auto__;
})()
;})(switch__33175__auto__,c__33251__auto___35266,mults,ensure_mult,p))
})();
var state__33253__auto__ = (function (){var statearr_34255 = (f__33252__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33252__auto__.cljs$core$IFn$_invoke$arity$0() : f__33252__auto__.call(null));
(statearr_34255[(6)] = c__33251__auto___35266);

return statearr_34255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33253__auto__);
});})(c__33251__auto___35266,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__34257 = arguments.length;
switch (G__34257) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__34259 = arguments.length;
switch (G__34259) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__34261 = arguments.length;
switch (G__34261) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__33251__auto___35312 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33251__auto___35312,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33252__auto__ = (function (){var switch__33175__auto__ = ((function (c__33251__auto___35312,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34300){
var state_val_34301 = (state_34300[(1)]);
if((state_val_34301 === (7))){
var state_34300__$1 = state_34300;
var statearr_34302_35313 = state_34300__$1;
(statearr_34302_35313[(2)] = null);

(statearr_34302_35313[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (1))){
var state_34300__$1 = state_34300;
var statearr_34303_35314 = state_34300__$1;
(statearr_34303_35314[(2)] = null);

(statearr_34303_35314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (4))){
var inst_34264 = (state_34300[(7)]);
var inst_34266 = (inst_34264 < cnt);
var state_34300__$1 = state_34300;
if(cljs.core.truth_(inst_34266)){
var statearr_34304_35315 = state_34300__$1;
(statearr_34304_35315[(1)] = (6));

} else {
var statearr_34305_35316 = state_34300__$1;
(statearr_34305_35316[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (15))){
var inst_34296 = (state_34300[(2)]);
var state_34300__$1 = state_34300;
var statearr_34306_35317 = state_34300__$1;
(statearr_34306_35317[(2)] = inst_34296);

(statearr_34306_35317[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (13))){
var inst_34289 = cljs.core.async.close_BANG_(out);
var state_34300__$1 = state_34300;
var statearr_34307_35320 = state_34300__$1;
(statearr_34307_35320[(2)] = inst_34289);

(statearr_34307_35320[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (6))){
var state_34300__$1 = state_34300;
var statearr_34308_35321 = state_34300__$1;
(statearr_34308_35321[(2)] = null);

(statearr_34308_35321[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (3))){
var inst_34298 = (state_34300[(2)]);
var state_34300__$1 = state_34300;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34300__$1,inst_34298);
} else {
if((state_val_34301 === (12))){
var inst_34286 = (state_34300[(8)]);
var inst_34286__$1 = (state_34300[(2)]);
var inst_34287 = cljs.core.some(cljs.core.nil_QMARK_,inst_34286__$1);
var state_34300__$1 = (function (){var statearr_34309 = state_34300;
(statearr_34309[(8)] = inst_34286__$1);

return statearr_34309;
})();
if(cljs.core.truth_(inst_34287)){
var statearr_34310_35324 = state_34300__$1;
(statearr_34310_35324[(1)] = (13));

} else {
var statearr_34311_35325 = state_34300__$1;
(statearr_34311_35325[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (2))){
var inst_34263 = cljs.core.reset_BANG_(dctr,cnt);
var inst_34264 = (0);
var state_34300__$1 = (function (){var statearr_34312 = state_34300;
(statearr_34312[(7)] = inst_34264);

(statearr_34312[(9)] = inst_34263);

return statearr_34312;
})();
var statearr_34313_35326 = state_34300__$1;
(statearr_34313_35326[(2)] = null);

(statearr_34313_35326[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (11))){
var inst_34264 = (state_34300[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_34300,(10),Object,null,(9));
var inst_34273 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_34264) : chs__$1.call(null,inst_34264));
var inst_34274 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_34264) : done.call(null,inst_34264));
var inst_34275 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_34273,inst_34274);
var state_34300__$1 = state_34300;
var statearr_34314_35327 = state_34300__$1;
(statearr_34314_35327[(2)] = inst_34275);


cljs.core.async.impl.ioc_helpers.process_exception(state_34300__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (9))){
var inst_34264 = (state_34300[(7)]);
var inst_34277 = (state_34300[(2)]);
var inst_34278 = (inst_34264 + (1));
var inst_34264__$1 = inst_34278;
var state_34300__$1 = (function (){var statearr_34315 = state_34300;
(statearr_34315[(7)] = inst_34264__$1);

(statearr_34315[(10)] = inst_34277);

return statearr_34315;
})();
var statearr_34316_35330 = state_34300__$1;
(statearr_34316_35330[(2)] = null);

(statearr_34316_35330[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (5))){
var inst_34284 = (state_34300[(2)]);
var state_34300__$1 = (function (){var statearr_34317 = state_34300;
(statearr_34317[(11)] = inst_34284);

return statearr_34317;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34300__$1,(12),dchan);
} else {
if((state_val_34301 === (14))){
var inst_34286 = (state_34300[(8)]);
var inst_34291 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_34286);
var state_34300__$1 = state_34300;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34300__$1,(16),out,inst_34291);
} else {
if((state_val_34301 === (16))){
var inst_34293 = (state_34300[(2)]);
var state_34300__$1 = (function (){var statearr_34318 = state_34300;
(statearr_34318[(12)] = inst_34293);

return statearr_34318;
})();
var statearr_34319_35331 = state_34300__$1;
(statearr_34319_35331[(2)] = null);

(statearr_34319_35331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (10))){
var inst_34268 = (state_34300[(2)]);
var inst_34269 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34300__$1 = (function (){var statearr_34320 = state_34300;
(statearr_34320[(13)] = inst_34268);

return statearr_34320;
})();
var statearr_34321_35332 = state_34300__$1;
(statearr_34321_35332[(2)] = inst_34269);


cljs.core.async.impl.ioc_helpers.process_exception(state_34300__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34301 === (8))){
var inst_34282 = (state_34300[(2)]);
var state_34300__$1 = state_34300;
var statearr_34322_35333 = state_34300__$1;
(statearr_34322_35333[(2)] = inst_34282);

(statearr_34322_35333[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33251__auto___35312,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33175__auto__,c__33251__auto___35312,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33176__auto__ = null;
var cljs$core$async$state_machine__33176__auto____0 = (function (){
var statearr_34323 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34323[(0)] = cljs$core$async$state_machine__33176__auto__);

(statearr_34323[(1)] = (1));

return statearr_34323;
});
var cljs$core$async$state_machine__33176__auto____1 = (function (state_34300){
while(true){
var ret_value__33177__auto__ = (function (){try{while(true){
var result__33178__auto__ = switch__33175__auto__(state_34300);
if(cljs.core.keyword_identical_QMARK_(result__33178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33178__auto__;
}
break;
}
}catch (e34324){if((e34324 instanceof Object)){
var ex__33179__auto__ = e34324;
var statearr_34325_35334 = state_34300;
(statearr_34325_35334[(5)] = ex__33179__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34324;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35335 = state_34300;
state_34300 = G__35335;
continue;
} else {
return ret_value__33177__auto__;
}
break;
}
});
cljs$core$async$state_machine__33176__auto__ = function(state_34300){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33176__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33176__auto____1.call(this,state_34300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33176__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33176__auto____0;
cljs$core$async$state_machine__33176__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33176__auto____1;
return cljs$core$async$state_machine__33176__auto__;
})()
;})(switch__33175__auto__,c__33251__auto___35312,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33253__auto__ = (function (){var statearr_34326 = (f__33252__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33252__auto__.cljs$core$IFn$_invoke$arity$0() : f__33252__auto__.call(null));
(statearr_34326[(6)] = c__33251__auto___35312);

return statearr_34326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33253__auto__);
});})(c__33251__auto___35312,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__34329 = arguments.length;
switch (G__34329) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33251__auto___35337 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33251__auto___35337,out){
return (function (){
var f__33252__auto__ = (function (){var switch__33175__auto__ = ((function (c__33251__auto___35337,out){
return (function (state_34361){
var state_val_34362 = (state_34361[(1)]);
if((state_val_34362 === (7))){
var inst_34341 = (state_34361[(7)]);
var inst_34340 = (state_34361[(8)]);
var inst_34340__$1 = (state_34361[(2)]);
var inst_34341__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34340__$1,(0),null);
var inst_34342 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34340__$1,(1),null);
var inst_34343 = (inst_34341__$1 == null);
var state_34361__$1 = (function (){var statearr_34363 = state_34361;
(statearr_34363[(7)] = inst_34341__$1);

(statearr_34363[(8)] = inst_34340__$1);

(statearr_34363[(9)] = inst_34342);

return statearr_34363;
})();
if(cljs.core.truth_(inst_34343)){
var statearr_34364_35338 = state_34361__$1;
(statearr_34364_35338[(1)] = (8));

} else {
var statearr_34365_35340 = state_34361__$1;
(statearr_34365_35340[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (1))){
var inst_34330 = cljs.core.vec(chs);
var inst_34331 = inst_34330;
var state_34361__$1 = (function (){var statearr_34366 = state_34361;
(statearr_34366[(10)] = inst_34331);

return statearr_34366;
})();
var statearr_34367_35342 = state_34361__$1;
(statearr_34367_35342[(2)] = null);

(statearr_34367_35342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (4))){
var inst_34331 = (state_34361[(10)]);
var state_34361__$1 = state_34361;
return cljs.core.async.ioc_alts_BANG_(state_34361__$1,(7),inst_34331);
} else {
if((state_val_34362 === (6))){
var inst_34357 = (state_34361[(2)]);
var state_34361__$1 = state_34361;
var statearr_34368_35343 = state_34361__$1;
(statearr_34368_35343[(2)] = inst_34357);

(statearr_34368_35343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (3))){
var inst_34359 = (state_34361[(2)]);
var state_34361__$1 = state_34361;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34361__$1,inst_34359);
} else {
if((state_val_34362 === (2))){
var inst_34331 = (state_34361[(10)]);
var inst_34333 = cljs.core.count(inst_34331);
var inst_34334 = (inst_34333 > (0));
var state_34361__$1 = state_34361;
if(cljs.core.truth_(inst_34334)){
var statearr_34370_35344 = state_34361__$1;
(statearr_34370_35344[(1)] = (4));

} else {
var statearr_34371_35345 = state_34361__$1;
(statearr_34371_35345[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (11))){
var inst_34331 = (state_34361[(10)]);
var inst_34350 = (state_34361[(2)]);
var tmp34369 = inst_34331;
var inst_34331__$1 = tmp34369;
var state_34361__$1 = (function (){var statearr_34372 = state_34361;
(statearr_34372[(10)] = inst_34331__$1);

(statearr_34372[(11)] = inst_34350);

return statearr_34372;
})();
var statearr_34373_35346 = state_34361__$1;
(statearr_34373_35346[(2)] = null);

(statearr_34373_35346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (9))){
var inst_34341 = (state_34361[(7)]);
var state_34361__$1 = state_34361;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34361__$1,(11),out,inst_34341);
} else {
if((state_val_34362 === (5))){
var inst_34355 = cljs.core.async.close_BANG_(out);
var state_34361__$1 = state_34361;
var statearr_34374_35347 = state_34361__$1;
(statearr_34374_35347[(2)] = inst_34355);

(statearr_34374_35347[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (10))){
var inst_34353 = (state_34361[(2)]);
var state_34361__$1 = state_34361;
var statearr_34375_35348 = state_34361__$1;
(statearr_34375_35348[(2)] = inst_34353);

(statearr_34375_35348[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34362 === (8))){
var inst_34341 = (state_34361[(7)]);
var inst_34340 = (state_34361[(8)]);
var inst_34342 = (state_34361[(9)]);
var inst_34331 = (state_34361[(10)]);
var inst_34345 = (function (){var cs = inst_34331;
var vec__34336 = inst_34340;
var v = inst_34341;
var c = inst_34342;
return ((function (cs,vec__34336,v,c,inst_34341,inst_34340,inst_34342,inst_34331,state_val_34362,c__33251__auto___35337,out){
return (function (p1__34327_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34327_SHARP_);
});
;})(cs,vec__34336,v,c,inst_34341,inst_34340,inst_34342,inst_34331,state_val_34362,c__33251__auto___35337,out))
})();
var inst_34346 = cljs.core.filterv(inst_34345,inst_34331);
var inst_34331__$1 = inst_34346;
var state_34361__$1 = (function (){var statearr_34376 = state_34361;
(statearr_34376[(10)] = inst_34331__$1);

return statearr_34376;
})();
var statearr_34377_35349 = state_34361__$1;
(statearr_34377_35349[(2)] = null);

(statearr_34377_35349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__33251__auto___35337,out))
;
return ((function (switch__33175__auto__,c__33251__auto___35337,out){
return (function() {
var cljs$core$async$state_machine__33176__auto__ = null;
var cljs$core$async$state_machine__33176__auto____0 = (function (){
var statearr_34378 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34378[(0)] = cljs$core$async$state_machine__33176__auto__);

(statearr_34378[(1)] = (1));

return statearr_34378;
});
var cljs$core$async$state_machine__33176__auto____1 = (function (state_34361){
while(true){
var ret_value__33177__auto__ = (function (){try{while(true){
var result__33178__auto__ = switch__33175__auto__(state_34361);
if(cljs.core.keyword_identical_QMARK_(result__33178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33178__auto__;
}
break;
}
}catch (e34379){if((e34379 instanceof Object)){
var ex__33179__auto__ = e34379;
var statearr_34380_35350 = state_34361;
(statearr_34380_35350[(5)] = ex__33179__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34379;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35351 = state_34361;
state_34361 = G__35351;
continue;
} else {
return ret_value__33177__auto__;
}
break;
}
});
cljs$core$async$state_machine__33176__auto__ = function(state_34361){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33176__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33176__auto____1.call(this,state_34361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33176__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33176__auto____0;
cljs$core$async$state_machine__33176__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33176__auto____1;
return cljs$core$async$state_machine__33176__auto__;
})()
;})(switch__33175__auto__,c__33251__auto___35337,out))
})();
var state__33253__auto__ = (function (){var statearr_34381 = (f__33252__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33252__auto__.cljs$core$IFn$_invoke$arity$0() : f__33252__auto__.call(null));
(statearr_34381[(6)] = c__33251__auto___35337);

return statearr_34381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33253__auto__);
});})(c__33251__auto___35337,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__34383 = arguments.length;
switch (G__34383) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33251__auto___35354 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33251__auto___35354,out){
return (function (){
var f__33252__auto__ = (function (){var switch__33175__auto__ = ((function (c__33251__auto___35354,out){
return (function (state_34407){
var state_val_34408 = (state_34407[(1)]);
if((state_val_34408 === (7))){
var inst_34389 = (state_34407[(7)]);
var inst_34389__$1 = (state_34407[(2)]);
var inst_34390 = (inst_34389__$1 == null);
var inst_34391 = cljs.core.not(inst_34390);
var state_34407__$1 = (function (){var statearr_34409 = state_34407;
(statearr_34409[(7)] = inst_34389__$1);

return statearr_34409;
})();
if(inst_34391){
var statearr_34410_35359 = state_34407__$1;
(statearr_34410_35359[(1)] = (8));

} else {
var statearr_34411_35360 = state_34407__$1;
(statearr_34411_35360[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (1))){
var inst_34384 = (0);
var state_34407__$1 = (function (){var statearr_34412 = state_34407;
(statearr_34412[(8)] = inst_34384);

return statearr_34412;
})();
var statearr_34413_35361 = state_34407__$1;
(statearr_34413_35361[(2)] = null);

(statearr_34413_35361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (4))){
var state_34407__$1 = state_34407;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34407__$1,(7),ch);
} else {
if((state_val_34408 === (6))){
var inst_34402 = (state_34407[(2)]);
var state_34407__$1 = state_34407;
var statearr_34414_35362 = state_34407__$1;
(statearr_34414_35362[(2)] = inst_34402);

(statearr_34414_35362[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (3))){
var inst_34404 = (state_34407[(2)]);
var inst_34405 = cljs.core.async.close_BANG_(out);
var state_34407__$1 = (function (){var statearr_34415 = state_34407;
(statearr_34415[(9)] = inst_34404);

return statearr_34415;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34407__$1,inst_34405);
} else {
if((state_val_34408 === (2))){
var inst_34384 = (state_34407[(8)]);
var inst_34386 = (inst_34384 < n);
var state_34407__$1 = state_34407;
if(cljs.core.truth_(inst_34386)){
var statearr_34416_35363 = state_34407__$1;
(statearr_34416_35363[(1)] = (4));

} else {
var statearr_34417_35364 = state_34407__$1;
(statearr_34417_35364[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (11))){
var inst_34384 = (state_34407[(8)]);
var inst_34394 = (state_34407[(2)]);
var inst_34395 = (inst_34384 + (1));
var inst_34384__$1 = inst_34395;
var state_34407__$1 = (function (){var statearr_34418 = state_34407;
(statearr_34418[(8)] = inst_34384__$1);

(statearr_34418[(10)] = inst_34394);

return statearr_34418;
})();
var statearr_34419_35365 = state_34407__$1;
(statearr_34419_35365[(2)] = null);

(statearr_34419_35365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (9))){
var state_34407__$1 = state_34407;
var statearr_34420_35366 = state_34407__$1;
(statearr_34420_35366[(2)] = null);

(statearr_34420_35366[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (5))){
var state_34407__$1 = state_34407;
var statearr_34421_35367 = state_34407__$1;
(statearr_34421_35367[(2)] = null);

(statearr_34421_35367[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (10))){
var inst_34399 = (state_34407[(2)]);
var state_34407__$1 = state_34407;
var statearr_34422_35368 = state_34407__$1;
(statearr_34422_35368[(2)] = inst_34399);

(statearr_34422_35368[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34408 === (8))){
var inst_34389 = (state_34407[(7)]);
var state_34407__$1 = state_34407;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34407__$1,(11),out,inst_34389);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__33251__auto___35354,out))
;
return ((function (switch__33175__auto__,c__33251__auto___35354,out){
return (function() {
var cljs$core$async$state_machine__33176__auto__ = null;
var cljs$core$async$state_machine__33176__auto____0 = (function (){
var statearr_34423 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34423[(0)] = cljs$core$async$state_machine__33176__auto__);

(statearr_34423[(1)] = (1));

return statearr_34423;
});
var cljs$core$async$state_machine__33176__auto____1 = (function (state_34407){
while(true){
var ret_value__33177__auto__ = (function (){try{while(true){
var result__33178__auto__ = switch__33175__auto__(state_34407);
if(cljs.core.keyword_identical_QMARK_(result__33178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33178__auto__;
}
break;
}
}catch (e34424){if((e34424 instanceof Object)){
var ex__33179__auto__ = e34424;
var statearr_34425_35376 = state_34407;
(statearr_34425_35376[(5)] = ex__33179__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34407);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34424;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35377 = state_34407;
state_34407 = G__35377;
continue;
} else {
return ret_value__33177__auto__;
}
break;
}
});
cljs$core$async$state_machine__33176__auto__ = function(state_34407){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33176__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33176__auto____1.call(this,state_34407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33176__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33176__auto____0;
cljs$core$async$state_machine__33176__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33176__auto____1;
return cljs$core$async$state_machine__33176__auto__;
})()
;})(switch__33175__auto__,c__33251__auto___35354,out))
})();
var state__33253__auto__ = (function (){var statearr_34426 = (f__33252__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33252__auto__.cljs$core$IFn$_invoke$arity$0() : f__33252__auto__.call(null));
(statearr_34426[(6)] = c__33251__auto___35354);

return statearr_34426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33253__auto__);
});})(c__33251__auto___35354,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34428 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34428 = (function (f,ch,meta34429){
this.f = f;
this.ch = ch;
this.meta34429 = meta34429;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34430,meta34429__$1){
var self__ = this;
var _34430__$1 = this;
return (new cljs.core.async.t_cljs$core$async34428(self__.f,self__.ch,meta34429__$1));
});

cljs.core.async.t_cljs$core$async34428.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34430){
var self__ = this;
var _34430__$1 = this;
return self__.meta34429;
});

cljs.core.async.t_cljs$core$async34428.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34428.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async34428.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async34428.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34428.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34431 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34431 = (function (f,ch,meta34429,_,fn1,meta34432){
this.f = f;
this.ch = ch;
this.meta34429 = meta34429;
this._ = _;
this.fn1 = fn1;
this.meta34432 = meta34432;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34433,meta34432__$1){
var self__ = this;
var _34433__$1 = this;
return (new cljs.core.async.t_cljs$core$async34431(self__.f,self__.ch,self__.meta34429,self__._,self__.fn1,meta34432__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34431.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34433){
var self__ = this;
var _34433__$1 = this;
return self__.meta34432;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34431.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34431.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34431.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34431.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34427_SHARP_){
var G__34434 = (((p1__34427_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34427_SHARP_) : self__.f.call(null,p1__34427_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34434) : f1.call(null,G__34434));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34431.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34429","meta34429",190548916,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34428","cljs.core.async/t_cljs$core$async34428",-1742495438,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34432","meta34432",-1398781221,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34431.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34431.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34431";

cljs.core.async.t_cljs$core$async34431.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34431");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34431.
 */
cljs.core.async.__GT_t_cljs$core$async34431 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34431(f__$1,ch__$1,meta34429__$1,___$2,fn1__$1,meta34432){
return (new cljs.core.async.t_cljs$core$async34431(f__$1,ch__$1,meta34429__$1,___$2,fn1__$1,meta34432));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34431(self__.f,self__.ch,self__.meta34429,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34435 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34435) : self__.f.call(null,G__34435));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async34428.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34428.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34428.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34429","meta34429",190548916,null)], null);
});

cljs.core.async.t_cljs$core$async34428.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34428.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34428";

cljs.core.async.t_cljs$core$async34428.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34428");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34428.
 */
cljs.core.async.__GT_t_cljs$core$async34428 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34428(f__$1,ch__$1,meta34429){
return (new cljs.core.async.t_cljs$core$async34428(f__$1,ch__$1,meta34429));
});

}

return (new cljs.core.async.t_cljs$core$async34428(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34436 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34436 = (function (f,ch,meta34437){
this.f = f;
this.ch = ch;
this.meta34437 = meta34437;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34436.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34438,meta34437__$1){
var self__ = this;
var _34438__$1 = this;
return (new cljs.core.async.t_cljs$core$async34436(self__.f,self__.ch,meta34437__$1));
});

cljs.core.async.t_cljs$core$async34436.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34438){
var self__ = this;
var _34438__$1 = this;
return self__.meta34437;
});

cljs.core.async.t_cljs$core$async34436.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34436.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async34436.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34436.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34436.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34436.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async34436.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34437","meta34437",-1287562169,null)], null);
});

cljs.core.async.t_cljs$core$async34436.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34436.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34436";

cljs.core.async.t_cljs$core$async34436.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34436");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34436.
 */
cljs.core.async.__GT_t_cljs$core$async34436 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34436(f__$1,ch__$1,meta34437){
return (new cljs.core.async.t_cljs$core$async34436(f__$1,ch__$1,meta34437));
});

}

return (new cljs.core.async.t_cljs$core$async34436(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34439 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34439 = (function (p,ch,meta34440){
this.p = p;
this.ch = ch;
this.meta34440 = meta34440;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34441,meta34440__$1){
var self__ = this;
var _34441__$1 = this;
return (new cljs.core.async.t_cljs$core$async34439(self__.p,self__.ch,meta34440__$1));
});

cljs.core.async.t_cljs$core$async34439.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34441){
var self__ = this;
var _34441__$1 = this;
return self__.meta34440;
});

cljs.core.async.t_cljs$core$async34439.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34439.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async34439.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async34439.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34439.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34439.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34439.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34439.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34440","meta34440",1272138029,null)], null);
});

cljs.core.async.t_cljs$core$async34439.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34439.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34439";

cljs.core.async.t_cljs$core$async34439.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34439");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34439.
 */
cljs.core.async.__GT_t_cljs$core$async34439 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34439(p__$1,ch__$1,meta34440){
return (new cljs.core.async.t_cljs$core$async34439(p__$1,ch__$1,meta34440));
});

}

return (new cljs.core.async.t_cljs$core$async34439(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34443 = arguments.length;
switch (G__34443) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33251__auto___35408 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33251__auto___35408,out){
return (function (){
var f__33252__auto__ = (function (){var switch__33175__auto__ = ((function (c__33251__auto___35408,out){
return (function (state_34464){
var state_val_34465 = (state_34464[(1)]);
if((state_val_34465 === (7))){
var inst_34460 = (state_34464[(2)]);
var state_34464__$1 = state_34464;
var statearr_34466_35409 = state_34464__$1;
(statearr_34466_35409[(2)] = inst_34460);

(statearr_34466_35409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34465 === (1))){
var state_34464__$1 = state_34464;
var statearr_34467_35410 = state_34464__$1;
(statearr_34467_35410[(2)] = null);

(statearr_34467_35410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34465 === (4))){
var inst_34446 = (state_34464[(7)]);
var inst_34446__$1 = (state_34464[(2)]);
var inst_34447 = (inst_34446__$1 == null);
var state_34464__$1 = (function (){var statearr_34468 = state_34464;
(statearr_34468[(7)] = inst_34446__$1);

return statearr_34468;
})();
if(cljs.core.truth_(inst_34447)){
var statearr_34469_35411 = state_34464__$1;
(statearr_34469_35411[(1)] = (5));

} else {
var statearr_34470_35412 = state_34464__$1;
(statearr_34470_35412[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34465 === (6))){
var inst_34446 = (state_34464[(7)]);
var inst_34451 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34446) : p.call(null,inst_34446));
var state_34464__$1 = state_34464;
if(cljs.core.truth_(inst_34451)){
var statearr_34471_35413 = state_34464__$1;
(statearr_34471_35413[(1)] = (8));

} else {
var statearr_34472_35414 = state_34464__$1;
(statearr_34472_35414[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34465 === (3))){
var inst_34462 = (state_34464[(2)]);
var state_34464__$1 = state_34464;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34464__$1,inst_34462);
} else {
if((state_val_34465 === (2))){
var state_34464__$1 = state_34464;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34464__$1,(4),ch);
} else {
if((state_val_34465 === (11))){
var inst_34454 = (state_34464[(2)]);
var state_34464__$1 = state_34464;
var statearr_34473_35419 = state_34464__$1;
(statearr_34473_35419[(2)] = inst_34454);

(statearr_34473_35419[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34465 === (9))){
var state_34464__$1 = state_34464;
var statearr_34474_35421 = state_34464__$1;
(statearr_34474_35421[(2)] = null);

(statearr_34474_35421[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34465 === (5))){
var inst_34449 = cljs.core.async.close_BANG_(out);
var state_34464__$1 = state_34464;
var statearr_34475_35422 = state_34464__$1;
(statearr_34475_35422[(2)] = inst_34449);

(statearr_34475_35422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34465 === (10))){
var inst_34457 = (state_34464[(2)]);
var state_34464__$1 = (function (){var statearr_34476 = state_34464;
(statearr_34476[(8)] = inst_34457);

return statearr_34476;
})();
var statearr_34477_35423 = state_34464__$1;
(statearr_34477_35423[(2)] = null);

(statearr_34477_35423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34465 === (8))){
var inst_34446 = (state_34464[(7)]);
var state_34464__$1 = state_34464;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34464__$1,(11),out,inst_34446);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__33251__auto___35408,out))
;
return ((function (switch__33175__auto__,c__33251__auto___35408,out){
return (function() {
var cljs$core$async$state_machine__33176__auto__ = null;
var cljs$core$async$state_machine__33176__auto____0 = (function (){
var statearr_34478 = [null,null,null,null,null,null,null,null,null];
(statearr_34478[(0)] = cljs$core$async$state_machine__33176__auto__);

(statearr_34478[(1)] = (1));

return statearr_34478;
});
var cljs$core$async$state_machine__33176__auto____1 = (function (state_34464){
while(true){
var ret_value__33177__auto__ = (function (){try{while(true){
var result__33178__auto__ = switch__33175__auto__(state_34464);
if(cljs.core.keyword_identical_QMARK_(result__33178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33178__auto__;
}
break;
}
}catch (e34479){if((e34479 instanceof Object)){
var ex__33179__auto__ = e34479;
var statearr_34480_35425 = state_34464;
(statearr_34480_35425[(5)] = ex__33179__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34479;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35426 = state_34464;
state_34464 = G__35426;
continue;
} else {
return ret_value__33177__auto__;
}
break;
}
});
cljs$core$async$state_machine__33176__auto__ = function(state_34464){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33176__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33176__auto____1.call(this,state_34464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33176__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33176__auto____0;
cljs$core$async$state_machine__33176__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33176__auto____1;
return cljs$core$async$state_machine__33176__auto__;
})()
;})(switch__33175__auto__,c__33251__auto___35408,out))
})();
var state__33253__auto__ = (function (){var statearr_34481 = (f__33252__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33252__auto__.cljs$core$IFn$_invoke$arity$0() : f__33252__auto__.call(null));
(statearr_34481[(6)] = c__33251__auto___35408);

return statearr_34481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33253__auto__);
});})(c__33251__auto___35408,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34483 = arguments.length;
switch (G__34483) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33251__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33251__auto__){
return (function (){
var f__33252__auto__ = (function (){var switch__33175__auto__ = ((function (c__33251__auto__){
return (function (state_34545){
var state_val_34546 = (state_34545[(1)]);
if((state_val_34546 === (7))){
var inst_34541 = (state_34545[(2)]);
var state_34545__$1 = state_34545;
var statearr_34547_35432 = state_34545__$1;
(statearr_34547_35432[(2)] = inst_34541);

(statearr_34547_35432[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34546 === (20))){
var inst_34511 = (state_34545[(7)]);
var inst_34522 = (state_34545[(2)]);
var inst_34523 = cljs.core.next(inst_34511);
var inst_34497 = inst_34523;
var inst_34498 = null;
var inst_34499 = (0);
var inst_34500 = (0);
var state_34545__$1 = (function (){var statearr_34548 = state_34545;
(statearr_34548[(8)] = inst_34499);

(statearr_34548[(9)] = inst_34498);

(statearr_34548[(10)] = inst_34497);

(statearr_34548[(11)] = inst_34522);

(statearr_34548[(12)] = inst_34500);

return statearr_34548;
})();
var statearr_34549_35433 = state_34545__$1;
(statearr_34549_35433[(2)] = null);

(statearr_34549_35433[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34546 === (1))){
var state_34545__$1 = state_34545;
var statearr_34550_35434 = state_34545__$1;
(statearr_34550_35434[(2)] = null);

(statearr_34550_35434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34546 === (4))){
var inst_34486 = (state_34545[(13)]);
var inst_34486__$1 = (state_34545[(2)]);
var inst_34487 = (inst_34486__$1 == null);
var state_34545__$1 = (function (){var statearr_34551 = state_34545;
(statearr_34551[(13)] = inst_34486__$1);

return statearr_34551;
})();
if(cljs.core.truth_(inst_34487)){
var statearr_34552_35435 = state_34545__$1;
(statearr_34552_35435[(1)] = (5));

} else {
var statearr_34553_35436 = state_34545__$1;
(statearr_34553_35436[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34546 === (15))){
var state_34545__$1 = state_34545;
var statearr_34557_35437 = state_34545__$1;
(statearr_34557_35437[(2)] = null);

(statearr_34557_35437[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34546 === (21))){
var state_34545__$1 = state_34545;
var statearr_34558_35439 = state_34545__$1;
(statearr_34558_35439[(2)] = null);

(statearr_34558_35439[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34546 === (13))){
var inst_34499 = (state_34545[(8)]);
var inst_34498 = (state_34545[(9)]);
var inst_34497 = (state_34545[(10)]);
var inst_34500 = (state_34545[(12)]);
var inst_34507 = (state_34545[(2)]);
var inst_34508 = (inst_34500 + (1));
var tmp34554 = inst_34499;
var tmp34555 = inst_34498;
var tmp34556 = inst_34497;
var inst_34497__$1 = tmp34556;
var inst_34498__$1 = tmp34555;
var inst_34499__$1 = tmp34554;
var inst_34500__$1 = inst_34508;
var state_34545__$1 = (function (){var statearr_34559 = state_34545;
(statearr_34559[(14)] = inst_34507);

(statearr_34559[(8)] = inst_34499__$1);

(statearr_34559[(9)] = inst_34498__$1);

(statearr_34559[(10)] = inst_34497__$1);

(statearr_34559[(12)] = inst_34500__$1);

return statearr_34559;
})();
var statearr_34560_35440 = state_34545__$1;
(statearr_34560_35440[(2)] = null);

(statearr_34560_35440[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34546 === (22))){
var state_34545__$1 = state_34545;
var statearr_34561_35441 = state_34545__$1;
(statearr_34561_35441[(2)] = null);

(statearr_34561_35441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34546 === (6))){
var inst_34486 = (state_34545[(13)]);
var inst_34495 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34486) : f.call(null,inst_34486));
var inst_34496 = cljs.core.seq(inst_34495);
var inst_34497 = inst_34496;
var inst_34498 = null;
var inst_34499 = (0);
var inst_34500 = (0);
var state_34545__$1 = (function (){var statearr_34562 = state_34545;
(statearr_34562[(8)] = inst_34499);

(statearr_34562[(9)] = inst_34498);

(statearr_34562[(10)] = inst_34497);

(statearr_34562[(12)] = inst_34500);

return statearr_34562;
})();
var statearr_34563_35442 = state_34545__$1;
(statearr_34563_35442[(2)] = null);

(statearr_34563_35442[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34546 === (17))){
var inst_34511 = (state_34545[(7)]);
var inst_34515 = cljs.core.chunk_first(inst_34511);
var inst_34516 = cljs.core.chunk_rest(inst_34511);
var inst_34517 = cljs.core.count(inst_34515);
var inst_34497 = inst_34516;
var inst_34498 = inst_34515;
var inst_34499 = inst_34517;
var inst_34500 = (0);
var state_34545__$1 = (function (){var statearr_34564 = state_34545;
(statearr_34564[(8)] = inst_34499);

(statearr_34564[(9)] = inst_34498);

(statearr_34564[(10)] = inst_34497);

(statearr_34564[(12)] = inst_34500);

return statearr_34564;
})();
var statearr_34565_35450 = state_34545__$1;
(statearr_34565_35450[(2)] = null);

(statearr_34565_35450[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34546 === (3))){
var inst_34543 = (state_34545[(2)]);
var state_34545__$1 = state_34545;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34545__$1,inst_34543);
} else {
if((state_val_34546 === (12))){
var inst_34531 = (state_34545[(2)]);
var state_34545__$1 = state_34545;
var statearr_34566_35451 = state_34545__$1;
(statearr_34566_35451[(2)] = inst_34531);

(statearr_34566_35451[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34546 === (2))){
var state_34545__$1 = state_34545;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34545__$1,(4),in$);
} else {
if((state_val_34546 === (23))){
var inst_34539 = (state_34545[(2)]);
var state_34545__$1 = state_34545;
var statearr_34567_35452 = state_34545__$1;
(statearr_34567_35452[(2)] = inst_34539);

(statearr_34567_35452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34546 === (19))){
var inst_34526 = (state_34545[(2)]);
var state_34545__$1 = state_34545;
var statearr_34568_35453 = state_34545__$1;
(statearr_34568_35453[(2)] = inst_34526);

(statearr_34568_35453[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34546 === (11))){
var inst_34497 = (state_34545[(10)]);
var inst_34511 = (state_34545[(7)]);
var inst_34511__$1 = cljs.core.seq(inst_34497);
var state_34545__$1 = (function (){var statearr_34569 = state_34545;
(statearr_34569[(7)] = inst_34511__$1);

return statearr_34569;
})();
if(inst_34511__$1){
var statearr_34570_35454 = state_34545__$1;
(statearr_34570_35454[(1)] = (14));

} else {
var statearr_34571_35455 = state_34545__$1;
(statearr_34571_35455[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34546 === (9))){
var inst_34533 = (state_34545[(2)]);
var inst_34534 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34545__$1 = (function (){var statearr_34572 = state_34545;
(statearr_34572[(15)] = inst_34533);

return statearr_34572;
})();
if(cljs.core.truth_(inst_34534)){
var statearr_34573_35456 = state_34545__$1;
(statearr_34573_35456[(1)] = (21));

} else {
var statearr_34574_35457 = state_34545__$1;
(statearr_34574_35457[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34546 === (5))){
var inst_34489 = cljs.core.async.close_BANG_(out);
var state_34545__$1 = state_34545;
var statearr_34575_35458 = state_34545__$1;
(statearr_34575_35458[(2)] = inst_34489);

(statearr_34575_35458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34546 === (14))){
var inst_34511 = (state_34545[(7)]);
var inst_34513 = cljs.core.chunked_seq_QMARK_(inst_34511);
var state_34545__$1 = state_34545;
if(inst_34513){
var statearr_34576_35459 = state_34545__$1;
(statearr_34576_35459[(1)] = (17));

} else {
var statearr_34577_35460 = state_34545__$1;
(statearr_34577_35460[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34546 === (16))){
var inst_34529 = (state_34545[(2)]);
var state_34545__$1 = state_34545;
var statearr_34578_35462 = state_34545__$1;
(statearr_34578_35462[(2)] = inst_34529);

(statearr_34578_35462[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34546 === (10))){
var inst_34498 = (state_34545[(9)]);
var inst_34500 = (state_34545[(12)]);
var inst_34505 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34498,inst_34500);
var state_34545__$1 = state_34545;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34545__$1,(13),out,inst_34505);
} else {
if((state_val_34546 === (18))){
var inst_34511 = (state_34545[(7)]);
var inst_34520 = cljs.core.first(inst_34511);
var state_34545__$1 = state_34545;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34545__$1,(20),out,inst_34520);
} else {
if((state_val_34546 === (8))){
var inst_34499 = (state_34545[(8)]);
var inst_34500 = (state_34545[(12)]);
var inst_34502 = (inst_34500 < inst_34499);
var inst_34503 = inst_34502;
var state_34545__$1 = state_34545;
if(cljs.core.truth_(inst_34503)){
var statearr_34579_35464 = state_34545__$1;
(statearr_34579_35464[(1)] = (10));

} else {
var statearr_34580_35465 = state_34545__$1;
(statearr_34580_35465[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33251__auto__))
;
return ((function (switch__33175__auto__,c__33251__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33176__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33176__auto____0 = (function (){
var statearr_34581 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34581[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33176__auto__);

(statearr_34581[(1)] = (1));

return statearr_34581;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33176__auto____1 = (function (state_34545){
while(true){
var ret_value__33177__auto__ = (function (){try{while(true){
var result__33178__auto__ = switch__33175__auto__(state_34545);
if(cljs.core.keyword_identical_QMARK_(result__33178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33178__auto__;
}
break;
}
}catch (e34582){if((e34582 instanceof Object)){
var ex__33179__auto__ = e34582;
var statearr_34583_35467 = state_34545;
(statearr_34583_35467[(5)] = ex__33179__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34545);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34582;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35468 = state_34545;
state_34545 = G__35468;
continue;
} else {
return ret_value__33177__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33176__auto__ = function(state_34545){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33176__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33176__auto____1.call(this,state_34545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33176__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33176__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33176__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33176__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33176__auto__;
})()
;})(switch__33175__auto__,c__33251__auto__))
})();
var state__33253__auto__ = (function (){var statearr_34584 = (f__33252__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33252__auto__.cljs$core$IFn$_invoke$arity$0() : f__33252__auto__.call(null));
(statearr_34584[(6)] = c__33251__auto__);

return statearr_34584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33253__auto__);
});})(c__33251__auto__))
);

return c__33251__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34586 = arguments.length;
switch (G__34586) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34588 = arguments.length;
switch (G__34588) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34590 = arguments.length;
switch (G__34590) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33251__auto___35479 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33251__auto___35479,out){
return (function (){
var f__33252__auto__ = (function (){var switch__33175__auto__ = ((function (c__33251__auto___35479,out){
return (function (state_34614){
var state_val_34615 = (state_34614[(1)]);
if((state_val_34615 === (7))){
var inst_34609 = (state_34614[(2)]);
var state_34614__$1 = state_34614;
var statearr_34616_35480 = state_34614__$1;
(statearr_34616_35480[(2)] = inst_34609);

(statearr_34616_35480[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34615 === (1))){
var inst_34591 = null;
var state_34614__$1 = (function (){var statearr_34617 = state_34614;
(statearr_34617[(7)] = inst_34591);

return statearr_34617;
})();
var statearr_34618_35485 = state_34614__$1;
(statearr_34618_35485[(2)] = null);

(statearr_34618_35485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34615 === (4))){
var inst_34594 = (state_34614[(8)]);
var inst_34594__$1 = (state_34614[(2)]);
var inst_34595 = (inst_34594__$1 == null);
var inst_34596 = cljs.core.not(inst_34595);
var state_34614__$1 = (function (){var statearr_34619 = state_34614;
(statearr_34619[(8)] = inst_34594__$1);

return statearr_34619;
})();
if(inst_34596){
var statearr_34620_35486 = state_34614__$1;
(statearr_34620_35486[(1)] = (5));

} else {
var statearr_34621_35487 = state_34614__$1;
(statearr_34621_35487[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34615 === (6))){
var state_34614__$1 = state_34614;
var statearr_34622_35488 = state_34614__$1;
(statearr_34622_35488[(2)] = null);

(statearr_34622_35488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34615 === (3))){
var inst_34611 = (state_34614[(2)]);
var inst_34612 = cljs.core.async.close_BANG_(out);
var state_34614__$1 = (function (){var statearr_34623 = state_34614;
(statearr_34623[(9)] = inst_34611);

return statearr_34623;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34614__$1,inst_34612);
} else {
if((state_val_34615 === (2))){
var state_34614__$1 = state_34614;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34614__$1,(4),ch);
} else {
if((state_val_34615 === (11))){
var inst_34594 = (state_34614[(8)]);
var inst_34603 = (state_34614[(2)]);
var inst_34591 = inst_34594;
var state_34614__$1 = (function (){var statearr_34624 = state_34614;
(statearr_34624[(7)] = inst_34591);

(statearr_34624[(10)] = inst_34603);

return statearr_34624;
})();
var statearr_34625_35489 = state_34614__$1;
(statearr_34625_35489[(2)] = null);

(statearr_34625_35489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34615 === (9))){
var inst_34594 = (state_34614[(8)]);
var state_34614__$1 = state_34614;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34614__$1,(11),out,inst_34594);
} else {
if((state_val_34615 === (5))){
var inst_34591 = (state_34614[(7)]);
var inst_34594 = (state_34614[(8)]);
var inst_34598 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34594,inst_34591);
var state_34614__$1 = state_34614;
if(inst_34598){
var statearr_34627_35490 = state_34614__$1;
(statearr_34627_35490[(1)] = (8));

} else {
var statearr_34628_35491 = state_34614__$1;
(statearr_34628_35491[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34615 === (10))){
var inst_34606 = (state_34614[(2)]);
var state_34614__$1 = state_34614;
var statearr_34629_35492 = state_34614__$1;
(statearr_34629_35492[(2)] = inst_34606);

(statearr_34629_35492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34615 === (8))){
var inst_34591 = (state_34614[(7)]);
var tmp34626 = inst_34591;
var inst_34591__$1 = tmp34626;
var state_34614__$1 = (function (){var statearr_34630 = state_34614;
(statearr_34630[(7)] = inst_34591__$1);

return statearr_34630;
})();
var statearr_34631_35494 = state_34614__$1;
(statearr_34631_35494[(2)] = null);

(statearr_34631_35494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__33251__auto___35479,out))
;
return ((function (switch__33175__auto__,c__33251__auto___35479,out){
return (function() {
var cljs$core$async$state_machine__33176__auto__ = null;
var cljs$core$async$state_machine__33176__auto____0 = (function (){
var statearr_34632 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34632[(0)] = cljs$core$async$state_machine__33176__auto__);

(statearr_34632[(1)] = (1));

return statearr_34632;
});
var cljs$core$async$state_machine__33176__auto____1 = (function (state_34614){
while(true){
var ret_value__33177__auto__ = (function (){try{while(true){
var result__33178__auto__ = switch__33175__auto__(state_34614);
if(cljs.core.keyword_identical_QMARK_(result__33178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33178__auto__;
}
break;
}
}catch (e34633){if((e34633 instanceof Object)){
var ex__33179__auto__ = e34633;
var statearr_34634_35495 = state_34614;
(statearr_34634_35495[(5)] = ex__33179__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34633;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35496 = state_34614;
state_34614 = G__35496;
continue;
} else {
return ret_value__33177__auto__;
}
break;
}
});
cljs$core$async$state_machine__33176__auto__ = function(state_34614){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33176__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33176__auto____1.call(this,state_34614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33176__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33176__auto____0;
cljs$core$async$state_machine__33176__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33176__auto____1;
return cljs$core$async$state_machine__33176__auto__;
})()
;})(switch__33175__auto__,c__33251__auto___35479,out))
})();
var state__33253__auto__ = (function (){var statearr_34635 = (f__33252__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33252__auto__.cljs$core$IFn$_invoke$arity$0() : f__33252__auto__.call(null));
(statearr_34635[(6)] = c__33251__auto___35479);

return statearr_34635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33253__auto__);
});})(c__33251__auto___35479,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34637 = arguments.length;
switch (G__34637) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33251__auto___35503 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33251__auto___35503,out){
return (function (){
var f__33252__auto__ = (function (){var switch__33175__auto__ = ((function (c__33251__auto___35503,out){
return (function (state_34675){
var state_val_34676 = (state_34675[(1)]);
if((state_val_34676 === (7))){
var inst_34671 = (state_34675[(2)]);
var state_34675__$1 = state_34675;
var statearr_34677_35506 = state_34675__$1;
(statearr_34677_35506[(2)] = inst_34671);

(statearr_34677_35506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34676 === (1))){
var inst_34638 = (new Array(n));
var inst_34639 = inst_34638;
var inst_34640 = (0);
var state_34675__$1 = (function (){var statearr_34678 = state_34675;
(statearr_34678[(7)] = inst_34639);

(statearr_34678[(8)] = inst_34640);

return statearr_34678;
})();
var statearr_34679_35507 = state_34675__$1;
(statearr_34679_35507[(2)] = null);

(statearr_34679_35507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34676 === (4))){
var inst_34643 = (state_34675[(9)]);
var inst_34643__$1 = (state_34675[(2)]);
var inst_34644 = (inst_34643__$1 == null);
var inst_34645 = cljs.core.not(inst_34644);
var state_34675__$1 = (function (){var statearr_34680 = state_34675;
(statearr_34680[(9)] = inst_34643__$1);

return statearr_34680;
})();
if(inst_34645){
var statearr_34681_35508 = state_34675__$1;
(statearr_34681_35508[(1)] = (5));

} else {
var statearr_34682_35509 = state_34675__$1;
(statearr_34682_35509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34676 === (15))){
var inst_34665 = (state_34675[(2)]);
var state_34675__$1 = state_34675;
var statearr_34683_35510 = state_34675__$1;
(statearr_34683_35510[(2)] = inst_34665);

(statearr_34683_35510[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34676 === (13))){
var state_34675__$1 = state_34675;
var statearr_34684_35511 = state_34675__$1;
(statearr_34684_35511[(2)] = null);

(statearr_34684_35511[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34676 === (6))){
var inst_34640 = (state_34675[(8)]);
var inst_34661 = (inst_34640 > (0));
var state_34675__$1 = state_34675;
if(cljs.core.truth_(inst_34661)){
var statearr_34685_35512 = state_34675__$1;
(statearr_34685_35512[(1)] = (12));

} else {
var statearr_34686_35513 = state_34675__$1;
(statearr_34686_35513[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34676 === (3))){
var inst_34673 = (state_34675[(2)]);
var state_34675__$1 = state_34675;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34675__$1,inst_34673);
} else {
if((state_val_34676 === (12))){
var inst_34639 = (state_34675[(7)]);
var inst_34663 = cljs.core.vec(inst_34639);
var state_34675__$1 = state_34675;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34675__$1,(15),out,inst_34663);
} else {
if((state_val_34676 === (2))){
var state_34675__$1 = state_34675;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34675__$1,(4),ch);
} else {
if((state_val_34676 === (11))){
var inst_34655 = (state_34675[(2)]);
var inst_34656 = (new Array(n));
var inst_34639 = inst_34656;
var inst_34640 = (0);
var state_34675__$1 = (function (){var statearr_34687 = state_34675;
(statearr_34687[(7)] = inst_34639);

(statearr_34687[(10)] = inst_34655);

(statearr_34687[(8)] = inst_34640);

return statearr_34687;
})();
var statearr_34688_35515 = state_34675__$1;
(statearr_34688_35515[(2)] = null);

(statearr_34688_35515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34676 === (9))){
var inst_34639 = (state_34675[(7)]);
var inst_34653 = cljs.core.vec(inst_34639);
var state_34675__$1 = state_34675;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34675__$1,(11),out,inst_34653);
} else {
if((state_val_34676 === (5))){
var inst_34639 = (state_34675[(7)]);
var inst_34643 = (state_34675[(9)]);
var inst_34648 = (state_34675[(11)]);
var inst_34640 = (state_34675[(8)]);
var inst_34647 = (inst_34639[inst_34640] = inst_34643);
var inst_34648__$1 = (inst_34640 + (1));
var inst_34649 = (inst_34648__$1 < n);
var state_34675__$1 = (function (){var statearr_34689 = state_34675;
(statearr_34689[(12)] = inst_34647);

(statearr_34689[(11)] = inst_34648__$1);

return statearr_34689;
})();
if(cljs.core.truth_(inst_34649)){
var statearr_34690_35516 = state_34675__$1;
(statearr_34690_35516[(1)] = (8));

} else {
var statearr_34691_35517 = state_34675__$1;
(statearr_34691_35517[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34676 === (14))){
var inst_34668 = (state_34675[(2)]);
var inst_34669 = cljs.core.async.close_BANG_(out);
var state_34675__$1 = (function (){var statearr_34693 = state_34675;
(statearr_34693[(13)] = inst_34668);

return statearr_34693;
})();
var statearr_34694_35519 = state_34675__$1;
(statearr_34694_35519[(2)] = inst_34669);

(statearr_34694_35519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34676 === (10))){
var inst_34659 = (state_34675[(2)]);
var state_34675__$1 = state_34675;
var statearr_34695_35520 = state_34675__$1;
(statearr_34695_35520[(2)] = inst_34659);

(statearr_34695_35520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34676 === (8))){
var inst_34639 = (state_34675[(7)]);
var inst_34648 = (state_34675[(11)]);
var tmp34692 = inst_34639;
var inst_34639__$1 = tmp34692;
var inst_34640 = inst_34648;
var state_34675__$1 = (function (){var statearr_34696 = state_34675;
(statearr_34696[(7)] = inst_34639__$1);

(statearr_34696[(8)] = inst_34640);

return statearr_34696;
})();
var statearr_34697_35521 = state_34675__$1;
(statearr_34697_35521[(2)] = null);

(statearr_34697_35521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33251__auto___35503,out))
;
return ((function (switch__33175__auto__,c__33251__auto___35503,out){
return (function() {
var cljs$core$async$state_machine__33176__auto__ = null;
var cljs$core$async$state_machine__33176__auto____0 = (function (){
var statearr_34698 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34698[(0)] = cljs$core$async$state_machine__33176__auto__);

(statearr_34698[(1)] = (1));

return statearr_34698;
});
var cljs$core$async$state_machine__33176__auto____1 = (function (state_34675){
while(true){
var ret_value__33177__auto__ = (function (){try{while(true){
var result__33178__auto__ = switch__33175__auto__(state_34675);
if(cljs.core.keyword_identical_QMARK_(result__33178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33178__auto__;
}
break;
}
}catch (e34699){if((e34699 instanceof Object)){
var ex__33179__auto__ = e34699;
var statearr_34700_35522 = state_34675;
(statearr_34700_35522[(5)] = ex__33179__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34699;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35523 = state_34675;
state_34675 = G__35523;
continue;
} else {
return ret_value__33177__auto__;
}
break;
}
});
cljs$core$async$state_machine__33176__auto__ = function(state_34675){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33176__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33176__auto____1.call(this,state_34675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33176__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33176__auto____0;
cljs$core$async$state_machine__33176__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33176__auto____1;
return cljs$core$async$state_machine__33176__auto__;
})()
;})(switch__33175__auto__,c__33251__auto___35503,out))
})();
var state__33253__auto__ = (function (){var statearr_34701 = (f__33252__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33252__auto__.cljs$core$IFn$_invoke$arity$0() : f__33252__auto__.call(null));
(statearr_34701[(6)] = c__33251__auto___35503);

return statearr_34701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33253__auto__);
});})(c__33251__auto___35503,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34703 = arguments.length;
switch (G__34703) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33251__auto___35525 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33251__auto___35525,out){
return (function (){
var f__33252__auto__ = (function (){var switch__33175__auto__ = ((function (c__33251__auto___35525,out){
return (function (state_34745){
var state_val_34746 = (state_34745[(1)]);
if((state_val_34746 === (7))){
var inst_34741 = (state_34745[(2)]);
var state_34745__$1 = state_34745;
var statearr_34747_35530 = state_34745__$1;
(statearr_34747_35530[(2)] = inst_34741);

(statearr_34747_35530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (1))){
var inst_34704 = [];
var inst_34705 = inst_34704;
var inst_34706 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34745__$1 = (function (){var statearr_34748 = state_34745;
(statearr_34748[(7)] = inst_34706);

(statearr_34748[(8)] = inst_34705);

return statearr_34748;
})();
var statearr_34749_35531 = state_34745__$1;
(statearr_34749_35531[(2)] = null);

(statearr_34749_35531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (4))){
var inst_34709 = (state_34745[(9)]);
var inst_34709__$1 = (state_34745[(2)]);
var inst_34710 = (inst_34709__$1 == null);
var inst_34711 = cljs.core.not(inst_34710);
var state_34745__$1 = (function (){var statearr_34750 = state_34745;
(statearr_34750[(9)] = inst_34709__$1);

return statearr_34750;
})();
if(inst_34711){
var statearr_34751_35536 = state_34745__$1;
(statearr_34751_35536[(1)] = (5));

} else {
var statearr_34752_35537 = state_34745__$1;
(statearr_34752_35537[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (15))){
var inst_34735 = (state_34745[(2)]);
var state_34745__$1 = state_34745;
var statearr_34753_35538 = state_34745__$1;
(statearr_34753_35538[(2)] = inst_34735);

(statearr_34753_35538[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (13))){
var state_34745__$1 = state_34745;
var statearr_34754_35540 = state_34745__$1;
(statearr_34754_35540[(2)] = null);

(statearr_34754_35540[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (6))){
var inst_34705 = (state_34745[(8)]);
var inst_34730 = inst_34705.length;
var inst_34731 = (inst_34730 > (0));
var state_34745__$1 = state_34745;
if(cljs.core.truth_(inst_34731)){
var statearr_34755_35542 = state_34745__$1;
(statearr_34755_35542[(1)] = (12));

} else {
var statearr_34756_35543 = state_34745__$1;
(statearr_34756_35543[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (3))){
var inst_34743 = (state_34745[(2)]);
var state_34745__$1 = state_34745;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34745__$1,inst_34743);
} else {
if((state_val_34746 === (12))){
var inst_34705 = (state_34745[(8)]);
var inst_34733 = cljs.core.vec(inst_34705);
var state_34745__$1 = state_34745;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34745__$1,(15),out,inst_34733);
} else {
if((state_val_34746 === (2))){
var state_34745__$1 = state_34745;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34745__$1,(4),ch);
} else {
if((state_val_34746 === (11))){
var inst_34713 = (state_34745[(10)]);
var inst_34709 = (state_34745[(9)]);
var inst_34723 = (state_34745[(2)]);
var inst_34724 = [];
var inst_34725 = inst_34724.push(inst_34709);
var inst_34705 = inst_34724;
var inst_34706 = inst_34713;
var state_34745__$1 = (function (){var statearr_34757 = state_34745;
(statearr_34757[(11)] = inst_34725);

(statearr_34757[(7)] = inst_34706);

(statearr_34757[(12)] = inst_34723);

(statearr_34757[(8)] = inst_34705);

return statearr_34757;
})();
var statearr_34758_35544 = state_34745__$1;
(statearr_34758_35544[(2)] = null);

(statearr_34758_35544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (9))){
var inst_34705 = (state_34745[(8)]);
var inst_34721 = cljs.core.vec(inst_34705);
var state_34745__$1 = state_34745;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34745__$1,(11),out,inst_34721);
} else {
if((state_val_34746 === (5))){
var inst_34713 = (state_34745[(10)]);
var inst_34706 = (state_34745[(7)]);
var inst_34709 = (state_34745[(9)]);
var inst_34713__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34709) : f.call(null,inst_34709));
var inst_34714 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34713__$1,inst_34706);
var inst_34715 = cljs.core.keyword_identical_QMARK_(inst_34706,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34716 = ((inst_34714) || (inst_34715));
var state_34745__$1 = (function (){var statearr_34759 = state_34745;
(statearr_34759[(10)] = inst_34713__$1);

return statearr_34759;
})();
if(cljs.core.truth_(inst_34716)){
var statearr_34760_35545 = state_34745__$1;
(statearr_34760_35545[(1)] = (8));

} else {
var statearr_34761_35546 = state_34745__$1;
(statearr_34761_35546[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (14))){
var inst_34738 = (state_34745[(2)]);
var inst_34739 = cljs.core.async.close_BANG_(out);
var state_34745__$1 = (function (){var statearr_34763 = state_34745;
(statearr_34763[(13)] = inst_34738);

return statearr_34763;
})();
var statearr_34764_35549 = state_34745__$1;
(statearr_34764_35549[(2)] = inst_34739);

(statearr_34764_35549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (10))){
var inst_34728 = (state_34745[(2)]);
var state_34745__$1 = state_34745;
var statearr_34765_35550 = state_34745__$1;
(statearr_34765_35550[(2)] = inst_34728);

(statearr_34765_35550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34746 === (8))){
var inst_34713 = (state_34745[(10)]);
var inst_34709 = (state_34745[(9)]);
var inst_34705 = (state_34745[(8)]);
var inst_34718 = inst_34705.push(inst_34709);
var tmp34762 = inst_34705;
var inst_34705__$1 = tmp34762;
var inst_34706 = inst_34713;
var state_34745__$1 = (function (){var statearr_34766 = state_34745;
(statearr_34766[(14)] = inst_34718);

(statearr_34766[(7)] = inst_34706);

(statearr_34766[(8)] = inst_34705__$1);

return statearr_34766;
})();
var statearr_34767_35553 = state_34745__$1;
(statearr_34767_35553[(2)] = null);

(statearr_34767_35553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33251__auto___35525,out))
;
return ((function (switch__33175__auto__,c__33251__auto___35525,out){
return (function() {
var cljs$core$async$state_machine__33176__auto__ = null;
var cljs$core$async$state_machine__33176__auto____0 = (function (){
var statearr_34768 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34768[(0)] = cljs$core$async$state_machine__33176__auto__);

(statearr_34768[(1)] = (1));

return statearr_34768;
});
var cljs$core$async$state_machine__33176__auto____1 = (function (state_34745){
while(true){
var ret_value__33177__auto__ = (function (){try{while(true){
var result__33178__auto__ = switch__33175__auto__(state_34745);
if(cljs.core.keyword_identical_QMARK_(result__33178__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33178__auto__;
}
break;
}
}catch (e34769){if((e34769 instanceof Object)){
var ex__33179__auto__ = e34769;
var statearr_34770_35554 = state_34745;
(statearr_34770_35554[(5)] = ex__33179__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34769;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33177__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35555 = state_34745;
state_34745 = G__35555;
continue;
} else {
return ret_value__33177__auto__;
}
break;
}
});
cljs$core$async$state_machine__33176__auto__ = function(state_34745){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33176__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33176__auto____1.call(this,state_34745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33176__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33176__auto____0;
cljs$core$async$state_machine__33176__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33176__auto____1;
return cljs$core$async$state_machine__33176__auto__;
})()
;})(switch__33175__auto__,c__33251__auto___35525,out))
})();
var state__33253__auto__ = (function (){var statearr_34771 = (f__33252__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33252__auto__.cljs$core$IFn$_invoke$arity$0() : f__33252__auto__.call(null));
(statearr_34771[(6)] = c__33251__auto___35525);

return statearr_34771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33253__auto__);
});})(c__33251__auto___35525,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
