DROP TABLE IF EXISTS event;
CREATE TABLE event (
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

INSERT INTO
  promoter (email, ethWalletAddress)
VALUES
  ('flyers.ai.promotions@gmail.com', '123');

DROP TABLE IF EXISTS redemptions;
CREATE TABLE redemptions (
  eventId INT,
  promoterId INT,
  visitorId INT,
  PRIMARY KEY(eventId, promoterId, visitorId)
);
