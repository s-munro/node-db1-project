const db = require("../../data/dbConfig");

module.exports = {
  getAccounts() {
    // code example
    return db("accounts");
  },

  getById(id) {
    return db("accounts").where("id", id);
  },

  createAccount(username, userbudget) {
    return db("accounts")
      .insert({ name: username, budget: userbudget })
      .then(([id]) => {
        return db("accounts").where("id", id);
      });
  },

  editAccount(id, changes) {
    return db("accounts").where({ id: id }).update(changes);
  },
};
