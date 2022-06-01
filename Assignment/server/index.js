const express = require('express');
const cors =require('cors');
const csurf =require('csurf');
const cookieParser=require ('cookie-parser');
const mongoose=require('mongoose');
require("dotenv").config();
//dotenv.config({path:'./.env'});
//const dotenv =require('dotenv')
const morgan =require('morgan');
const { readdirSync } = require("fs");
const { nextTick } = require('process');
const csrfProtection = csurf({ cookie: true });

const app = express();

const port = 8000;

//database remaining
mongoose.connect(process.env.DATABASE).then(()=>
console.log('database connected')).catch((err)=>
console.log('success'))

app.use(cors());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json({limit:'5mb'}));


app.use((req,res,next)=> {
    console.log('this is  my middlewears');
    next();
})

readdirSync('./routes').map((r)=>{
    console.log(r)
    
    return app.use('/api',require(`./routes/${r}`))
    
})
app.use(csrfProtection);

app.get('/api/csrf-token',(req,res)=>{
res.json({csrfToken:req.csrfToken()})
})

app.get('/myfirstapi',(req,res) =>{
   res.status(400).send(" Please Try again!!")
    

  res.json({
      sn:1
    })
})


app.listen(port,()=>{
    console.log("Our app is running on",port)
})