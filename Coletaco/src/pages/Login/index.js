import React, {useState} from 'react';
import { Text, TouchableOpacity, View} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { styles } from './styles';
import Svg, { Path } from 'react-native-svg';
import {
  useFonts,
  Montserrat_800ExtraBold,
  Montserrat_400Regular,
  Montserrat_500Medium,
} from "@expo-google-fonts/montserrat";
import { AppLoading } from "expo";

//Botão "X"
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

const Login = ({navigation}) => {
  var [email, onChangeEmail] = useState(''); //Armazena o valor do input Email
  var [senha, onChangeSenha] = useState(''); //Armazena o valor do input Senha
  let [fontsLoaded] = useFonts({
    Montserrat_800ExtraBold,
    Montserrat_500Medium,
    Montserrat_400Regular
  });
  if (!fontsLoaded) { //Caso as fontes não estejam carregadas, a view ainda não será mostrada
    return <AppLoading />;
  } 
  else {
    return (
      <View style={styles.container}>
        <Text style={styles.coletacoText}>
          COLETAÇO
        </Text>
  
        <TextInput
			style={styles.inputEmail}
			placeholder="E-mail"
			onChangeText={email => onChangeEmail(email)}
			value={email}
        />
  
        <TextInput
			style={styles.inputSenha}
			placeholder="Senha"
			onChangeText={senha => onChangeSenha(senha)}
			secureTextEntry={true}
			value={senha}
        />
  
        <TouchableOpacity style={styles.botao} onPress={ () => {navigation.navigate("Cadastro")}}>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Login;