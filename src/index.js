import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
import Login from './pages/Login';
import Register from './pages/Register';
 
const Stack = createStackNavigator();
 
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
            gestureEnabled: true,
            gestureDirection: "horizontal",
        }}
        options={{
            title: '',
            headerStyle: {
                backgroundColor: '#5AA861',
                borderBottomColor: '#5AA861',
                elevation: 0,
            },
            headerTintColor: '#fff',
        }}
      >
        <Stack.Screen name="Login" component={Login} 
            options={{ 
                title: '',
                headerStyle: {
                    backgroundColor: '#5AA861',
                    borderBottomColor: '#5AA861',
                    elevation: 0,
                },
                headerTintColor: '#fff',
                
            }}
            
        />
        <Stack.Screen name="Register" component={Register}
            options={{ 
                title: '',
                headerStyle: {
                    backgroundColor: '#5AA861',
                    borderBottomColor: '#5AA861',
                    elevation: 0,
                },
                headerTintColor: '#fff',
                
            }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
 
export default App;