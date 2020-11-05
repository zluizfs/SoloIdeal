import React from 'react';
import { View, Text, Button} from 'react-native';

import StatusBarColor from '../../components/StatusBar';
import styles from './styles';

import { useAuth } from '../../contexts/auth'

const Settings = () => {
    const {signOut} = useAuth();
    
    function handleSignOut(){
      signOut();
    }

    return (
      <View styles={styles.container}>
        <StatusBarColor/>
          <Button onPress={handleSignOut} title="Sair"/>
      </View>
    );
  }

export default Settings;