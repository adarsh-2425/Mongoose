const mongoose =  require('mongoose');

//schema for address
const addressSchema = new mongoose.Schema({
  street: String,
  city: String
});

//create user schema
const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  createdAt: Date,
  updatedAt: Date,
  bestFriend: mongoose.SchemaTypes.ObjectId,
  hobbies: [String],
  address: addressSchema
});

//user model
module.exports = mongoose.model('User', UserSchema);
