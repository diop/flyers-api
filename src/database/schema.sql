DROP TABLE IF EXISTS promotion;
CREATE TABLE promotion (
  id SERIAL PRIMARY KEY,
  website TEXT,
  address TEXT,
  city TEXT,
  state TEXT,
  zip TEXT,
  phoneNumber TEXT,
  totalRewards TEXT,
  incentives TEXT,
  ethWalletAddress TEXT,
  startTime TEXT,
  endTime TEXT,
  email TEXT,
  eventDate TEXT,
  eventName TEXT,
  venueName TEXT,
  flyerUrl TEXT
);

DROP TABLE IF EXISTS visitor;
CREATE TABLE visitor (
  id SERIAL PRIMARY KEY,
  email TEXT
);

DROP TABLE IF EXISTS promoter;
CREATE TABLE promoter (
  id SERIAL PRIMARY KEY,
  email TEXT,
  ethWalletAddress TEXT
);

DROP TABLE IF EXISTS redemptions;
CREATE TABLE redemptions (
  promotionId INT,
  promoterId INT,
  visitorId INT,
  PRIMARY KEY(promotionId, promoterId, visitorId)
);
