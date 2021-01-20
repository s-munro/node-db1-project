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
      res.status(500).json({ error: err.message });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Account.getById(id)
    .then((account) => {
      res.status(200).json(account);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
