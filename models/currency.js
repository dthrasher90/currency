var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// CurrencySchema
var CurrencySchema = new Schema({
	name: String,
	rate: Number
});


var CurrencyModel = mongoose.model('Currency', CurrencySchema);

module.exports = CurrencyModel;
