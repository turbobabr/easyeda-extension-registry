#! /usr/bin/env node

const Utils = require('./utils');
const path = require('path');
const _ = require('lodash');

const buildExtensionUrl = (extension) => {
  return `https://github.com/${extension.owner}/${extension.name}`;
};

(function () {
  try {
    const extensions = Utils.readJSON(path.resolve(__dirname, '../extensions.json'));
    const list = _.map(_.sortBy(extensions, obj => obj.title), (extension) => {
      return `- [${extension.title}](${buildExtensionUrl(extension)}) by ${extension.author}: ${extension.description}`;
    });

    Utils.writeFile(
      path.resolve(__dirname, '../README.md'),
      Utils.readAndReplaceTextFile(path.resolve(__dirname, '../templates/README.template.md'), {
        alphabetical: list.join('\n')
      })
    );

  } catch (e) {
    console.log(`Cannot read 'extensions.json' file!`);
    console.log(e);
  }
})();