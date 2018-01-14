const { db } = require('./config')

const addEvent = (parameters) => {
  return db.query(
    `INSERT INTO event (website, address, city, zip, phoneNumber,
        totalRewards, incentives, ethWalletAddress, startTime, endTime,
        email, flyerUrl, eventDate, eventName, venueName, flyerUrl)
      VALUES ($[website], $[address], $[city], $[zip], $[phoneNumber],
        $[totalRewards], $[incentives], $[ethWalletAddress], $[startTime], $[endTime],
        $[email], $[flyerUrl], $[eventDate], $[eventName], $[venueName], $[flyerUrl])
      RETURNING id`,
    parameters
  )
}

const addVisitor = (email) => {
  return db.query(
    `INSERT INTO visitor (email) VALUES ($1) RETURNING id`,
    email
  )
}

const addPromoter = (parameters) => {
  return db.query(
    `INSERT INTO promoter (email, ethWalletAddress)
      VALUES ($[email], $[ethWalletAddress]) RETURNING id`,
    parameters
  )
}

const getAllFlyers = () => {
  return db.query(`SELECT id ,flyerUrl from event`)
}

const getFlyer = (flyerId) => {
  return db.query(
    'SELECT * from event WHERE id=$1', [flyerId]
  )
}

const isValidRedemtion = (parameters) => {
  return db.query(
    `SELECT * FROM redemptions WHERE eventId=$[eventId]
      AND promoterId=$[promoterId] AND visitorId=$[visitorId];`,
    parameters
  ).then(results => results.length === 0)
}

const addRedemtion = (parameters) => {
  return db.query(
    `INSERT INTO redemptions (eventId, promoterId, visitorId)
      VALUES ($[eventId], $[promoterId], $[visitorId]);`,
    parameters
  )
}

module.exports = {
  addEvent,
  addVisitor,
  addPromoter,
  getAllFlyers,
  getFlyer,
  isValidRedemtion,
  addRedemtion
}
