const express = require('express');
const path = require('path');
const db = require('../db');

const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'client', 'dist')));

const PORT = 3000;

app.route('/api/pricing/')
  .get((req, res) => {
    db.conn.query(`SELECT price FROM pricing`, (err, results) => {
      if (err) {
        console.log('Error with query: ', err);
        res.sendStatus(500);
      } else {
        console.log('results of query: ', results);
        res.send(results);
      }
    });
  });

app.listen(PORT, () => {
  console.log(`Server for Monthly Cost React App reporting for duty via PORT: ${PORT}!`);
});
