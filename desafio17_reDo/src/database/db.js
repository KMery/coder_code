require('dotenv').config();
const knex = require('knex');
// const { development } = require('./connDB');
const knexfile = require('./connDB');

const db = knex(knexfile[process.env.NODE_ENV || 'development']);

module.exports = db;