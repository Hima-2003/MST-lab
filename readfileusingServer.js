var http=require("http");
var fs=require('fs');
http.createServer(function(req,res){
	fs.readFile('sample.txt',function(err,data)
	{
		res.writeHead(200,{'content-type':'text/html'});
		res.write("<h1>"+data+"</h1>");
		return res.end();
	});
}).listen(3003);