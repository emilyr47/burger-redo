// ORM:
var orm = require("../config/orm.js");

var burger = {

  showAll: function(callback) {
    orm.showAll("burgers", function(result) {
      callback(result);
    });
  },
  // CRUD begins
  // Create:
  create: function(columns, values, callback) {
    orm.create("burgers", columns, values, function(result) {
      callback(result);
    });
  },
  // Update:
  update: function(objColVals, condition, callback) {
    orm.update("burgers", objColVals, condition, function(result) {
      callback(result);
    });
  },
  // Delete:
  delete: function(condition, callback) {
    orm.delete("burgers", condition, function(result) {
      callback(result);
    });
  }
};


module.exports = burger;
