
exports.up = function(knex) {
    return knex.schema.createTable('items', table => {
        table.increments('id').primary().notNullable();
        table.string('nombre').notNullable();
        table.string('categoria').notNullable();
        table.integer('stock').notNullable();
        table.timestamps(true, true);
    })
    .then(() => console.log('table products created'))
	//.catch((err) => { console.error(err); throw err })
	//.finally(() => knex.destroy());
};

exports.down = function(knex) {
    return knex.schema.dropTable('items');
};
