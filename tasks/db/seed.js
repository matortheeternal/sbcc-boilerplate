const db = require('db');
const { resetTable } = require('../helpers');
const car = require('db/seeds/fake/car');

let getCounts = async function() {
  let tables = ['cars'];
  let counts = {};
  for (let table of tables) {
    let [{ count }] = await db(table).count('id');
    counts[table] = count;
  }
  return counts;
};

let logCounts = async function() {
  let counts = await getCounts();
  Object.keys(counts).forEach(table => {
    console.log(`Created ${counts[table]} rows in table '${table}'`);
  });
};

let seedFakeCars = async function(numUsers) {
  let start = new Date();
  await resetTable('cars', db);
  for (let i = 0; i < numUsers; i++)
    await car();
  await logCounts();
  console.log(`Completed in ${new Date() - start}ms`);
};

let [numCars = 1000] = process.argv.slice(2);
console.log(`Seeding ${numCars} fake cars.`);
seedFakeCars(numCars).then(() => process.exit());
