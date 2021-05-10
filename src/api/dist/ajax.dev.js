"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ajax;

var _axios = _interopRequireDefault(require("axios"));

var _antd = require("antd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ajax(url, data) {
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "GET";
  return new Promise(function (resolve, reject) {
    var promise;

    if (type === 'GET') {
      promise = _axios["default"].get(url, {
        params: data
      });
    }

    if (type === "POST") {
      promise = _axios["default"].post(url, data);
    }

    promise.then(function (res) {
      resolve(res.data);
    })["catch"](function (err) {
      _antd.message.error({
        content: "请求出错!"
      });

      console.log('axios' + err);
    });
  });
}