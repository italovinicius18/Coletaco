import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ListaColetas from './pages/ListaColetas';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator 
      screenOptions={{headerShown:false}}
      >
      <Stack.Screen name="ListaColetas" component={ListaColetas}/>
    </Stack.Navigator>
  );
}
