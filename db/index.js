const mysql = require('mysql');

const db = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  database : 'zobinHood',
});

db.connect((err) => {
  if (err) {
    console.log('DB connection error: ', err);
  } else {
    console.log('Connected to zobinHood db!');
  }
});

module.exports = db;
