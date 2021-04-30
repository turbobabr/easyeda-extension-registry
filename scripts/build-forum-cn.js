#! /usr/bin/env node
const path = require('path');
const build = require('./common/build.js');
const Utils = require('./common/utils');

(function () {  
  const outputFolderPath = path.resolve(__dirname, '../output');
  Utils.createDir(outputFolderPath);
  build(    
    path.resolve(__dirname, '../templates/FORUM-LIST-CN.template.md'),
    path.join(outputFolderPath,'forum-cn.md'),
    'cn'
  );
})();