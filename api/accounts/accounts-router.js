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

router.post("/", (req, res) => {
  const { name, budget } = req.body;
  if (!name || !budget) {
    res.status(400).json({ message: "add the data, dummy" });
  }
  Account.createAccount(name, budget)
    .then((account) => {
      res.status(200).json(account);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  if (!id) {
    res.status(400).json({ message: "put an id, G" });
  } else if (!changes) {
    res.status(400).json({ message: "needs changes" });
  }
  Account.editAccount(id, changes)
    .then((account) => {
      res.status(200).json(account);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
  // res.status(200).json(changes);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: "needs id" });
  }
  Account.deleteAcconut(id)
    .then((accounts) => {
      res.status(200).json(accounts);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
