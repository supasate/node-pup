function helloWorld() {
    console.log('Hello World');
}

console.log(__filename);
console.log(__dirname);
var t = setTimeout(helloWorld, 3000);
// clearTimeout(t);
