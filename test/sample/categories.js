const faker = require('faker');
const Category = require('./../../src/server/api/category/Category');
const sampleCategories = [];

for (let i = 0; i < 5; i++) {
  const description = faker.commerce.color();
  sampleCategories.push({
    description
  });
}

module.exports = sampleCategories;