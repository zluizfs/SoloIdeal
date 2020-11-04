import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import Home from '../pages/Home';
import UserAccont from '../pages/UserAccont';
import Settings from '../pages/Settings';

const AuthTab = createBottomTabNavigator();

const GestureConfig = {
  gestureEnabled: true,
  headerTransparent: true,
}

const LoginStyles = {
  headerStyle: {
      backgroundColor: '#FFF',
      borderBottomColor: '#FFF',
      elevation: 0,
  },
};

const AppRoutes = () => (
  <AuthTab.Navigator
  shifiing={true}
  tabBarOptions={{
    activeTintColor: '#5AA861',
    showLabel: false,
    swipeEnabled: true,
  }}
  >
    <AuthTab.Screen 
      name="Home" 
      component={Home} 
      options={{ 
        tabBarIcon: ({color}) => (
          <Icon name="home" color={color} size={24} />
        ),
      }}
    />
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