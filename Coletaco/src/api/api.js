const axios = require('axios')
const qs = require('qs')

const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

// Dados precisa ser um objeto

export async function cadastro(dados) {

    const url = 'http://192.168.0.8:5000/cadastro'

    axios.post(url, qs.stringify(dados), config)
        .then((result) => {
            console.log(result)
        })
        .catch((err) => {
            console.log("Erro de conexão")
        })
}