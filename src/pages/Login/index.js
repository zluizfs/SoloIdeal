import React from 'react';
import { KeyboardAvoidingView, View, Text, StyleSheet, Image, TextInput } from 'react-native';

import StatusBarColor from '../../components/StatusBar';
import Button from '../../components/Button';
import indexStyles from '../Styles/indexStyles';

function Login({ navigation }) {
    return (
      <KeyboardAvoidingView style={indexStyles.container}>
        <StatusBarColor/>
        <View style={indexStyles.header}>
          <Image
            source={require('../../assets/logoWhite.png')}
            style={indexStyles.logo}
          />
          </View>
          <View style={indexStyles.footer}>
            <TextInput
              style={indexStyles.input}
              placeholder="Usuário"
            />
            <TextInput
              style={indexStyles.input}
              placeholder="Senha"
            />
          <View style={styles.buttonBox}>
            <Button title="Entrar" color="#FFF"/>
            <Text style={styles.registerText}>Não possui um usuário?</Text>
            <Button onPress={() => navigation.navigate('Register')} title="Cadastre-se" backgroundColor="#FFF" color="#000"/>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }

const styles = StyleSheet.create({
  buttonBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },

  registerText: {
    marginTop: 20,
    marginBottom: 5,
  }
});

export default Login;