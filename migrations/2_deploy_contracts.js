const StandardSale = artifacts.require("./StandardSale.sol");
const BigNumber = web3.BigNumber
const dayInSecs = 86400

const startTime = web3.eth.getBlock(web3.eth.blockNumber).timestamp
const symbol = "TKN"
const totalCap = new BigNumber(10000e+18)
const forSale = new BigNumber(8000e+18)
const cap =  new BigNumber(1000e+18)
const softCap = new BigNumber(900e+18)
const timeLimit =  startTime + (86400 * 5) // 5 days
const softCapTimeLimit = startTime + (86400 * 1) // 1 day

module.exports = function(deployer, network, [wallet]) {
  deployer.deploy(StandardSale, symbol, totalCap, forSale, cap, softCap, timeLimit, softCapTimeLimit, startTime, wallet);
};
