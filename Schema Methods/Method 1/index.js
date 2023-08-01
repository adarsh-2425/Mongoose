const express = require('express');
const mongoose = require('mongoose');
const connectDb = require('./db');
const User = require('./User');

const app = express();

//connect to db
connectDb();

//using a custom method named sayHi() from UserSchema
async function oneUser() {
  try {
    const user = await User.findOne({name: 'Alice'});
    user.sayHi();
  } catch (err) {
    console.error(err.message);
  }
}

oneUser();


//listen
app.listen(3000, () => {
  console.log('server running on port 3000')
});
