// var http = require('http');
// var url = require('url');
var fs = require('fs');

module.exports = {
    routing: function (req, res) {
        switch (req.url) {
            default:
                let adr = new URL(req.url, "https://dummyurl.com");
                let path = adr.pathname;
                console.log(path);

                if (path.startsWith("/css")) {
                    fs.readFile("." + path, function(err, data) {
                        if (err) {
                            return res.end("404: css not found!");
                        } else {
                            res.writeHead(200, {'Content-Type': 'text/css'});
                            res.write(data);
                            return res.end();
                        } 
                    });
                } else if (path.startsWith("/img")) {
                    fs.readFile("." + path, function(err, data) {
                        if (err) {
                            return res.end("404: img not found!");
                        } else {
                            res.writeHead(200, {'Content-Type': 'image/png'});
                            res.write(data);
                            return res.end();
                        } 
                    });
                } else if (path.startsWith("/js")) {
                    fs.readFile("." + path, function(err, data) {
                        if (err) {
                            return res.end("404: js not found!");
                        } else {
                            res.writeHead(200, {'Content-Type': 'application/javascript'});
                            res.write(data);
                            return res.end();
                        } 
                    });
                } else {
                    fs.readFile("./html" + path + ".html", function(err, data) {
                        if (err) {
                            return res.end("404: Page not found!");
                        } else {
                            res.writeHead(200, {'Content-Type': 'text/html'});
                            res.write(data);
                            return res.end();
                        } 
                    });
                }
                break;
            case "/":
                fs.readFile('./html/index.html', function(err, data) {
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.write(data);
                    return res.end();
                });
                break;
        }
    }
}