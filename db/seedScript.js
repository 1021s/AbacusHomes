const seedData = require('./seedData.js');
const db = require('./index.js');

const tableCreateStr = `CREATE TABLE IF NOT EXISTS pricing (
  priceid INT NOT NULL AUTO_INCREMENT,
  price INT NOT NULL,
  Listing_id CHAR(3) NOT NULL,
  PRIMARY KEY ( priceid )
  )`;

const buildPackage = () => {
  // db.conn.query('CREATE DATABASE IF NOT EXISTS zobinHood', (err, results) => {
  //   if (err) console.log(err);
  //   console.log('db created: ', results);
  // });

  db.conn.query('USE zobinHood', (err, results) => {
    if (err) console.log(err);
    console.log('db zobinHood in use: ');
    // results);
  });

  db.conn.query(tableCreateStr, (err, results) => {
    if (err) console.log(err);
    console.log('pricing table created: ');
    // results);
  });

  db.conn.query('TRUNCATE TABLE pricing', (err, results) => {
    if (err) console.log(err);
    console.log('pricing table ready for new data...');
    // results);
  });

  const dbSeed = () => {
    seedData.generator();
    for (let i = 0; i < seedData.pricingArr.length; i++) {
      let p = seedData.pricingArr[i].price;
      let l = seedData.pricingArr[i].Listing_id;
      let queryString = `INSERT INTO pricing (price, Listing_id)
      VALUES ('${p}', '${l}')`;
      db.conn.query(queryString, [], (err, results) => {
        if (err) console.log(err);
      });
    }
  };
  dbSeed();
  console.log('done building/seeding db');
};

seedData.pricingArr;
buildPackage();
