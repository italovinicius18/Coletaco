import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#69D669",
  },

  imagemPerfil: {
    marginTop: "5%",
    alignSelf: "center",
  },

  fundo: {
    flex: 1,
    backgroundColor: "#ECECEC",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },

  linha: {
    width: 60,
    alignSelf: "center",
    backgroundColor: "#000000",
    borderRadius: 30,
    borderWidth: 4,
    borderColor: "#000",
    top: "5%",
  },

  status: {
    color: "#00C6AE",
    fontFamily: "Montserrat_500Medium",
    fontSize: 17,
    left: "4.5%",
    top: "10%",
  },

  nome: {
    color: "#000000",
    fontFamily: "Montserrat_800ExtraBold",
    fontSize: 36,
    left: "3%",
    top: "9%",
  },
});
