const express=require('express');
const port=3000;
const app=express();
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
const db=require('./config/mongoose');

// Routes
app.use('/',require('./routes/index'));
   
app.listen(port,function(err){
    if(err){
        console.log(err);
    }
    console.log("server is runing ...",port);
})