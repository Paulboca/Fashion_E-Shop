var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "abecedar",
  database: "rodicaclothing"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "SELECT * FROM users where id = ? or id = ?;";
  var param = ['1', '2'];
  con.query(sql, param, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    // console.log(fields[1]);
  });
});