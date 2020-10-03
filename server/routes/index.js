const express = require("express");
const { getAccounts } = require("../contract/");
const router = express.Router();
const { catchAsync } = require("../middleware");
const { transactionCompletedMock } = require("../mocks/");

router.get(
  "/",
  catchAsync(async (req, res, next) => {
    const accounts = await getAccounts();
    res.status(200).json({ accounts });
  })
);

router.post("/transfer", async (req, res, next) => {
  setTimeout(() => {
    res.status(200).json(transactionCompletedMock());
  }, 2500);
});

module.exports = router;
