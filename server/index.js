const express = require('express');
const path = require('path');
const db = require('../db');
const seedData = require('../db/seedData.js');

const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'client', 'dist')));

const PORT = 8080;

app.listen(PORT, () => {
  console.log('Server for Monthly Cost React App reporting for duty!');
  // console.log('seed test number is: ', seedData.test1, seedData.test2);
  // console.log('finance faker data: ', seedData.ff);
  // console.log('house pricing: ', seedData.pricer(), seedData.pricer());
  // console.log('pricing array for seeding: ', seedData.pricingArr);
});
