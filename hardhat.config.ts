import { HardhatUserConfig } from "hardhat/config.js";
import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";
import "dotenv/config"
import { join } from "path";
import { writeFile } from "fs/promises";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    opGoerli: {
      url: `https://optimism-goerli.infura.io/v3/${process.env.INFURA_KEY}`,
      accounts: [
        process.env.OPGOERLI_PRIV_KEY!,
      ],
      gasPrice: 'auto',

    },
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.INFURA_KEY}`,
      accounts: [
        process.env.GOERLI_PRIV_KEY!,
      ]
    },
    optimism: {
      url: `https://optimism-mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
      accounts: [
        process.env.OP_PRIV_KEY!,
      ]
    }
  },
  etherscan: {
    apiKey: {
      optimisticGoerli: process.env.OPGOERLI_ETHERSCAN_KEY!,
      goerli: process.env.GOERLI_ETHERSCAN_KEY!,
      optimisticEthereum: process.env.OP_ETHERSCAN_KEY!,
    }
  }
};

export default config;
