import React from 'react';
import { View, KeyboardAvoidingView, Text, Button } from 'react-native';

import StatusBarColor from '../../components/StatusBar';

import { useAuth } from '../../contexts/auth'

const Home = () => {
    const {user, signOut} = useAuth();
    
    function handleSignOut(){
      signOut();
    }

    return (
    <KeyboardAvoidingView>
      <StatusBarColor/>
      <View><Text>{user?.name}</Text></View>
      <Button title="Sair" onPress={handleSignOut}/>
    </KeyboardAvoidingView>
    );
  }

export default Home;