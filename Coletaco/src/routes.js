import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ListaColetas from './pages/ListaColetas';
import AdicionaColetas from './pages/AdicionaColetas';
import DetalheAdicionaColeta from './pages/DetalheAdicionaColeta';


const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator 
      screenOptions={{headerShown:false}}
      >
      <Stack.Screen name="ListaColetas" component={ListaColetas}/>
      <Stack.Screen name="AdicionaColetas" component={AdicionaColetas}/>
      <Stack.Screen name="DetalheAdicionaColeta" component={DetalheAdicionaColeta}/>
    </Stack.Navigator>
  );
}
