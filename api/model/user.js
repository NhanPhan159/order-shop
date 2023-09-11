const mongoose = require('mongoose')
const {Schema} = mongoose

const UserSchema = Schema({
    name: String,
    phone: {type: String, unique: true},
    hash: String,
    salt: String,
    username: String,
    role: {type:String, default: 'normal user'}
})

const User_Model = mongoose.model('User',UserSchema)

module.exports = User_Model