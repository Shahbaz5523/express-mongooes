const express = require('express');

const app = express();

// connect mongoobd
const mongooes = require('mongoose');
const db  = 'mongodb+srv://hassan:123edc@cluster0.utlho.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongooes.connect(db,{
     useNewUrlParser: true ,
     useCreateIndex:true,
     useUnifiedTopology: true,
     useFindAndModify:false
})
.then(()=>{
    console.log("Mongoodb connect sucessfully...")
}).catch((err)=>console.log(err));

app.get('/',(req,res)=>{
    res.send("Send response from server to front end")
})

app.listen(3000,()=>{
    console.log("server is running");
})