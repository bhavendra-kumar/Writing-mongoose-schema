
const mongoose = require('mongoose')

const Userschema = new mongoose.Schema({
   firstname:{type:String},
   lastname:{type: String},
   age:{type:Number}
})

module.exports = mongoose.model('profile',Userschema)





