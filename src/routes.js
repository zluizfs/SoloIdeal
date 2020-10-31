import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
 
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
            gestureEnabled: true,
            gestureDirection: "horizontal",
        }}
        >
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ 
              title: '',
              headerTransparent: true,
          }}
        />
        <Stack.Screen 
          name="Register" 
          component={Register}
          options={{ 
              title: '',
              headerTransparent: true,
              headerStyle: {
                  backgroundColor: '#FFF',
                  borderBottomColor: '#FFF',
                  elevation: 0,
              },
              headerTintColor: '#5AA861',
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
 
