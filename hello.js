//printing txt message
console.log("hello world");


//adding two numbers and printing using console.log()
a=33
b=42
c=a+b
console.log("%d + %d = %d",a,b,c);


//Reading data from user
const prompt=require('prompt-sync')();
const n=prompt("Enter n value:");

//functions
function check_number(n){
	for(i=0;i<=n;i++){
		if(i%2==0){
			console.log("%d is Even Number",i);
		}
		else{  console.log("%d is Odd Number",i);  }
	}
}
check_number(n);


//web server
const http=require("http");
const server=http.createServer((req,res)=>{
	res.write("Hello! welcome everyone");
	res.end();
});
server.listen(4000);
console.log("Server started...Running at local host 4000");
