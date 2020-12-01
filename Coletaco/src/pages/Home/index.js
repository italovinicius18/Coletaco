import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

import MapView, { Marker, Callout } from "react-native-maps";
import * as Location from "expo-location"; // Pacote utilizado para acessar alocalização atual do usuário
import { AppLoading } from "expo";
import {
  useFonts,
  Montserrat_800ExtraBold,
  Montserrat_500Medium,
  Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";
import {HomeColetas} from '../data_example'

const Home = (props) => {
  const navigation = useNavigation();
  const [localizacao, setLocalizacao] = useState("");
  const usuario = props.usuario;

  let [fontsLoaded] = useFonts({
    Montserrat_800ExtraBold,
    Montserrat_500Medium,
    Montserrat_400Regular,
  });

  // Função assíncrona para acessar a localização atual do usuário, utilizei o pacote Location do prórpio expo

  useEffect(() => {
    const acessarLocalizaçãoAtual = async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Houve erro para acessar sua localização, por favor tente novamente"
        );
      }

      let localizacao_atual = await Location.getCurrentPositionAsync({});

      let dataCoords = localizacao_atual["coords"];
      let coords = {
        latitude: dataCoords["latitude"],
        longitude: dataCoords["longitude"],
      };
      setLocalizacao(coords);
    };
    acessarLocalizaçãoAtual();
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  } else
    return (
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: localizacao.latitude ? localizacao.latitude : -15.831255,
            longitude: localizacao.latitude ? localizacao.latitude : -48.015615,
            latitudeDelta: 0.561,
            longitudeDelta: 0.3105,
          }}
        >
          {HomeColetas.map((item) => (
            <Marker
              key={item.key}
              coordinate={{
                latitude: item.latitude,
                longitude: item.longitude,
              }}
            >
              <Callout
                tooltip
                onPress={() =>
                  navigation.navigate("TelaDoProduto", {
                    coleta: item,
                    usuario: usuario,
                  })
                }
              >
                <View>
                  <View style={styles.calloutPadrao}>
                    <Text style={styles.fonteCallout}>{item.produto}</Text>
                  </View>
                </View>
              </Callout>
            </Marker>
          ))}
        </MapView>
      </View>
    );
};

export default Home;
