## Flyers

A decentralized promotions platform, focusing on the referral / word of mouth niche market.
This niche market is currently a multi-billion dollar industry that's yet to be digitized, and definitely not yet decentralized.

## Stakeholders

### Businesses

Businesses can use the Flyers platform to promote any event, product or service. They simply fill out a form, transfer promotion funds to an Ethereum smart contract through Metamask integration, and watch users come to them. Our platform, with its focus on promoters, ensures every business can rest ease knowing their promotion is in good hands.

### Promoters

Promoters are everyday people who can earn money using our platform. They are incentived by rewards the business offers for getting the word out. They get a customized link which tracks how many users they attract to their promotion. If a promoter is great at their job, they make more money.

### Visitors

The world and all its people. Visitors come to our platform through promoters or by themeselves. Here on our platform, they engage with the best their local businesses have to promote.

## Application flow:

- Business promoting their event, product or service -

1. Click on 'Add Event' button. This renders a form. 
2. Submit form with information. This triggers writes to a Postgres database, as well as triggering two functions on our smart contract, which is deployed on the Ethereum Ropsten Testnet. 
3. Event is ready, with money stored in smart contract and data stored in Postgres database.

- Promoter spreading the word -

1. Promoter picks up an event to promote by clicking the 'Promote' button. This renders a form.
2. Promoter enters data and get a custom link. They promote this custom link.

- Visitors claim a promotion - 

1. Visitor finds promotion through a promoter or by themselves. They click 'Claim'.
2. They are emailed a QR code to unlock special perks at the event, product, or service space.
3. When they sign in with QR code, the promoter's info is recorded in a Postgres database so they can be rewarded.

- When an event, product, or service timeframe is over -

1. Payout are calculated based on data of visitor flow.
2. Functions are triggered on our Ropsten Testnet smart contract that pays out to promoters.
