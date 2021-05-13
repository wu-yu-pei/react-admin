"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reqWeather = exports.reqSearchProduct = exports.reqProduct = exports.reqUpdate = exports.reqAddCategory = exports.reqCategory = exports.reqLogin = void 0;

var _ajax2 = _interopRequireDefault(require("./ajax"));

var _jsonp = _interopRequireDefault(require("jsonp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import axios from 'axios'
var BASE = "http://120.55.193.14:5000"; // 登录接口

var reqLogin = function reqLogin(username, password) {
  return (0, _ajax2["default"])(BASE + '/login', {
    username: username,
    password: password
  }, 'POST');
}; // 查询一级,二级分类列表


exports.reqLogin = reqLogin;

var reqCategory = function reqCategory(parentId) {
  return (0, _ajax2["default"])(BASE + '/manage/category/list', {
    parentId: parentId
  }, "GET");
}; // 添加分类接口


exports.reqCategory = reqCategory;

var reqAddCategory = function reqAddCategory(parentId, categoryName) {
  return (0, _ajax2["default"])(BASE + '/manage/category/add', {
    parentId: parentId,
    categoryName: categoryName
  }, "POST");
}; // 修改分类接口


exports.reqAddCategory = reqAddCategory;

var reqUpdate = function reqUpdate(categoryId, categoryName) {
  return (0, _ajax2["default"])(BASE + '/manage/category/update', {
    categoryId: categoryId,
    categoryName: categoryName
  }, "POST");
}; // 商品管理接口


exports.reqUpdate = reqUpdate;

var reqProduct = function reqProduct(pageNum, pageSize) {
  return (0, _ajax2["default"])(BASE + '/manage/product/list', {
    pageNum: pageNum,
    pageSize: pageSize
  }, "GET");
}; // 搜索商品接口


exports.reqProduct = reqProduct;

var reqSearchProduct = function reqSearchProduct(pageNum, pageSize, Type, Value) {
  return (0, _ajax2["default"])(BASE + '/manage/product/search', _defineProperty({
    pageNum: pageNum,
    pageSize: pageSize
  }, Type, Value), 'GET');
}; // 天气接口


exports.reqSearchProduct = reqSearchProduct;

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