var util = require('util');
var vm = require('vm');
var myContext = {
    hello: "nobody"
}
vm.runInNewContext('hello = "world";', myContext);
util.log('Hello ' + myContext.hello);
