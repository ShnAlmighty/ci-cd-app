const express = require('express');
const app = express();
const port = process.env.PORT || 80;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/',(req,res)=>{
    res.send('Hello world this is ec2 here speakin and chillin, Cheers to yall! Drinks are on me!!');
})

app.get('*',(req,res)=>{
    res.status(404).send('Page not found');
})

app.listen(port,(err,res)=>{
    console.log('server running at port:',port);
})