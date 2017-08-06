const faker = require('faker');
const Category = require('./../../src/server/api/category/Category');
const sampleCategories = [];

for (let i = 0; i < 5; i++) {
  const name = faker.commerce.color();
  sampleCategories.push({
    name
  });
}

module.exports = sampleCategories;