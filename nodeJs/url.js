var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(req,res){
	res.writeHead(200, {'Content-Type':'text/plain'});
	res.end(util.inspect(url.parse(req.url, true)));
}).listen(3000);

// 在浏览器地址栏中输入：localhost:3000/?name=cap&age=23