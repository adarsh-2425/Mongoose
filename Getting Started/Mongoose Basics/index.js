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

//add data
async function addData() {
  try{
    const data = await User.create({name: 'Patrick Jane', age: 45});
    console.log('data successfully saved');
  } catch(err) {
    console.error(err.message);
  }
}

//call your funtion here
//eg: addData();

//listen
app.listen(3000, () => {
  console.log('server running on port 3000')
});
