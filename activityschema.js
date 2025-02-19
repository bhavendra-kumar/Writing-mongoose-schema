const mongoose = require('mongoose')

const Activitychema = new mongoose.Schema({
  lastlogin : {type:Date}
})

module.exports = mongoose.model('activity',Activitychema)