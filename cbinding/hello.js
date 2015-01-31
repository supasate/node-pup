// Run "../node_modules/.bin/node-gyp configure build" first 
var addon = require("./build/Release/hello")

console.log(addon.hello());
