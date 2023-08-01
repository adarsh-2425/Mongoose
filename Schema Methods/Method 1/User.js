const mongoose =  require('mongoose');

//schema for address
const addressSchema = new mongoose.Schema({
  street: String,
  city: String
});

//create user schema
const UserSchema = new mongoose.Schema({
  name: String,
  age: {
    type: Number,
    min: 1
  },
  email: {
    type: String,
    required: true,
    lowercase: true
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now()
  },
  updatedAt: Date,
  bestFriend: mongoose.SchemaTypes.ObjectId,
  hobbies: [String],
  address: addressSchema
});

//SCHEMA METHOD HERE!!!!!!!!!
//custom method named sayHi()
UserSchema.methods.sayHi = function() {
  console.log(`Hi, My name is ${this.name}`);
};

//user model
module.exports = mongoose.model('User', UserSchema);
