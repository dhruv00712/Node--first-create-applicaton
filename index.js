

const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("My First Application");
});

app.listen(9000, ()=>{
    console.log('server running on 9000');
});

