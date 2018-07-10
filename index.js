
var fs = require('fs');

var parent = require('parent-package-json');
var JSONOfParent = parent().parse();
var pathToParent = parent(); // Will return false if no parent exists

if(pathToParent !== false) {
  // check if _local exists in the parent
  if (fs.existsSync(pathToParent.path + '/_local')) {
    console.log('_local found');
  }

  //
  // "postinstall": "ln -sf ../_local node_modules/",
} else {
  console.error('Not run as installed package, can\'t find parent package');
}
