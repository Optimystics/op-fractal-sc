# Optimism Fractal smart contracts and utilities.
Smart contract enabling a community to play the [Respect Game](https://optimismfractal.com/details) and award Respect NTT for it.

This package also contains ethers contract types (generated using typechain) and utilities to help interact with the smart contract.

## Run / test
```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
```

## Deploy
First you will need to populate `.env` file with relevant values. Which values you will need depends on what network you want to deploy to.

This deploys actual contracts. `NETWORK` is one of the networks configured in `hardhat.config.ts`. 
```shell
npx hardhat --network NETWORK run scripts/deployMain.ts
```

Next you'll probably want to verify your deployment with a block explorer:
```shell
npx hardhat verify --network opGoerli IMPLEMENTATION_ADDRESS CONSTRUCTOR_ARGS
```

Here `IMPLEMENTATION_ADDRESS` is an address of implementation deployed in step 1. `CONSTRUCTOR_ARGS` are constructor args that were used to deploy that implementation contract. You can find them in `deployMain.ts` [here](https://github.com/Optimystics/optimystics-fractal-sc/blob/354639c23aa824c194f67a4846a48dff8b1b2a4e/scripts/deployMain.ts#L25).


## Deployments
* Optimistic Goerli (proxy): [0x04EC7075Fe0fF7A1592fF6084B32C830768db3eF](https://goerli-optimism.etherscan.io/address/0x04ec7075fe0ff7a1592ff6084b32c830768db3ef)
* Optimism (proxy): [0x53C9E3a44B08E7ECF3E8882996A500eb06c0C5CC](https://optimistic.etherscan.io/address/0x53c9e3a44b08e7ecf3e8882996a500eb06c0c5cc)
* Goerli (out of date): [0x2f98ed540467ffAb3841Aa8B0bBe175bA85DbdF9](https://goerli.etherscan.io/address/0x2f98ed540467ffab3841aa8b0bbe175ba85dbdf9#code)


