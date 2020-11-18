import React from 'react';
import { View, Alert } from 'react-native';
import { List } from 'react-native-paper';

import StatusBarColor from '../../components/StatusBar';
import styles from './styles';

import { useAuth } from '../../contexts/auth'

const Settings: React.FC = () => {
    const { signOut } = useAuth();
    const SignOutAlert = () =>
    Alert.alert(
      "Aviso",
      "Você será desconectado. Deseja continuar?",
      [
        {
          text: "Voltar",
          style: "cancel"
        },
        { text: "Ok", onPress: () => handleSignOut()}
      ],
      { cancelable: false }
    );

    function handleSignOut(){
      signOut();
    }

    return (
      <View style={styles.container}>
        <StatusBarColor/>
        <List.Item
          title="Sair"
          description="Fazer logout da conta"
          left={props => <List.Icon {...props} icon="logout" color="#cf3030"/>}
          onPress={SignOutAlert}
        />
      </View>
    );
  }

export default Settings;