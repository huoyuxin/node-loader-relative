var path = require("path");
console.log("\n\n\n\n\n-----webpack diy loader");

module.exports = function(content) {
  const defaultConfig = {
    basePath: [],
    rewritePath: undefined,
    emit: true
  };

  const config = Object.assign(defaultConfig, this.query);

  const fileName = path.basename(this.resourcePath);
  let filePath = config.relativePath
    ? path.relative(config.relativePath, this.context)
    : path.resolve(this.context);

  filePath = path.join(filePath, fileName);
  filePath = JSON.stringify(filePath);

  this.addDependency(this.resourcePath);

  return (
    "const path = require('path');" +
    "const filePath = path.resolve(__dirname, " +
    filePath +
    ");" +
    "try { global.process.dlopen(module, filePath); } " +
    "catch(exception) { throw new Error('Cannot open ' + filePath + ': ' + exception); };"
  );
};

module.exports.raw = true;
