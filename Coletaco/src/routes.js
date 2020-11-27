import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Navegador from './pages/Navegador';
import PerfilColetador from './pages/PerfilColetador';
import PerfilColaborador from './pages/PerfilColaborador';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator 
      screenOptions={{headerShown:false}}
      >
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Cadastro" component={Cadastro}/>
      <Stack.Screen name="Navegador" component={Navegador}/>
      <Stack.Screen name="PerfilColaborador" component={PerfilColaborador} />
      <Stack.Screen name="PerfilColetador" component={PerfilColetador} />
    </Stack.Navigator>
  );
}
