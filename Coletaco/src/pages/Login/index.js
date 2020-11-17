import React, {useState} from 'react';
import { Text, TouchableOpacity, View} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { styles } from './styles';

const Login = ({navigation}) => {
  var [email, onChangeEmail] = useState('');
  var [senha, onChangeSenha] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.coletacoText}>
        COLETAÇO
      </Text>

      <TextInput
            style={styles.inputEmail}
            placeholder="E-mail"
            onChangeText={email => onChangeEmail(email)}
            value={email} />

      <TextInput
            style={styles.inputSenha}
            placeholder="Senha"
            onChangeText={senha => onChangeSenha(senha)}
            secureTextEntry={true}
            value={senha} />

      <TouchableOpacity style={styles.botao} onPress={ () => {navigation.navigate("Cadastro")}}>

      </TouchableOpacity>
    </View>
  );
}

export default Login;