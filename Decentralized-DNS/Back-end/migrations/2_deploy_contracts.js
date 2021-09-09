const DDNS = artifacts.require("../contracts/DDNS.sol");

module.exports = function(deployer) {
  deployer.deploy(DDNS);
};