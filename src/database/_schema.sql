DROP TABLE IF EXISTS venues;
CREATE TABLE venues (
  id SERIAL,
  name TEXT NOT NULL,
  address TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  zip_code TEXT NOT NULL,
  url TEXT NOT NULL,
  phone_number TEXT NOT NULL,
  email TEXT,
  created_at DATETIME,
  updated_at DATETIME,
  latitude FLOAT,
  longitude FLOAT
);

DROP TABLE IF EXISTS parties;
CREATE TABLE parties (
  id SERIAL,
  title TEXT NOT NULL,
  description TEXT,
  created_at DATETIME,
  updated_at DATETIME,
  starts_at DATETIME,
  flyer_file_name TEXT,
  flyer_content_type TEXT,
  flyer_file_size INTEGER,
  flyer_updated_at DATETIME,
  paid BOOLEAN,
  eth_address FLOAT UNIQUE NOT NULL,
  venue_id INTEGER NOT NULL REFERENCES venues(id)
);

DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id SERIAL,
  name TEXT,
  email TEXT,
  password TEXT,
  eth_address FLOAT UNIQUE NOT NULL,
  created_at DATETIME,
  updated_at DATETIME,
  is_curator BOOLEAN,
  is_host BOOLEAN
);

DROP TABLE IF EXISTS curators;
CREATE TABLE curators (
  id SERIAL,
  name TEXT,
  email TEXT UNIQUE NOT NULL,
  reputation INTEGER,
  eth_address FLOAT UNIQUE NOT NULL,
  created_at DATETIME,
  party_id INTEGER NOT NULL REFERENCES parties(id)
);

DROP TABLE IF EXISTS hosts;
CREATE TABLE hosts (
  id SERIAL,
  name TEXT,
  email TEXT,
  reputation INTEGER,
  eth_address FLOAT UNIQUE NOT NULL,
  created_at DATETIME,
  venue_id INTEGER NOT NULL REFERENCES venues(id)
);
