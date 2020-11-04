import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import * as Font from 'expo-font';

import { AuthProvider }  from './contexts/auth';

import Routes from './routes'

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
 
