/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// imports
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import InicioScreen from './src/inicio';
import CondominioScreen from './src/condominio';
import CondominioDetalleScreen from './src/condominio_detalle';

// Vars
const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const CondominioStackNavigator = (props) => {
  // const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Condominios"
        component={CondominioScreen}
      />
      <Stack.Screen
        name="Condominio Detalle"
        component={CondominioDetalleScreen}
      />
    </Stack.Navigator>
  );
}

// Functions

// Define App
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Inicio"
        activeColor="cyan"
        inactiveColor="white"
        barStyle={{ backgroundColor: 'black' }}
        backgroundColor='black'
      >
        <Tab.Screen
          name="Inicio"
          component={InicioScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
              name="home"
              color="gray"
              size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Condominio"
          component={CondominioStackNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
              name="format-list-bulleted"
              color="gray"
              size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Notificaciones"
          component={InicioScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
              name="message-bulleted"
              color="gray"
              size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Estadisticas"
          component={InicioScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
              name="chart-bar"
              color="gray"
              size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Alertas"
          component={InicioScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
              name="alert"
              color="gray"
              size={26}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
