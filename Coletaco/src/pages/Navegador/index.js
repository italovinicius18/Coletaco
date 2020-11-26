import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from '../Home/index';
import Login from '../Login/index';
import Cadastro from '../Cadastro/index';

const Tab = createMaterialBottomTabNavigator();

const Navegador = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#00b359"
      inactiveColor="#808985"
      shifting={true}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Mapa',
          tabBarColor: '#fff',
          tabBarIcon: ({ color }) => (
            <Icon name="md-map" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ListaColetas"
        component={Login}
        options={{
          tabBarLabel: 'Coletas',
          tabBarColor: '#ECECEC',
          tabBarIcon: ({ color }) => (
            <Icon name="md-list" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Cadastro}
        options={{
          tabBarLabel: 'Perfil',
          tabBarColor: '#EFEFEF',
          tabBarIcon: ({ color }) => (
            <Icon name="md-person" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default Navegador;