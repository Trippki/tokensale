# **TRIP Token And Crowdsale Smart Contracts**

This document is subject to small changes. These changes will not affect maximum cap.
Due to a change in development road map the token distribution campaign has been postponed till the release of an MVP in 2018. New dates TBA

## Development

**Dependencies**

* `node@8.5.x`
* `truffle@^4.0.1`
* `ganache-cli@^6.0.x`
* `zeppelin-solidity@1.4.X`

## Setting Up

* Clone this repository.

* Install all [system dependencies](#development).

  * `npm install`

* Compile contract code

  * `node_modules/.bin/truffle compile`

* Run the personal blockchain for development opting to have the accounts with many ether

  * `ganache-cli --account="0xee4e871def4e297da77f99d57de26000e86077528847341bc637d2543f8db6e2,10000000000000000000000000" --account="0x4be9f21ddd88e9e66a526d8dbb00d27f6d7b977a186eb5baa87e896087a6055f,10000000000000000000000000" --account="0x09e775e9aa0ac5b5e1fd0d0bca00e2ef429dc5f5130ea769ba14be0163021f16, 10000000000000000000000000" --account="0xed055c1114c433f95d688c8d5e460d3e5d807544c5689af262451f1699ff684f, 10000000000000000000000000" --account="0x3f81b14d33f5eb597f9ad2c350716ba8f2b6c073eeec5fdb807d23c85cf05794,10000000000000000000000000" --account="0x501a3382d37d113b6490e3c4dda0756afb65df2d7977ede59618233c787239f2,10000000000000000000000000" --account="0x3d00e5c06597298b7d70c6fa3ac5dae376ff897763333db23c226d14d48333af, 10000000000000000000000000" --account="0xc00db81e42db65485d6ce98d727f12f2ace251cbf7b24a932c3afd3a356876ad, 10000000000000000000000000" --account="0xd6f7d873e7349c6d522455cb3ebdaa50b525dc6fd34f96b9e09e2d8a22dce925, 10000000000000000000000000" --account="0x13c8853ac12e9e30fda9f070fafe776031cc4d13bee88d7ad4e099601d83c594, 10000000000000000000000000"`

* Deploy contracts
  * `node_modules/.bin/truffle migrate`

## Running tests

* `node_modules/.bin/truffle test`

# If you work on these contracts, write tests!

**Testing Pattern**

* a good pattern to use, when testing restrictions on contract is to structure this way:

```javascript
describe('testing user restriction', () => {
  beforeEach('deploys and prepares', () => {
    // Deploy a contract(s) and prepare it up
    // to the pass / fail point
  })

  it('tests the failing user', () => {
    // Test something with the bad user
    // in as few steps as possible
  })

  it('tests the good user', () => {
    // Test the VERY SAME steps,
    // with only difference being the good user
  })
})
```

## **TRIP Token Sale Summary **

This document explains the distribution of TRIP and the details of the token sale.

## **Summary**

* TBA

* Ends in 14 days or when the hard cap is reached

* Hard cap of $15m \ ETH. Soft cap $4m \*\* ETH

* No minimum cap

* Token name is TRIP

* Only ETH accepted for the sale

* Total amount of TRIP issued is 200M

* Total amount of TRIP distributed on pre-sale & public sale is 80M

* 80M Trip locked for slow release (The Vault)

* Recommended wallets: MyEtherWallet, Mist, MetaMask, (adv users: Ethereum client implementation of your choice)

* Hard cap has been converted from USD value and will only be adjusted under extreme market conditions.

\*\* If the soft cap reached the token sale contract will stop receiving ETH and issuing TRIP within 48hs or when the hard cap is reached.

**IMPORTANT!**

**DO NOT SEND YOUR ETHER TO TRIP TOKEN SALE CONTRACT FROM ANY EXCHANGE! **

**BEWARE OF PHISHING ATTACKS! TOKEN SALE CONTRACT ADDRESS FOR PUBLIC SALE WILL BE PUBLISHED ON THE OFFICIAL TRIPPKI WEBSITE. DO NOT SEND ETH ANYWHERE ELSE.**

**KEEP YOUR PRIVATE KEYS PRIVATE**

## TRIP

It is an Ethereum based token implemented as ERC20 and is the functional token of the Trippki ecosystem. It powers a decentralised reward protocol for customer loyalty. There will be 200M TRIP in existence. No more TRIP will be issued after the token sale period is over. To ensure a wide distribution of TRIP to end consumers, and to provide initial liquidity 40%, of TRIP is held in The Vault smart contract.

## TRIP Pre-sale (Bonus Period)

The pre-sale will have a maintained whitelist of Ethereum addresses, ensuring that buyers are guaranteed to get their tokens and bonus. Pre-sale is capped at 18,000 ETH (half of the value of the hard cap). The minimum contribution is 20 ETH for the Pre-sale.

**Pre-sale bonuses**
* TBA
* 

* 

* 

* 

## TRIP token distribution

40/40/20 distribution: 40% will be distributed to the public, 40% is allocated for The Vault, 10% to the legal entity, 10% bounties and early contributors to the project.

**The Vault **smart contract\*\* \*\*ensures that there is enough liquidity to bootstrap and scale the ecosystem.

**Legal Entity **10% of tokens are held by the legal entity as an incentive.

**Bounties **detailed information on various bounties: community engagement, translations, and more see our website.

## Funds management

Funds raised in ETH will be held in a multisig wallet and managed by a legal entity. The aim of the legal entity is to conduct and support development of the Trippki ecosystem (incl the protocol, application and payment processing) and build partnerships with the industry to enable technology adoption.

## Intended use of raised funds

* 50% - System Development

* 25% - Marketing, Business Development

* 12% - Research

* 10% - Operations & Legal

* 2% - Community

* 1% - Decentralised & P2P Technology Education

<table>
  <tr>
    <td>About this document

This document and any other documents published in association with this token sale summary or white paper relate to a potential token offering to persons (contributors) in respect of the intended development and use of the network by various participants. This document does not constitute an offer of securities or a promotion, invitation or solicitation for investment purposes. The terms of the contribution are not therefore intended to be a financial services offering document or a prospectus. The token offering involves and relates to the development and use of experimental software and technologies that may not come to fruition or achieve the objectives specified in the white paper. The purchase of tokens represents a high risk to any contributors. Tokens do not represent equity, shares, units, royalties or rights to capital, profit or income in the network or software or in the entity that issues tokens or any other company or intellectual property associated with the network or any other public or private enterprise, corporation, foundation or other entity in any jurisdiction. The token is not therefore intended to represent a security interest.

The company expressly excludes any liability in respect of the law of other jurisdictions where participants may be established or resident including contributions by persons from the United States of America - whether by residency or citizenship ("US-persons"). US persons are expressly excluded from participation in the token sale.</td>

  </tr>
</table>
