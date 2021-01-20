const db = require("../../data/dbConfig");

module.exports = {
  getAccounts() {
    // code example
    return db("accounts");
  },

  getById(id) {
    return db("accounts").where("id", id);
  },
};
