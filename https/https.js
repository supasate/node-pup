var https = require('https');
var fs = require('fs');

var options = {
    key: fs.readFileSync('./localhost.key'),
    cert: fs.readFileSync('./localhost.cert')
};

https.createServer(options, function (req, res) {
    res.writeHead(200);
    res.end("Hello World\n");
}).listen(8000);
