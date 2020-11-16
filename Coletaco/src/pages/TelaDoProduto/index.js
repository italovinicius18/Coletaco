import React, {Component} from 'react';
import { Text, View} from 'react-native';
import { styles } from './styles';

const coletas = [
  {key: '0',nome: 'Latinha', categoria: 'Metal', local: 'Meu local'},
  {key: '1',nome: 'Papelão', categoria: 'Papel', local: 'Meu local'},
  {key: '2',nome: 'Garrafa PET', categoria: 'Plástico', local: 'Meu local'},
  {key: '3',nome: 'Garrafa de Vidro', categoria: 'Vidro', local: 'Meu local'},
];

const TelaDoProduto = () => {
  return (
    <View style={styles.container}>
      <View style={styles.areaImagem}>
      </View>
      <View style={styles.areaDescricao}>
      </View>
      <View style={styles.areaBotao}>
      </View>
    </View>
  );
}

export default TelaDoProduto;