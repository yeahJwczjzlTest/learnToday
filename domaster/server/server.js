/**
 * Created by NewLife on 2016/12/15.
 */
var http = require("http"),
    fs = require("fs"),
    path = require("path"),
    url = require("url");

var root = path.resolve("..");
console.log("root : " + root);

var server = http.createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname;
    var filepath = path.join(root,pathname);
    console.log("只是这 :　" + filepath);
    fs.stat(filepath,function (err, stats) {
        if (!err &&　stats.isFile()){
            console.log("200" + request.url);
            response.writeHead(200);
            fs.createReadStream(filepath).pipe(response);
        }else {
            if (request.url === "/"){
                response.writeHead(200);
                fs.createReadStream(filepath+"/index.html").pipe(response);
            }else {
                console.log("404");
                response.writeHead(404);
                response.write("404 not found!");
                response.end();
            }
        }
    });
});

server.listen(8009);
console.log("server running at localtion:8009");