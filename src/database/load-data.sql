\copy  promotion(website,address,city,state,zip,phoneNumber,totalRewards,incetives, ethWalletAddress, startTime, endTime, email, eventDate, eventName, flyerUrl) FROM './src/database/seed.csv' DELIMITER ',' CSV HEADER;
