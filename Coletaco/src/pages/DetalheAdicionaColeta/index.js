import React, { useState,useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Switch,
  Alert,
} from "react-native";
import { styles, stylesBucaLocal } from "./styles";

import { AppLoading } from "expo";
import Svg, { Path } from "react-native-svg";
import * as Location from 'expo-location';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import {
  useFonts,
  Montserrat_800ExtraBold,
  Montserrat_400Regular,
  Montserrat_500Medium,
} from "@expo-google-fonts/montserrat";

import { key } from "../../api/api";

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

const DetalheAdicionaColetas = ({ route, navigation }) => {
  const { categoria } = route.params;
  const [nomeMaterial, setNomeMaterial] = useState("");
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isEnabled, setIsEnabled] = useState(false);

  
  let [fontsLoaded] = useFonts({
    Montserrat_800ExtraBold,
    Montserrat_500Medium,
    Montserrat_400Regular,
  });
  
  useEffect(
    
    accessCurrentLocation = () => {
      (async  () => {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Houve erro para acessar sua localização, por favor tente novamente')
        }
        
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      })();
    },

    
  []);

  const returnLatLong = (data) => {
    var coords;
    if (data['details']){
      let dataCoords = data['details']['geometry']['location']
      coords = {
        latitude: dataCoords['lat'],
        longitude: dataCoords['lng'],
      }
    }
    else {
      let dataCoords = data['coords']
      coords = {
        latitude: dataCoords['latitude'],
        longitude: dataCoords['longitude'],
      }
    }
    return coords
  }

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

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

        <View style={styles.areaDetalheCategoria}>
          <Text style={styles.detalheCategoria}>Detalhe seu material</Text>
        </View>

        <View style={styles.formularioColeta}>
          <TextInput
            style={styles.descricaoColeta}
            placeholder={"Nome do material"}
            onChangeText={(material) => setNomeMaterial(material)}
            maxLength={25}
            value={nomeMaterial}
          />

          <View style={styles.areaSelecionarMeuLocal}>
            <View style={styles.areaTextoSelecionarMeuLocal}>
              <Text style={styles.textoPrincipalSelecionarMeuLocal}>
                Permissão da localização
              </Text>
              <Text style={styles.textoSecundarioSelecionarMeuLocal}>
                Eu permito compartilhar a {"\n"}minha localização atual
              </Text>
            </View>

            <View style={styles.areaCheckboxSelecionarMeuLocal}>
              <Switch
                trackColor={{ false: "#767577", true: "#69D669" }}
                thumbColor={isEnabled ? "#fff" : "#69D669"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => {
                  setIsEnabled(!isEnabled)
                  accessCurrentLocation()
                }}
                value={isEnabled}
              />
            </View>
          </View>

          {isEnabled ? null : 
            <GooglePlacesAutocomplete
              placeholder="Local da coleta"
              fetchDetails={true}
              onPress={(data, details = null) => {
                setLocation({data: data,details: details});
              }}
              query={{
                key: key,
                language: "pt-BR",
                components: "country:br",
              }}
              styles={stylesBucaLocal}
            />
          }

          <TouchableOpacity
            style={styles.botaoConfirmar}
            onPress={() => {
              var dados = {
                categoria: categoria,
                coletaNome: nomeMaterial,
                local: returnLatLong(location),
              }
              if (!(dados['coletaNome'] || dados['local'])){
                console.log(dados)
              }
              else{
                Alert.alert('Por favor, revise os dados')
              }
            }}
          >
            <Text style={styles.textoBotaoConfirmar}>Cadastrar material</Text>
          </TouchableOpacity>
        </View>
      </View>
    );

};

export default DetalheAdicionaColetas;
