const express = require('express');
const mongoose = require('mongoose');
const connectDb = require('./db');
const User = require('./User');

const app = express();

//connect to db
connectDb();

//static method
async function staticUser() {
  try {
    const user = await User.findByName('Alice');
    console.log(user);
  } catch (err) {
    console.error(err.message);
  }
}

staticUser();

//listen
app.listen(3000, () => {
  console.log('server running on port 3000')
});
