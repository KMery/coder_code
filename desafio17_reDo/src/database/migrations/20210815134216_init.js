const upProduct = (knex) => {
    return knex.schema.createTable('products', table => {
        table.increments('id').primary().notNullable();
        table.string('title').notNullable();
        table.float('price').notNullable();
        table.string('thumbnail').notNullable();
        table.timestamps(true, true);
    })
    .then(() => console.log('table products created'))
} 

const upChat = (knex) => {
    return knex.schema.createTable('chat', table => {
        table.increments('id').primary().notNullable();
        table.string('message').notNullable();
        table.string('email').notNullable();
        table.timestamps(true, true);
    })
    .then(() => console.log('table chat created'))
}

const upTables = (knex) => {
    upProduct(knex);
    upChat(knex);
}


const downTables = (knex) => {
    knex.schema.dropTable('products');
    knex.schema.dropTable('chat');
}

exports.up = function(knex) {
    return new Promise((resolve, reject) => {
        resolve(upTables(knex))
    })
};

exports.down = function(knex) {
    return new Promise((resolve, reject) => {
        resolve(downTables(knex))
    })
};
