import React from 'react';
import { Text, View, Image, Button, TouchableOpacity, Alert} from 'react-native';
import { styles } from './styles';
import {
  useFonts,
  Montserrat_800ExtraBold,
  Montserrat_400Regular,
  Montserrat_500Medium,
} from "@expo-google-fonts/montserrat";
import { AppLoading } from 'expo';

const coletas = [
  {key: '0',nome: 'Latinha', categoria: 'Metal', local: 'Meu local'},
  {key: '1',nome: 'Papelão', categoria: 'Papel', local: 'Meu local'},
  {key: '2',nome: 'Garrafa PET', categoria: 'Plástico', local: 'Meu local'},
  {key: '3',nome: 'Garrafa de Vidro', categoria: 'Vidro', local: 'Meu local'},
];

const dadosCategoria = {
  'Metal': {cor: "#F1F312", corTexto: "#18191F", imagem: require('../../img/lata.png'), angulo: [{ rotate: "0deg" }]},
  'Papel': {cor: "#48ACF0", corTexto: "white", imagem: require('../../img/caixa.png'), angulo: [{ rotate: "0deg" }]},
  'Plástico': {cor: "#E53D00", corTexto: "white", imagem: require('../../img/garrafa_pet.png'), angulo: [{ rotate: "45deg" }]},
  'Vidro': {cor: "#08C49B", corTexto: "white", imagem: require('../../img/garrafa_vidro.png'), angulo: [{ rotate: "45deg" }]}
};

const TelaDoProduto = (props) => {
  let [fontsLoaded] = useFonts({
    Montserrat_800ExtraBold,
    Montserrat_500Medium,
    Montserrat_400Regular,
  });

  var categoria = dadosCategoria["Papel"]

  if (!fontsLoaded) {
    return <AppLoading />;
  } else 
  return (
    <View style={[styles.container, {backgroundColor: categoria.cor}]}>

      <View style={styles.areaImagem}>
        <Image
          style={[styles.imagemColeta, {transform: categoria.angulo}]}
          source={categoria.imagem}
        />
      </View>

      <View style={styles.areaDescricao}>

        <Text style={[styles.setColorBlack]}>
        
        </Text>

        <Text style={[styles.setColorBlack]}>
        
        </Text>

        <Text style={[styles.setColorBlack]}>

        </Text>

      </View>

      <View style={styles.areaBotao}>
        <TouchableOpacity
          onPress={() => Alert.alert('Oba! Esse produto foi coletado')}
          style = {[styles.botaoBotao]}
        >
          <Text style={[styles.setColorWhite]}>
          Coletado
          </Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
}

export default TelaDoProduto;