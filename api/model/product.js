const mongo = require('mongoose')

const productSchema = new mongo.Schema({
    name: String,
    price: Number,
    description: String,
    image: String
})

const ProductModel = mongo.model('Product',productSchema)

module.exports = ProductModel