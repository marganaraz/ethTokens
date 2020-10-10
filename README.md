# ethTokens

## Step 1: Install Buidler.dev

```sh
npm install --save-dev @nomiclabs/buidler
```


## Step 2: Create Buidler project

```sh
npx buidler //(in your project folder)
```

## Step 3: Install dependencies

```sh
npm install --save-dev @nomiclabs/buidler-waffle ethereum-waffle chai @nomiclabs/buidler-ethers ethers
```

## Step 4: Install OpenZeppeling Contracts
https://docs.openzeppelin.com/contracts/3.x/

```sh
npm install @openzeppelin/contracts
```

## Step 5: Compile exaple

```sh
npx buidler compile
```

## Step 6: Test example

```sh
npx buidler test
```

## Step 7 Set vars in builder.config.js

INFURA_PROJECT_ID
RINKEBY_PRIVATE_KEY

## Step 8: Deploy in Rinkeby testnet

```sh
npx builder run scripts/deployArgy.js --network rinkeby
```
## Deployed contracts
ARGY Address: 0x8540F5b17a85B4255226c4E1863bf9f33e00e4e2