// Set up MySQL connection

var mysql = require("mysql");

// set up connection
var connection;

if (process.env.JAWSDB_URL) {
  // database is JawsDB on Heroku
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  // database is on localhost
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.password,
    database: "burgers_db"
  });
}

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("\nError connecting: " + err.stack + "\n");
    return;
  }
  console.log("\nConnected as id " + connection.threadId + "\n");
});

// Export connection for our ORM to use.
module.exports = connection;