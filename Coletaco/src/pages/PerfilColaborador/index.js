import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  Dimensions,
  Alert,
  ActivityIndicator,
} from "react-native";
import { styles } from "./styles";

import {
  useFonts,
  Montserrat_800ExtraBold,
  Montserrat_400Regular,
  Montserrat_500Medium,
} from "@expo-google-fonts/montserrat";
import { AppLoading } from "expo";
import { PieChart } from "react-native-chart-kit";
import { dadosCategoria } from "../data_example";

const axios = require("axios");
const qs = require("qs");
import { url, config } from "../../api/api";
import { parse } from "react-native-svg";

// Configuração do PieChart
const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

const PerfilColaborador = (props) => {
  const dadosUsuario = props.dadosUsuario;
  const [quantidade, setQuantidades] = useState({
    "qtdMetal": 0,
    "qtdPapel": 0,
    "qtdPlastico": 0,
    "qtdVidro": 0,
  });
  const [isLoading, setLoading] = useState(true);
  const [dadosColaboracao, setDadosColaboracao] = useState("");

  axios
    .post(
      url + "quantidadeColetasColaborador",
      qs.stringify(dadosUsuario),
      config
    )
    .then((result) => {
      let res = result.data;
      setQuantidades(res);
      // Criação da variável que representa as colaborações que a pessoal vez
      setDadosColaboracao([
        {
          name: "Plástico",
          colaboracao: parseInt(quantidade.qtdPlastico),
          color: "#E53D00",
          legendFontColor: "#000000",
          legendFontSize: 15,
        },
        {
          name: "Papel",
          colaboracao: parseInt(quantidade.qtdPapel),
          color: "#48ACF0",
          legendFontColor: "#000000",
          legendFontSize: 15,
        },
        {
          name: "Metal",
          colaboracao: parseInt(quantidade.qtdMetal),
          color: "#F1F312",
          legendFontColor: "#000000",
          legendFontSize: 15,
        },
        {
          name: "Vidro",
          colaboracao: parseInt(quantidade.qtdVidro),
          color: "#08C49B",
          legendFontColor: "#000000",
          legendFontSize: 15,
        },
      ]);
    })
    .catch((err) => {
      Alert.alert("Erro de conexão, tente novamente");
      return;
    })
    .finally(() => setLoading(false));

  // Definição das fontes
  let [fontsLoaded] = useFonts({
    Montserrat_800ExtraBold,
    Montserrat_500Medium,
    Montserrat_400Regular,
  });

  // Condição que verifica se as fontes estão sendo carregadas
  if (!fontsLoaded) {
    return <AppLoading />;
  } else
    return (
      <View style={styles.container}>
        {/* Definição da imagem do perfil do Colaborador */}
        <View style={styles.imagemPerfil}>
          <Image source={require("../../img/Colaborador.png")} />
        </View>

        {/* Gerando o nome e o gráfico das colaborções que a pessoa vez */}
        <View style={styles.fundo}>
          <View style={styles.linha}></View>
          <Text style={styles.status}> Colaborador </Text>
          <Text style={styles.nome}> {dadosUsuario.Nome} </Text>
          {isLoading ? (
            <ActivityIndicator
              style={{ top: "10%", alignSelf: "center" }}
              size="large"
              color="#69D669"
            />
          ) : (
            <PieChart
              style={{ top: "10%", alignSelf: "center" }}
              data={dadosColaboracao}
              accessor="colaboracao"
              width={Dimensions.get("window").width}
              height={230}
              chartConfig={chartConfig}
              backgroundColor="transparent"
              paddingTop="200"
              paddingLeft="20"
            />
          )}
        </View>
      </View>
    );
};

export default PerfilColaborador;
