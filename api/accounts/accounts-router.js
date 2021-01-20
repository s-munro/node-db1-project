const express = require("express");

const Account = require("./accounts-model");

const router = express.Router();

router.get("/", (req, res) => {
  Account.getAccounts()
    .then((accounts) => {
      console.log(accounts);
      res.status(200).json(accounts);
    })
    .catch((err) => {
      res.status(500).json({ err: err.message });
    });
});

module.exports = router;
