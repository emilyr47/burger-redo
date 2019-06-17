// db connection from config:
var connection = require("../config/connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// researched this... it changes object key pairs into SQL:
function objToSql(ob) {
  var arr = [];

  // Loop that loops through keys and pushes them into array:
  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }

  return arr.toString(); // make this neater and into a string
}

var orm = {
  
  showAll: function(table, callback) {
    var queryString = "SELECT * FROM " + table + ";";
    
    console.log(queryString);
    connection.query(queryString, function(error, result) {
      if (error) {
        throw error;
      }
      callback(result);
    });
  },
  
  create: function(table, columns, values, callback) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += columns.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(values.length);
    queryString += ") ";

    console.log(queryString);
    connection.query(queryString, values, function(error, result) {
      if (error) {
        throw error;
      }

      callback(result);
    });
  },

  update: function(table, objColVals, condition, callback) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(error, result) {
      if (error) {
        throw error;
      }

      callback(result);
    });
  },

  delete: function(table, condition, callback) {
    var queryString = "DELETE FROM " + table;
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, function(error, result) {
      if (error) {
        throw error;
      }

      callback(result);
    });
  }

};

module.exports = orm;
