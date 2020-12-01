const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

const sql = require("mssql");

const config = {
  user: "saAlvaroLG",
  password: "Bancoalvaro2020",
  server: "alvaro2202.database.windows.net",
  database: "MDS-Coletaco",
  options: {
    encrypt: true,
    enableArithAbort: true,
  },
};

sql.connect(config)
    .then((pool) => {
      console.log("Conectando ao banco");
    })
    .then((result) => {
      console.log("Conectado");
    })
    .catch((err) => {
      console.log("Erro ao se conectar com o banco de dados");
    });


const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
app.use('/', router);

app.post('/cadastro', async (req, res) =>{
  console.log(req.body)
  // const id = parseInt(req.body.id);
  // const nome = req.body.nome.substring(0,150);
  // const cpf = req.body.cpf.substring(0,11);
  // execSQLQuery(`INSERT INTO Clientes(ID, Nome, CPF) VALUES(${id},'${nome}','${cpf}')`, res);
});


app.post('/login', async (req, res) =>{
  console.log(req.body)

});


app.listen(port, () => console.log(`Listening on port ${port}`));
