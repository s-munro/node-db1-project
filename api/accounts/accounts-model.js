const db = require("../../data/dbConfig");

module.exports = {
  getAccounts() {
    // code example
    return db("accounts");
  },
};
