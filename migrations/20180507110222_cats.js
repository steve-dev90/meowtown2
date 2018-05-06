
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('cats', (table) => {
    table.increments('id')
    table.string('name')
    table.string('image')
    table.string('life_story')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cats')
}