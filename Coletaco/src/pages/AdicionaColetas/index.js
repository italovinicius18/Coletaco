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

const BotaoVoltar = (props) => {
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

const AdicionaColetas = ({ route, navigation }) => {
  const dadosCategoria = route.params.dadosCategoria;
  const dadosUsuario = route.params.dadosUsuario;

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
            <BotaoVoltar style={styles.imagemBotaoVoltar} />
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
                  categoria: 1,
                  dadosUsuario: dadosUsuario,
                });
              }}
              style={[
                styles.opcoesCategorias,
                { backgroundColor: dadosCategoria[1].cor },
              ]}
            >
              <Image
                style={[
                  styles.imagemColeta,
                  { transform: dadosCategoria[1].angulo },
                ]}
                source={dadosCategoria[1].imagem}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.push("DetalheAdicionaColeta", {
                  categoria: 2,
                  dadosUsuario: dadosUsuario,
                });
              }}
              style={[
                styles.opcoesCategorias,
                { backgroundColor: dadosCategoria[2].cor },
              ]}
            >
              <Image
                style={[
                  styles.imagemColeta,
                  { transform: dadosCategoria[2].angulo },
                ]}
                source={dadosCategoria[2].imagem}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.areaOpcoesCategorias}>
            <TouchableOpacity
              onPress={() => {
                navigation.push("DetalheAdicionaColeta", {
                  categoria: 3,
                  dadosUsuario: dadosUsuario,
                });
              }}
              style={[
                styles.opcoesCategorias,
                { backgroundColor: dadosCategoria[3].cor },
              ]}
            >
              <Image
                style={[
                  styles.imagemColeta,
                  { transform: dadosCategoria[3].angulo },
                ]}
                source={dadosCategoria[3].imagem}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.push("DetalheAdicionaColeta", {
                  categoria: 4,
                  dadosUsuario: dadosUsuario,
                });
              }}
              style={[
                styles.opcoesCategorias,
                { backgroundColor: dadosCategoria[4].cor },
              ]}
            >
              <Image
                style={[
                  styles.imagemColeta,
                  { transform: dadosCategoria[4].angulo },
                ]}
                source={dadosCategoria[4].imagem}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
};

export default AdicionaColetas;
