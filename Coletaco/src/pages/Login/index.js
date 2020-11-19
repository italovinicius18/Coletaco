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

const LogoSvgComponent = (props) => {
	return (
	  <Svg
		width={48}
		height={1}
		viewBox="0 0 48 1"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	  >
		<Path d="M0 0h48v1H0z" fill="#063855" fillRule="evenodd" />
	  </Svg>
	);
  };

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
		{/* Cabeçalho da página (logo + título) */}
		<View style={styles.viewColetacoText}>
			<Text style={styles.coletacoText}>
				COLETAÇO
			</Text>
		</View>

		{/* Formulário de Login */}
		<View style={styles.viewFormularioInfos}>
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
			
			<TouchableOpacity style={styles.botaoLogin}>
				<Text style={styles.botaoLoginText}>Login</Text>
			</TouchableOpacity>
		</View>

		{/* Link para tela de cadastro */}
		<View style={styles.viewCadastre}>
			<Text style={styles.textCadastre}>
				Você é novo aqui ? <Text style={styles.linkCadastro} onPress={ () => {navigation.navigate("Cadastro")}}>Cadastre-se</Text>
			</Text>
		</View>
	</View>
    );
  }
}

export default Login;