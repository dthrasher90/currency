var express = require("express");
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var morgan = require('morgan');
var mongoose = require('mongoose');
var Currency = require('./models/currency');

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
    'extended': 'true'
})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
})); // parse application/vnd.api+json as json

app.use(methodOverride());
app.use(express.static(__dirname + '/public'));


mongoose.connect(process.env.MONGOLAB_URI);

mongoose.connection.on('connected', function() {
    console.log('Mongoose default connection open to currency');
});

app.SET MONGOLAB_URI="mongodb://example:example@ds053312.mongolab.com:53312/usdconverter"

app.post('/currency', function(req, res) {

    var newCurrency = new Currency({
        name: req.body.name,
        amount: req.body.amount,
        rate: req.body.rate,
        total: req.body.total
    })
    newCurrency.save(function(err, result) {
        if (err) {
            res.json({
                status: false,
                error: "Currency not saved"
            });
            return;
        }
        res.json({
            status: true,

        });
    })
});

app.get('/currency', function(req, res) {
    Currency.find(function(err, result) {
        if (err) {
            res.json({
                status: false,
                error: "Error in finding currency"
            });
            return;
        }
        res.json({
            status: true,
            data: result
        });
    })
});

app.delete('/currency/:id', function(req, res) {
  console.log(req.params)

    Currency.findByIdAndRemove({
        _id: req.params.id
    }, function(err, result) {
        if (err)
            res.send(err);
            console.log("successful delete was made");
            res.json({
              statusL: true,
              data: result
            });
    })
    })



app.listen(process.env.PORT || 2000);
console.log("Server running at port 3000");
