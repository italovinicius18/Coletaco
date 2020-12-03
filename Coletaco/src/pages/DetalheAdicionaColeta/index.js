import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Switch,
  Alert,
  ActivityIndicator,
} from "react-native";
import { styles, stylesBucaLocal } from "./styles";

import { AppLoading } from "expo";
import Svg, { Path } from "react-native-svg";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"; // Pacote utilizado pra facilitar a busca de localizações
import {
  useFonts,
  Montserrat_800ExtraBold,
  Montserrat_400Regular,
  Montserrat_500Medium,
} from "@expo-google-fonts/montserrat";

const axios = require("axios");
const qs = require("qs");
import { url, config } from "../../api/api";

import { GOOGLE_API_KEY } from "../../api/GOOGLE_API_KEY";

// Componente svg da imagem que está no botão voltar

const BotaoVoltar = (props) => {
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

// Componente principal renderizado
const returnLatLong = (data, name) => {
  var coords = null;
  if (name == "details") {
    let dataCoords = data["details"]["geometry"]["location"];
    coords = {
      latitude: dataCoords["lat"],
      longitude: dataCoords["lng"],
    };
  }
  return coords;
};

const DetalheAdicionaColetas = ({ route, navigation }) => {
  const categoria = route.params.categoria; // Armazena a categoria selecionada da página anterior
  const dadosUsuario = route.params.dadosUsuario;
  const [localizacao, setLocalizacao] = useState(""); // Armazena um objeto {latitude, longitude}
  const [dados, setDados] = useState({
    // Armazena todos os dados que serão enviados ao banco para poder registrar uma coleta
    categoria: categoria,
    coletaNome: "",
    local: "",
    idUsuario: dadosUsuario.Id,
  });
  const [isEnabled, setIsEnabled] = useState(false); // Verifica se a switch de acessar meu local está ativada
  const [isLoading, setLoading] = useState(false);

  let [fontsLoaded] = useFonts({
    Montserrat_800ExtraBold,
    Montserrat_500Medium,
    Montserrat_400Regular,
  });
  // Função assíncrona para acessar a localização atual do usuário, utilizei o pacote Location do prórpio expo
  // acessarLocalizacaoAtual = () => {
  //   (async () => {
  //     let { status } = await Location.requestPermissionsAsync();
  //     if (status !== "granted") {
  //       Alert.alert(
  //         "Houve erro para acessar sua localização, por favor tente novamente"
  //       );
  //     }

  //     let localizacao_atual = await Location.getCurrentPositionAsync({});
  //     setLocalizacao(returnLatLong(localizacao_atual, "coords"));
  //   })();
  // };

  // Função que verifica se a pessoa escreveu o local ou acessou sua localização atual, ela retorna um objeto com estas coordenadas


  if (!fontsLoaded) {
    return <AppLoading />;
  } else
    return (
      <View style={styles.container}>
        {/* Botão para voltar na página de selecionar a categoria da coleta */}

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

        {/* Título da página */}

        <View style={styles.areaDetalheCategoria}>
          <Text style={styles.detalheCategoria}>Detalhe seu material</Text>
        </View>

        {/* Área do formulário de registro da coleta */}

        <View style={styles.formularioColeta}>
          {/* Entrada do nome do material de coleta */}

          <TextInput
            style={styles.descricaoColeta}
            placeholder={"Nome do material"}
            onChangeText={(material) =>
              setDados({
                categoria: categoria,
                nomeMaterial: material,
                local: localizacao,
                idUsuario: dadosUsuario.Id,
              })
            }
            maxLength={25}
            value={dados.nomeMaterial}
          />

          {/* Se a switch de acessar meu local está desativada, vamos renderizar a busca por um local */}

          {isEnabled ? null : (
            <GooglePlacesAutocomplete // Componente de busca da localização utilizando uma chave api do google e a Places API
              placeholder="Local da coleta"
              fetchDetails={true}
              enablePoweredByContainer={false}
              isRowScrollable={true}
              numberOfLines={3}
              onPress={(data, details = null) => {
                setDados({
                  categoria: categoria,
                  nomeMaterial: dados.nomeMaterial,
                  local: returnLatLong(
                    { data: data, details: details },
                    "details"
                  ),
                  idUsuario: dadosUsuario.Id,
                });
              }}
              query={{
                key: GOOGLE_API_KEY,
                language: "pt-BR",
                components: "country:br",
              }}
              styles={stylesBucaLocal}
            />
          )}
          {/* 
          {local !== "" ? null : ( // Se o campo de busca de local estiver preenchido, p switch de acessar meu local é desativado, facilitado na visão dos locais listados
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
                    setIsEnabled(!isEnabled);
                    acessarLocalizacaoAtual();
                    setDados({
                      categoria: categoria,
                      nomeMaterial: dados.nomeMaterial,
                      local: localizacao,
                      idUsuario: dadosUsuario.Id,
                    });
                  }}
                  value={isEnabled}
                />
              </View>
            </View>
          )} */}

          {isLoading ? (
            <ActivityIndicator style={{ marginBottom: '5%' }} size="large" color="#69D669" />
          ) : (
              <TouchableOpacity
                style={styles.botaoConfirmar}
                disabled={isLoading ? true : false}
                onPress={() => {
                  if (dados["coletaNome"] !== "" && dados["local"] !== "") {
                    // Verifico se nenhum campo está vazio, se estiver eu alerto o usuário,

                    setLoading(true);

                    axios
                      .post(url + "adicionaColeta", qs.stringify(dados), config)
                      .then((result) => {
                        let response = result;
                        if (response.data === "Adicionado") {
                          Alert.alert("Produto adicionado com sucesso !");
                          navigation.navigate("Navegador", {
                            dadosUsuario: dadosUsuario,
                          });
                        } else {
                          Alert.alert(
                            "Não conseguimos adicionar a coleta, tente novamente"
                          );
                          return;
                        }
                      })
                      .catch((err) => {
                        Alert.alert(
                          "Não conseguimos acessar o servidor, verifique sua conexão e tente novamente"
                        );
                      })
                      .finally(() => setLoading(false));
                  } else {
                    Alert.alert("Por favor, revise os dados");
                  }
                }}
              >
                <Text style={styles.textoBotaoConfirmar}>Cadastrar material</Text>
              </TouchableOpacity>
            )}
        </View>
      </View>
    );
};

export default DetalheAdicionaColetas;
