import React,{useState} from 'react';
import { Text, View, TouchableOpacity, TextInput, Switch, Button} from 'react-native';
import { styles } from './styles';
import { AppLoading } from "expo";
import Svg, { Path } from 'react-native-svg';
import {
  useFonts,
  Montserrat_800ExtraBold,
  Montserrat_400Regular,
  Montserrat_500Medium,
} from "@expo-google-fonts/montserrat";

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

const DetalheAdicionaColetas = ({ route, navigation }) => {
  const { categoria } = route.params;
  const [value, onChangeText] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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
                onPress={()=>{navigation.goBack()}}
                style={styles.botaoVoltar}>
                <SvgComponent style={styles.imagemBotaoVoltar}/>
          </TouchableOpacity>
        </View>

        <View style={styles.cabecalhoAdicionaColeta}>
          <View style={styles.areaDetalheCategoria}>
            <Text style={styles.detalheCategoria}>Detalhe seu material</Text>
          </View>
        </View >

        <View style={styles.formularioColeta}>

          <TextInput
            style={styles.descricaoColeta}
            placeholder={"Nome do material"}
            onChangeText={text => onChangeText(text)}
            value={value}
          />

          <View style={styles.areaSelecionarMeuLocal}>
            <View style={styles.areaTextoSelecionarMeuLocal}>
              <Text style={styles.textoPrincipalSelecionarMeuLocal}>
                Permissão da localização
              </Text>
              <Text style={styles.textoSecundarioSelecionarMeuLocal}>
                Eu permito compartilhar a {"\n"}minha localização atual
              </Text>
            </View>
            <View style={styles.areaCheckboxSelecionarMeuLocal}>
              <Switch
                trackColor={{ false: "#767577", true: "#69D669" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#69D669"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View>

          <View>
            <Button
              title="Press me"
              onPress={() => Alert.alert('Simple Button pressed')}
            />
          </View>

        </View>
    </View>
  );
}

export default DetalheAdicionaColetas;