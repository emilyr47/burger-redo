var mysql = require("mysql");



var connection = mysql.createConnection({
  port: 3306,
  host: "l7cup2om0gngra77.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "jemw3s9cg2piczpr",
  password: "ky005pyp3iqz8kl7",
  database: "mzi0qo1smzmryxf6"
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;