export declare class PagedViewModel {
    currentPage: number;
    pageSize: number;
    pageSizes: number[];
    totalItems: any;
    currentPageChanged(): Promise<void>;
    pageSizeChanged(): Promise<void>;
    pageSizesChanged(): Promise<void>;
    totalItemsChanged(): Promise<void>;
    readonly limit: number;
    readonly skip: number;
    reload(): Promise<void>;
    _paged_view_model_reload(): Promise<void>;
}
