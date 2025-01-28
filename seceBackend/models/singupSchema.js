const mdb = require("mongoose");
const signUpSchema=mdb.Schema({
    firstname:String,
    lastname:String,
    email:String,
    password:String,
});
const Signup=mdb.model("Signup",signUpSchema);
module.exports=Signup