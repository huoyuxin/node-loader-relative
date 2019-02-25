var path = require("path");

module.exports = function(content) {
  const basePath = (this.query && this.query.basePath) || [];

  this.addDependency(this.resourcePath);

  return `const path = require('path');
    const filePath = path.resolve(__dirname, 
    ${JSON.stringify(
      path.join(
        path.relative(basePath, this.context),
        path.basename(this.resourcePath)
      )
    )}
    );
    try { global.process.dlopen(module, filePath); } 
    catch(exception) { throw new Error('Cannot open ' + filePath + ': ' + exception); };`;
};

module.exports.raw = true;
