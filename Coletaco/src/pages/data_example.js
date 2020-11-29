// Arquivo para orientação da necessidade de dados em cada página e para pesquisa de como serão as funções para query no banco de dados

// Arquivo necessario para fazer renderização de cores

export const dadosCategoria = {
  Metal: {
    cor: "#F1F312",
    corTexto: "#18191F",
    imagem: require("../img/lata.png"),
    angulo: [{ rotate: "0deg" }],
  },
  Papel: {
    cor: "#48ACF0",
    corTexto: "white",
    imagem: require("../img/caixa.png"),
    angulo: [{ rotate: "0deg" }],
  },
  Plástico: {
    cor: "#E53D00",
    corTexto: "white",
    imagem: require("../img/garrafa_pet.png"),
    angulo: [{ rotate: "45deg" }],
  },
  Vidro: {
    cor: "#08C49B",
    corTexto: "white",
    imagem: require("../img/garrafa_vidro.png"),
    angulo: [{ rotate: "45deg" }],
  },
};

// Home

  // Colaborador: Aparece só as coletas do colaborador
  // Coletador: Aparece todas coletas que estão com a situção 1 (Dísponível)
  
  export const HomeColetas = [
    {
      key: "0",
      produto: "Latinha",
      latitude: -15.8335066,
      longitude: -47.955316,
      categoria: "Metal",
    },
    {
      key: "1",
      produto: "Papelão",
      latitude: -15.82154,
      longitude: -47.988128,
      categoria: "Papel",
    },
    {
      key: "2",
      produto: "Garrafa de vidro",
      latitude: -15.831255,
      longitude: -48.015615,
      categoria: "Vidro",
    },
  ];


// PerfilColetador

  // Coletas
    // Verificar se o coleta bate com o ID do catador
    // Verificar se a coleta está na situação 2 (Pendente)
    // Acessar a prorpiedade no do IdColaborador
  
    export const PerfilColetadorColetas = [
      {
        key: "0",
        nome: "Latinha",
        latitude: -15.8335066,
        longitude: -47.955316,
        donoId : 0,
        nomeDono: "Thorin",
        imagem: require("../img/Colaborador.png"),
        categoria: "Metal",
      },
      {
        key: "1",
        nome: "Papelão",
        latitude: -15.8335066,
        longitude: -47.955316,
        donoId : 1,
        nomeDono: 'Balin',
        imagem: require("../img/Colaborador.png"),
        categoria: "Papel",
      },
      {
        key: "2",
        nome: "Papelão",
        latitude: -15.8335066,
        longitude: -47.955316,
        donoId : 2,
        nomeDono: "Dwalin",
        imagem: require("../img/Colaborador.png"),
        categoria: "Papel",
      },
      {
        key: "3",
        nome: "Papelão",
        latitude: -15.8335066,
        longitude: -47.955316,
        donoId : 3,
        nomeDono: "Fellin",
        imagem: require("../img/Colaborador.png"),
        categoria: "Papel",
      },
      {
        key: "4",
        nome: "Papelão",
        latitude: -15.8335066,
        longitude: -47.955316,
        donoId : 4,
        nomeDono: "Kili",
        imagem: require("../img/Colaborador.png"),
        categoria: "Papel",
      },
      {
        key: "5",
        nome: "Papelão",
        latitude: -15.8335066,
        longitude: -47.955316,
        donoId : 5,
        nomeDono: "Bombur",
        imagem: require("../img/Colaborador.png"),
        categoria: "Papel",
      },
      {
        key: "6",
        nome: "Papelão",
        latitude: -15.8335066,
        longitude: -47.955316,
        donoId : 5,
        nomeDono: "Bofur",
        imagem: require("../img/Colaborador.png"),
        categoria: "Papel",
      },
    ];

// Lista coletas

  // Coletas
    // Acessar a IdColaborador e verificar quais são as coletas disponíveis e pendentes do usuário colaborador

  // Cirei a lista de objetos abixo pra simular a Flatlist e já criar estilos para os itens
  export const Coletas = [
    {
      key: "0",
      disponibilidade: "Pendente",
      nome: "Latinha",
      categoria: "Metal",
      local: "Meu local",
    },
    {
      key: "1",
      disponibilidade: "Dísponível",
      nome: "Papelão",
      categoria: "Papel",
      local: "Meu local",
    },
    {
      key: "2",
      disponibilidade: "Dísponível",
      nome: "Garrafa PET",
      categoria: "Plástico",
      local: "Meu local",
    },
    {
      key: "3",
      disponibilidade: "Dísponível",
      nome: "Garrafa de Vidro",
      categoria: "Vidro",
      local: "Meu local",
    }
  ];
  

// Tela do produto

    // Vai renderizar o produto clicado na tela anterior
    // Porém quando clicado no botão dessa página, precimos modificar a situcação da coleta no banco de dados