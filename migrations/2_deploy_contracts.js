const TRIPToken = artifacts.require("./TRIPToken.sol");

module.exports = function(deployer, network, [_, wallet, wallet2, wallet3]) {
  deployer.deploy(TRIPToken);
};
