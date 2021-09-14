var http = require('http');
var url = require('url');
var fs = require('fs');
var routing = require('./node/routing')

http.createServer(function (req, res) {
    routing.routing(req, res);
}).listen(80);
