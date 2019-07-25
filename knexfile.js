// Update with your config settings.

module.exports = {
  client: 'postgresql',
  connection: {
    host: 'postgres',
    database: 'tasks',
    user: 'postgres',
    password: 'postgres',
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'knex_migrations',
  },
};
