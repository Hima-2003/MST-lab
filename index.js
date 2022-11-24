var express=require("express");
var bodyParser=require("body-parser");

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
email:String,
pass:String,
phno:Number});
const nm=new mongoose.model("records",ns);
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
	console.log("connection succeeded");
})

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
	extended: true
}));

app.post('/sign_up', function(req,res){
	var name = req.body.name;
	var email =req.body.email;
	var pass = req.body.password;
	var phone =req.body.phone;

	var data = new nm({
		"name": name,
		"email":email,
		"pass":pass,
		"phno":phone
	});
	data.save();
	
	//console.log(pass,phone);
		
	return res.redirect("signup_success.html");
})


app.get('/',function(req,res){
res.set({
	'Access-control-Allow-Origin': '*'
	});
return res.redirect('index.html');
}).listen(5000)


console.log("server listening at port 5000");