var _dec, _dec2, _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

import { computedFrom, observable } from 'aurelia-binding';

export let PagedViewModel = (_dec = computedFrom('pageSize'), _dec2 = computedFrom('currentPage', 'pageSize'), (_class = class PagedViewModel {
  constructor() {
    _initDefineProp(this, 'currentPage', _descriptor, this);

    _initDefineProp(this, 'pageSize', _descriptor2, this);

    _initDefineProp(this, 'pageSizes', _descriptor3, this);

    _initDefineProp(this, 'totalItems', _descriptor4, this);
  }

  currentPageChanged() {
    var _this = this;

    return _asyncToGenerator(function* () {
      yield _this.reload();
    })();
  }

  pageSizeChanged() {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      yield _this2._paged_view_model_reload();
    })();
  }

  pageSizesChanged() {
    var _this3 = this;

    return _asyncToGenerator(function* () {
      yield _this3.reload();
    })();
  }

  totalItemsChanged() {
    var _this4 = this;

    return _asyncToGenerator(function* () {
      yield _this4._paged_view_model_reload();
    })();
  }

  get limit() {
    return this.pageSize;
  }

  get skip() {
    return (this.currentPage - 1) * this.pageSize;
  }

  reload() {
    return _asyncToGenerator(function* () {})();
  }

  _paged_view_model_reload() {
    var _this5 = this;

    return _asyncToGenerator(function* () {
      const totalPages = Math.ceil(+_this5.totalItems / +_this5.pageSize);
      _this5.currentPage > totalPages ? _this5.currentPage = totalPages || 1 : yield _this5.reload();
    })();
  }
}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'currentPage', [observable], {
  enumerable: true,
  initializer: function () {
    return 1;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'pageSize', [observable], {
  enumerable: true,
  initializer: function () {
    return 10;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'pageSizes', [observable], {
  enumerable: true,
  initializer: function () {
    return [10, 25, 50, 100];
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'totalItems', [observable], {
  enumerable: true,
  initializer: null
}), _applyDecoratedDescriptor(_class.prototype, 'limit', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'limit'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'skip', [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'skip'), _class.prototype)), _class));