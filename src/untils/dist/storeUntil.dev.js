"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _store = _interopRequireDefault(require("store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var storeUntil = {
  saveUser: function saveUser(user) {
    _store["default"].set('user_key', user);
  },
  getUser: function getUser() {
    return _store["default"].get('user_key') || {};
  },
  removeUser: function removeUser() {
    _store["default"].remove('user_key');
  }
};
var _default = storeUntil;
exports["default"] = _default;