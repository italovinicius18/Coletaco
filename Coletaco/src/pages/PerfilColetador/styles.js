import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#69D669",
  },

  imagemPerfil: {
    alignSelf: "center",
    paddingTop: "5%",
  },

  fundoNome: {
    paddingVertical: "2%",
    backgroundColor: "#18191F",
  },

  nome: {
    color: "#FFFFFF",
    fontFamily: "Montserrat_500Medium",
    fontSize: 36,
    alignSelf: "center",
  },

  status: {
    color: "#FFFFFF",
    fontFamily: "Montserrat_500Medium",
    fontSize: 17,
    alignSelf: "center",
  },

  tituloPendente: {
    fontFamily: "Montserrat_800ExtraBold",
    fontSize: 25,
  },

  tituloColetado: {
    fontFamily: "Montserrat_800ExtraBold",
    fontSize: 25,
  },

  areaListaPendentes: {
    flex: 1,
    padding: 2,
    backgroundColor: "#ECECEC",
  },

  areaListaColetados: {
    flex: 1,
    padding: 2,
    backgroundColor: "#ECECEC",
  },

  itemColeta: {
    flex: 1,
    marginVertical: "2%",
    marginHorizontal: "6%",
    flexDirection: "row",
    borderWidth: 2,
    borderRadius: 16,
    borderColor: "#000",
    paddingVertical: "3%",
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

  descricaoDadosNome: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 12,
    fontWeight: "700",
  },

  areaImagemPerfil: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    left: "30%",
  },

  imagemListaPerfil: {
    width: "80%",
    height: "110%",
    borderWidth: 2,
    borderRadius: 30,
    borderColor: "#18191F",
  },
});
