import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import PerfilColetador from './pages/PerfilColetador';
import PerfilColaborador from './pages/PerfilColaborador';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="PerfilColaborador" component={PerfilColaborador} />
      <Stack.Screen name="PerfilColetador" component={PerfilColetador} />
    </Stack.Navigator>
  );
}
