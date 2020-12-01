import React from "react";
import { Text, View, Image, Pressable, FlatList } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

import {
  useFonts,
  Montserrat_800ExtraBold,
  Montserrat_400Regular,
  Montserrat_500Medium,
} from "@expo-google-fonts/montserrat";
import { AppLoading } from "expo";
import {PerfilColetadorColetas} from '../data_example'


const Coleta = (props) => {
  const navigation = useNavigation();
  return (
    // Função que irá retornar as informações das variáveis 'pendentes' e 'coletados', também irá retornar o estilo de cada View criada
    <Pressable
      onPress={() => {
        navigation.navigate("TelaDoProduto", {
          coleta: props,
          disponibilidade: "Pendente",
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
            { backgroundColor: props.backgroundColor },
          ]}
          source={props.imagem}
        />
      </View>
      <View style={styles.dadosColeta}>
        <View style={styles.areaTituloDadosColeta}>
          <Text style={styles.tituloDadosColeta}>{props.nome}</Text>
        </View>
        <Text style={styles.descricaoDadosNome}>{props.nomeDono}</Text>
      </View>
    </Pressable>
  );
};

const PerfilColetador = ({ navigation }) => {
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
          <Text style={styles.nome}> Jorgin </Text>
          <Text style={styles.status}> Catador </Text>
        </View>

        {/* Criação das FlatList que representam a lista de coletas pendentes e finalizadas */}
        <View style={styles.areaListaPendentes}>
          <Text style={styles.tituloPendente}> Pendentes </Text>
          <FlatList
            data={PerfilColetadorColetas}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Coleta
                tipo={"pendentes"}
                chave={item.key}
                nome={item.nome}
                latitude={item.latitude}
                longitude={item.longitude}
                donoId={item.donoId}
                nomeDono={item.nomeDono}
                imagem={item.imagem}
                categoria={item.categoria}
              />
            )}
          />
        </View>
      </View>
    );
};

export default PerfilColetador;
