// Set up MySQL connection.
var mysql = require("mysql");

// Initial information mysql is looking for
var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "removed",
  database: "burger_db"
});

// Make the connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  // give the message in node with the id
  console.log("connected as id " + connection.threadId);
});

// Export the connection for our ORM to use.
module.exports = connection;
