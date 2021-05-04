// require('dotenv').config();

// const express = require('express');
// const bodyParser = require('body-parser');
// const exphbs = require('express-handlebars');
// const path = require('path');
// const mongoose  = require('mongoose');


// const app = express();


// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');
// app.locals.layout = false; 

// app.use('/public', express.static(path.join(__dirname, 'public')));


// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// mongoose.connect("mongodb://localhost:27017/portfolio_message",{  useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

// const messageSchema= new mongoose.Schema({
//     name:String,
//     email:String,
//     phone:String,
//     message:String

// });

// const Message = new mongoose.model("Message", messageSchema);

// app.get('/', (req, res) => {
//   res.render('portfolio');
// });

// app.post("/portfolio", (req,res)=>{
//     const newMessage = new Message({
//         name:req.body.name,
//         email:req.body.email,
//         phone:req.body.phone,
//         message:req.body.message
//     });

//     newMessage.save((err)=>{
//         if(err){
//             console.log(err);
//         }else{
//             res.render("/portfolio");
//         }
//     })
// });

// app.listen(process.env.PORT || 3000, () => console.log('Server started...'));