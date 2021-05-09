"use strict";

var _require = require('customize-cra'),
    override = _require.override,
    fixBabelImports = _require.fixBabelImports,
    addLessLoader = _require.addLessLoader;

module.exports = override(fixBabelImports('import', {
  libraryName: 'antd',
  libraryDirectory: 'es',
  style: true
}), addLessLoader({
  javascriptEnabled: true,
  modifyVars: {
    '@primary-color': '#1DA57A'
  }
}));