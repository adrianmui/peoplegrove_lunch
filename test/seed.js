const faker = require('faker');
const db = require('./../db/connect');
const User = require('./../src/server/api/user/User');


const sampleUsers = [
  {
    email: `${faker.name.lastName()}.${faker.name.firstName()}@peoplegrove.com`,
    token: `${faker.random.alphaNumeric(8)}`
  },
  {
    email: `${faker.name.lastName()}.${faker.name.firstName()}@peoplegrove.com`,
    token: `${faker.random.alphaNumeric(8)}`
  },
  {
    email: `${faker.name.lastName()}.${faker.name.firstName()}@peoplegrove.com`,
    token: `${faker.random.alphaNumeric(8)}`
  },r
  {
    email: `${faker.name.lastName()}.${faker.name.firstName()}@peoplegrove.com`,
    token: `${faker.random.alphaNumeric(8)}`
  },
  {
    email: `${faker.name.lastName()}.${faker.name.firstName()}@peoplegrove.com`,
    token: `${faker.random.alphaNumeric(8)}`
  }
];

db.dropDatabase().then(() => (
  console.log(`########################################`),
  console.log(`########################################`),
  console.log(`## seed database has been wiped clean ##`),
  console.log(`########################################`),
  console.log(`########################################`),
  User.insertMany(sampleUsers)
    .then(users => (console.log(`${users.length}... has been seeded`)))
    .done(() => db.close())
));