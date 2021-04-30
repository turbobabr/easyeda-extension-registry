const fs = require('fs');

function replaceVars(content, vars) {
  let temp = content.toString();

  Object.keys(vars).map(key => {
    const re = new RegExp('\\$\{' + key + '\}', 'gi');

    temp = temp.replace(re, vars[key]);
    return true;
  });
  return temp;
};

function readAndReplaceTextFile(path, vars) {
  return replaceVars(readFile(path), vars);
}

function readFile(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

function writeFile(filePath, content) {
  fs.writeFileSync(filePath, content);
}

function readJSON(filePath) {
  return JSON.parse(readFile(filePath));
}

function createDir(dirPath) {  
  if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath);
      return true;
  }
  
  return !fs.readdirSync(dirPath).length;
};

module.exports = {
  readAndReplaceTextFile: readAndReplaceTextFile,
  readJSON: readJSON,
  writeFile: writeFile,
  createDir: createDir
};