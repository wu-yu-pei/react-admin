"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reqWeather = exports.reqLogin = void 0;

var _ajax = _interopRequireDefault(require("./ajax"));

var _jsonp = _interopRequireDefault(require("jsonp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 接口请求模块
// 登录接口
var reqLogin = function reqLogin(username, password) {
  return (0, _ajax["default"])('/login', {
    username: username,
    password: password
  }, 'POST');
}; // 天气接口


exports.reqLogin = reqLogin;

var reqWeather = function reqWeather() {
  return new Promise(function (resolve, reject) {
    var url = 'https://restapi.amap.com/v3/weather/weatherInfo?city=810017&key=aa6e9c082560a8ce062062039400e365';
    (0, _jsonp["default"])(url, {}, function (err, data) {
      if (err) {
        console.log(err);
      } else {
        resolve(data);
      }
    });
  });
};

exports.reqWeather = reqWeather;