'use strict';

System.register(['aurelia-pal', './aurelia-plugins-pagination-config', './aurelia-plugins-pagination-paged-view-model'], function (_export, _context) {
  "use strict";

  var PLATFORM, Config, PagedViewModel;
  function configure(aurelia, configCallback) {
    var instance = aurelia.container.get(Config);
    if (configCallback !== undefined && typeof configCallback === 'function') configCallback(instance);
    aurelia.globalResources(PLATFORM.moduleName('./aurelia-plugins-pagination-element'));
  }

  _export('configure', configure);

  return {
    setters: [function (_aureliaPal) {
      PLATFORM = _aureliaPal.PLATFORM;
    }, function (_aureliaPluginsPaginationConfig) {
      Config = _aureliaPluginsPaginationConfig.Config;
    }, function (_aureliaPluginsPaginationPagedViewModel) {
      PagedViewModel = _aureliaPluginsPaginationPagedViewModel.PagedViewModel;
    }],
    execute: function () {
      _export('PagedViewModel', PagedViewModel);
    }
  };
});