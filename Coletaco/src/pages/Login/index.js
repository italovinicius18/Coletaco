import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View, Keyboard, TextInput } from 'react-native';
import { styles } from './styles';
import Svg, { Path, Circle } from 'react-native-svg';
import {
	useFonts,
	Montserrat_800ExtraBold,
	Montserrat_400Regular,
	Montserrat_500Medium,
} from "@expo-google-fonts/montserrat";
import { AppLoading } from "expo";

//Componente de imagem da logo
const LogoSvgComponent = (props) => {
	return (
		<Svg
      width={120}
      height={120}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={60} cy={60} r={60} fill="#69D669" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.934 93.176c8.105 8.105 18.314 12.157 30.626 12.157 7.482 0 14.34-1.714 20.574-5.143 6.312-3.507 11.26-8.26 14.846-14.261l-18.12-10.52c-1.558 2.96-3.896 5.298-7.013 7.013-3.039 1.636-6.468 2.455-10.286 2.455-6.547 0-11.846-2.026-15.898-6.079-3.975-4.13-5.962-9.507-5.962-16.131 0-6.624 1.987-11.963 5.962-16.015 4.052-4.13 9.351-6.195 15.898-6.195 3.818 0 7.247.857 10.286 2.571 3.117 1.637 5.455 3.897 7.014 6.78L94.98 39.405c-3.585-5.923-8.534-10.638-14.846-14.145C73.822 21.753 66.964 20 59.56 20c-12.313 0-22.521 4.091-30.626 12.274-8.027 8.105-12.04 18.236-12.04 30.393s4.013 22.327 12.04 30.51zM93.334 72a9.334 9.334 0 100-18.667 9.334 9.334 0 000 18.667z"
        fill="#18191F"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M71.122 84.764l-.01.006c-3.468 1.867-7.34 2.773-11.551 2.773-7.145 0-13.16-2.234-17.784-6.86l-.018-.017-.018-.019c-4.527-4.704-6.707-10.782-6.707-17.98 0-7.197 2.18-13.248 6.725-17.882C46.38 40.075 52.4 37.79 59.56 37.79c4.22 0 8.095.948 11.562 2.896 2.682 1.414 4.9 3.263 6.61 5.547L91.198 38.5c-3.17-4.452-7.278-8.087-12.36-10.91-5.905-3.28-12.315-4.924-19.277-4.924-11.656 0-21.166 3.844-28.732 11.483C23.33 41.72 19.56 51.162 19.56 62.668c0 11.5 3.768 20.983 11.267 28.633 7.564 7.559 17.073 11.367 28.732 11.367 7.054 0 13.465-1.611 19.283-4.81 5.09-2.829 9.204-6.5 12.378-11.027l-13.467-7.82c-1.709 2.35-3.929 4.267-6.622 5.748l-.01.006zm5.033-8.14c-1.527 2.392-3.63 4.325-6.308 5.798-3.039 1.636-6.468 2.455-10.286 2.455-6.547 0-11.846-2.026-15.898-6.079-3.975-4.13-5.962-9.507-5.962-16.131 0-6.624 1.987-11.963 5.962-16.015 4.052-4.13 9.351-6.195 15.898-6.195 3.818 0 7.247.857 10.286 2.571 2.852 1.497 5.05 3.516 6.598 6.056.144.237.283.478.416.724L94.98 39.405a39.38 39.38 0 00-1.46-2.238c-3.428-4.884-7.89-8.853-13.386-11.907C73.822 21.753 66.964 20 59.56 20c-12.313 0-22.521 4.091-30.626 12.274-8.027 8.105-12.04 18.236-12.04 30.393s4.013 22.327 12.04 30.51c8.105 8.104 18.314 12.156 30.626 12.156 7.482 0 14.34-1.714 20.574-5.143 5.504-3.058 9.97-7.063 13.4-12.016.505-.728.986-1.477 1.446-2.245l-18.12-10.52c-.219.417-.454.822-.705 1.215zm17.178-7.29a6.667 6.667 0 100-13.334 6.667 6.667 0 000 13.333zm9.334-6.667A9.334 9.334 0 1184 62.666a9.334 9.334 0 0118.667 0z"
        fill="#18191F"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.934 90.51c8.105 8.104 18.314 12.157 30.626 12.157 7.482 0 14.34-1.715 20.574-5.144 6.312-3.507 11.26-8.26 14.846-14.26L76.86 72.741c-1.558 2.96-3.896 5.299-7.013 7.013-3.039 1.637-6.468 2.455-10.286 2.455-6.547 0-11.846-2.026-15.898-6.078C39.688 72.002 37.7 66.624 37.7 60c0-6.624 1.987-11.962 5.962-16.015 4.052-4.13 9.351-6.195 15.898-6.195 3.818 0 7.247.857 10.286 2.572 3.117 1.636 5.455 3.896 7.014 6.78L94.98 36.738c-3.585-5.923-8.534-10.637-14.846-14.144-6.312-3.507-13.17-5.26-20.574-5.26-12.313 0-22.521 4.09-30.626 12.273-8.027 8.105-12.04 18.236-12.04 30.393s4.013 22.327 12.04 30.51zm64.4-21.177a9.334 9.334 0 100-18.667 9.334 9.334 0 000 18.667z"
        fill="#fff"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M71.122 82.098l-.01.005c-3.468 1.868-7.34 2.774-11.551 2.774-7.145 0-13.16-2.235-17.784-6.86L41.76 78l-.018-.018C37.214 73.276 35.034 67.198 35.034 60c0-7.197 2.18-13.248 6.725-17.882 4.621-4.71 10.642-6.995 17.801-6.995 4.22 0 8.095.949 11.562 2.896 2.682 1.414 4.9 3.263 6.61 5.547l13.466-7.732c-3.17-4.452-7.278-8.086-12.36-10.91C72.934 21.645 66.524 20 59.562 20c-11.656 0-21.166 3.844-28.732 11.484C23.33 39.054 19.56 48.494 19.56 60c0 11.5 3.768 20.983 11.267 28.633C38.392 96.192 47.901 100 59.56 100c7.054 0 13.465-1.611 19.283-4.81 5.09-2.828 9.204-6.5 12.378-11.027l-13.467-7.82c-1.709 2.35-3.929 4.268-6.622 5.749l-.01.006zm5.033-8.141c-1.527 2.393-3.63 4.326-6.308 5.798-3.039 1.637-6.468 2.455-10.286 2.455-6.547 0-11.846-2.026-15.898-6.078C39.688 72.002 37.7 66.624 37.7 60c0-6.624 1.987-11.962 5.962-16.015 4.052-4.13 9.351-6.195 15.898-6.195 3.818 0 7.247.857 10.286 2.572 2.852 1.497 5.05 3.515 6.598 6.055.144.237.283.479.416.725L94.98 36.738a39.413 39.413 0 00-1.46-2.237c-3.428-4.885-7.89-8.854-13.386-11.907-6.312-3.507-13.17-5.26-20.574-5.26-12.313 0-22.521 4.09-30.626 12.273-8.027 8.105-12.04 18.236-12.04 30.393s4.013 22.327 12.04 30.51c8.105 8.104 18.314 12.157 30.626 12.157 7.482 0 14.34-1.715 20.574-5.144 5.504-3.057 9.97-7.063 13.4-12.016.505-.728.986-1.476 1.446-2.245l-18.12-10.52c-.219.417-.454.822-.705 1.215zm17.178-7.29a6.667 6.667 0 100-13.334 6.667 6.667 0 000 13.334zM102.667 60A9.334 9.334 0 1184 60a9.334 9.334 0 0118.667 0z"
        fill="#18191F"
      />
    </Svg>
	);
};

const Login = ({ navigation }) => {
	//EventListener do teclado
	useEffect(() => {
		Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
		Keyboard.addListener("keyboardDidHide", _keyboardDidHide);
	}, []);
	//Evento disparado quando o teclado aparece na tela
	const _keyboardDidShow = () => {
		onChangeKeyboard(true);
	};
	//Evento disparado quando o teclado some da tela
	const _keyboardDidHide = () => {
		onChangeKeyboard(false);
	};
	var [email, onChangeEmail] = useState(''); //Armazena o valor do input Email
	var [senha, onChangeSenha] = useState(''); //Armazena o valor do input Senha
	let [tecladoAtivo, onChangeKeyboard] = useState(false); //Armazena o valor da variável tecladoAtivo
	//Fontes
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
					<LogoSvgComponent style={styles.logo} />
					<Text style={styles.coletacoText}>
						COLETAÇO
					</Text>
				</View>

				{/* Formulário de Login */}
				<View style={styles.viewFormularioInfos}>
					{/* Input Email */}
					<TextInput
						style={styles.inputEmail}
						placeholder="E-mail"
						onChangeText={email => onChangeEmail(email)}
						value={email}
					/>
					{/* Input Senha */}
					<TextInput
						style={styles.inputSenha}
						placeholder="Senha"
						onChangeText={senha => onChangeSenha(senha)}
						secureTextEntry={true}
						value={senha}
					/>

					{/* Botão de Login */}
					<TouchableOpacity style={styles.botaoLogin}>
						<Text style={styles.botaoLoginText}>Login</Text>
					</TouchableOpacity>
				</View>

				{/* Link para tela de cadastro */}
				{
					tecladoAtivo ? null : 
					<View style={styles.viewCadastre} >
						<Text style={styles.textCadastre}>
							Você é novo aqui? <Text style={styles.linkCadastro} onPress={() => { navigation.navigate("Cadastro") }}>Cadastre-se</Text>
						</Text>
					</View>
				}
			</View>
		);
	}
}

export default Login;