var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.get('/',function(req,res){
  var ip = req.headers;
  res.json(ip);
})

app.listen(PORT);