import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import PerfilColetador from './pages/PerfilColetador';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="PerfilColetador" component={PerfilColetador} />
    </Stack.Navigator>
  );
}
