const HelloWorld = artifacts.require("HelloWorld");
const HelloworldPermanent = artifacts.require("HelloworldPermanent");

module.exports = function(deployer) {
  deployer.deploy(HelloWorld, "HelloWorld constructor").then (async () => {
    let instance = await HelloWorld.deployed();
    let message = instance.message();
    return deployer.deploy(HelloworldPermanent, message)
  })
};