const TRIPCrowdsale = artifacts.require("./TRIPCrowdsale.sol");
const TRIPToken = artifacts.require("./TRIPToken.sol");

import { should, ensuresException, getBlockNow } from './helpers/utils'
import timer from './helpers/timer'

const BigNumber = web3.BigNumber

contract('TRIPCrowdsale', ([owner, wallet, wallet2, buyer, buyer2, advisor1, advisor2]) => {
    const rate = new BigNumber(50)
    const newRate =  new BigNumber(172000000)
    const dayInSecs = 86400
    const value = new BigNumber(1e+18)
    const crowdsaleHardCapInWei = new BigNumber(21e+18)
    const crowdsaleSoftCapInWei = new BigNumber(5e+18)
    const preSaleCapInWei = new BigNumber(3e+18)

    const expectedCompanyTokens = new BigNumber(20000000e+18)
    const expectedTokensAtVault = new BigNumber(80000000e+18)

    let startTime, presaleEndTime, endTime
    let crowdsale, token

    const newCrowdsale = (rate) => {
        startTime = getBlockNow() + 20 // crowdsale starts in 20 seconds
        presaleEndTime = startTime + (dayInSecs * 20) // 20 days
        endTime = startTime + (dayInSecs * 60) // 60 days

        return TRIPCrowdsale.new(
            startTime,
            presaleEndTime,
            endTime,
            rate,
            crowdsaleHardCapInWei,
            crowdsaleSoftCapInWei,
            preSaleCapInWei,
            wallet,
            wallet2
        )
    }

    beforeEach('initialize contract', async () => {
        crowdsale = await newCrowdsale(rate)
        token = TRIPToken.at(await crowdsale.token())
    })

    it('has a normal crowdsale rate', async () => {
        const crowdsaleRate = await crowdsale.rate()
        crowdsaleRate.toNumber().should.equal(rate.toNumber())
    })

    it('starts with token paused', async () => {
        const paused = await token.paused()
        paused.should.be.true
    })

    it('has a hard cap', async () => {
        const hardCap = await crowdsale.crowdsaleHardCapInWei()
        hardCap.should.be.bignumber.equal(crowdsaleHardCapInWei)
    })

    it('has a soft cap', async () => {
        const softCap = await crowdsale.crowdsaleSoftCapInWei()
        softCap.should.be.bignumber.equal(crowdsaleSoftCapInWei)
    })

    it('has a pre sale cap', async () => {
        const preSaleCap = await crowdsale.preSaleCapInWei()
        preSaleCap.should.be.bignumber.equal(preSaleCapInWei)
    })

    describe('token purchases plus their bonuses', () => {
        it('does NOT buy tokens if crowdsale is paused', async () => {
            await timer(dayInSecs * 42)
            await crowdsale.pause()
            let buyerBalance

            try {
                await crowdsale.buyTokens(buyer, { value })
                assert.fail()
            } catch(e) {
                ensuresException(e)
            }

            buyerBalance = await token.balanceOf(buyer)
            buyerBalance.should.be.bignumber.equal(0)

            await crowdsale.unpause()
            await crowdsale.buyTokens(buyer, { value })

            buyerBalance = await token.balanceOf(buyer)
            buyerBalance.should.be.bignumber.equal(50e+18)
        })

        it('does not participate in presale if sending less than 20 ether', async () => {
            await timer(50) // within presale period
            try {
                await crowdsale.buyTokens(buyer2, { value })
                assert.fail()
            } catch (e) {
                ensuresException(e)
            }

            const buyerBalance = await token.balanceOf(buyer2)
            buyerBalance.should.be.bignumber.equal(0)
        })

        it('has bonus of 2% during the presale', async () => {
            await timer(50) // within presale period
            await crowdsale.buyTokens(buyer2, { from: wallet2, value: 20e+18 })

            const buyerBalance = await token.balanceOf(buyer2)
            buyerBalance.should.be.bignumber.equal(1.02e+21) // 2% bonus
        })

        // for these tests to work need to start testrpc with many tokens for buyer.
        it.skip('has bonus of 5% during the presale', async () => {
            await timer(50) // within presale period
            await crowdsale.buyTokens(buyer2, { value: 100e+18 })

            const buyerBalance = await token.balanceOf(buyer2)
            buyerBalance.should.be.bignumber.equal(500105e+18) // 5% bonus
        })

        it.skip('has bonus of 10% during the presale', async () => {
            await timer(50) // within presale period
            await crowdsale.buyTokens(buyer2, { value: 400 })

            const buyerBalance = await token.balanceOf(buyer2)
            buyerBalance.should.be.bignumber.equal(200011e+18) // 10% bonus
        })
        it.skip('has bonus of 15% during the presale', async () => {
            await timer(50) // within presale period
            await crowdsale.buyTokens(buyer2, { value: 1000 })

            const buyerBalance = await token.balanceOf(buyer2)
            buyerBalance.should.be.bignumber.equal(5000115e+18) // 15% bonus
        })

        it('stops presale once the presaleCap is reached', async () => {
            await timer(50) // within presale period

            await crowdsale.buyTokens(buyer2, { from: wallet, value: 20e+18 })

            try {
                await crowdsale.buyTokens(buyer, { value })
                assert.fail()
            } catch (e) {
                ensuresException(e)
            }

            const buyerBalance = await token.balanceOf(buyer)
            buyerBalance.should.be.bignumber.equal(0)
        })

        it('provides 0% bonus during crowdsale period', async () => {
            timer(dayInSecs * 42)
            await crowdsale.buyTokens(buyer2, { value })

            const buyerBalance = await token.balanceOf(buyer2)
            buyerBalance.should.be.bignumber.equal(50e+18) // 0% bonus
        })

        it('is also able to buy tokens with bonus by sending ether to the contract directly', async () => {
            await timer(dayInSecs * 42)
            await crowdsale.sendTransaction({ from: buyer, value })

            const purchaserBalance = await token.balanceOf(buyer)
            purchaserBalance.should.be.bignumber.equal(50e+18)
        })

        it('stops crowdsale once the hardCap is reached', async () => {
            await timer(dayInSecs * 42)

            await crowdsale.buyTokens(buyer2, { from: advisor1, value: 21e+18 })

            try {
                await crowdsale.buyTokens(buyer, { from: advisor1, value })
                assert.fail()
            } catch (e) {
                ensuresException(e)
            }

            const buyerBalance = await token.balanceOf(buyer)
            buyerBalance.should.be.bignumber.equal(0)
        })
    })

    describe('crowdsale finalization', function () {
        beforeEach(async function () {
            crowdsale = await newCrowdsale(newRate)
            token = TRIPToken.at(await crowdsale.token())

            await timer(dayInSecs * 42)

            await crowdsale.buyTokens(buyer, {value})

            await timer(dayInSecs * 20)
            await crowdsale.finalize()
        })

        it('assigns tokens correctly to company', async function () {
            const balanceCompany = await token.balanceOf(wallet)

            balanceCompany.should.be.bignumber.equal(expectedCompanyTokens)
        })

        it('token is unpaused after crowdsale ends', async function () {
            let paused = await token.paused()
            paused.should.be.false
        })

        it('assigns tokens correctly to vault ', async function () {
            const vaultAddress = await crowdsale.vault()

            const balance = await token.balanceOf(vaultAddress)
            balance.should.be.bignumber.equal(expectedTokensAtVault)
        })
    })
})
