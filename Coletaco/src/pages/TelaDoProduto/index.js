import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
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

const TelaDoProduto = ({ route, navigation }) => {
  const coleta = route.params.coleta;
  const usuario = route.params.usuario;
  console.log(usuario);

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

  const categoriaDeQuemFezCadastro = {
    coletador: { textoBotao: "Coletar" },
    colaborador: { textoBotao: "Coletado" },
  };

  /// variáveis a serem alteradas
  const categoria = dadosCategoria[coleta.categoria];

  var disponivel = route.params["disponibilidade"]
    ? route.params["disponibilidade"]
    : "";
  var categoriaDoCadastrado = categoriaDeQuemFezCadastro[usuario];

  const [ativo, setAtivo] = useState(disponivel === "Pendente" ? 1 : 0); // variável para fazer a renderização condicional do botão
  const [disposto, setDisposto] = useState(disponivel === "Pendente" ? 0 : 1); // variável para fazer a renderização condicional

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
          <Text style={[styles.descricaoColeta]}>{coleta.nome}</Text>

          <Text style={[styles.setCorPreta]}>
            {coleta.categoria}
            {"\n"}
            {coleta.local}
          </Text>
        </View>

        {ativo ? null : ( // renderização condicional
          <View style={styles.areaBotao}>
            <TouchableOpacity
              style={[styles.botaoBotao]}
              onPress={() => {
                if (usuario === "colaborador") {
                  setAtivo(1);
                } else {
                  setAtivo(1), setDisposto(0);
                }
              }}
            >
              <Text style={[styles.setCorBranca]}>
                {categoriaDoCadastrado.textoBotao}
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {disposto ? null : ( // renderização condicional
          <View style={styles.areaMapa}>
            <MapView
              style={styles.mapEstilo}
              initialRegion={{
                latitude: coleta.latitude,
                longitude: coleta.longitude,
                latitudeDelta: 0.561,
                longitudeDelta: 0.3105,
              }}
            >
              <Marker
                coordinate={{
                  latitude: coleta.latitude,
                  longitude: coleta.longitude,
                }}
                title={categoria.nome}
                description="Park Shopping"
              ></Marker>
            </MapView>
          </View>
        )}
      </View>
    );
};

export default TelaDoProduto;
