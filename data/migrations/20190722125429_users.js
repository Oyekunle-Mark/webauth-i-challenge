exports.up = knex =>
  knex.schema.createTable('users', table => {
    table.increments();
    table
      .string('username', 50)
      .notNullable()
      .unique();
    table.string('password', 250).notNullable();
  });

exports.down = knex => knex.schema.dropTableIfExists('users');
