import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 2,
  },

  areaBotaoVoltar: {
    paddingTop: "8%",
    paddingLeft: "8%",
    paddingBottom: 0,
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

  areaImagem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: "25%",
    margin: "5%",
    marginVertical: "0.001%",
  },

  imagemColeta: {
    flex: 1,
    width: "200%",
    paddingVertical: "100%",
  },

  areaDescricao: {
    flex: 2,
    marginVertical: "2%",
    marginHorizontal: "10%",
  },

  descricaoColeta: {
    color: "#FFFFFF",
    fontFamily: "Montserrat_800ExtraBold",
    fontSize: 33,
    color: "#000000",
  },

  areaBotao: {
    flex: 2,
    marginVertical: "1%",
    marginHorizontal: "25%",
  },

  botaoBotao: {
    flex: 1,
    width: "100%",
    marginVertical: "30%",
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    overlayColor: "white",
    borderRadius: 20,
  },

  mapStyle: {
    flex: 1,
    borderColor: "#18191F",
    borderStyle: "solid",
  },

  areaMapa: {
    flex: 4,
    borderWidth: 4,
    borderRadius: 4,
    borderColor: "#18191F",
    borderStyle: "solid",
    marginBottom: "5%",
    marginTop: "1%",
    marginHorizontal: "5%",
  },

  setCorBranca: {
    color: "#FFFFFF",
    fontFamily: "Montserrat_800ExtraBold",
    fontSize: 17,
    fontStyle: "normal",
  },

  setCorPreta: {
    color: "#FFFFFF",
    fontFamily: "Montserrat_800ExtraBold",
    fontSize: 17,
    color: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
});
