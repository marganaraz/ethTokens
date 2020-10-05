const { expect } = require("chai");

function tokens(n) {
  return ethers.utils.parseEther(n);
}

describe("Argy fixture", function() {

  async function deployArgy () {
    
    const Argy = await ethers.getContractFactory("Argy");
    
    const argy = await Argy.deploy(tokens('10000'));
        
    await argy.deployed();

    return argy;
  }

  it("Check total supply", async function() {

    const argy = await deployArgy();

    expect(await argy.totalSupply()).to.equal(tokens('10000'));
  });

  it("Transfer token", async function() {

    const argy = await deployArgy();
    const [owner, addr1, addr2] = await ethers.getSigners();

    // Transfiero a otra cuenta
    await argy.transfer(addr1._address, tokens('10'));
    expect(await argy.balanceOf(addr1._address)).to.equal(tokens('10'));

  });
});


