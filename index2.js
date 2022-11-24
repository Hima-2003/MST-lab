var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect("mongodb://127.0.0.1:27017/CSE-C",(err)=>{
if(err)
	console.log("DB not connected");
else
	console.log("DB Connected");
});
const ns=new mongoose.Schema({
name:String,
email:String,
phno:Number,
pswd:String});
const nm=new mongoose.model("records",ns);
var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))

app.post("/sign_up",(req,res)=>{
    var name = req.body.name;
    nm.deleteMany({name},function(err,data){
	if(err){
		return res.redirect('delete_failure.html');
	}
	console.log(data);

    return res.redirect('delete_success.html')});

})


app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('index.html');
}).listen(3000);

console.log("Listening on PORT 3000");