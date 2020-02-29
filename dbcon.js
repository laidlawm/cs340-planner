// var mysql = require('mysql');
// var pool = mysql.createPool({
//   connectionLimit : 10,
//   host            : 'classmysql.engr.oregonstate.edu',
//   user            : 'cs340_christhu',
//   password        : '1550',
//   database        : 'cs340_christhu'
// });
// module.exports.pool = pool;

const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'classmysql.engr.oregonstate.edu',
  user: 'cs340_christhu',
  password: '1550',
  database: 'cs340_christhu'
});
con.connect((err) => {
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

con.query('SELECT * FROM Board', (err,rows) => {
  if(err) throw err;
  // rows.forEach( (row) => {
  //   console.log(`${row.name} lives in ${row.city}`);
  // });
  console.log('Data received from Db:');
  console.log(rows);
});
