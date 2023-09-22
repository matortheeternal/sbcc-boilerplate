const jetpack = require('fs-jetpack');
const appDir = jetpack.dir('app');

let loadFiles = function(expr) {
  appDir.find({ matching: expr }).forEach(filePath => {
    require(`./${filePath}`);
  });
};

let loadApp = function() {
  loadFiles('actions/**/*.js');
};

module.exports = { loadApp };
