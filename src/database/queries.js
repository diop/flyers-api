const { db } = require('./config')

const addPromotion = (parameters) => {
  return db.query(
    `INSERT INTO promotion (website, address, city, zip, phoneNumber,
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
  return db.query(`SELECT id ,flyerUrl from promotion`);
}

const getFlyer = (flyerId) => {
  return db.query(
    'SELECT * from promotion WHERE id=$1', [flyerId]
  )
}

const isValidRedemtion = (parameters) => {
  return db.query(
    `SELECT * FROM redemptions WHERE promotionId=$[promotionId]
      AND promoterId=$[promoterId] AND visitorId=$[visitorId];`,
    parameters
  ).then(results => results.length === 0)
}

const addRedemtion = (parameters) => {
  return db.query(
    `INSERT INTO redemptions (promotionId, promoterId, visitorId)
      VALUES ($[promotionId], $[promoterId], $[visitorId]);`,
    parameters
  )
}

module.exports = {
  addPromotion,
  addVisitor,
  addPromoter,
  getAllFlyers,
  getFlyer,
  isValidRedemtion,
  addRedemtion
}
