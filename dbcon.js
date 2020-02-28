var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs340_christhu',
  password        : '1550',
  database        : 'cs340_christhu'
});
module.exports.pool = pool;
