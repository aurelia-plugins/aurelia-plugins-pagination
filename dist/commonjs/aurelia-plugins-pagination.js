'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PagedViewModel = undefined;
exports.configure = configure;

var _aureliaPal = require('aurelia-pal');

var _aureliaPluginsPaginationConfig = require('./aurelia-plugins-pagination-config');

var _aureliaPluginsPaginationPagedViewModel = require('./aurelia-plugins-pagination-paged-view-model');

function configure(aurelia, configCallback) {
  var instance = aurelia.container.get(_aureliaPluginsPaginationConfig.Config);
  if (configCallback !== undefined && typeof configCallback === 'function') configCallback(instance);
  aurelia.globalResources([_aureliaPal.PLATFORM.moduleName('./aurelia-plugins-pagination-element')]);
}

exports.PagedViewModel = _aureliaPluginsPaginationPagedViewModel.PagedViewModel;