const express=require('express')
const path=require('path')
const mdb=require("mongoose")
const dotenv=require("dotenv")
const Signup=require("./models/signupSchema")
const app=express()
dotenv.config();
app.use(express.json())
mdb.connect(process.env.MONGODB_URL).then(()=>{
    console.log("connected successfully")
}).catch((err)=>{
    console.log("not connected")
})
app.get('/',(req,res)=>{
    res.send("hi\n fellows");
})
app.get('/newPath',(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"));
})
app.get('/newPath2',(req,res)=>{
    res.json({"key":"index.html"});
})
app.post("/database", (req,res)=>{
    const {firstname,lastname,email,password}=req.body;
    try{
        const newCustomer=new Signup({
        firstname:firstname,
        lastname:lastname,
        email:email,
        password:password
    });
    newCustomer.save();
    res.status(201).send("yooo!")
    console.log("value recived")
}catch(e){
    res.status(401).send("yooo!")
    console.log("unSuccessful")
}
 
    
})
app.listen(3001,()=>{
    console.log("server is started");
    
})