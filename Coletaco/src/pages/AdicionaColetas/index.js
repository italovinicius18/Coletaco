import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import { AppLoading } from "expo";
import Svg, { Path } from "react-native-svg";
import {
  useFonts,
  Montserrat_800ExtraBold,
  Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";

const dadosCategoria = {
  Metal: {
    cor: "#F1F312",
    corTexto: "#18191F",
    imagem: require("../../img/lata.png"),
    angulo: [{ rotate: "0deg" }],
  },
  Papel: {
    cor: "#48ACF0",
    corTexto: "white",
    imagem: require("../../img/caixa.png"),
    angulo: [{ rotate: "0deg" }],
  },
  Plástico: {
    cor: "#E53D00",
    corTexto: "white",
    imagem: require("../../img/garrafa_pet.png"),
    angulo: [{ rotate: "45deg" }],
  },
  Vidro: {
    cor: "#08C49B",
    corTexto: "white",
    imagem: require("../../img/garrafa_vidro.png"),
    angulo: [{ rotate: "45deg" }],
  },
};

const SvgComponent = (props) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 28 28" fill="none" {...props}>
      <Path
        d="M14 5.833v16.334M5.833 14h16.334"
        stroke="#18191F"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const AdicionaColetas = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Montserrat_800ExtraBold,
    Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else
    return (
      <View style={styles.container}>
        <View style={styles.areaBotaoVoltar}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigation.goBack();
            }}
            style={styles.botaoVoltar}
          >
            <SvgComponent style={styles.imagemBotaoVoltar} />
          </TouchableOpacity>
        </View>

        <View style={styles.cabecalhoAdicionaColeta}>
          <View style={styles.areaTituloCategoria}>
            <Text style={styles.tituloCategoria}>Categoria</Text>
          </View>
          <View style={styles.areaPerguntaCategoria}>
            <Text style={styles.perguntaCategoria}>
              Qual a categoria do seu material ?
            </Text>
          </View>
        </View>

        <View style={styles.areaOpcoesCategorias}>
          <View style={styles.areaOpcoesCategorias}>
            <TouchableOpacity
              onPress={() => {
                navigation.push("DetalheAdicionaColeta", {
                  categoria: "Metal",
                });
              }}
              style={[
                styles.opcoesCategorias,
                { backgroundColor: dadosCategoria["Metal"].cor },
              ]}
            >
              <Image
                style={[
                  styles.imagemColeta,
                  { transform: dadosCategoria["Metal"].angulo },
                ]}
                source={dadosCategoria["Metal"].imagem}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.push("DetalheAdicionaColeta", {
                  categoria: "Papel",
                });
              }}
              style={[
                styles.opcoesCategorias,
                { backgroundColor: dadosCategoria["Papel"].cor },
              ]}
            >
              <Image
                style={[
                  styles.imagemColeta,
                  { transform: dadosCategoria["Papel"].angulo },
                ]}
                source={dadosCategoria["Papel"].imagem}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.areaOpcoesCategorias}>
            <TouchableOpacity
              onPress={() => {
                navigation.push("DetalheAdicionaColeta", {
                  categoria: "Plástico",
                });
              }}
              style={[
                styles.opcoesCategorias,
                { backgroundColor: dadosCategoria["Plástico"].cor },
              ]}
            >
              <Image
                style={[
                  styles.imagemColeta,
                  { transform: dadosCategoria["Plástico"].angulo },
                ]}
                source={dadosCategoria["Plástico"].imagem}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.push("DetalheAdicionaColeta", {
                  categoria: "Vidro",
                });
              }}
              style={[
                styles.opcoesCategorias,
                { backgroundColor: dadosCategoria["Vidro"].cor },
              ]}
            >
              <Image
                style={[
                  styles.imagemColeta,
                  { transform: dadosCategoria["Vidro"].angulo },
                ]}
                source={dadosCategoria["Vidro"].imagem}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
};

export default AdicionaColetas;
