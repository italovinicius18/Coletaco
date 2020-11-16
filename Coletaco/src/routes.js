import React, {Component} from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TelaDoProduto from './pages/TelaDoProduto';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator 
      screenOptions={{headerShown:false}}
      >
      <Stack.Screen name="TelaDoProduto" component={TelaDoProduto}/>
    </Stack.Navigator>
  );
}
