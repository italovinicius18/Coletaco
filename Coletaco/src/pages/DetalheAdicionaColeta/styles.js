import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  areaBotaoVoltar: {
    paddingTop: "8%",
    paddingLeft: "8%",
    paddingBottom: 0,
    flexDirection: "row",
  },

  botaoVoltar: {
    width: 50,
    height: 50,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderWidth: 2,
    borderRadius: 30,
    borderColor: "#000",
    borderStyle: "solid",
    paddingVertical: "2%",
    shadowColor: "#18191F",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },

  areaDetalheCategoria: {
    flex: 1.5,
    alignItems: "center",
    justifyContent: "center",
  },

  detalheCategoria: {
    fontFamily: "Montserrat_800ExtraBold",
    fontSize: 28,
    textAlign: "left",
    fontStyle: "normal",
    color: "#18191F",
  },

  formularioColeta: {
    flex: 10,
    justifyContent: "space-around",
    paddingHorizontal: "8%",
  },

  descricaoColeta: {
    paddingHorizontal: "4%",
    paddingVertical: "2%",
    borderWidth: 2,
    borderRadius: 16,
    borderColor: "#18191F",
    borderStyle: "solid",
    fontFamily: "Montserrat_500Medium",
    fontSize: 21,
    fontStyle: "normal",
    color: "#474A57",
  },

  areaSelecionarMeuLocal: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: 'blue',
  },

  areaTextoSelecionarMeuLocal: {
    paddingVertical: "5%",
  },

  textoPrincipalSelecionarMeuLocal: {
    fontFamily: "Montserrat_800ExtraBold",
    fontSize: 18,
    fontStyle: "normal",
    color: "#18191F",
  },

  textoSecundarioSelecionarMeuLocal: {
    fontFamily: "Montserrat_500Medium",
    fontSize: 15,
    fontStyle: "normal",
    color: "#474A57",
  },

  areaCheckboxSelecionarMeuLocal: {
    flex: 2,
  },

  botaoConfirmar: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#69D669",
    paddingHorizontal: "4%",
    marginVertical: "10%",
    paddingVertical: "4%",
    marginVertical: "6%",
    borderWidth: 2,
    borderRadius: 16,
    borderColor: "#18191F",
    borderStyle: "solid",
  },

  textoBotaoConfirmar: {
    fontFamily: "Montserrat_800ExtraBold",
    fontSize: 18,
    fontStyle: "normal",
    color: "white",
  },
});

export const stylesBucaLocal = {
  container: {
    flex: 3,
    paddingTop: "4%",
  },

  textInputContainer: {
    flexDirection: "row",
  },

  textInput: {
    paddingHorizontal: "4%",
    borderWidth: 2,
    borderRadius: 16,
    borderColor: "#18191F",
    borderStyle: "solid",
    fontFamily: "Montserrat_500Medium",
    fontSize: 21,
    fontStyle: "normal",
    color: "#474A57",
  },

  poweredContainer: {
    alignItems: "center",
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderColor: "#c8c7cc",
    borderTopWidth: 0,
  },

  powered: {},

  listView: {
    flex: 1,
  },

  row: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
  },

  separator: {
    backgroundColor: "#c8c7cc",
  },

  description: {
    fontSize: 18,
    color: "#474A57",
  },

  loader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    height: 18,
  },
};
