const { pgConnect } = require('../helpers');

let knex = pgConnect();

let {DB_DATABASE, NODE_ENV} = process.env;
let databaseName = `${DB_DATABASE}_${NODE_ENV}`;

knex.raw(`CREATE DATABASE ${databaseName}`).then(() => {
  console.log(`Database ${databaseName} created successfully.`);
  process.exit();
});
