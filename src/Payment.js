const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
    name:String,
    adress:String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});


module.exports = mongoose.model('User', PaymentSchema);
