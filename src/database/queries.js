const { db } = require('./config')

const addPromotion = (parameters) => {
  return db.query(
    `INSERT INTO promotion (website, address, city, zip, phoneNumber,
        totalRewards, incentives, ethWalletAddress, startTime, endTime,
        email, flyerUrl, eventDate, eventName, venueName, flyerUrl)
      VALUES ($[website], $[address], $[city], $[zip], $[phoneNumber],
        $[totalRewards], $[incentives], $[ethWalletAddress], $[startTime], $[endTime],
        $[email], $[flyerUrl], $[eventDate], $[eventName], $[venueName], $[flyerUrl])`,
    parameters
  )
}

const addVisitor = (email) => {
  return db.query(
    `INSERT INTO visitor (email) VALUES ($1)`,
    email
  )
}

const addPromoter = (parameters) => {
  return db.query(
    `INSERT INTO promoter (email, ethWalletAddress)
      VALUES ($[email], $[ethWalletAddress])`,
    parameters
  )
}

const getAllFlyers = () => {
  return db.query(`SELECT id ,flyerUrl from promotion`);
}

const getFlyer = (flyerId) => {
  return db.query(
    'SELECT * from promotion WHERE id=$1', [flyerId]
  )
}

module.exports = { addPromotion, addVisitor, addPromoter, getAllFlyers, getFlyer }
