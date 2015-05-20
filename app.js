var express =  require('express');
var path = require('path');
var logger = require('morgan');

var app = express();

var mongoose = require('mongoose');
var mongoURI = "mongodb://localhost:27017/user";
mongoose.connect(mongoURI);

// mongoose Schema  definition
var Schema  = mongoose.Schema;
var UserSchema = new Schema({
    username: String,
    // email: String
});

var User = mongoose.model('users', UserSchema);

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

app.get('/users', function (req, res) {
    User.find({}, function (err, docs) {
        res.json(docs);
    });
});

app.get('/users/add/:user', function(req, res) {
	var user = new User({
		username: req.params.user,
	});
	user.save(function(err) {
	  if (err) { console.log(err); }
	});

    User.find({}, function (err, docs) {
        res.json(docs);
    });
});


// app.get('/:username', function(req, res, next) {
//   res.send(req.params.username);
// });


var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
