import * as http from "http";
import * as url from "url";
import * as path from "path";
import * as fs from "fs";

http.createServer(function (req, res) {
        var q = url.parse(req.url, true);
	var filename = "";
	console.log(q);
	if (q.path === '/') {
		filename = "index.html";	
	}
	else {
		filename = "." + q.pathname;
	}
        fs.readFile(filename, function(err, data) {
                if (err) {
                        res.writeHead(404, {"Content-Type": "text/html"});
                        return res.end("404 Not Found");
                }
                res.writeHead(200, {"Content-Type": "text/html"});
                res.write(data);
                return res.end();
        });
}).listen(8080);
