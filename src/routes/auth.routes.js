import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp'

const AuthStack = createStackNavigator();

const GestureConfig = {
  gestureEnabled: true,
  headerTransparent: true,
}

const LoginStyles = {
  headerStyle: {
      backgroundColor: '#000',
      borderBottomColor: '#FFF',
      elevation: 0,
  },
};

const AuthRoutes = () => (
  <AuthStack.Navigator screenOptions={LoginStyles, GestureConfig}>
    <AuthStack.Screen 
      name="SignIn" 
      component={SignIn} 
      options={{ 
          title: '',
      }}
    />
    <AuthStack.Screen 
      name="SignUp" 
      component={SignUp} 
      options={{ 
          title: '',
          headerTintColor: '#5AA861',
      }}
    />
  </AuthStack.Navigator>
)

export default AuthRoutes;