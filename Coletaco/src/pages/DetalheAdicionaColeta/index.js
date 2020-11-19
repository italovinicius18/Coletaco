import React, { useState } from "react";
import { Text, View, TouchableOpacity, TextInput, Switch } from "react-native";
import { styles, stylesBucaLocal } from "./styles";

import { AppLoading } from "expo";
import Svg, { Path } from "react-native-svg";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import {
  useFonts,
  Montserrat_800ExtraBold,
  Montserrat_400Regular,
  Montserrat_500Medium,
} from "@expo-google-fonts/montserrat";

import {key} from "../../api/api";

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

const GooglePlacesInput = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Local da coleta"
      fetchDetails = {true}
      onPress={(data, details = null) => {
        console.log(data, details);
      }}
      query={{
        key: key,
        language: "pt-BR",
        components: "country:br",
      }}
      styles={stylesBucaLocal}
    />
  );
};

const DetalheAdicionaColetas = ({ route, navigation }) => {
  const { categoria } = route.params;
  const [valorMaterial, onChangeMaterial] = useState("");
  const [valorLocal, onChangeLocal] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  let [fontsLoaded] = useFonts({
    Montserrat_800ExtraBold,
    Montserrat_500Medium,
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

        <View style={styles.areaDetalheCategoria}>
          <Text style={styles.detalheCategoria}>Detalhe seu material</Text>
        </View>

        <View style={styles.formularioColeta}>
          <TextInput
            style={styles.descricaoColeta}
            placeholder={"Nome do material"}
            onChangeText={(material) => onChangeMaterial(material)}
            value={valorMaterial}
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
                thumbColor={isEnabled ? "#f5dd4b" : "#69D669"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View>

          {isEnabled ? null : <GooglePlacesInput />}

          <TouchableOpacity
            style={styles.botaoConfirmar}
            onPress={() => {
              console.log("Botão");
            }}
          >
            <Text style={styles.textoBotaoConfirmar}>Cadastrar material</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
};

export default DetalheAdicionaColetas;
