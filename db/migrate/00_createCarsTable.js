module.exports = {};

module.exports.up = function(knex) {
  return knex.schema.createTable('cars', function(table) {
    table.increments('id');
    table.string('make', 128).notNullable();
    table.string('model', 128).notNullable();
    table.string('price').notNullable();
    table.float('cityMpg').notNullable();
    table.float('highwayMpg').notNullable();
    table.string('fuel', 128).notNullable();
    table.string('color', 128).notNullable();
    table.string('type', 128).notNullable();
  });
};

module.exports.down = function(knex) {
  return knex.schema.dropTable('cars');
};
