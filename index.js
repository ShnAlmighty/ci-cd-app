const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))

app.listen(port,(err,res)=>{
    console.log('server running at port:',port);
})