const mysql = require('mysql');
const seedData = require('./seedData.js');

const conn = mysql.createConnection({
  host     : 'db',
  user     : 'root',
  database : 'zobinHood',
  password : 'seniortable',
});

conn.connect((err) => {
  if (err) {
    console.log('DB connection error: ', err);
  } else {
    console.log('Connected to zobinHood db!');
  }
});

module.exports = {
  conn: conn,
};
