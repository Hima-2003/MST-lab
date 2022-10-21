var fs=require('fs');
fs.appendFile('sample1.txt','Welcome! to mst lab',function(err){
	if(err)
		console.log(err);
	else
		console.log("Data is appended to Sample1.txt file");
});