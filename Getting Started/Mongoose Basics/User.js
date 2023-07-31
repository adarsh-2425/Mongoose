const mongoose =  require('mongoose');

//create schema
//schema is a blueprint for how data is to be structured
const UserSchema = new mongoose.Schema({
  name: String,
  age: Number
});

//user model and exporting
//model is the actual data
module.exports = mongoose.model('User', UserSchema);
