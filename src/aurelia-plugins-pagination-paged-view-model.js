// IMPORTS
import {computedFrom, observable} from 'aurelia-binding';


// PUBLIC CLASS
export class PagedViewModel {
  // OBSERVABLE PROPERTIES
  @observable currentPage = 1;
  @observable pageSize = 10;
  @observable pageSizes = [10, 25, 50, 100];
  @observable totalItems;

  // OBSERVABLE METHODS
  async currentPageChanged() {
    await this.reload();
  }

  async pageSizeChanged() {
    await this._paged_view_model_reload();
  }

  async pageSizesChanged() {
    await this.reload();
  }

  async totalItemsChanged() {
    await this._paged_view_model_reload();
  }

  // COMPUTED PROPERTIES
  @computedFrom('pageSize')
  get limit() {
    return this.pageSize;
  }

  @computedFrom('currentPage', 'pageSize')
  get skip() {
    return (this.currentPage - 1) * this.pageSize;
  }

  // PUBLIC METHODS
  async reload() {
  }

  // PRIVATE METHODS
  async _paged_view_model_reload() {
    const totalPages = Math.ceil(+this.totalItems / +this.pageSize);
    this.currentPage > totalPages ? this.currentPage = totalPages || 1 : await this.reload();
  }
}