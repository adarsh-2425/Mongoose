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

//custom method named sayHi()
UserSchema.methods.sayHi = function() {
  console.log(`Hi, My name is ${this.name}`);
};

//static method
UserSchema.statics.findByName = function(name) {
  return this.where({name: new RegExp(name, "i")});
}

//schema middleware
UserSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

//user model
module.exports = mongoose.model('User', UserSchema);
