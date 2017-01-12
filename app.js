var express = require('express')
var app = express();
var path = require('path');
app.use(express.static(path.join(__dirname, 'startbootstrap-agency-gh-pages')));

app.get('/', function(req, res, next){
  res.send(__dirname, 'public/startbootstrap-agency-gh-pages' , 'index.html');
});

app.listen(process.env.PORT || 5000);