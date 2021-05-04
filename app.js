// require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const ejs = require("ejs");
const mongoose  = require('mongoose');
const path = require('path');
const app = express();

app.use('/public', express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
mongoose.connect("mongodb://localhost:27017/portfolio",{  useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    message:String

});

const User = new mongoose.model("User", userSchema);

app.get('/', (req, res) => {
  res.render('portfolio');
});

app.post("/portfolio", (req,res)=>{
    const newUser = new User({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        message:req.body.message
    });

  
    newUser.save((err)=>{
      if(err){
          console.log(err);
      }else{
         
          res.render("portfolio");
      }
  })
});

app.listen(5000, ()=>{
    console.log("server started at 5000");
})