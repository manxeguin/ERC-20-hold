const Web3 = require("web3");
const ethTx = require("ethereumjs-tx");
const HoldableER20Abi = require("../../src/abis/HoldableERC20.json");

const PROVIDER = "http://localhost:8545";
const web3 = new Web3(new Web3.providers.HttpProvider(PROVIDER));

const initToken = async () => {
  const networkId = await web3.eth.net.getId();
  const networkData = HoldableER20Abi.networks[networkId];
  const { abi } = HoldableER20Abi;
  const Token = new web3.eth.Contract(abi, networkData.address);
  return Token;
};

const initAccounts = async (token) => {
  const accounts = await web3.eth.getAccounts();
  const transfer = web3.utils.toBN(100);

  // initialize accounts with some state

  await token.methods
    .transfer(accounts[1], transfer)
    .send({ from: accounts[0] });
  await token.methods
    .transfer(accounts[2], transfer)
    .send({ from: accounts[0] });
  await token.methods
    .transfer(accounts[3], transfer)
    .send({ from: accounts[0] });

  return token;
};

const tokenInitializedPromise = initToken().then((tokenContract) =>
  initAccounts(tokenContract)
);

const getAccounts = async () => {
  const token = await tokenInitializedPromise;

  const accounts = await web3.eth.getAccounts();
  const accountsResult = [];

  for (let i = 1; i < accounts.length; i++) {
    const balance = await token.methods.balanceOf(accounts[i]).call();
    const onHold = await token.methods.onHoldBalanceOf(accounts[i]).call();
    accountsResult.push({
      address: accounts[i],
      balance,
      onHold,
    });
  }

  return accountsResult;
};

module.exports = {
  getAccounts,
};
