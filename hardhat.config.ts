import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";
import "dotenv/config"

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    opGoerli: {
      url: `https://optimism-goerli.infura.io/v3/${process.env.INFURA_KEY}`,
      accounts: [
        process.env.OPGOERLI_PRIV_KEY!,
      ]
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
    },
    opSepolia: {
      url: `https://optimism-sepolia.infura.io/v3/${process.env.INFURA_KEY}`,
      accounts: [
        process.env.OPSEPOLIA_PRIV_KEY!,
      ],
    }
  },
  etherscan: {
    apiKey: {
      optimisticGoerli: process.env.OPGOERLI_ETHERSCAN_KEY!,
      goerli: process.env.GOERLI_ETHERSCAN_KEY!,
      optimisticEthereum: process.env.OP_ETHERSCAN_KEY!,
      opSepolia: process.env.OPSEPOLIA_ETHERSCAN_KEY!
    },
    customChains: [
      {
        network: "opSepolia",
        chainId: 11155420,
        urls: {
          apiURL: "https://api-sepolia-optimistic.etherscan.io/api",
          browserURL: "https://sepolia-optimism.etherscan.io"
        }
      }
    ]
  }
};

export default config;
