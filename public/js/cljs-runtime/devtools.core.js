goog.provide('devtools.core');
goog.require('cljs.core');
goog.require('devtools.prefs');
goog.require('devtools.hints');
goog.require('devtools.defaults');
goog.require('devtools.formatters');
goog.require('devtools.async');
goog.require('devtools.toolbox');
goog.require('devtools.context');
goog.require('devtools.util');
devtools.core.is_feature_available_QMARK_ = (function devtools$core$is_feature_available_QMARK_(feature){
var G__30031 = feature;
var G__30031__$1 = (((G__30031 instanceof cljs.core.Keyword))?G__30031.fqn:null);
switch (G__30031__$1) {
case "formatters":
return (devtools.formatters.available_QMARK_.cljs$core$IFn$_invoke$arity$0 ? devtools.formatters.available_QMARK_.cljs$core$IFn$_invoke$arity$0() : devtools.formatters.available_QMARK_.call(null));

break;
case "hints":
return (devtools.hints.available_QMARK_.cljs$core$IFn$_invoke$arity$0 ? devtools.hints.available_QMARK_.cljs$core$IFn$_invoke$arity$0() : devtools.hints.available_QMARK_.call(null));

break;
case "async":
return (devtools.async.available_QMARK_.cljs$core$IFn$_invoke$arity$0 ? devtools.async.available_QMARK_.cljs$core$IFn$_invoke$arity$0() : devtools.async.available_QMARK_.call(null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30031__$1)].join('')));

}
});
devtools.core.available_QMARK_ = (function devtools$core$available_QMARK_(var_args){
var G__30033 = arguments.length;
switch (G__30033) {
case 0:
return devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$1(devtools.prefs.pref(new cljs.core.Keyword(null,"features-to-install","features-to-install",102899261)));
});

devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (features_desc){
var features = devtools.util.resolve_features_BANG_(features_desc,cljs.core.deref(devtools.defaults.feature_groups));
if(cljs.core.empty_QMARK_(features)){
return false;
} else {
return cljs.core.every_QMARK_(devtools.core.is_feature_available_QMARK_,features);
}
});

devtools.core.available_QMARK_.cljs$lang$maxFixedArity = 1;

devtools.core.is_feature_installed_QMARK_ = (function devtools$core$is_feature_installed_QMARK_(feature){
var G__30034 = feature;
var G__30034__$1 = (((G__30034 instanceof cljs.core.Keyword))?G__30034.fqn:null);
switch (G__30034__$1) {
case "formatters":
return devtools.formatters.installed_QMARK_();

break;
case "hints":
return devtools.hints.installed_QMARK_();

break;
case "async":
return devtools.async.installed_QMARK_();

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30034__$1)].join('')));

}
});
devtools.core.installed_QMARK_ = (function devtools$core$installed_QMARK_(var_args){
var G__30036 = arguments.length;
switch (G__30036) {
case 0:
return devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$1(devtools.prefs.pref(new cljs.core.Keyword(null,"features-to-install","features-to-install",102899261)));
});

devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (features_desc){
var features = devtools.util.resolve_features_BANG_(features_desc,cljs.core.deref(devtools.defaults.feature_groups));
if(cljs.core.empty_QMARK_(features)){
return false;
} else {
return cljs.core.every_QMARK_(devtools.core.is_feature_installed_QMARK_,features);
}
});

devtools.core.installed_QMARK_.cljs$lang$maxFixedArity = 1;

devtools.core.install_BANG_ = (function devtools$core$install_BANG_(var_args){
var G__30038 = arguments.length;
switch (G__30038) {
case 0:
return devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$1(devtools.prefs.pref(new cljs.core.Keyword(null,"features-to-install","features-to-install",102899261)));
});

devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (features_desc){
if(cljs.core.truth_(devtools.util.under_advanced_build_QMARK_())){
return devtools.util.display_advanced_build_warning_if_needed_BANG_();
} else {
var features = devtools.util.resolve_features_BANG_(features_desc,cljs.core.deref(devtools.defaults.feature_groups));
devtools.util.display_banner_if_needed_BANG_(features,cljs.core.deref(devtools.defaults.feature_groups));

devtools.util.print_config_overrides_if_requested_BANG_("config overrides prior install:\n");

devtools.util.install_feature_BANG_(new cljs.core.Keyword(null,"formatters","formatters",-1875637118),features,devtools.core.is_feature_available_QMARK_,devtools.formatters.install_BANG_);

devtools.util.install_feature_BANG_(new cljs.core.Keyword(null,"hints","hints",-991113151),features,devtools.core.is_feature_available_QMARK_,devtools.hints.install_BANG_);

return devtools.util.install_feature_BANG_(new cljs.core.Keyword(null,"async","async",1050769601),features,devtools.core.is_feature_available_QMARK_,devtools.async.install_BANG_);
}
});

devtools.core.install_BANG_.cljs$lang$maxFixedArity = 1;

devtools.core.uninstall_BANG_ = (function devtools$core$uninstall_BANG_(){
devtools.formatters.uninstall_BANG_();

devtools.hints.uninstall_BANG_();

return devtools.async.uninstall_BANG_();
});
devtools.core.set_prefs_BANG_ = (function devtools$core$set_prefs_BANG_(new_prefs){
return devtools.prefs.set_prefs_BANG_(new_prefs);
});
devtools.core.get_prefs = (function devtools$core$get_prefs(){
return devtools.prefs.get_prefs();
});
devtools.core.set_pref_BANG_ = (function devtools$core$set_pref_BANG_(pref,val){
return devtools.prefs.set_pref_BANG_(pref,val);
});
devtools.core.enable_BANG_ = (function devtools$core$enable_BANG_(){
return (devtools.context.get_console.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_console.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_console.call(null)).warn(["devtools.core/enable! was removed ","and has no effect in ",(devtools.util.make_lib_info.cljs$core$IFn$_invoke$arity$0 ? devtools.util.make_lib_info.cljs$core$IFn$_invoke$arity$0() : devtools.util.make_lib_info.call(null))," ","=> remove the call"].join(''));
});
devtools.core.disable_BANG_ = (function devtools$core$disable_BANG_(){
return (devtools.context.get_console.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_console.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_console.call(null)).warn(["devtools.core/disable! was removed ","and has no effect in ",(devtools.util.make_lib_info.cljs$core$IFn$_invoke$arity$0 ? devtools.util.make_lib_info.cljs$core$IFn$_invoke$arity$0() : devtools.util.make_lib_info.call(null))," ","=> remove the call"].join(''));
});
devtools.core.set_single_feature_BANG_ = (function devtools$core$set_single_feature_BANG_(_feature,_val){
return (devtools.context.get_console.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_console.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_console.call(null)).warn(["devtools.core/set-single-feature! was removed ","and has no effect in ",(devtools.util.make_lib_info.cljs$core$IFn$_invoke$arity$0 ? devtools.util.make_lib_info.cljs$core$IFn$_invoke$arity$0() : devtools.util.make_lib_info.call(null))," ","=> use (devtools.core/install! features) to install custom features"].join(''));
});
devtools.core.enable_single_feature_BANG_ = (function devtools$core$enable_single_feature_BANG_(_feature){
return (devtools.context.get_console.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_console.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_console.call(null)).warn(["devtools.core/enable-single-feature! was removed ","and has no effect in ",(devtools.util.make_lib_info.cljs$core$IFn$_invoke$arity$0 ? devtools.util.make_lib_info.cljs$core$IFn$_invoke$arity$0() : devtools.util.make_lib_info.call(null))," ","=> use (devtools.core/install! features) to install custom features"].join(''));
});
devtools.core.disable_single_feature_BANG_ = (function devtools$core$disable_single_feature_BANG_(_feature){
return (devtools.context.get_console.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_console.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_console.call(null)).warn(["devtools.core/disable-single-feature! was removed ","and has no effect in ",(devtools.util.make_lib_info.cljs$core$IFn$_invoke$arity$0 ? devtools.util.make_lib_info.cljs$core$IFn$_invoke$arity$0() : devtools.util.make_lib_info.call(null))," ","=> use (devtools.core/install! features) to install custom features"].join(''));
});
devtools.core.enable_feature_BANG_ = (function devtools$core$enable_feature_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___30047 = arguments.length;
var i__4731__auto___30048 = (0);
while(true){
if((i__4731__auto___30048 < len__4730__auto___30047)){
args__4736__auto__.push((arguments[i__4731__auto___30048]));

var G__30049 = (i__4731__auto___30048 + (1));
i__4731__auto___30048 = G__30049;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_features){
return (devtools.context.get_console.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_console.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_console.call(null)).warn(["devtools.core/enable-feature! was removed ","and has no effect in ",(devtools.util.make_lib_info.cljs$core$IFn$_invoke$arity$0 ? devtools.util.make_lib_info.cljs$core$IFn$_invoke$arity$0() : devtools.util.make_lib_info.call(null))," ","=> use (devtools.core/install! features) to install custom features"].join(''));
});

devtools.core.enable_feature_BANG_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.core.enable_feature_BANG_.cljs$lang$applyTo = (function (seq30039){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30039));
});

devtools.core.disable_feature_BANG_ = (function devtools$core$disable_feature_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___30050 = arguments.length;
var i__4731__auto___30051 = (0);
while(true){
if((i__4731__auto___30051 < len__4730__auto___30050)){
args__4736__auto__.push((arguments[i__4731__auto___30051]));

var G__30052 = (i__4731__auto___30051 + (1));
i__4731__auto___30051 = G__30052;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_features){
return (devtools.context.get_console.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_console.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_console.call(null)).warn(["devtools.core/disable-feature! was removed ","and has no effect in ",(devtools.util.make_lib_info.cljs$core$IFn$_invoke$arity$0 ? devtools.util.make_lib_info.cljs$core$IFn$_invoke$arity$0() : devtools.util.make_lib_info.call(null))," ","=> use (devtools.core/install! features) to install custom features"].join(''));
});

devtools.core.disable_feature_BANG_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.core.disable_feature_BANG_.cljs$lang$applyTo = (function (seq30040){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30040));
});

devtools.core.single_feature_available_QMARK_ = (function devtools$core$single_feature_available_QMARK_(_feature){
return (devtools.context.get_console.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_console.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_console.call(null)).warn(["devtools.core/single-feature-available? was removed ","and has no effect in ",(devtools.util.make_lib_info.cljs$core$IFn$_invoke$arity$0 ? devtools.util.make_lib_info.cljs$core$IFn$_invoke$arity$0() : devtools.util.make_lib_info.call(null))," ","=> use devtools.core/is-feature-available? instead"].join(''));
});
devtools.core.feature_available_QMARK_ = (function devtools$core$feature_available_QMARK_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___30056 = arguments.length;
var i__4731__auto___30057 = (0);
while(true){
if((i__4731__auto___30057 < len__4730__auto___30056)){
args__4736__auto__.push((arguments[i__4731__auto___30057]));

var G__30058 = (i__4731__auto___30057 + (1));
i__4731__auto___30057 = G__30058;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (_features){
return (devtools.context.get_console.cljs$core$IFn$_invoke$arity$0 ? devtools.context.get_console.cljs$core$IFn$_invoke$arity$0() : devtools.context.get_console.call(null)).warn(["devtools.core/feature-available? was removed ","and has no effect in ",(devtools.util.make_lib_info.cljs$core$IFn$_invoke$arity$0 ? devtools.util.make_lib_info.cljs$core$IFn$_invoke$arity$0() : devtools.util.make_lib_info.call(null))," ","=> use devtools.core/is-feature-available? instead"].join(''));
});

devtools.core.feature_available_QMARK_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.core.feature_available_QMARK_.cljs$lang$applyTo = (function (seq30041){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30041));
});


//# sourceMappingURL=devtools.core.js.map
