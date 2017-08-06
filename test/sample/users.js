const faker = require('faker');
const sampleUsers = [];

Array(5).fill().forEach(index => {
  const email = `${faker.name.lastName()}.${faker.name.firstName()}@peoplegrove.com`;
  const token  = `${faker.random.alphaNumeric(8)}`;
  sampleUsers.push({
    email,
    token
  })
});

module.exports = sampleUsers;