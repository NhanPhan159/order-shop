const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    customerName: { type : String, require: true},
    phone: { type : String, require: true}, 
    address: { type : String, require: true},
    productOrder: { type : [Object], require: true},
    isSeen: {type:Boolean, default:false},
    idCustomer: String,
    },
    {timestamps: true},
)

const OrderModel = mongoose.model('Order',orderSchema)

module.exports = OrderModel 