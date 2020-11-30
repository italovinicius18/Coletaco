const express = require('express');
const cors = require('cors');
// import key from './key.js';
// key = require('./key.js')
// console.log(key)
const app = express();
app.use(cors())

const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

const sql = require('mssql');

const config = {
  user: '',
  password: '',
  server: '',
  database: '',
  "options": {
    "encrypt": true,
    "enableArithAbort": true
  },
}

const pool = new sql.ConnectionPool(config)

pool.connect(err => {
  console.log(err)
})

app.get('/hello', (req, res) => {
  res.send({express: 'Hello From Express'});
});

app.listen(port, () => console.log(`Listening on port ${port}`));