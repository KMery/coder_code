require('dotenv').config();
const knex = require('knex');
const knexfile = require('./connDB');

const db = knex(knexfile[process.env.NODE_ENV || 'development']);

module.exports = db;