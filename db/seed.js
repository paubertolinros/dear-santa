const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const Present = require('../models/Present.model');
const MONGO_URL = 'mongodb://localhost:27017/dear-santa';
const presents = require('./data.js')

mongoose.connect(MONGO_URL)
  .then(response => console.log(`Connected to the DB, Hi! ${response.connection.name}`))
  .then(() => {
  return Present.create(presents)
  })
  .then(createdPresents => console.log(`Inserted ${createdPresents.length} presents in the database`))
  .then(() => mongoose.connection.close())
.catch(err => console.error(err))