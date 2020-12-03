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
import {dadosCategoria} from '../data_example'


const TelaDoProduto = ({ route, navigation }) => {
  const coleta = route.params.coleta;
  const dadosUsuario = route.params.dadosUsuario;

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

  const categoriaDeQuemFezCadastro = {
    0: { textoBotao: "Coletar" },
    1: { textoBotao: "Coletado" },
  };

  /// variáveis a serem alteradas
  const categoria = dadosCategoria[coleta.IdCategoria];

  var disponivel = coleta.IdSituacao;
  var categoriaDoCadastrado = categoriaDeQuemFezCadastro[dadosUsuario.TipoPerfil];

  const [ativo, setAtivo] = useState(disponivel === 2 ? 1 : 0); // variável para fazer a renderização condicional do botão
  const [disposto, setDisposto] = useState(disponivel === 2 ? 0 : 1); // variável para fazer a renderização condicional

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
          <Text style={[styles.descricaoColeta]}>{coleta.Nome}</Text>

          <Text style={[styles.setCorPreta]}>
            {categoria.categoria}
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
                latitude: coleta.Latitude,
                longitude: coleta.Longitude,
                latitudeDelta: 0.561,
                longitudeDelta: 0.3105,
              }}
            >
              <Marker
                coordinate={{
                  latitude: coleta.Latitude,
                  longitude: coleta.Longitude,
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
