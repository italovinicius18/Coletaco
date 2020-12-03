import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { styles } from "./styles";

import Svg, { Path } from "react-native-svg";
import {
  useFonts,
  Montserrat_800ExtraBold,
  Montserrat_400Regular,
  Montserrat_500Medium,
} from "@expo-google-fonts/montserrat";
import { AppLoading } from "expo";
import { dadosCategoria } from "../data_example";

const axios = require("axios");
const qs = require("qs");
import { url, config } from "../../api/api";

const TelaDoProduto = ({ route, navigation }) => {
  const coleta = route.params.coleta;
  const dadosUsuario = route.params.dadosUsuario;

  let [fontsLoaded] = useFonts({
    Montserrat_800ExtraBold,
    Montserrat_500Medium,
    Montserrat_400Regular,
  });

  const SvgComponent = (props) => {
    return (
      <Svg
        width={12}
        height={20}
        viewBox="0 0 12 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          d="M9.667 18l-8-8 8-8"
          stroke="#18191F"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    );
  };

  /// variáveis a serem alteradas
  const categoria = dadosCategoria[coleta.IdCategoria];

  const [mostrarMapa, setMostrarMapa] = useState(false);
  const [confirmaColeta, setConfirmaColeta] = useState(false);
  const [isLoading, setLoading] = useState(false);

  if (!fontsLoaded) {
    return <AppLoading />;
  } else
    return (
      // toda a tela do produto
      <View style={[styles.container, { backgroundColor: categoria.cor }]}>
        <View style={styles.areaBotaoVoltar}>
          <TouchableOpacity // botão "Voltar"
            activeOpacity={0.7}
            onPress={() => {
              navigation.goBack();
            }} // botão, ao ser apertado, volta para tela ListaColetas
            style={styles.botaoVoltar}
          >
            <SvgComponent style={styles.imagemBotaoVoltar} />
          </TouchableOpacity>
        </View>

        <View style={styles.areaImagem}>
          <Image // imagem da categoria do material
            style={[styles.imagemColeta, { transform: categoria.angulo }]}
            source={categoria.imagem}
          />
        </View>
        <View style={styles.areaDescricao}>
          <Text style={[styles.descricaoColeta]}>{coleta.Nome}</Text>

          <Text style={[styles.setCorPreta]}>{categoria.categoria}</Text>
        </View>

        {isLoading ? (
          <View style={styles.areaBotao}>
            <ActivityIndicator size="large" color="#69D669" />
          </View>
        ) : ((dadosUsuario.TipoPerfil === 1 && coleta.IdSituacao === 2) ||
          (dadosUsuario.TipoPerfil === 0 && coleta.IdSituacao === 1)) && !confirmaColeta && !mostrarMapa ? (
          <View style={styles.areaBotao}>
            <TouchableOpacity
              style={[styles.botaoBotao]}
              onPress={() => {
                setLoading(true);
                axios
                  .post(
                    url + "alteraSituacaoColeta",
                    qs.stringify({IdUsuario: dadosUsuario.Id,IdColeta: coleta.Id,...dadosUsuario, ...coleta}),
                    config
                  )
                  .then((result) => {
                    let response = result
                      if (response.data !== "Alterado"){
                        Alert.alert("Não conseguimos te cadastar, tente novamente")
                        return
                      }
                  })
                  .catch((err) => {
                    Alert.alert("Erro de conexão, tente novamente");
                    return;
                  })
                  .finally(() => {
                    setLoading(false)
                    if(dadosUsuario.TipoPerfil === 0){
                      setMostrarMapa(true)
                    }else{
                      setConfirmaColeta(true)
                    }
                  });
              }}
            >
              <Text style={[styles.setCorBranca]}>
                {dadosUsuario.TipoPerfil === 0 ? "Coletar" : "Confirmar coleta"}
              </Text>
            </TouchableOpacity>
          </View>
        ) : null}

        {(dadosUsuario.TipoPerfil === 0 && coleta.IdSituacao === 2) ||
        mostrarMapa ? (
          <View style={styles.areaMapa}>
            <MapView
              style={styles.mapEstilo}
              initialRegion={{
                latitude: coleta.Latitude,
                longitude: coleta.Longitude,
                latitudeDelta: 0.561,
                longitudeDelta: 0.3105,
              }}
            >
              <Marker
                coordinate={{
                  latitude: coleta.Latitude,
                  longitude: coleta.Longitude,
                }}
                title={categoria.nome}
                description="Park Shopping"
              ></Marker>
            </MapView>
          </View>
        ) : null}
      </View>
    );
};

export default TelaDoProduto;
