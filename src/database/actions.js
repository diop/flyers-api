const pgp = require('pg-promise')()

const connection = {
  host: 'localhost',
  database: 'flyers'
}

const db = pgp(connection)
