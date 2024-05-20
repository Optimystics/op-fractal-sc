import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";
import "dotenv/config"
import { join } from "path";
import { writeFile } from "fs/promises";
import { subtask } from "hardhat/config";
import { TASK_COMPILE_SOLIDITY } from "hardhat/builtin-tasks/task-names";

// Needed for this package to work as ESM module. https://github.com/NomicFoundation/hardhat/issues/3385
subtask(TASK_COMPILE_SOLIDITY).setAction(async (_, { config }, runSuper) => {
  const superRes = await runSuper();

  try {
    await writeFile(
      join(config.paths.root, "typechain-types", "package.json"),
      '{ "type": "commonjs" }'
    );
  } catch (error) {
    console.error("Error writing package.json: ", error);
  }

  return superRes;
});

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
