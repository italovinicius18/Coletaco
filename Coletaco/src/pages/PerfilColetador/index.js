import React from 'react';
import { Text, View, Image, TouchableOpacity, Pressable, FlatList } from 'react-native';
import { styles } from './styles';
import Svg, { Path } from 'react-native-svg';
import {
  useFonts,
  Montserrat_800ExtraBold,
  Montserrat_400Regular,
  Montserrat_500Medium,
} from '@expo-google-fonts/montserrat';
import { AppLoading } from 'expo';

// Criação das variáveis que representam as entregas pendentes e finalizadas (coletadas)
const pendentes = [
  { key: '0', produto: 'Latinha', latitude: -15.8335066, longitude: -47.955316, nome: 'Thorin', imagem: require('../img/Colaborador.png'), categoria: 'Metal'},
  { key: '1', produto: 'Papelão', latitude: -15.8335066, longitude: -47.955316, nome: 'Balin', imagem: require('../img/Colaborador.png'), categoria: 'Papel'},
  { key: '2', produto: 'Papelão', latitude: -15.8335066, longitude: -47.955316, nome: 'Dwalin', imagem: require('../img/Colaborador.png'), categoria: 'Papel'},
  { key: '3', produto: 'Papelão', latitude: -15.8335066, longitude: -47.955316, nome: 'Fili', imagem: require('../img/Colaborador.png'), categoria: 'Papel'},
  { key: '4', produto: 'Papelão', latitude: -15.8335066, longitude: -47.955316, nome: 'kili', imagem: require('../img/Colaborador.png'), categoria: 'Papel'},
  { key: '5', produto: 'Papelão', latitude: -15.8335066, longitude: -47.955316, nome: 'Bombur', imagem: require('../img/Colaborador.png'), categoria: 'Papel'},
  { key: '6', produto: 'Papelão', latitude: -15.8335066, longitude: -47.955316, nome: 'Bofur', imagem: require('../img/Colaborador.png'), categoria: 'Papel'},
];

const coletados = [
  { key: '0', produto: 'Latinha', nome: 'Thorin', imagem: require('../img/Colaborador.png'), categoria: 'Metal'},
  { key: '1', produto: 'Papelão', nome: 'Balin', imagem: require('../img/Colaborador.png'), categoria: 'Papel'},
  { key: '2', produto: 'Papelão', nome: 'Dwalin', imagem: require('../img/Colaborador.png'), categoria: 'Papel'},
  { key: '3', produto: 'Papelão', nome: 'Fili', imagem: require('../img/Colaborador.png'), categoria: 'Papel'},
  { key: '4', produto: 'Papelão', nome: 'kili', imagem: require('../img/Colaborador.png'), categoria: 'Papel'},
  { key: '5', produto: 'Papelão', nome: 'Bombur', imagem: require('../img/Colaborador.png'), categoria: 'Papel'},
  { key: '6', produto: 'Papelão', nome: 'Bofur', imagem: require('../img/Colaborador.png'), categoria: 'Papel'},
];


const Coleta = (props) => {
  return (
    // Função que irá retornar as informações das variáveis 'pendentes' e 'coletados', também irá retornar o estilo de cada View criada 
    <Pressable onPress={() => { props.navigate('TelaDoProduto',{coleta: props, disponibilidade: 'Pendente'}) }} style={({ pressed }) => [
      styles.itemColeta,
      {
        backgroundColor: pressed
          ? '#69D669'
          : 'white'
      }
    ]}>
      <View style={styles.areaImagemPerfil}>
        <Image
          style={[styles.imagemListaPerfil, { backgroundColor: props.backgroundColor }]}
          source={props.imagem}
        />
      </View>
      <View style={styles.dadosColeta}>
        <View style={styles.areaTituloDadosColeta}>
          <Text style={styles.tituloDadosColeta} >
            {props.produto}
          </Text>
        </View>
        <Text style={styles.descricaoDadosNome}>
          {props.nome}
        </Text>
      </View>

    </Pressable>
  );
}

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
          <Image source={require('../img/Catador.png')}
          />
        </View>

        {/* Definição estática do nome e status como catador */}
        <View style={styles.fundoNome}>
          <Text style={styles.nome}> Jorgin </Text>
          <Text style={styles.status}> Catador </Text>
        </View>

        {/* Criação das FlatList que representam a lista de coletas pendentes e finalizadas */}
        <View style={styles.areaListaPendentes}>
          <Text style={styles.tituloPendente}> Pendentes </Text>
          <FlatList data={pendentes}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <Coleta chave={item.key} produto={item.produto} latitude={item.latitude} longitude={item.longitude} nome={item.nome} imagem={item.imagem} categoria={item.categoria} navigate={navigation.navigate}/>}
          />
        </View>

        <View style={styles.areaListaColetados}>
          <Text style={styles.tituloColetado}> Coletados </Text>
          <FlatList data={coletados}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <Coleta chave={item.key} produto={item.produto} nome={item.nome} imagem={item.imagem} />}
          />
        </View>

      </View>



    );
}

export default PerfilColetador;