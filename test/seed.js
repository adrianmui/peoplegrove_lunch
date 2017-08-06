require('dotenv').config(); // .env

const faker = require('faker');
const logger = require('morgan');

const db = require('./../db/connect');
const User = require('./../src/server/api/user/User');
const Category = require('./../src/server/api/category/Category');

const sampleUsers = require('./sample/users');
const sampleCategories = require('./sample/categories');

const createDoc = (model, doc) => 
  new Promise((resolve, reject) => 
    (new model(doc).save((err, saved) => 
      (err ? reject(err) : resolve(saved))
    ))
  );
  
const createModel = (arr, model) => {
  const promises = arr.map(row => createDoc(model, row));
  return Promise.all(promises)
    .then(console.log(`...creating ${arr.length} ${model.collection.collectionName}`))
    .catch(err => console.log`err ${err}`);
}

// db.dropDatabase().then(() => (
//   console.log(`########################################`),
//   console.log(`########################################`),
//   console.log(`## seed database has been wiped clean ##`),
//   console.log(`########################################`),
//   console.log(`########################################`),
//   createModel(sampleUsers, User),
//   createModel(sampleCategories, Category)))

createModel(sampleCategories,Category);