const getAccountsMock = () => {
  return {
    accounts: [
      {
        address: "0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1",
        balance: 234.00043534,
        onHold: 1.0003,
      },
      {
        address: "0xFFcf8FDEE72ac11b5c542428B35EEF5769C409f0",
        balance: 23.0004,
        onHold: 1.000323534543,
      },
      {
        address: "0x22d491Bde2303f2f43325b2108D26f1eAbA1e32b",
        balance: 2.00023434,
        onHold: 234321.0003,
      },
      {
        address: "0xE11BA2b4D45Eaed5996Cd0823791E0C93114882d",
        balance: 234322.0004,
        onHold: 23431.0003,
      },
    ],
  };
};

const transactionCompletedMock = () => {
  return {
    transaction: "dymmyTransaction",
  };
};

module.exports = {
  getAccountsMock,
  transactionCompletedMock,
};
