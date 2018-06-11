const TRIPToken = artifacts.require('./TRIPToken.sol')

const utils = require('./helpers/utils')
const timer = require('./helpers/timer')

const BigNumber = web3.BigNumber

contract('TRIPCrowdsale', ([owner, wallet, wallet2, wallet3, buyer, buyer2, advisor1, advisor2]) => {
  const dayInSecs = 86400
  let token

  beforeEach('initialize contract', async () => {
    token = await TRIPToken.new()
  })

  it("creates a token contract", async()=>{
    (token.address.length).should.equal(42)
  })

  describe("token", function(){
    it("is mintable", function(){
      
    })
  })
})
