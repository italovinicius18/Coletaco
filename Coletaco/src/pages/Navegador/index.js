import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import Home from "../Home/index";
import PerfilColetador from "../PerfilColetador";
import PerfilColaborador from "../PerfilColaborador";
import ListaColetas from "../ListaColetas";

const Tab = createMaterialBottomTabNavigator();

const Navegador = ({ route, navigation }) => {
  const usuario = route.params.usuario;
  const dadosUsuario = route.params.dadosUsuario

  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#00b359"
      inactiveColor="#808985"
      shifting={true}
    >
      <Tab.Screen
        name="Home"
        children={() => <Home usuario={usuario} dadosUsuario={dadosUsuario}/>}
        options={{
          tabBarLabel: "Mapa",
          tabBarColor: "#fff",
          tabBarIcon: ({ color }) => (
            <Icon name="md-map" color={color} size={26} />
          ),
        }}
      />

      {usuario === "coletador" ? null : (
        <Tab.Screen
          name="ListaColetas"
          children={() => <ListaColetas dadosUsuario={dadosUsuario} />}
          options={{
            tabBarLabel: "Coletas",
            tabBarColor: "#ECECEC",
            tabBarIcon: ({ color }) => (
              <Icon name="md-list" color={color} size={26} />
            ),
          }}
        />
      )}

      {usuario === "coletador" ? (
        <Tab.Screen
          name="PerfilColetador"
          children={() => <PerfilColetador />}
          options={{
            tabBarLabel: "Perfil",
            tabBarColor: "#EFEFEF",
            tabBarIcon: ({ color }) => (
              <Icon name="md-person" color={color} size={26} />
            ),
          }}
        />
      ) : (
        <Tab.Screen
          name="PerfilColaborador"
          children={() => <PerfilColaborador />}
          options={{
            tabBarLabel: "Perfil",
            tabBarColor: "#EFEFEF",
            tabBarIcon: ({ color }) => (
              <Icon name="md-person" color={color} size={26} />
            ),
          }}
        />
      )}
    </Tab.Navigator>
  );
};

export default Navegador;
