import React from 'react';
import { View, Text, Button } from 'react-native';

import StatusBarColor from '../../components/StatusBar';

import { useAuth } from '../../contexts/auth'

const Settings = () => {
    const {signOut} = useAuth();
    
    function handleSignOut(){
      signOut();
    }

    return (
      <View>
        <StatusBarColor/>
        <Text>Config</Text>
        <Button title="Sair" onPress={handleSignOut}/>
      </View>
    );
  }

export default Settings;