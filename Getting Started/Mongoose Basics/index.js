const express = require('express');
const mongoose = require('mongoose');
const connectDb = require('./db');
const User = require('./User');

const app = express();

//connect to db
connectDb();

//get data
async function getData() {
  const data = await User.find();
  console.log(data);
}

//calling function
getData();

//listen
app.listen(3000, () => {
  console.log('server running on port 3000')
});
