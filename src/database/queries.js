const { db } = require('./config')

const addPromotion = (parameters) => {
  return db.query(
    `INSERT INTO promotion (website, address, city, zip, phoneNumber,
        totalRewards, incentives, ethWalletAddress, startTime, endTime,
        email, flyerUrl)
      VALUES ($[website], $[address], $[city], $[zip], $[phoneNumber],
        $[totalRewards], $[incentives], $[ethWalletAddress], $[startTime], $[endTime],
        $[email], $[flyerUrl])`,
    parameters
  )
}

const addVisitor = (email) => {
  return db.query(
    `INSERT INTO visitor (email)
      VALUES ($1)`,
    email
  )
}

module.exports = { addPromotion, addVisitor }
