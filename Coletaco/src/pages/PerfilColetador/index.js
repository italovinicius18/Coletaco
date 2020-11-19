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
}

// Criação das variáveis que representam as entregas pendentes e finalizadas (coletadas)
const pendentes = [
  { key: '0', produto: 'Latinha', nome: 'Thorin', imagem: require('./img/Catador.png'), backgroundColor: '#00C6AE' },
  { key: '1', produto: 'Papelão', nome: 'Balin', imagem: require('./img/Catador.png'), backgroundColor: '#00C6AE' },
  { key: '2', produto: 'Papelão', nome: 'Dwalin', imagem: require('./img/Catador.png'), backgroundColor: '#00C6AE' },
  { key: '3', produto: 'Papelão', nome: 'Fili', imagem: require('./img/Catador.png'), backgroundColor: '#00C6AE' },
  { key: '4', produto: 'Papelão', nome: 'kili', imagem: require('./img/Catador.png'), backgroundColor: '#00C6AE' },
  { key: '5', produto: 'Papelão', nome: 'Bombur', imagem: require('./img/Catador.png'), backgroundColor: '#00C6AE' },
  { key: '6', produto: 'Papelão', nome: 'Bofur', imagem: require('./img/Catador.png'), backgroundColor: '#00C6AE' },
];

const coletados = [
  { key: '0', produto: 'Latinha', nome: 'Dori', imagem: require('./img/Catador.png'), backgroundColor: '#F95A2C' },
  { key: '1', produto: 'Papelão', nome: 'Nori', imagem: require('./img/Catador.png'), backgroundColor: '#F95A2C' },
  { key: '2', produto: 'Papelão', nome: 'Ori', imagem: require('./img/Catador.png'), backgroundColor: '#F95A2C' },
  { key: '3', produto: 'Papelão', nome: 'Oin', imagem: require('./img/Catador.png'), backgroundColor: '#F95A2C' },
  { key: '4', produto: 'Papelão', nome: 'Gloin', imagem: require('./img/Catador.png'), backgroundColor: '#F95A2C' },
  { key: '5', produto: 'Papelão', nome: 'Bifur', imagem: require('./img/Catador.png'), backgroundColor: '#F95A2C' },
];


const Coleta = (props) => {
  return (
    // Função que irá retornar as informações das variáveis 'pendentes' e 'coletados', também irá retornar o estilo de cada View criada 
    <Pressable onPress={() => { console.log(props.produto) }} style={({ pressed }) => [
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

const PerfilColetador = (navigation) => {

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

        {/* Criação do botão voltar */}
        <View style={styles.areaBotaoVoltar}>
          <TouchableOpacity
            activeOpacity={0.7}
            /*onPress={()=>{navigation.goBack()}}*/
            onPress={() => { alert('Clicado') }}
            style={styles.botaoVoltar}>
            <SvgComponent style={styles.imagemBotaoVoltar} />
          </TouchableOpacity>
        </View>

        {/* Definição da imagem do perfil do catador */}
        <View style={styles.imagemPerfil}>
          <Image source={require('./img/Catador.png')}
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
            renderItem={({ item }) => <Coleta chave={item.key} produto={item.produto} nome={item.nome} imagem={item.imagem} backgroundColor={item.backgroundColor}
              showsVerticalScrollIndicator={false} />}
          />
        </View>

        <View style={styles.areaListaColetados}>
          <Text style={styles.tituloColetado}> Coletados </Text>
          <FlatList data={coletados}
            renderItem={({ item }) => <Coleta chave={item.key} produto={item.produto} nome={item.nome} imagem={item.imagem} backgroundColor={item.backgroundColor}
              showsVerticalScrollIndicator={false} />}
          />
        </View>

      </View>



    );
}

export default PerfilColetador;