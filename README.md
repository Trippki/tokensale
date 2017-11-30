This document is subject to small changes. These changes will not affect maximum cap.
Last edit Nov the 14th. Due to a change in development road map the token distribution campaign has been postponed till the release of an MVP in 2018. New dates TBA

## Development

**Dependencies**

- `node@8.5.x`
- `truffle@^4.0.1`
- `ethereumjs-testrpc@^4.0.x`
- `zeppelin-solidity@1.4.X`

## Setting Up

- Clone this repository.

- Install all [system dependencies](#development).
  - `npm install`

- Compile contract code
  - `node_modules/.bin/truffle compile`

- Start testrpc server
  - `testrpc --accounts="10"`

- Deploy contracts
  - `node_modules/.bin/truffle develop`
  Once you are in the develop console, run the command:
  - `migrate --reset`

## Running tests
    - `node_modules/.bin/truffle develop`
    Once you are in the develop console, run the command:
    - `test`

# If you work on these contracts, write tests!
**Testing Pattern**
- a good pattern to use, when testing restrictions on contract is to structure this way:

```javascript
describe("testing user restriction", () => {
    beforeEach("deploy and prepare", () => {
        // Deploy a contract(s) and prepare it up
        // to the pass / fail point
    })

    it("test the failing user", () => {
        // Test something with the bad user
        // in as few steps as possible
    })

    it("test the good user", () => {
        // Test the VERY SAME steps,
        // with only difference being the good user
    })
})
```


# **TRIP Token Sale Summary **

This document explains the distribution of TRIP and the details of the token sale.

# **Summary**

* TBA

* Ends in 14 days or when the hard cap is reached

* Hard cap of 36,000* ETH. Soft cap 26,000** ETH

* No minimum cap

* Token name is TRIP

* Only ETH accepted for the sale

* Total amount of TRIP issued is 200M

* Total amount of TRIP distributed on pre-sale & public sale is 80M

* 80M Trip locked for slow release (The Vault)

* Recommended wallets: MyEtherWallet, Mist, MetaMask, (adv users: Ethereum client implementation of your choice)

* Hard cap has been converted from USD value and will only be adjusted under extreme market conditions.

** If the soft cap reached the token sale contract will stop receiving ETH and issuing TRIP within 48hs or when the hard cap is reached.

**IMPORTANT!**

**DO NOT SEND YOUR ETHER TO TRIP TOKEN SALE CONTRACT FROM ANY EXCHANGE! **

**BEWARE OF PHISHING ATTACKS! TOKEN SALE CONTRACT ADDRESS FOR PUBLIC SALE WILL BE PUBLISHED ON THE OFFICIAL TRIPPKI WEBSITE. DO NOT SEND ETH ANYWHERE ELSE.**

**KEEP YOUR PRIVATE KEYS PRIVATE**

## TRIP

It is an Ethereum based token implemented as ERC20 and is the functional token of the Trippki ecosystem. It powers a decentralised reward protocol for customer loyalty. There will be 200M TRIP in existence. No more TRIP will be issued after the token sale period is over. To ensure a wide distribution of TRIP to end consumers, and to provide initial liquidity 40%, of TRIP is held in The Vault smart contract.

## TRIP Pre-sale (Bonus Period)

The pre-sale will have a maintained whitelist of Ethereum addresses, ensuring that buyers are guaranteed to get their tokens and bonus. Pre-sale is capped at 18,000 ETH (half of the value of the hard cap).  The minimum contribution is 20 ETH for the Pre-sale.

**Pre-sale bonuses**

* 2%:	20 ETH - 99 ETH

* 5%:	100 ETH - 399 ETH

* 10%:	400 ETH - 999 ETH

* 15%:	1,000+ ETH

## TRIP token distribution

40/40/20 distribution: 40% will be distributed to the public, 40% is allocated for The Vault, 10% to the legal entity, 10% bounties and early contributors to the project.

**The Vault **smart contract** **ensures that there is enough liquidity to bootstrap and scale the ecosystem.

**Legal Entity **10% of tokens are held by the legal entity as an incentive.

**Bounties **detailed information on various bounties: community engagement, translations, and more see our website.

## Funds management

Funds raised in ETH will be held in a multisig wallet and managed by a legal entity. The aim of the legal entity is to conduct and support development of the Trippki ecosystem (incl the protocol, application and payment processing) and build partnerships with the industry to enable technology adoption.  

## Intended use of raised funds

* 50% - System Development

* 25% - Marketing, Business Development

* 12% - Research

* 10% - Operations & Legal

*  2% - Community

*  1% - Decentralised & P2P Technology Education

<table>
  <tr>
    <td>About this document

This document and any other documents published in association with this token sale summary or white paper relate to a potential token offering to persons (contributors) in respect of the intended development and use of the network by various participants. This document does not constitute an offer of securities or a promotion, invitation or solicitation for investment purposes. The terms of the contribution are not therefore intended to be a financial services offering document or a prospectus. The token offering involves and relates to the development and use of experimental software and technologies that may not come to fruition or achieve the objectives specified in the white paper. The purchase of tokens represents a high risk to any contributors. Tokens do not represent equity, shares, units, royalties or rights to capital, profit or income in the network or software or in the entity that issues tokens or any other company or intellectual property associated with the network or any other public or private enterprise, corporation, foundation or other entity in any jurisdiction. The token is not therefore intended to represent a security interest.

The company expressly excludes any liability in respect of the law of other jurisdictions where participants may be established or resident including contributions by persons from the United States of America - whether by residency or citizenship ("US-persons"). US persons are expressly excluded from participation in the token sale.</td>
  </tr>
</table>
