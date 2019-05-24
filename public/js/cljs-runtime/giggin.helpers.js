goog.provide('giggin.helpers');
goog.require('cljs.core');
giggin.helpers.format_price = (function giggin$helpers$format_price(cents){
return [" \u20AC",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cents / (100)))].join('');
});

//# sourceMappingURL=giggin.helpers.js.map
