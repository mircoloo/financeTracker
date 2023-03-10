const mysql = require('mysql');
const config = require('./dbConfig')

const con = mysql.createConnection(config);
  
  
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

module.exports = con

