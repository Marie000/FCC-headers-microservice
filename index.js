var express = require('express');
var app = express();
var useragent = require('useragent');
var PORT = process.env.PORT || 3000;

app.get('/',function(req,res){
  var ip = req.headers["x-forwarded-for"];
  res.json(ip);
})

app.listen(PORT);