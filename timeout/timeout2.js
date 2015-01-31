var i = 0;
var tCounter = setInterval(counter, 2000);

function counter() {
    i++;
    console.log(i);
}

setTimeout(function() {
    clearInterval(tCounter);
}, 10000);
