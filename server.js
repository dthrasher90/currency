var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var path = require("path");
var http = require("http");
var mongoose= require('mongoose');
var Currency = require('./models/currency');

mongoose.connect('mongodb://localhost:27017/currency').then(function(err, res){
  console.log("connected with mongoose");
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connectiion error:  '));
db.once('open', function(){
  console.log("mongo is running wild with the mongoose ");
});

app.use(express.static(__dirname + '/public'));
//app.use(bodyParser.json);


app.get('/currency', function(req, res){
  console.log("inside get /currency");
  res.json({status: true})
  // Currency.find(function(err, response) {
  //   if (err) {
  //     res.json({status: false});
  //     return;
  //   }
  //   res.josn({status: true, data: response})
  // })
});



//==============================MONGOOSE===========================================

//
// var CoinSchema = mongoose.Schema({
//             name: String,
//             rate: Number
//             });
//
// var Coin = mongoose.model('Coin', CoinSchema);
//
// var GBP = new Coin ({ name: 'GBP', rate:'1.89' });
// GBP.save(function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('tea and crumpets');
//     console.log(GBP);
//   }
// });
//
// var EUR = new Coin ({ name: 'EUR', rate:'1.10' });
// EUR.save(function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('traveling in europe, inexpensive!');
//     console.log(EUR);
//   }
// });


// var YEN = new Coin ({ name: 'YEN', rate:'0.99' });
// YEN.save(function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('get some sushi!');
//     console.log(YEN);
//   }
// });

//=====================Routing===================================




    // app.get('*', function(req, res) {
    //     //  res.sendfile('./public/index.html');
    //       console.log("sending all routes");
    //
    //   });

app.listen(3000);
console.log("Server running at port 3000");
