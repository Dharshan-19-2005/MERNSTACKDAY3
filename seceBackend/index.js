const express = require("express");
const path = require("path");
const mdb = require("mongoose");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
const Signup = require("./models/singupSchema");

app.use(express.json());


mdb
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("MongoDB Connection Successful");
  })
  .catch((err) => {
    console.log("MongoDB connection unsuccessful", err);
  });


app.get("/", (req, res) => {
  res.send(
    "Welcome to Backend friends\nYour RollerCoaster starts from now on\nFasten your codabase so you can catch up with what is being taught"
  );
});


app.get("/static", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});


app.post("/signup", (req, res) => {
  var { firstName, lastName, userName, email, password } = req.body;
  try {
    console.log("Inside try");
    const newCustomer = new Signup({
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      email: email,
      password: password,
    });
    console.log(newCustomer);
    newCustomer.save();
    res.status(201).send("Signup successful");
  } catch (err) {
    res.status(400).send("Signup Unsuccessful", err);
  }
});


app.get("/getsignupdet", async (req, res) => {
  try {
    const signUpdet = await Signup.find();
    res.status(200).json(signUpdet);
  } catch (err) {
    res.status(500).send("Error fetching signup details");
  }
});


app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Signup.findOne({ email: email });
    if (!user) {
      return res.status(404).send("User not found");
    }
    if (user.password === password) {
      res.status(200).send("Login Successful");
    } else {
      res.status(401).send("Incorrect Password");
    }
  } catch (err) {
    res.status(500).send("Error during login");
  }
});


app.put("/updateuser", async (req, res) => {
  const { id, ...updates } = req.body;
  try {
    const updateUser = await Signup.findByIdAndUpdate(id, updates, { new: true });
    if (!updateUser) {
      return res.status(404).send("User not found");
    }
    res.status(200).send("User details update successful");
  } catch (err) {
    res.status(500).send("Error updating user details");
  }
});


app.delete("/deleteuser", async (req, res) => {
  const { id } = req.body;
  try {
    const deleteUser = await Signup.findByIdAndDelete(id);
    if (!deleteUser) {
      return res.status(404).send("User not found");
    }
    res.status(200).send("User deleted successfully");
  } catch (err) {
    res.status(500).send("Error deleting user");
  }
});
app.post('/updatedet',(req,res) =>{
  var updateRec = Signup.findOneAndUpdate({"Username":"abi290"},{$set:{"username":"abi2006"}})
})

app.listen(3001, () => {
  console.log("Server connected");
})