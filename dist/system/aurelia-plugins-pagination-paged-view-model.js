'use strict';

System.register(['aurelia-binding'], function (_export, _context) {
  "use strict";

  var computedFrom, observable, _createClass, _dec, _dec2, _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, PagedViewModel;

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
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

  return {
    setters: [function (_aureliaBinding) {
      computedFrom = _aureliaBinding.computedFrom;
      observable = _aureliaBinding.observable;
    }],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      _export('PagedViewModel', PagedViewModel = (_dec = computedFrom('pageSize'), _dec2 = computedFrom('currentPage', 'pageSize'), (_class = function () {
        function PagedViewModel() {
          _classCallCheck(this, PagedViewModel);

          _initDefineProp(this, 'currentPage', _descriptor, this);

          _initDefineProp(this, 'pageSize', _descriptor2, this);

          _initDefineProp(this, 'pageSizes', _descriptor3, this);

          _initDefineProp(this, 'totalItems', _descriptor4, this);
        }

        PagedViewModel.prototype.currentPageChanged = function () {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.reload();

                  case 2:
                  case 'end':
                    return _context2.stop();
                }
              }
            }, _callee, this);
          }));

          function currentPageChanged() {
            return _ref.apply(this, arguments);
          }

          return currentPageChanged;
        }();

        PagedViewModel.prototype.pageSizeChanged = function () {
          var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this._paged_view_model_reload();

                  case 2:
                  case 'end':
                    return _context3.stop();
                }
              }
            }, _callee2, this);
          }));

          function pageSizeChanged() {
            return _ref2.apply(this, arguments);
          }

          return pageSizeChanged;
        }();

        PagedViewModel.prototype.pageSizesChanged = function () {
          var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.reload();

                  case 2:
                  case 'end':
                    return _context4.stop();
                }
              }
            }, _callee3, this);
          }));

          function pageSizesChanged() {
            return _ref3.apply(this, arguments);
          }

          return pageSizesChanged;
        }();

        PagedViewModel.prototype.totalItemsChanged = function () {
          var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this._paged_view_model_reload();

                  case 2:
                  case 'end':
                    return _context5.stop();
                }
              }
            }, _callee4, this);
          }));

          function totalItemsChanged() {
            return _ref4.apply(this, arguments);
          }

          return totalItemsChanged;
        }();

        PagedViewModel.prototype.reload = function () {
          var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                  case 'end':
                    return _context6.stop();
                }
              }
            }, _callee5, this);
          }));

          function reload() {
            return _ref5.apply(this, arguments);
          }

          return reload;
        }();

        PagedViewModel.prototype._paged_view_model_reload = function () {
          var _ref6 = _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
            var totalPages;
            return regeneratorRuntime.wrap(function _callee6$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    totalPages = Math.ceil(+this.totalItems / +this.pageSize);

                    if (!(this.currentPage > totalPages)) {
                      _context7.next = 5;
                      break;
                    }

                    this.currentPage = totalPages || 1;
                    _context7.next = 7;
                    break;

                  case 5:
                    _context7.next = 7;
                    return this.reload();

                  case 7:
                  case 'end':
                    return _context7.stop();
                }
              }
            }, _callee6, this);
          }));

          function _paged_view_model_reload() {
            return _ref6.apply(this, arguments);
          }

          return _paged_view_model_reload;
        }();

        _createClass(PagedViewModel, [{
          key: 'limit',
          get: function get() {
            return this.pageSize;
          }
        }, {
          key: 'skip',
          get: function get() {
            return (this.currentPage - 1) * this.pageSize;
          }
        }]);

        return PagedViewModel;
      }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'currentPage', [observable], {
        enumerable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'pageSize', [observable], {
        enumerable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'pageSizes', [observable], {
        enumerable: true,
        initializer: function initializer() {
          return [10, 25, 50, 100];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'totalItems', [observable], {
        enumerable: true,
        initializer: null
      }), _applyDecoratedDescriptor(_class.prototype, 'limit', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'limit'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'skip', [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'skip'), _class.prototype)), _class)));

      _export('PagedViewModel', PagedViewModel);
    }
  };
});