"use strict";

var _require = require('customize-cra'),
    override = _require.override,
    fixBabelImports = _require.fixBabelImports;

module.exports = override(fixBabelImports('import', {
  libraryName: 'antd',
  libraryDirectory: 'es',
  style: 'css'
}));