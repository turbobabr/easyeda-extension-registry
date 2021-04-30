const Utils = require('./utils');
const path = require('path');
const _ = require('lodash');

function buildExtensionUrl(extension) {
  return `https://github.com/${extension.owner}/${extension.name}`;
}

function build(templateFilePath, outputFilePath, locale) {
  try {
    const extensions = Utils.readJSON(path.resolve(__dirname, '../../extensions.json'));
    const list = _.map(_.sortBy(extensions, obj => obj.title.toLowerCase()), (extension) => {
      const description = _.get(extension,`locale.${locale}.description`) || extension.description;
      return `- [${extension.title}](${buildExtensionUrl(extension)}) by ${extension.author}: ${description}`;
    });

    Utils.writeFile(
      outputFilePath,
      Utils.readAndReplaceTextFile(templateFilePath, {
        alphabetical: list.join('\n'),
        count: extensions.length
      })
    );

  } catch (e) {
    console.log(`Cannot read 'extensions.json' file!`);
    console.log(e);
  }

}

module.exports = build;