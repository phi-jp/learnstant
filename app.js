var express =  require('express');
var path = require('path');
var logger = require('morgan');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// middleware
app.use(logger('dev'));
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));



app.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

app.get('/category/:category/:group?/:item?', function(req, res, next) {
  res.render('category', req.params);
});

app.get('/:username', function(req, res, next) {
  res.send(req.params.username);
});


var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
