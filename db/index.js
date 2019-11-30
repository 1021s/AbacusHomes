const mysql = require('mysql');
const seedData = require('./seedData.js');

seedData.pricingArr;
seedData.generator();

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

const tableCreateStr = `CREATE TABLE IF NOT EXISTS pricing (
  priceid INT NOT NULL AUTO_INCREMENT,
  price INT NOT NULL,
  Listing_id CHAR(3) NOT NULL,
  PRIMARY KEY ( priceid )
)`;

const buildPackage = () => {
  // db.query('CREATE DATABASE IF NOT EXISTS zobinHood', (err, results) => {
  //   if (err) console.log(err);
  //   console.log('db created: ', results);
  // });

  db.query('USE zobinHood', (err, results) => {
    if (err) console.log(err);
    console.log('db zobinHood in use: ', results);
  });

  db.query(tableCreateStr, (err, results) => {
    if (err) console.log(err);
    console.log('pricing table created: ', results);
  });

  db.query('TRUNCATE TABLE pricing', (err, results) => {
    if (err) console.log(err);
    console.log('pricing table ready for new data...', results);
  });

  const dbSeed = () => {
    for (let i = 0; i < seedData.pricingArr.length; i++) {
      let p = seedData.pricingArr[i].price;
      let l = seedData.pricingArr[i].Listing_id;
      let queryString = `INSERT INTO pricing (price, Listing_id)
        VALUES ('${p}', '${l}')`;
      db.query(queryString, [], (err, results) => {
        if (err) console.log(err);
      });
    }
  };
  dbSeed();
  console.log('done building/seeding db')
};

buildPackage();

module.exports = {
  buildPackage: buildPackage,
  db: db
};
