import React, { useState, useEffect } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Keyboard,
  TextInput,
} from "react-native";
import { RadioButton } from "react-native-paper";
import { styles } from "./styles";
import {
  useFonts,
  Montserrat_800ExtraBold,
  Montserrat_400Regular,
  Montserrat_500Medium,
} from "@expo-google-fonts/montserrat";
import { AppLoading } from "expo";

const Cadastro = ({ navigation }) => {
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
  var [nomeCompleto, onChangeNomeCompleto] = useState(""); //Armazena o valor do input Nome Completo
  var [email, onChangeEmail] = useState(""); //Armazena o valor do input Email
  var [senha, onChangeSenha] = useState(""); //Armazena o valor do input Senha
  var [tecladoAtivo, onChangeKeyboard] = useState(false); //Armazena o valor da variável tecladoAtivo
  var [tipoPerfil, setValue] = useState("catador");
  //Fontes
  let [fontsLoaded] = useFonts({
    Montserrat_800ExtraBold,
    Montserrat_500Medium,
    Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    //Caso as fontes não estejam carregadas, a view ainda não será mostrada
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        {/* Cabeçalho da página (título + subtítulo) */}
        <View style={styles.viewTitulo}>
          <Text style={styles.tituloCadastro}>Cadastro</Text>
          <Text style={styles.tituloTexto}>Junte-se à nossa comunidade!</Text>
        </View>
        {/* Formulário de Cadastro */}
        <View style={styles.viewFormulario}>
          {/* Input Nome Completo */}
          <TextInput
            style={styles.inputNomeCompleto}
            placeholder="Nome Completo"
            onChangeText={(nomeCompleto) => onChangeNomeCompleto(nomeCompleto)}
            value={nomeCompleto}
          />
          {/* Input Email */}
          <TextInput
            style={styles.inputEmail}
            placeholder="E-mail"
            onChangeText={(email) => onChangeEmail(email)}
            value={email}
          />
          {/* Input Senha */}
          <TextInput
            style={styles.inputSenha}
            placeholder="Senha"
            onChangeText={(senha) => onChangeSenha(senha)}
            secureTextEntry={true}
            value={senha}
          />

          <Text style={styles.textoEscolhaPerfil}>
            Escolha o seu perfil de usuário
          </Text>

          <RadioButton.Group
            onValueChange={(newValue) => setValue(newValue)}
            value={tipoPerfil}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton value="catador" />
                <Text>Catador</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <RadioButton value="colaborador" />
                <Text>Colaborador</Text>
              </View>
            </View>
          </RadioButton.Group>

          {/* Botão de Cadastro */}
          <TouchableOpacity
            style={styles.botaoCadastro}
            onPress={() => {
              console.log(
                nomeCompleto + "; " + email + "; " + senha + "; " + tipoPerfil
              ),
                navigation.navigate("Navegador", { usuario: "coletador" });
            }}
          >
            <Text style={styles.botaoCadastroText}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>

        {/* Link para tela de cadastro */}
        {tecladoAtivo ? null : (
          <View style={styles.viewLogin}>
            <Text style={styles.textLogin}>
              Já possui uma conta?{" "}
              <Text
                style={styles.linkLogin}
                onPress={() => {
                  navigation.navigate("Login");
                }}
              >
                Entre com sua conta
              </Text>
            </Text>
          </View>
        )}
      </View>
    );
  }
};

export default Cadastro;
