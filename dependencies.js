const db = require("./utils/db");
const mongo = db.mongo;
const models = require("./schema")();
const dao = require("./dao/index")(models);

module.exports = {
  models,
  dao
};