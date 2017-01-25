var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var currencySchema = new Schema({
      symbol: String,
      rate: Number
});



var currencySetting = mongoose.model('currencySetting', currencySchema);

console.log(currencySetting);

module.exports = currencySetting;
