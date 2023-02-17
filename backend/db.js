/* Include to use .env file */
require('dotenv').config();


const pg = require('pg');

/// ///////////////////////////////////////////////////////////////////////
// DATABASE_URL extracted from .env file
/// ///////////////////////////////////////////////////////////////////////
const dbConfig = { connectionString: process.env.DB_URL };

/// ///////////////////////////////////////////////////////////////////////
// CONNECTION TO DB
/// ///////////////////////////////////////////////////////////////////////
const pool = new pg.Pool({
    ...dbConfig,
    max: process.env.DB_CONNECTION_LIMIT || 5,
});

module.exports = pool;