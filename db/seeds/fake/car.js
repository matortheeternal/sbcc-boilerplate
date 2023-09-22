const db = require('db');
const { faker } = require('@faker-js/faker');

module.exports = async () => {
  let [car] = await db('cars').insert({
    make: faker.vehicle.manufacturer(),
    model: faker.vehicle.model(),
    price: faker.commerce.price({ min: 5000, max: 100000 }),
    cityMpg: faker.number.float({ min: 10, max: 50, precision: 0.1 }),
    highwayMpg: faker.number.float({ min: 10, max: 50, precision: 0.1 }),
    fuel: faker.vehicle.fuel(),
    color: faker.vehicle.color(),
    type: faker.vehicle.type()
  }, ['id']);
  return car.id;
}
