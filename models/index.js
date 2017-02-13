/**
 * Created by Ivan Talalaev on 2/13/2017.
 */
let fs = require("fs"),
  path = require("path"),
  Sequelize = require("sequelize"),
  env = process.env.NODE_ENV || "development",
  dbConfig = require('config').get('database'),
  _ = require("lodash");

let sequelize = new Sequelize(dbConfig.connectionString, {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

let db = {};
fs
  .readdirSync(__dirname)
  .filter(function (file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function (file) {
    let model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function (modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});
db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
