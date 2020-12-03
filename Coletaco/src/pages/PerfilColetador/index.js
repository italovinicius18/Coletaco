import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  Pressable,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

import {
  useFonts,
  Montserrat_800ExtraBold,
  Montserrat_400Regular,
  Montserrat_500Medium,
} from "@expo-google-fonts/montserrat";
import { AppLoading } from "expo";
import { dadosCategoria, PerfilColetadorColetas } from "../data_example";

const axios = require("axios");
const qs = require("qs");
import { url, config } from "../../api/api";

const Coleta = (props) => {
  const coleta = props.coleta
  const dadosUsuario = props.dadosUsuario
  const navigation = useNavigation();

  return (
    // Função que irá retornar as informações das variáveis 'pendentes' e 'coletados', também irá retornar o estilo de cada View criada
    <Pressable
      onPress={() => {
        navigation.navigate("TelaDoProduto", {
          coleta: coleta,
          dadosUsuario: dadosUsuario
        });
      }}
      style={({ pressed }) => [
        styles.itemColeta,
        {
          backgroundColor: pressed ? "#69D669" : "white",
        },
      ]}
    >
      <View style={styles.areaImagemPerfil}>
        <Image
          style={[
            styles.imagemListaPerfil,
            { backgroundColor: 'white' },
          ]}
          source={require("../../img/Colaborador.png")}
        />
      </View>
      <View style={styles.dadosColeta}>
        <View style={styles.areaTituloDadosColeta}>
          <Text style={styles.tituloDadosColeta}>{coleta.Nome}</Text>
        </View>
        <Text style={styles.descricaoDadosNome}>{coleta.NomeColaborador}</Text>
      </View>
    </Pressable>
  );
};

const PerfilColetador = (props) => {
  const dadosUsuario = props.dadosUsuario;
  const [pendentes, setPendentes] = useState([]);
  const [isLoading, setLoading] = useState(true);
  
  axios
    .post(url + "pegaColetasPendentesCatador", qs.stringify(dadosUsuario), config)
    .then((result) => {
      let res = result.data;
      if (res.length > 0) {
        setPendentes(res);
      }
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
        {/* Definição da imagem do perfil do catador */}
        <View style={styles.imagemPerfil}>
          <Image source={require("../../img/Catador.png")} />
        </View>

        {/* Definição estática do nome e status como catador */}
        <View style={styles.fundoNome}>
          <Text style={styles.nome}> {dadosUsuario.Nome} </Text>
          <Text style={styles.status}> Catador </Text>
        </View>

        {/* Criação das FlatList que representam a lista de coletas pendentes e finalizadas */}
        <View style={styles.areaListaPendentes}>
          <Text style={styles.tituloPendente}> Pendentes </Text>
          {isLoading ? (
            <ActivityIndicator size="large" color="#00ff00"/>
          ) : (
            (pendentes === []) ? (
              <Text>Você naõ possui coletas pendentes</Text>
            ) : (
              <FlatList
                data={pendentes}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => item.Id.toString()}
                renderItem={({ item }) => (
                  <Coleta
                    coleta={item}
                    dadosUsuario={dadosUsuario}
                  />
                )}
              />
            )
          )}
        </View>
      </View>
    );
};

export default PerfilColetador;
