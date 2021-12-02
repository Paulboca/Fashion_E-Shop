var http = require('http');
var url = require('url');
var fs = require('fs');
var routing = require('./node/routing');
var select = require('./node/db');
var qs = require('querystring');

http.createServer(function (req, res) {
    routing.routing(req, res);
    // select.select();
    if(req.method === 'POST') {
        var body = '';

        req.on('data', function (data) {
            body += data;

        });

        req.on('end', function () {
            var post = qs.parse(body);
            // use post['blah'], etc.
            res.write("merge tot")
            console.log(post['email']);
        });
    }
}).listen(34502);
