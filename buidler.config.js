usePlugin("@nomiclabs/buidler-waffle");

// Go to https://infura.io/ and create a new project
// Replace this with your Infura project ID
const INFURA_PROJECT_ID = "0";

// Replace this private key with your Ropsten account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Be aware of NEVER putting real Ether into testing accounts
const RINKEBY_PRIVATE_KEY = "0";

// This is a sample Buidler task. To learn how to create your own go to
// https://buidler.dev/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(await account.getAddress());
  }
});

// You have to export an object to set up your config
// This object can have the following optional entries:
// defaultNetwork, networks, solc, and paths.
// Go to https://buidler.dev/config/ to learn more
module.exports = {
  // This is a sample solc configuration that specifies which version of solc to use
  solc: {
    version: "0.6.8",
  },
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: [`0x${RINKEBY_PRIVATE_KEY}`]
    },
  },
};
