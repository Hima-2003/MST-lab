const express=require('express');
const app=express();
const mongoose=require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/CSE-C",(err)=>{
if(err)
console.log("DB Not connected-Error");
else
console.log("DB connected");
});

const ns=new mongoose.Schema({
name:String,
age:Number,
PHNO:Number});
const nm=new mongoose.model("records",ns);
//To insert single record in db
const data=new nm({name:'priya',age:21,PHNO:9876504321});


//To insert multiple records in db
nm.insertMany([
{name:'Hima',age:19,PHNO:8910765432},
{name:'Teja',age:21,PHNO:8910765431},
{name:'Pooji',age:20,PHNO:8913765432}
]).then(function(){
	console.log("Data inserted");
}).catch(function(error){
	console.log(error);
});

data.save();

//To find 1st record in db
nm.findOne({},function(err,data){
	if(err){
		console.log(err);
	}
	else{
	console.log("First function call:",data);
	}
});