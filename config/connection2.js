  
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
connection = mysql.createConnection({
  host: "y0nkiij6humroewt.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "za4lqyq5l3gbp5fj",
  password: "o9jj84q66mrnotuq",
  database: "adoptme_db"
});
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;