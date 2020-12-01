import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { styles } from "./styles";

import { cadastro } from "../../api/api";

const Home = () => {
  const [nome, setNome] = useState();

  return (
    <View style={styles.container}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => setNome(text)}
        value={nome}
      />
      <Button
        title="Submit"
        color="#841584"
        onPress={()=>cadastro({nome: nome})}
      />
    </View>
  );
};

export default Home;
