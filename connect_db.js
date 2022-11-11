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