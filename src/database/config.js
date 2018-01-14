const pgp = require('pg-promise')()

// const connection = {
//   host: 'localhost',
//   database: 'flyers'
// }

const connection = {
  host: "ec2-107-21-95-70.compute-1.amazonaws.com",
  database: "da3ar2fu63mckn"
};

const db = pgp(connection)

module.exports =  { db }
