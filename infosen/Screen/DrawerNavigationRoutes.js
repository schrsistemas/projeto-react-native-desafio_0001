/**
 * Projeto infosen
 * ==> navegação entre telas
 */

// Import React
import React from 'react';

// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Import Screens
import HomeScreen from './DrawerScreens/HomeScreen';
import SettingsScreen from './DrawerScreens/SettingScreen';
import CustomSidebarMenu from './Components/CustomSidebarMenu';
import NavigationDrawerHeader from './Components/NavigationDrawerHeader';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const homeScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Menu Principal', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const settingScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="SettingsScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#307ecc', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          title: 'Tela Teste', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const DrawerNavigatorRoutes = (props) => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#cee1f2',
        color: '#cee1f2',
        itemStyle: {marginVertical: 5, color: 'white'},
        labelStyle: {
          color: '#d8d8d8',
        },
      }}
      screenOptions={{headerShown: false}}
      drawerContent={CustomSidebarMenu}>

      <Drawer.Screen
        name="homeScreenStack"
        options={{drawerLabel: 'Menu Principal'}}
        component={homeScreenStack}
      />

      <Drawer.Screen
        name="senadoresScreenStack"
        options={{drawerLabel: 'Senadores'}}
        component={homeScreenStack}
      />

      <Drawer.Screen
        name="agendaScreenStack"
        options={{drawerLabel: 'Agenda'}}
        component={homeScreenStack}
      />

      <Drawer.Screen
        name="plenarioScreenStack"
        options={{drawerLabel: 'Plenário'}}
        component={homeScreenStack}
      />

      <Drawer.Screen
        name="comissoesScreenStack"
        options={{drawerLabel: 'Comissões'}}
        component={homeScreenStack}
      />

      <Drawer.Screen
        name="proposicoesScreenStack"
        options={{drawerLabel: 'Proposições'}}
        component={homeScreenStack}
      />

      <Drawer.Screen
        name="legislacaoScreenStack"
        options={{drawerLabel: 'Legislação'}}
        component={homeScreenStack}
      />

      <Drawer.Screen
        name="settingScreenStack"
        options={{drawerLabel: 'Meu Perfil'}}
        component={settingScreenStack}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorRoutes;
