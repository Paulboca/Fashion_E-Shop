var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    // if (req.url == '/index') {
    //     fs.readFile('index.html', function(err, data) {
    //         res.writeHead(200, {'Content-Type': 'text/html'});
    //         res.write(data);
    //         return res.end();
    //     });
    // }
    if (req.url == '/index') {
        fs.readFile('index.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('Hello World!');
    }
}).listen(800);