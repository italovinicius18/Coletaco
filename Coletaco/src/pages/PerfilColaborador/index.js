import React from 'react';
import { Text, View, Image, TouchableOpacity, Pressable, FlatList, Dimensions } from 'react-native';
import { styles } from './styles';
import Svg, { Path } from 'react-native-svg';
import {
  useFonts,
  Montserrat_800ExtraBold,
  Montserrat_400Regular,
  Montserrat_500Medium,
} from '@expo-google-fonts/montserrat';
import { AppLoading } from 'expo';
import {
  PieChart,
} from 'react-native-chart-kit'


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


const dadosColaboracao = [
  {
    name: 'Plástico',
    colaboracao: 1,
    color: '#E53D00',
    legendFontColor: '#000000',
    legendFontSize: 15,
  },
  {
    name: 'Papel',
    colaboracao: 2,
    color: '#48ACF0',
    legendFontColor: '#000000',
    legendFontSize: 15,
  },
  {
    name: 'Metal',
    colaboracao: 3,
    color: '#F1F312',
    legendFontColor: '#000000',
    legendFontSize: 15,
  },
  {
    name: 'Vidro',
    colaboracao: 4,
    color: '#08C49B',
    legendFontColor: '#000000',
    legendFontSize: 15,
  },
];


const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};


const PerfilColaborador = ({ navigation }) => {

  let [fontsLoaded] = useFonts({
    Montserrat_800ExtraBold,
    Montserrat_500Medium,
    Montserrat_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else
    return (
      <View style={styles.container}>

        <View style={styles.areaBotaoVoltar}>
          <TouchableOpacity
            activeOpacity={0.7}
            /*onPress={()=>{navigation.goBack()}}*/
            onPress={() => { alert('Clicado') }}
            style={styles.botaoVoltar}>
            <SvgComponent style={styles.imagemBotaoVoltar} />
          </TouchableOpacity>
        </View>

        <View style={styles.imagemPerfil}>
          <Image source={require('../img/Colaborador.png')}
          />
        </View>

        <View style={styles.fundo}>
          <View style={styles.linha}>
          </View>
          <Text style={styles.status}> Colaborador </Text>
          <Text style={styles.nome}> Jorgin </Text>
          <PieChart
            style={{ top: '10%', alignSelf: 'center' }}
            data={dadosColaboracao}
            accessor="colaboracao"
            width={Dimensions.get("window").width}
            height={230}
            chartConfig={chartConfig}
            backgroundColor="transparent"
            paddingTop="200"
            paddingLeft="20"
          />
        </View>

      </View>
    );
}

export default PerfilColaborador;