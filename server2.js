var http=require('http');
var ser=http.createServer(function(req,res)
{
	res.writeHead(200,{'content-type':'text/html'});
	res.write("<h5>Hello World</h5>");
	res.write("<br>");
	res.write("<h1> hi </h1>");
	res.end();
});
ser.listen(3001);