import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Feather';

import Locations from '../pages/Locations';
import LocationsDetails from '../pages/LocationsDetails';
import CreateLocations from '../pages/CreateLocations';
import AgriculturePlotsDetails from '../pages/AgriculturePlotsDetails'
import CreateAgriculturePlots from '../pages/CreateAgriculturePlots';
import CreateSoilAnalysis from '../pages/CreateSoilAnalysis';
import SoilAnalysisDetails from '../pages/SoilAnalysisDetails';
import UserAccont from '../pages/UserAccont';
import Settings from '../pages/Settings';


const AuthTab = createBottomTabNavigator();
const AuthStack = createStackNavigator();

const GestureConfig = {
  gestureEnabled: true,
}

const TabConfig = {
  activeTintColor: '#5AA861',
  showLabel: false,
  swipeEnabled: true,
}

const AppRoutes = () => (
  <AuthTab.Navigator shifiing={true} tabBarOptions={TabConfig}> 
    <AuthTab.Screen name="Locations"
      options={{ 
        tabBarIcon: ({color}) => (
          <Icon name="home" color={color} size={24} />
        ),
      }}
    >
    {() => (
      <AuthStack.Navigator screenOptions={GestureConfig}>
        <AuthStack.Screen 
          name="Locations" 
          component={Locations}
          options={{ 
            title: '',
            headerShown: false
          }}
        />
        <AuthStack.Screen 
          name="CreateLocations" 
          component={CreateLocations}
          options={{ 
            title: 'Cadastro de propriedade',
            headerTintColor: '#FFF',
            headerStyle: {
              backgroundColor: '#5AA861',
              borderBottomColor: '#FFF',
            },
          }}
        />
        <AuthStack.Screen 
          name="LocationsDetails" 
          component={LocationsDetails}
          options={{ 
            title: '',
            headerTintColor: '#FFF',
            headerStyle: {
              backgroundColor: '#5AA861',
              borderBottomColor: '#FFF',
              elevation: 0,
              shadowOpacity: 0,
            },
          }}
        />
         <AuthStack.Screen 
          name="AgriculturePlotsDetails" 
          component={AgriculturePlotsDetails}
          options={{ 
            title: '',
            headerTintColor: '#FFF',
            headerStyle: {
              backgroundColor: '#5AA861',
              borderBottomColor: '#FFF',
              elevation: 0,
              shadowOpacity: 0,
            },
          }}
        />
        <AuthStack.Screen 
          name="CreateAgriculturePlots" 
          component={CreateAgriculturePlots}
          options={{ 
            title: 'Cadastro de talhão',
            headerTintColor: '#FFF',
            headerStyle: {
              backgroundColor: '#5AA861',
              borderBottomColor: '#FFF',
            },
          }}
        />
        <AuthStack.Screen 
          name="SoilAnalysisDetails" 
          component={SoilAnalysisDetails} 
          options={{ 
            title: '',
            headerTintColor: '#FFF',
            headerStyle: {
              backgroundColor: '#5AA861',
              borderBottomColor: '#FFF',
              elevation: 0,
              shadowOpacity: 0,
            },
        }}
        />
        <AuthStack.Screen 
          name="CreateSoilAnalysis" 
          component={CreateSoilAnalysis}
          options={{ 
            title: 'Nova análise',
            headerTintColor: '#FFF',
            headerStyle: {
              backgroundColor: '#5AA861',
              borderBottomColor: '#FFF',
            },
          }}
        />
      </AuthStack.Navigator>
    )}
    </AuthTab.Screen>
    <AuthTab.Screen 
      name="Profile" 
      component={UserAccont} 
      options={{ 
        tabBarIcon: ({color}) => (
          <Icon name="user" color={color} size={24} />
        ),
      }}
    />
    <AuthTab.Screen 
      name="Settings" 
      component={Settings} 
      options={{ 
        tabBarIcon: ({color}) => (
          <Icon name="settings" color={color} size={24} />
        ),
      }}
    />
  </AuthTab.Navigator>
)

export default AppRoutes;