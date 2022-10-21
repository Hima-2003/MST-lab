var fs=require('fs');
fs.open('sample1.txt','w',function(err,data){
	if(err) throw err;
	console.log("file opened");
});