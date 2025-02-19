const mongoose=require('mongoose')

const userSchema= new mongoose.Schema({
    name:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    roles:{type:String,default:['user']}
    
})
const user= mongoose.model('User',userschema)

const profileSchema = new mongoose.Schema({
    firstname:{type:String},
    lastname:{type:String},
    age:{type:Number}
  })
  const profile=mongoose.model('profile',profileschema)

  
  const activitySchema = new mongoose.model({
    lastLogin:{type:Date }

  })
  const activity= mongoose.model('activity',activityschema)