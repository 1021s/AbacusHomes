const express = require('express');
const path = require('path');
const db = require('../db');

const app = express();

const PORT = process.env.PORT || 3004;

app.use(express.static(path.resolve(__dirname, '..', 'client', 'dist')));

app.route('/api/pricing/')
  .get((req, res) => {
    db.conn.query(`SELECT price FROM pricing`, (err, results) => {
      if (err) {
        console.log('Error with query: ', err);
        res.sendStatus(500);
      } else {
        // console.log('results of query: ', results);
        res.send(results);
      }
    });
  });

// app.route('/api/listings/:Listing_id')
app.route(`/api/houseprices/:listing_id`)
  .get((req, res) => {
    console.log('hi from server listing GET', req.params);
    let priceData;
    let qryStr = `SELECT price FROM pricing WHERE Listing_id=?`;
    db.conn.query(qryStr, req.params.listing_id, (err, results) => {
      if (err) {
        console.log('Error with listing query: ', err);
        res.sendStatus(500);
      } else {
        console.log('results of listing query: ', results);
        console.log('results of q', results[0])
        res.send(results[0]);
      }
    });
  });

app.listen(PORT, () => {
  console.log(`Server for Monthly Cost React App reporting for duty via PORT: ${PORT}!`);
});
