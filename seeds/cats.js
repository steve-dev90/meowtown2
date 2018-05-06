
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cats').del()
    .then(function () {
      // Inserts seed entries
      return knex('cats').insert([
        {id: 1, name: 'Fluffy', image: 'test.jpg', life_story: 'Born in the burbs'},
        {id: 2, name: 'Tiger', image: 'test.jpg', life_story: 'Wild cat'}
      ])
    })
}
