import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Feather';

import Home from '../pages/Home';
import UserAccont from '../pages/UserAccont';
import Settings from '../pages/Settings';
import SoilAnalysis from '../pages/SoilAnalysis';

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
    <AuthTab.Screen name="Home"
      options={{ 
        tabBarIcon: ({color}) => (
          <Icon name="home" color={color} size={24} />
        ),
      }}
    >
    {() => (
      <AuthStack.Navigator screenOptions={GestureConfig}>
        <AuthStack.Screen 
          name="Home" 
          component={Home}
          options={{ 
            title: '',
            headerShown: false
          }}
        />
        <AuthStack.Screen 
          name="SoilAnalysis" 
          component={SoilAnalysis} 
          options={{ 
            title: 'Análise de solo',
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