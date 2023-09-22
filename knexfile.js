require('dotenv').config();

const {
    DB_DATABASE, DB_HOST, DB_PORT,
    DB_USERNAME, DB_PASSWORD
} = process.env;

const env = process.env.NODE_ENV || 'development';
const baseConfig = {
    client: 'postgresql',
    connection: {
        host: DB_HOST,
        port: DB_PORT,
        database: `${DB_DATABASE}_${env}`,
        user: DB_USERNAME,
        password: DB_PASSWORD
    },
    migrations: {
        tableName: 'knex_migrations',
        directory: './db/migrate'
    }
};

const productionConfig = {
    ...baseConfig,
    pool: { min: 2, max: 10 }
};

module.exports = {
    development: baseConfig,
    test: baseConfig,
    staging: productionConfig,
    production: productionConfig
};
