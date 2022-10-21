var fs=require('fs');
fs.unlink('fileoper.txt',function(err){
	if(err)
		console.log(err);
	else
		console.log("File Deletion is done");
});