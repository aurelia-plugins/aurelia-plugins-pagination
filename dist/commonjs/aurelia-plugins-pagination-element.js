'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pagination = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;

var _aureliaBinding = require('aurelia-binding');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaTemplating = require('aurelia-templating');

var _aureliaPluginsPaginationConfig = require('./aurelia-plugins-pagination-config');

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var Pagination = exports.Pagination = (_dec = (0, _aureliaTemplating.customElement)('aup-pagination'), _dec2 = (0, _aureliaDependencyInjection.inject)(_aureliaPluginsPaginationConfig.Config), _dec3 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.twoWay }), _dec4 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.twoWay }), _dec5 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.twoWay }), _dec6 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.twoWay }), _dec7 = (0, _aureliaBinding.computedFrom)('_totalPages', 'currentPage'), _dec8 = (0, _aureliaBinding.computedFrom)('currentPage'), _dec(_class = _dec2(_class = (_class2 = function () {
  function Pagination(config) {
    _classCallCheck(this, Pagination);

    _initDefineProp(this, '_pageInput', _descriptor, this);

    _initDefineProp(this, 'buttonClass', _descriptor2, this);

    _initDefineProp(this, 'inputClass', _descriptor3, this);

    _initDefineProp(this, 'optionClass', _descriptor4, this);

    _initDefineProp(this, 'selectClass', _descriptor5, this);

    _initDefineProp(this, 'textClass', _descriptor6, this);

    _initDefineProp(this, 'currentPage', _descriptor7, this);

    _initDefineProp(this, 'pageSize', _descriptor8, this);

    _initDefineProp(this, 'pageSizes', _descriptor9, this);

    _initDefineProp(this, 'totalItems', _descriptor10, this);

    this._config = config;
  }

  Pagination.prototype._pageInputChanged = function _pageInputChanged() {
    var page = parseInt(this._pageInput, 10);
    if (!isNaN(page)) this.goto(page);
  };

  Pagination.prototype.currentPageChanged = function currentPageChanged() {
    this._pageInput = this.currentPage;
  };

  Pagination.prototype.pageSizeChanged = function pageSizeChanged() {
    this._calculate();
  };

  Pagination.prototype.totalItemsChanged = function totalItemsChanged() {
    this._calculate();
  };

  Pagination.prototype.goto = function goto(page) {
    if (this.currentPage === page || page < 1 || page > this._totalPages) return;
    this.currentPage = page;
  };

  Pagination.prototype._calculate = function _calculate() {
    this._totalPages = Math.ceil(+this.totalItems / +this.pageSize);
  };

  _createClass(Pagination, [{
    key: 'noNext',
    get: function get() {
      return this.currentPage === this._totalPages;
    }
  }, {
    key: 'noPrevious',
    get: function get() {
      return this.currentPage === 1;
    }
  }]);

  return Pagination;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, '_pageInput', [_aureliaBinding.observable], {
  enumerable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'buttonClass', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'inputClass', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'optionClass', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'selectClass', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'textClass', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'currentPage', [_dec3], {
  enumerable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'pageSize', [_dec4], {
  enumerable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'pageSizes', [_dec5], {
  enumerable: true,
  initializer: null
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'totalItems', [_dec6], {
  enumerable: true,
  initializer: null
}), _applyDecoratedDescriptor(_class2.prototype, 'noNext', [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, 'noNext'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'noPrevious', [_dec8], Object.getOwnPropertyDescriptor(_class2.prototype, 'noPrevious'), _class2.prototype)), _class2)) || _class) || _class);