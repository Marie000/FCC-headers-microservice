var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.get('/',function(req,res){
  var headers = req.connection.remoteAddress;
  res.json(headers);
})

app.listen(PORT);