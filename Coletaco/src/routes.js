import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator 
      screenOptions={{headerShown:false}}
      >
      <Stack.Screen name="Home" component={Home}/>
    </Stack.Navigator>
  );
}
