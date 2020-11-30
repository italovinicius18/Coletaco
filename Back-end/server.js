const express = require('express');
const cors = require('cors');
// import key from './key.js';
// key = require('./key.js')
// console.log(key)
const app = express();
app.use(cors())

const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

const sql = require('mssql')
 
main = async () => {
    try {
        // make sure that any items are correctly URL encoded in the connection string
        await sql.connect('')
        const result = await sql.query`select * from mds_Situacao`
        console.log("oi")
        console.log(result)
    } catch (err) {
        console.log(err)
    }
}

main();

app.get('/hello', (req, res) => {
  res.send({express: 'Hello From Express'});
});

app.listen(port, () => console.log(`Listening on port ${port}`));