import React from 'react';
import { View } from 'react-native';
import { List } from 'react-native-paper';

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
        <List.Item
          title="Sair"
          description="Fazer logout da conta"
          left={props => <List.Icon {...props} icon="logout" color="#cf3030"/>}
          onPress={handleSignOut}
        />
      </View>
    );
  }

export default Settings;