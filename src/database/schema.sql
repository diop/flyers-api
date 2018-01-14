DROP TABLE IF EXISTS promotions;
CREATE TABLE promotions (
  id SERIAL PRIMARY KEY,
  website TEXT,
  address TEXT,
  city TEXT,
  zip TEXT,
  phoneNumber TEXT,
  totalRewards TEXT,
  incentives TEXT,
  ethWalletAddress TEXT,
  startTime TEXT,
  endTime TEXT,
  email TEXT
);
