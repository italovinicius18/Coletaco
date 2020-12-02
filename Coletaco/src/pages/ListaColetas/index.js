import React, {useState} from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Pressable,
  Image,
  ActivityIndicator,
} from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { AppLoading } from "expo";
import Svg, { Path } from "react-native-svg";
import {
  useFonts,
  Montserrat_800ExtraBold,
  Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";
import {dadosCategoria,Coletas} from '../data_example'

const axios = require("axios");
const qs = require("qs");
import { url, config } from "../../api/api";

//Criei esta função pra ser a renderização de cada item,
// o qual passo como parâmetro o item da lista de objetos a ser renderizado

const Coleta = (props) => {
  const navigation = useNavigation();
  const coleta = props.coleta

  var categoria = dadosCategoria[coleta.IdCategoria];
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("TelaDoProduto", {
          coleta: coleta,
          usuario: props.usuario,
        });
      }}
      style={({ pressed }) => [
        styles.itemColeta,
        {
          backgroundColor: pressed ? "#69D669" : categoria.cor,
        },
      ]}
    >
      <View style={styles.dadosColeta}>
        <View style={styles.areaTituloDadosColeta}>
          <Text
            style={[styles.tituloDadosColeta, { color: categoria.corTexto }]}
          >
            {coleta.Nome}
          </Text>
        </View>
        <Text
          style={[styles.descricaoDadosColeta, { color: categoria.corTexto }]}
        >
          {categoria.categoria}
        </Text>
        <Text
          style={[styles.descricaoDadosColeta, { color: categoria.corTexto }]}
        >
        </Text>
      </View>
      <View style={styles.areaImagemColeta}>
        <Image
          style={[styles.imagemColeta, { transform: categoria.angulo }]}
          source={categoria.imagem}
        />
      </View>
    </Pressable>
  );
};

// Esta função carrga a imagem svg que utilizamos no botão de adicionar coleta

const BotaoAdicionarColeta = (props) => {
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

// Aqui é o componente principal que vai renderizar o título e a lista de coletas

const ListaColetas = (props) => {
  const navigation = useNavigation();
  const dadosUsuario = props.dadosUsuario
  const [coletas, setColetas] = useState([]);
  const [temColetas, setTemColetas] = useState(false);
  const [isLoading, setLoading] = useState(true);

  let [fontsLoaded] = useFonts({
    Montserrat_800ExtraBold,
    Montserrat_400Regular,
  });

  axios
    .post(url + "coletas", qs.stringify(dadosUsuario), config)
    .then((result) => {
      let res = result.data;
      if (res.length > 0) {
        setColetas(res);
        setTemColetas(true);
      }
    })
    .catch((err) => {
      Alert.alert("Erro de conexão, tente novamente");
      return;
    })
    .finally(() => setLoading(false));

  if (!fontsLoaded) {
    return <AppLoading />;
  } else
    return (
      <View style={styles.container}>
        <View style={styles.areaTitulo}>
          <Text style={styles.textoTitulo}>Coletas</Text>
        </View>

        {/* Aqui eu renderizo a lista de coletas do colaborador */}

        <View style={styles.areaListaColetas}>
          { isLoading ? (
            <ActivityIndicator size="large" color="#00ff00"/>
          ) : (
            temColetas ? (
              <FlatList
                showsVerticalScrollIndicator={false}
                data={coletas}
                keyExtractor={(item, index) => item.IdCategoria.toString()}
                renderItem={({ item }) => (
                  <Coleta coleta={item} usuario={props.usuario} />
                )}
              />
            ) : (
              <Text>Não existem coletas cadastradas</Text>
            )
          )
          }
        </View>

        {/* Aqui eu crio um botão flutuante com a função de navegar para a página de adicionar coleta */}

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            navigation.navigate("AdicionaColetas", {
              dadosCategoria: dadosCategoria,
            });
          }}
          style={styles.botaoAdicionaColeta}
        >
          <BotaoAdicionarColeta style={styles.imagemBotaoAdicionaColeta} />
        </TouchableOpacity>
      </View>
    );
};

export default ListaColetas;
