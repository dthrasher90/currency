var express = require("express");
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var morgan = require('morgan');
var mongoose= require('mongoose');
var Currency = require('./models/currency');

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());
app.use(express.static(__dirname + '/public'));


mongoose.connect('mongodb://localhost:27017/currency')

mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to currency');
});


app.post('/currency', function(req, res){

  var newCurrency = new Currency({
      name:  req.body.name,
      amount: req.body.amount,
      rate:  req.body.rate

  });


  newCurrency.save(function(err, result) {
    if(err){
    res.json({status: false, error: "Currency not saved"});
			return;
    }
    res.json({status: true, data: result});
  })
});

app.get('/currency', function(req, res){
  Currency.find(function(err, result){
    if(err){
    res.json({status: false, error: "Error in finding currency"});
			return;
    }
    res.json({status: true, data: result});
  })
});


app.listen(3000);
console.log("Server running at port 3000");
