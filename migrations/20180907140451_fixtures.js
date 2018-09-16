exports.up = knex => knex.schema.createTable('fixtures', table => {
    table.interger('id').primary()
    table.string('competition')
    table.interger('round')
    table.string('hometeam')
    table.string('awayteam')
    table.string('venue')
    table.datetime('datetime')
    table.string('score')
  })
  
  exports.down = knex => knex.schema.dropTable('users')
  