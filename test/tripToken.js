const { should } = require('./helpers/utils')
const TRIPToken = artifacts.require('./TRIPToken.sol')

contract('TRIPToken', () => {
  let token

  beforeEach(async () => {
    token = await TRIPToken.deployed()
  })

  it('has a name', async () => {
    const name = await token.name()
    name.should.be.equal("Trippki Token")
  })

  it('possesses a symbol', async () => {
    const symbol = await token.symbol()
    symbol.should.be.equal("TRIP")
  })

  it('contains 18 decimals', async () => {
    const decimals = await token.decimals()
    decimals.should.be.bignumber.equal(18)
  })
})
