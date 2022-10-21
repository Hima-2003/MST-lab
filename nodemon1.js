const http=require("http");
var server=http.createServer((req,res)=>{
	res.write("Hello world!");
	res.write("nodemon");
	res.end();
});
server.listen(3002);
console.log("Server 3002 started");	