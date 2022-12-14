require('@nomiclabs/hardhat-waffle');



import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-etherscan";
require("hardhat-contract-sizer");
require("dotenv").config();
require("solidity-coverage");

// You have to export an object to set up your config
// This object can have the following optional entries:
// defaultNetwork, networks, solc, and paths.
// Go to https://buidler.dev/config/ to learn more
module.exports = {

  mocha: {
    timeout: 100000000,
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/aFb_QvqKJMTvdkdb0pWKkJSMR2IOyaKd',
      accounts: ['27c1107d514785f7541e0209251114edfc2c18f583ef3ac3f538622bf58a4f2b']

    },
    hardhat: {
      chainId: 31337,
      blockGasLimit: 20000000,
      timeout: 120000,
      gas: "auto",
    },
    localhost: {
      chainId: 31337,
      timeout: 8000000,
    }
  },
  gasReporter: {
    currency: "USD",
    gasPrice: 100,
    enabled: false,
  },
  contractSizer: {
    alphaSort: false,
    runOnCompile: false,
    disambiguatePaths: true,
  },
  // This is a sample solc configuration that specifies which version of solc to use
  solidity: {
    compilers: [
      {
        version: "0.8.7",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
};
