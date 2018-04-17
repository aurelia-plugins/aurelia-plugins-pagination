define(['exports', 'aurelia-pal', './aurelia-plugins-pagination-config', './aurelia-plugins-pagination-paged-view-model'], function (exports, _aureliaPal, _aureliaPluginsPaginationConfig, _aureliaPluginsPaginationPagedViewModel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.PagedViewModel = undefined;
  exports.configure = configure;
  function configure(aurelia, configCallback) {
    var instance = aurelia.container.get(_aureliaPluginsPaginationConfig.Config);
    if (configCallback !== undefined && typeof configCallback === 'function') configCallback(instance);
    aurelia.globalResources([_aureliaPal.PLATFORM.moduleName('./aurelia-plugins-pagination-element')]);
  }

  exports.PagedViewModel = _aureliaPluginsPaginationPagedViewModel.PagedViewModel;
});