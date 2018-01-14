const pgp = require('pg-promise')()

const connection = {
  host: 'localhost',
  database: 'flyers'
}

// const connection = {
//   host: "ec2-107-21-95-70.compute-1.amazonaws.com",
//   database: "da3ar2fu63mckn",
//   user: "gjaovdqqewtguy",
//   password: "2649ef6883f757f61e4ccd688189cebe12fbf020626661ef531b1953b44cd2e2"
// };

const db = pgp(connection)

module.exports =  { db }
