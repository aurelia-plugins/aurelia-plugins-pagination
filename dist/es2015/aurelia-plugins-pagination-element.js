var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

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

import { bindingMode, computedFrom, observable } from 'aurelia-binding';
import { inject } from 'aurelia-dependency-injection';
import { bindable, containerless, customElement } from 'aurelia-templating';

import { Config } from './aurelia-plugins-pagination-config';

export let Pagination = (_dec = containerless(), _dec2 = customElement('aup-pagination'), _dec3 = inject(Config), _dec4 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec5 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec6 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec7 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec8 = computedFrom('_totalPages', 'currentPage'), _dec9 = computedFrom('currentPage'), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = class Pagination {
  constructor(config) {
    _initDefineProp(this, '_pageInput', _descriptor, this);

    _initDefineProp(this, 'currentPage', _descriptor2, this);

    _initDefineProp(this, 'pageSize', _descriptor3, this);

    _initDefineProp(this, 'pageSizes', _descriptor4, this);

    _initDefineProp(this, 'totalItems', _descriptor5, this);

    this._config = config;
  }

  _pageInputChanged() {
    const page = parseInt(this._pageInput, 10);
    if (!isNaN(page)) this.goto(page);
  }

  currentPageChanged() {
    this._pageInput = this.currentPage;
  }

  pageSizeChanged() {
    this._calculate();
  }

  totalItemsChanged() {
    this._calculate();
  }

  get noNext() {
    return this.currentPage === this._totalPages;
  }

  get noPrevious() {
    return this.currentPage === 1;
  }

  goto(page) {
    if (this.currentPage === page || page < 1 || page > this._totalPages) return;
    this.currentPage = page;
  }

  _calculate() {
    this._totalPages = Math.ceil(+this.totalItems / +this.pageSize);
  }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, '_pageInput', [observable], {
  enumerable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'currentPage', [_dec4], {
  enumerable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'pageSize', [_dec5], {
  enumerable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'pageSizes', [_dec6], {
  enumerable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'totalItems', [_dec7], {
  enumerable: true,
  initializer: null
}), _applyDecoratedDescriptor(_class2.prototype, 'noNext', [_dec8], Object.getOwnPropertyDescriptor(_class2.prototype, 'noNext'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'noPrevious', [_dec9], Object.getOwnPropertyDescriptor(_class2.prototype, 'noPrevious'), _class2.prototype)), _class2)) || _class) || _class) || _class);