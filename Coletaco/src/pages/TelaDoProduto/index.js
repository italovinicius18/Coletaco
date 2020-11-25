import React, {useState} from 'react';
import { Text, View, Image, TouchableOpacity, Alert} from 'react-native';
import { styles } from './styles';
import Svg, { Path } from 'react-native-svg';
import {
  useFonts,
  Montserrat_800ExtraBold,
  Montserrat_400Regular,
  Montserrat_500Medium,
} from "@expo-google-fonts/montserrat";
import { AppLoading } from 'expo';

const TelaDoProduto = (props) => {
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
}
 
const dadosCategoria = {
  'Metal': {categoria: 'Metal', local: 'Meu local', nome: 'Latinha', cor: "#F1F312", corTexto: "#18191F", imagem: require('../../img/lata.png'), angulo: [{ rotate: "0deg" }]},
  'Papel': {categoria: 'Papel', local: 'Meu local', nome: 'Papelão', cor: "#48ACF0", corTexto: "white", imagem: require('../../img/caixa.png'), angulo: [{ rotate: "0deg" }]},
  'Plástico': {categoria: 'Plástico', local: 'Meu local', nome: 'Garrafa PET', cor: "#E53D00", corTexto: "white", imagem: require('../../img/garrafa_pet.png'), angulo: [{ rotate: "45deg" }]},
  'Vidro': {categoria: 'Vidro', local: 'Meu local', nome: 'Garrafa de Vidro', cor: "#08C49B", corTexto: "white", imagem: require('../../img/garrafa_vidro.png'), angulo: [{ rotate: "45deg" }]}
};

const categoriaDoCaraQueFezCadastro = {
  'Colaborador': {textoBotao: 'Coletado'},
  'Catador'    : {textoBotao: 'Coletar'}
}
  
const [ativo, setAtivo] = useState(0); // variável para fazer a renderização condicional do botão

/// variáveis a serem alteradas
var categoria = dadosCategoria['Papel']
var categoriaBraba = categoriaDoCaraQueFezCadastro['Catador']
///

  if (!fontsLoaded) {
    return <AppLoading />
  } else 
      return (

        // toda a tela do produto
        <View style={[styles.container, {backgroundColor: categoria.cor}]}> 

        <View style={styles.areaBotaoVoltar}>
          <TouchableOpacity // botão "Voltar"
            activeOpacity={0.7} 
            onPress={() => Alert.alert('Você tentou voltar, mas falhou. Vai aprender a programar')}
            //onPress={()=>{navigation.goBack()}} // botão, ao ser apertado, volta para tela ListaColetas
            style={styles.botaoVoltar}>
            <SvgComponent style={styles.imagemBotaoVoltar}/>
          </TouchableOpacity>
        </View>

        <View style={styles.areaImagem}>
          <Image // imagem da categoria do material
            style={[styles.imagemColeta, {transform: categoria.angulo}]}
            source={categoria.imagem}
          />
        </View>
        <View style={styles.areaDescricao}>
        
          <Text style={[styles.descricaoColeta]}>
            {categoria.nome}
          </Text>

          <Text style={[styles.setCorPreta]}>
            {categoria.categoria}
            {"\n"}
            {categoria.local}
          </Text>

        </View>
      
        {ativo ? null: // renderização condicional
          <View style={styles.areaBotao}>   
            <TouchableOpacity
              style = {[styles.botaoBotao]}
              onPress={() => {setAtivo(1)}}
            >
              <Text style={[styles.setCorBranca]}>
                {categoriaBraba.textoBotao}
              </Text> 
          
           </TouchableOpacity>

        </View>
        }
      
        </View>
  );
}

export default TelaDoProduto;