const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    },
    customer_name: {
        type: String,
        required: true
    }
});

const Order = mongoose.model('Order', orderSchema, 'Orders');

module.exports = Order;