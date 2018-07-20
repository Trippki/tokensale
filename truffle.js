const HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  networks: {
    "ropsten-infura": {
      provider: () => new HDWalletProvider("cousin flame train pumpkin version busy whisper evolve earth electric female tortoise", "https://ropsten.infura.io/EhXVIJjzrsBI3vtYfkj6"),
      network_id: 3,
      gas: 4700000
    }
  }
};
