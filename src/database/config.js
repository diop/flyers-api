const pgp = require('pg-promise')()
require('dotenv').config();

const connection = {
  host: 'localhost',
  database: 'flyers'
}

if (process.env.NODE_ENV === 'production') {
  connection = {
    host: process.env.DATABASE_URL
  }
}
const db = pgp(connection)

module.exports =  { db }
