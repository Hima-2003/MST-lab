var fs=require('fs');
fs.writeFile('sample1.txt','How are u?',function(err){
	if(err) console.log(err);
	else
		console.log('Write operation completed');
});