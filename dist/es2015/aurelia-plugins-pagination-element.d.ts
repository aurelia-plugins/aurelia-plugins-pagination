export declare class Pagination {
    _config: any;
    _pageInput: any;
    _totalPages: any;
    currentPage: any;
    pageSize: any;
    pageSizes: any;
    totalItems: any;
    constructor(config: any);
    _pageInputChanged(): void;
    currentPageChanged(): void;
    pageSizeChanged(): void;
    totalItemsChanged(): void;
    readonly noNext: boolean;
    readonly noPrevious: boolean;
    goto(page: any): void;
    _calculate(): void;
}
