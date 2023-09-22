require('dotenv').config();

const Knex = require('knex');

let pgConnect = () => {
  return Knex({
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      charset: 'utf8'
    }
  });
};

let resetTable = function(tableName, trx) {
  return Promise.all([
    trx(tableName).del(),
    trx.raw(`ALTER SEQUENCE \"${tableName}_id_seq\" RESTART WITH 1;`)
  ]);
};

module.exports = { pgConnect, resetTable };
