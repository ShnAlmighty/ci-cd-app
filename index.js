const express = require('express');
const app = express();
const port = process.env.PORT || 80;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/',(req,res)=>{
    res.send('hello world this is ec2 speaking, nice to see you again');
})

app.listen(port,(err,res)=>{
    console.log('server running at port:',port);
})