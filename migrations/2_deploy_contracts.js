const TRIPToken = artifacts.require("./TRIPToken.sol");
const TRIPCrowdsale = artifacts.require("./TRIPCrowdsale.sol");
const BigNumber = web3.BigNumber
const dayInSecs = 86400

const startTime = web3.eth.getBlock(web3.eth.blockNumber).timestamp + 80
const presaleEndTime = startTime + (86400 * 20) // 20 days
const endTime = startTime + (dayInSecs * 60) // 60 days
const rate = new BigNumber(500)
const crowdsaleHardCapInWei = new BigNumber(36000e+18)
const crowdsaleSoftCapInWei = new BigNumber(26000e+18)
const preSaleCapInWei = new BigNumber(18000e+18)

module.exports = function(deployer, network, [_, wallet, wallet2]) {
    if(network == 'rinkeby' || network == 'testnet') {
        deployer.deploy(
            TRIPCrowdsale,
            startTime,
            presaleEndTime,
            endTime,
            rate,
            crowdsaleHardCapInWei,
            crowdsaleSoftCapInWei,
            preSaleCapInWei,
            wallet,
            wallet2
        );
    } else {
        // token deployed only for testing purposes. NOTE: dont use it for the mainnet.
        deployer.deploy(TRIPToken);

        deployer.deploy(
            TRIPCrowdsale,
            startTime,
            presaleEndTime,
            endTime,
            rate,
            crowdsaleHardCapInWei,
            crowdsaleSoftCapInWei,
            preSaleCapInWei,
            wallet,
            wallet2
        );
    }
};
