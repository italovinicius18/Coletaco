import React from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Pressable,
  Image,
} from "react-native";
import { styles } from "./styles";
import { AppLoading } from "expo";
import Svg, { Path } from "react-native-svg";
import {
  useFonts,
  Montserrat_800ExtraBold,
  Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";


// Cirei a lista de objetos abixo pra simular a Flatlist e já criar estilos para os itens
const coletas = [
  { key: "0", nome: "Latinha", categoria: "Metal", local: "Meu local" },
  { key: "1", nome: "Papelão", categoria: "Papel", local: "Meu local" },
  { key: "2", nome: "Garrafa PET", categoria: "Plástico", local: "Meu local" },
  { key: "3", nome: "Garrafa de Vidro", categoria: "Vidro", local: "Meu local"},
  { key: "4", nome: "Papelão", categoria: "Papel", local: "Meu local" },
  { key: "5", nome: "Garrafa PET", categoria: "Plástico", local: "Meu local" },
  { key: "6", nome: "Garrafa de Vidro", categoria: "Vidro", local: "Meu local"}
];

// Este objeto carrega as características de cada categoria, como cor de fundo, cor do texto, ícone específico
// e o ângulo do ícone, o qual desejamos que a categoria Plástico e vidro ficasse em 45 graus

const dadosCategoria = {
  Metal: {
    cor: "#F1F312",
    corTexto: "#18191F",
    imagem: require("../../img/lata.png"),
    angulo: [{ rotate: "0deg" }],
  },
  Papel: {
    cor: "#48ACF0",
    corTexto: "white",
    imagem: require("../../img/caixa.png"),
    angulo: [{ rotate: "0deg" }],
  },
  Plástico: {
    cor: "#E53D00",
    corTexto: "white",
    imagem: require("../../img/garrafa_pet.png"),
    angulo: [{ rotate: "45deg" }],
  },
  Vidro: {
    cor: "#08C49B",
    corTexto: "white",
    imagem: require("../../img/garrafa_vidro.png"),
    angulo: [{ rotate: "45deg" }],
  },
};

//Criei esta função pra ser a renderização de cada item,
// o qual passo como parâmetro o item da lista de objetos a ser renderizado

const Coleta = (props) => {
  var categoria = dadosCategoria[props.categoria];
  return (

    <Pressable
      onPress={() => {
        console.log(props.nome);
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
            {props.nome}
          </Text>
        </View>
        <Text
          style={[styles.descricaoDadosColeta, { color: categoria.corTexto }]}
        >
          {props.categoria}
        </Text>
        <Text
          style={[styles.descricaoDadosColeta, { color: categoria.corTexto }]}
        >
          {props.local}
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

const ListaColetas = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Montserrat_800ExtraBold,
    Montserrat_400Regular,
  });

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
          <FlatList
            showsVerticalScrollIndicator={false}
            data={coletas}
            renderItem={({ item }) => (
              <Coleta
                chave={item.key}
                nome={item.nome}
                categoria={item.categoria}
                local={item.local}
                />
            )}
          />
        </View>

        {/* Aqui eu crio um botão flutuante com a função de navegar para a página de adicionar coleta */}

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            navigation.navigate("AdicionaColetas",{dadosCategoria: dadosCategoria});
          }}
          style={styles.botaoAdicionaColeta}
        >
          <BotaoAdicionarColeta style={styles.imagemBotaoAdicionaColeta} />
        </TouchableOpacity>
      </View>
    );
};

export default ListaColetas;
