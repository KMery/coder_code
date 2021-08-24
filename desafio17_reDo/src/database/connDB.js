require('dotenv').config();

module.exports = {
    development: {
        client: 'mysql2',
        connection: {
            host: process.env.HOST || '127.0.0.1', 
            user: process.env.USERDB || 'root',
            password: process.env.PASSWORDDB || '',
            database: process.env.DATABASE || 'prueba_coder'
        },
        pool: { min: 0, max: 7 }
    }
};