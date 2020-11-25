const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors())

const port = process.env.PORT || 5000;

app.get('/hello', (req, res) => {
  res.send({express: 'Hello From Express'});
});

app.listen(port, () => console.log(`Listening on port ${port}`));