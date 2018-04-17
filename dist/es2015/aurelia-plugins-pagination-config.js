
export let Config = class Config {
  constructor() {
    this._config = { of: 'of' };
  }

  all() {
    return this._config;
  }

  get(key) {
    return this._config[key];
  }

  options(obj) {
    Object.assign(this._config, obj);
  }

  set(key, value) {
    this._config[key] = value;
    return this._config[key];
  }
};