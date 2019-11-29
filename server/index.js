const express = require('express');
const path = require('path');
const db = require('../db');

const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'client', 'dist')));

const PORT = 8080;

app.listen(PORT, () => console.log('Server for Monthly Cost React App reporting for duty!'));
