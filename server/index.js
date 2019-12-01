const express = require('express');
const path = require('path');
const db = require('../db');
const seedData = require('../db/seedData.js');

const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'client', 'dist')));

const PORT = 3000;

app.route('/api/pricing/')
  .get((req, res) => {
    // let r = JSON.parse(req.params);
    // console.log('...r...', r);
    db.conn.query(`SELECT price FROM pricing`, (err, results) => {
      if (err) {
        console.log('Error with query: ', err);
        res.sendStatus(500);
      } else {
        console.log('results of query: ', results);
        // console.log('JOSN.strigify(results): ', JSON.stringify(results));
        res.send(results);
      }
    });
  });

app.listen(PORT, () => {
  console.log(`Server for Monthly Cost React App reporting for duty via PORT: ${PORT}!`);
  // console.log('seed test number is: ', seedData.test1, seedData.test2);
  // console.log('finance faker data: ', seedData.ff);
  // console.log('house pricing: ', seedData.pricer(), seedData.pricer());
  // console.log('pricing array for seeding: ', seedData.pricingArr);
});
