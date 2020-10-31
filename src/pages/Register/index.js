import React, { Component } from 'react';
import { KeyboardAvoidingView, View, Text, StyleSheet, Image, TextInput} from 'react-native';

import StatusBarColor from '../../components/StatusBar';
import Button from '../../components/Button';
import indexStyles from '../styles/indexStyles';

function Register({ navigation }) {
    return (
    <KeyboardAvoidingView style={indexStyles.container} enableOnAndroid extraScrollHeight={200}>
      <StatusBarColor/>
      <View style={styles.footer}>
        <Text style={styles.infoText}>Digite os dados abaixo para efetuar o cadastro.</Text>
        <TextInput
          style={indexStyles.input}
          placeholder="Usuário"
        />
        <TextInput
          style={indexStyles.input}
          placeholder="Senha"
        />
        <TextInput
          style={indexStyles.input}
          placeholder="Confirme a Senha"
        />
        <TextInput
          style={indexStyles.input}
          placeholder="E-mail"
        />
        <View style={styles.buttonBox}>
            <Button title="Cadastre-se" color= "#FFF"/>
        </View>
      </View>
    </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({

  footer: {
    backgroundColor: '#FFF',
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    alignItems: 'center',
  },

	infoText: {
    marginTop: "12%",
		marginBottom: 10,
	},
	buttonBox: {
			marginTop: 30,
	}
});

export default Register;

