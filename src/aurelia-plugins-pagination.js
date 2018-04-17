// IMPORTS
import {PLATFORM} from 'aurelia-pal';

import {Config} from './aurelia-plugins-pagination-config';
import {PagedViewModel} from './aurelia-plugins-pagination-paged-view-model';


// PUBLIC METHODS
export function configure(aurelia, configCallback) {
  const instance = aurelia.container.get(Config);
  if (configCallback !== undefined && typeof(configCallback) === 'function')
    configCallback(instance);
  aurelia.globalResources([PLATFORM.moduleName('./aurelia-plugins-pagination-element')]);
}


// PUBLIC CLASSES
export {PagedViewModel};