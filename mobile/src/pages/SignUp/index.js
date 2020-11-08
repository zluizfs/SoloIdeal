import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';

import StatusBarColor from '../../components/StatusBar';
import Button from '../../components/Button';

import styles from './styles';

const SignUp = () => {
    return (
    <SafeAreaView style={styles.container}>
      <StatusBarColor/>
      <View style={styles.footer}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.infoText}>Digite os dados abaixo para efetuar o cadastro.</Text>
            <TextInput
              label="Usuário"
              mode="flat"
              style={styles.input}
              theme={{ colors: { primary: '#5AA861', underlineColor:'transparent'}}}
            />
            <TextInput
              label="Senha"
              mode="flat"
              style={styles.input}
              theme={{ colors: { primary: '#5AA861', underlineColor:'transparent'}}}
              secureTextEntry={true}
              autoCapitalize="none"
              
            />
            <TextInput
              label="Confirme a senha"
              mode="flat"
              style={styles.input}
              theme={{ colors: { primary: '#5AA861', underlineColor:'transparent'}}}
              secureTextEntry={true}
              autoCapitalize="none"
            />
            <TextInput
              label="E-mail"
              mode="flat"
              style={styles.input}
              theme={{ colors: { primary: '#5AA861', underlineColor:'transparent'}}}
            />
            <View style={styles.buttonBox}>
                <Button title="Cadastre-se" color= "#FFF"/>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
}


export default SignUp;

