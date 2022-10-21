var fs=require('fs');
fs.rename('sample1.txt','fileoper.txt',function(err){
	if(err)
		console.log(err);
	else
		console.log("File renaming is done");
});