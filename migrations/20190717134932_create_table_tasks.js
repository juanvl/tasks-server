exports.up = function (knex, Promise) {
  return knex.schema.createTable('tasks', (table) => {
    table.increments('id').primary();
    table.string('desc').notNull();
    table.datetime('doneAt');
    table.datetime('estimateAt');
    table
      .integer('userId')
      .references('id')
      .inTable('users')
      .notNull();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('tasks');
};
