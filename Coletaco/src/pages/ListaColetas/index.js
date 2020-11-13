import React from 'react';
import { Text, View, FlatList, TouchableOpacity, ScrollView} from 'react-native';
import { styles } from './styles';
import { AppLoading } from "expo";
import Svg, { Path } from 'react-native-svg';
import {
  useFonts,
  Montserrat_800ExtraBold,
  Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";


const coletas = [
  {key: '0',nome: 'Latinha', categoria: 'Metal', local: 'Meu local'},
  {key: '1',nome: 'Papelão', categoria: 'Papel', local: 'Meu local'},
  {key: '2',nome: 'Garrafa PET', categoria: 'Plástico', local: 'Meu local'},
  {key: '3',nome: 'Garrafa de Vidro', categoria: 'Vidro', local: 'Meu local'},
  {key: '4',nome: 'Papelão', categoria: 'Papel', local: 'Meu local'},
  {key: '5',nome: 'Garrafa PET', categoria: 'Plástico', local: 'Meu local'},
  {key: '6',nome: 'Garrafa de Vidro', categoria: 'Vidro', local: 'Meu local'},
];

const Coleta = (props) => {
  
  return (
      <View style={[styles.itemColeta, {backgroundColor: corCategoria(props.categoria)}]}>
        <View style={styles.dadosColeta}>
          <View style={styles.areaTituloDadosColeta}>
            <Text style={[styles.tituloDadosColeta, {color: corTextoCategoria(props.categoria)}]} >{props.nome}</Text>
          </View>
          <Text style={[styles.descricaoDadosColeta, {color: corTextoCategoria(props.categoria)}]}>{props.categoria}</Text>
          <Text style={[styles.descricaoDadosColeta, {color: corTextoCategoria(props.categoria)}]}>{props.local}</Text>
        </View>
        <View style={styles.imagemColeta}>
          <Text>Imagem</Text>
        </View>
      </View>
  );
}

const corCategoria = (categoria) => {
  categorias = {"Metal": "#F1F312", "Plástico": "#E53D00", "Papel": "#48ACF0", "Vidro": "#08C49B"}
  
  return categorias[categoria]
}

const corTextoCategoria = (categoria) => {
  categorias = {"Metal": "#18191F", "Plástico": "white", "Papel": "white", "Vidro": "white"}
  
  return categorias[categoria]
}

const SvgComponent = (props) => {
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
}

const ListaColetas = () => {
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
        <Text style={styles.textoTitulo}>
          Coletas
        </Text>
      </View>

      <View style={styles.areaListaColetas}>
        <FlatList data={coletas} 
                  renderItem={({item}) => <Coleta chave={item.key} nome={item.nome} categoria={item.categoria} local={item.local}
                  showsVerticalScrollIndicator={false}/>}
        />
      </View>

      <TouchableOpacity
          activeOpacity={0.7}
          onPress={()=>{console.log("Maravilha")}}
          style={styles.botaoAdicionaColeta}>
          <SvgComponent style={styles.imagemBotaoAdicionaColeta}/>
        </TouchableOpacity>
    </View>
  );
}

export default ListaColetas;