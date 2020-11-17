import React from 'react';
import { Text, View} from 'react-native';
import { styles } from './styles';
import {
  useFonts,
  Montserrat_800ExtraBold,
  Montserrat_400Regular,
  Montserrat_500Medium,
} from "@expo-google-fonts/montserrat";
import { AppLoading } from "expo";

const Cadastro = ({navigation}) => {
  let [fontsLoaded] = useFonts({
    Montserrat_800ExtraBold,
    Montserrat_500Medium,
    Montserrat_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  else {
    return (
      <View style={styles.container}>
        <Text> Cadastro </Text>
      </View>
    );
  }
}

export default Cadastro;