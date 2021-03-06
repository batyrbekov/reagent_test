goog.provide("goog.async.WorkItem");
goog.provide("goog.async.WorkQueue");
goog.require("goog.asserts");
goog.require("goog.async.FreeList");
/** @final @struct @constructor */ goog.async.WorkQueue = function() {
  this.workHead_ = null;
  this.workTail_ = null;
};
/** @define {number} */ goog.define("goog.async.WorkQueue.DEFAULT_MAX_UNUSED", 100);
/** @private @const @type {goog.async.FreeList<goog.async.WorkItem>} */ goog.async.WorkQueue.freelist_ = new goog.async.FreeList(function() {
  return new goog.async.WorkItem;
}, function(item) {
  item.reset();
}, goog.async.WorkQueue.DEFAULT_MAX_UNUSED);
/**
 @param {function()} fn
 @param {(Object|null|undefined)} scope
 */
goog.async.WorkQueue.prototype.add = function(fn, scope) {
  var item = this.getUnusedItem_();
  item.set(fn, scope);
  if (this.workTail_) {
    this.workTail_.next = item;
    this.workTail_ = item;
  } else {
    goog.asserts.assert(!this.workHead_);
    this.workHead_ = item;
    this.workTail_ = item;
  }
};
/**
 @return {goog.async.WorkItem}
 */
goog.async.WorkQueue.prototype.remove = function() {
  var item = null;
  if (this.workHead_) {
    item = this.workHead_;
    this.workHead_ = this.workHead_.next;
    if (!this.workHead_) {
      this.workTail_ = null;
    }
    item.next = null;
  }
  return item;
};
/**
 @param {goog.async.WorkItem} item
 */
goog.async.WorkQueue.prototype.returnUnused = function(item) {
  goog.async.WorkQueue.freelist_.put(item);
};
/**
 @private
 @return {goog.async.WorkItem}
 */
goog.async.WorkQueue.prototype.getUnusedItem_ = function() {
  return goog.async.WorkQueue.freelist_.get();
};
/** @final @struct @constructor */ goog.async.WorkItem = function() {
  /** @type {?function()} */ this.fn = null;
  /** @type {(?Object|null|undefined)} */ this.scope = null;
  /** @type {?goog.async.WorkItem} */ this.next = null;
};
/**
 @param {function()} fn
 @param {(Object|null|undefined)} scope
 */
goog.async.WorkItem.prototype.set = function(fn, scope) {
  this.fn = fn;
  this.scope = scope;
  this.next = null;
};
goog.async.WorkItem.prototype.reset = function() {
  this.fn = null;
  this.scope = null;
  this.next = null;
};

//# sourceMappingURL=goog.async.workqueue.js.map
