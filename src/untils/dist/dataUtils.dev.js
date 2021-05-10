"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formateDate = formateDate;

function formateDate(time) {
  if (!time) return '';
  var date = new Date(time);
  return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
}