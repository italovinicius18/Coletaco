// Arquivo para orientação da necessidade de dados em cada página e para pesquisa de como serão as funções para query no banco de dados

// Arquivo necessario para fazer renderização de cores

export const dadosCategoria = {
  1: {
    categoria: 'Metal',
    cor: "#F1F312",
    corTexto: "#18191F",
    imagem: require("../img/lata.png"),
    angulo: [{ rotate: "0deg" }],
  },
  2: {
    categoria: 'Papel',
    cor: "#48ACF0",
    corTexto: "white",
    imagem: require("../img/caixa.png"),
    angulo: [{ rotate: "0deg" }],
  },
  3: {
    categoria: 'Plástico',
    cor: "#E53D00",
    corTexto: "white",
    imagem: require("../img/garrafa_pet.png"),
    angulo: [{ rotate: "45deg" }],
  },
  4: {
    categoria: 'Vidro',
    cor: "#08C49B",
    corTexto: "white",
    imagem: require("../img/garrafa_vidro.png"),
    angulo: [{ rotate: "45deg" }],
  },
};
