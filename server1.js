//without using var for createServer
var http=require('http');
http.createServer(function(req,res)
{
	res.writeHead(200,{'content-type':'text'});
	res.write("<body bgcolor='skyblue'>");
	res.write("<h1>Welcome to mst lab</h1>");
	res.end();
}).listen(3000);
console.log("Server 3000 started");