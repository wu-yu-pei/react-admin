"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reqLogin = void 0;

var _ajax = _interopRequireDefault(require("./ajax"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 接口请求模块
// 登录接口
var reqLogin = function reqLogin(username, password) {
  return (0, _ajax["default"])('/login', {
    username: username,
    password: password
  }, 'POST');
};

exports.reqLogin = reqLogin;