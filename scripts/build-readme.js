#! /usr/bin/env node
const path = require('path');
const build = require('./common/build.js');

(function () {  
  build(
    path.resolve(__dirname, '../templates/README.template.md'),
    path.resolve(__dirname, '../README.md')    
  );
})();