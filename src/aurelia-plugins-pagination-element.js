// IMPORTS
import {bindingMode, computedFrom, observable} from 'aurelia-binding';
import {inject} from 'aurelia-dependency-injection';
import {bindable, customElement} from 'aurelia-templating';

import {Config} from './aurelia-plugins-pagination-config';


// CLASS ATTRIBUTES
@customElement('aup-pagination')
@inject(Config)


// PUBLIC CLASS
export class Pagination {
  // PRIVATE PROPERTIES
  _config;
  @observable _pageInput;
  _totalPages;

  // BINDABLE PROPERTIES
  @bindable({ defaultBindingMode: bindingMode.twoWay }) currentPage;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) pageSize;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) pageSizes;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) totalItems;

  // CONSTRUCTOR
  constructor(config) {
    this._config = config;
  }

  // BINDABLE METHODS
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

  // GETTERS
  @computedFrom('_totalPages', 'currentPage')
  get noNext() {
    return this.currentPage === this._totalPages;
  }

  @computedFrom('currentPage')
  get noPrevious() {
    return this.currentPage === 1;
  }

  // PUBLIC METHODS
  goto(page) {
    if (this.currentPage === page || page < 1 || page > this._totalPages) return;
    this.currentPage = page;
  }

  // PRIVATE METHODS
  _calculate() {
    this._totalPages = Math.ceil(+this.totalItems / +this.pageSize);
  }
}