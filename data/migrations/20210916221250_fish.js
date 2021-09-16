
exports.up = function(knex) {
  return knex.schema.createTable('fish', tbl => {
      tbl.increments();
      tbl.string('species', 255).unique().notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('fish')
};
