import React, { useEffect, useState } from "react";
import { Alert, Text, View, ActivityIndicator } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

import MapView, { Marker, Callout } from "react-native-maps";
import { AppLoading } from "expo";
import {
  useFonts,
  Montserrat_800ExtraBold,
  Montserrat_500Medium,
  Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";
// import { HomeColetas } from "../data_example";

const axios = require("axios");
const qs = require("qs");
import { url, config } from "../../api/api";

const Home = (props) => {
  const navigation = useNavigation();
  const [localizacao, setLocalizacao] = useState("");
  const [homeColetas, setHomeColetas] = useState([]);
  const [temColetas, setTemColetas] = useState();
  const [isLoading, setLoading] = useState(true);
  const usuario = props.usuario;
  const dadosUsuario = props.dadosUsuario;

  let [fontsLoaded] = useFonts({
    Montserrat_800ExtraBold,
    Montserrat_500Medium,
    Montserrat_400Regular,
  });

  axios
    .post(url + "coletas", qs.stringify(dadosUsuario), config)
    .then((result) => {
      let res = result.data;
      if (res.length > 0) {
        setHomeColetas(res);
        setTemColetas(true);
      }
    })
    .catch((err) => {
      Alert.alert("Erro de conexão, tente novamente");
      return;
    })
    .finally(() => setLoading(false));

  // Função assíncrona para acessar a localização atual do usuário, utilizei o pacote Location do prórpio expo

  if (!fontsLoaded) {
    return <AppLoading />;
  } else
    return (
      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator />
        ) : temColetas ? (
          <MapView
            style={styles.mapStyle}
            initialRegion={{
              latitude: -15.831255,
              longitude: -48.015615,
              latitudeDelta: 0.561,
              longitudeDelta: 0.3105,
            }}
          >
            {homeColetas.map((item, key) => (
              <Marker
                key={key}
                coordinate={{
                  latitude: item.Latitude,
                  longitude: item.Longitude,
                }}
              >
                <Callout
                  tooltip
                  onPress={() =>
                    navigation.navigate("TelaDoProduto", {
                      coleta: item,
                      dadosUsuario: dadosUsuario,
                    })
                  }
                >
                  <View>
                    <View style={styles.calloutPadrao}>
                      <Text style={styles.fonteCallout}>{item.Nome}</Text>
                    </View>
                  </View>
                </Callout>
              </Marker>
            ))}
          </MapView>
        ) : (
          <Text>Não existem coletas cadastradas</Text>
        )}
      </View>
    );
};

export default Home;
