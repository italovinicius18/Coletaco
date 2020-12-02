const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require('dotenv/config');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const port = process.env.PORT || 5000;

const sql = require("mssql");

const config = {
  user: "saAlvaroLG",
  password: process.env.SECRET_API,
  server: "alvaro2202.database.windows.net",
  database: "MDS-Coletaco",
  options: {
    encrypt: true,
    enableArithAbort: true,
  },
};

sql
  .connect(config)
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
router.get("/", (req, res) => res.json({ message: "Funcionando!" }));
app.use("/", router);

app.post("/cadastro", async (req, res) => {
  const nome = req.body.nome.substring(0, 250);
  const email = req.body.email.substring(0, 250);
  const senha = req.body.senha.substring(0, 250);
  let tipoPerfil;
  if (req.body.tipoPerfil === "catador") {
    tipoPerfil = 0;
  } else {
    tipoPerfil = 1;
  }

  const response = await sql.query`INSERT INTO Usuario(Nome, Email, Senha, TipoPerfil) VALUES(${nome},${email},${senha},${tipoPerfil})`;

  if (response.rowsAffected > 0) {
    res.send("Adicionado");
  } else {
    res.send(null);
  }
});

app.post("/login", async (req, res) => {
  const email = req.body.email.substring(0, 250);
  const senha = req.body.senha.substring(0, 250);
  const response = await sql.query`SELECT * FROM Usuario WHERE Email = ${email} AND Senha = ${senha}`;

  // console.log(response.recordset.length)
  if (response.recordset.length > 0) {
    res.send(response.recordset[0]);
  } else {
    res.send(null);
  }
});

app.post("/coletas", async (req, res) => {
  const TipoPerfil = req.body.TipoPerfil
  const IdUsuario = req.body.Id

  let response;
  if(TipoPerfil === 0){
    response = await sql.query`SELECT * FROM Coleta WHERE Situacao = 1`;
  }else{
    response = await sql.query`SELECT * FROM Coleta WHERE IdColaborador = ${IdUsuario}`;
  }

  res.send(response.recordset)

});

app.listen(port, () => console.log(`Listening on port ${port}`));
