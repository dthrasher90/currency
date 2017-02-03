var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var currencySchema = new Schema({
      name: String,
      rate: Number,
      amount: Number,
      total: Number
});



var currencySetting = mongoose.model('currencySetting', currencySchema);

console.log(currencySetting);

module.exports = currencySetting;
