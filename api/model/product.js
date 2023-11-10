const mongo = require('mongoose')

const productSchema = new mongo.Schema({
    name: String,
    price: String,
    description: String,
    image_insite: [String],
    size: Number,
    image_outside: [String],
    description: String,
    core_feature: [String],
    quantity: Number,
    category: String
})

const ProductModel = mongo.model('Product',productSchema)

module.exports = ProductModel