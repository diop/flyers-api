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

module.exports = { addPromotion, addVisitor, addPromoter }
