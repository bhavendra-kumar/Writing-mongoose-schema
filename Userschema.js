const mongoose = require('mongoose')

const Userschema = new mongoose.Schema({
    Username:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    roles: {type:String,default:['user']}

})
module.exports = mongoose.model('user',Userschema)




