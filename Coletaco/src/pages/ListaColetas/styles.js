import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  areaTitulo: {
    flex: 1,
    marginHorizontal: "2%",
    paddingHorizontal: "4%",
    paddingTop: "6%",
    justifyContent: "center",
  },

  textoTitulo: {
    fontFamily: "Montserrat_800ExtraBold",
    fontSize: 44,
    fontStyle: "normal",
    color: "#18191F",
  },

  areaListaColetas: {
    flex: 6,
  },

  itemColeta: {
    flex: 1,
    marginVertical: "4%",
    marginHorizontal: "6%",
    flexDirection: "row",
    borderWidth: 2,
    borderRadius: 16,
    borderColor: "#000",
    borderStyle: "solid",
    paddingVertical: "3%",
    shadowColor: "#18191F",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },

  dadosColeta: {
    flex: 3,
    paddingHorizontal: "5%",
  },

  areaTituloDadosColeta: {
    paddingVertical: "1%",
  },

  tituloDadosColeta: {
    fontFamily: "Montserrat_800ExtraBold",
    fontSize: 21,
  },

  descricaoDadosColeta: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 12,
    fontWeight: "700",
  },

  areaImagemColeta: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    marginRight: "5%",
  },

  imagemColeta: {
    width: "90%",
    height: "90%",
  },

  botaoAdicionaColeta: {
    position: "absolute",
    width: 50,
    height: 50,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    right: 30,
    bottom: 30,
    backgroundColor: "white",
    borderWidth: 2,
    borderRadius: 30,
    borderColor: "#000",
    borderStyle: "solid",
    backgroundColor: "white",
    paddingVertical: "3%",
    shadowColor: "#18191F",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
});
