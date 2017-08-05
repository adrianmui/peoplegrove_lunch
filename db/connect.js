require('dotenv').config(); // .env

const mongoose = require('mongoose');
const config = require('./../config');
const { username, password, url } = config.Mongo;
const mongoURI = `mongodb://${username}:${password}@${url}`;
const db = mongoose.connect(mongoURI).connection;

db.on('error', console.error.bind(console, `MongoDB connection error`));

db.once('open', () => (
  console.log(`MongoDB connection has been opened to ${url} \nwelcome: ${username}`)
));

module.exports = db;
