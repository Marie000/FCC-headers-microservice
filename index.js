var express = require('express');
var app = express();
var useragent = require('useragent');
var PORT = process.env.PORT || 3000;

app.get('/',function(req,res){
  var ip = req.headers["x-forwarded-for"];
  var agent = useragent.parse(req.headers['user-agent']);
  var os = agent.os.toString();
  var languages = req.headers["accept-language"];
  var lg = languages.split(',')[0];
  var output = {
    "ip": ip,
    "operating system": os,
    "language": lg
  };
  res.json(output);
})

app.listen(PORT);