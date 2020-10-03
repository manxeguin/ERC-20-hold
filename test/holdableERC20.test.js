const { expectRevert, expectEvent } = require("@openzeppelin/test-helpers");
const Token = artifacts.require("HoldableERC20.sol");
const INITIAL_BALANCE = "1050";

contract("HoldableERC20", (accounts) => {
  let token;
  const initialBalance = web3.utils.toBN(web3.utils.toWei(INITIAL_BALANCE));

  beforeEach(async () => {
    token = await Token.new(initialBalance);
    const transfer = web3.utils.toBN(100);

    // initialize accounts with tokens
    await token.transfer(accounts[1], transfer);
    await token.transfer(accounts[2], transfer);
    await token.transfer(accounts[3], transfer);
  });

  it("should return the total supply", async () => {
    const supply = await token.totalSupply();
    assert(supply.eq(initialBalance));
  });

  it("should be able to make on hold transfer", async () => {
    const ammount = web3.utils.toBN(20);
    const firstID = web3.utils.toBN(1);

    const hold = await token.onHold(accounts[3], ammount, {
      from: accounts[1],
    });

    expectEvent(hold, "OnHoldCreated", {
      id: firstID,
    });

    const balanceOnHold = await token.onHoldBalanceOf(accounts[1]);

    const onHoldTx = await token.getOnHoldTx(firstID);

    assert(balanceOnHold.eq(ammount));
    assert(onHoldTx[0] === accounts[1]);
    assert(onHoldTx[1] === accounts[3]);
    assert(onHoldTx[2].eq(ammount));
  });

  it("should be able to execute an on hold transfer", async () => {
    const ammount = web3.utils.toBN(20);
    const ammountExpected = web3.utils.toBN(120);
    const firstID = web3.utils.toBN(1);

    const hold = await token.onHold(accounts[3], ammount, {
      from: accounts[1],
    });

    const executed = await token.executeHold(firstID, {
      from: accounts[1],
    });

    const balance3 = await token.balanceOf(accounts[3]);

    assert(balance3.eq(ammountExpected));
  });

  it("should NOT make on hold if balance too low", async () => {
    const ammount = web3.utils.toBN(120);

    await expectRevert(
      token.onHold(accounts[3], ammount, {
        from: accounts[1],
      }),
      "should have enough money to put on hold"
    );
  });

  it("execute should fail if sender is not the owner", async () => {});

  it("execute should fail if holdId does not exist", async () => {});
});
