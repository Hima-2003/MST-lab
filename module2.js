const http=require("http");
var lmodule = require("./module1");
var server=http.createServer((req,res)=>{
	result = lmodule.findBiggestNumber(220,110);
	res.writeHead(200,{'content-type':'text/html'});
	res.write("<html><body><h1>The biggest number of 2 numbers is:"+result+"</h1></body></html>");
	res.end();
	console.log("Required");
});
server.listen(3002);
console.log("Server 3002 started");	