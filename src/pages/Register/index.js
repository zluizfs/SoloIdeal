import React, { Component } from 'react';
import { KeyboardAvoidingView, View, Text, StyleSheet, Image, TextInput} from 'react-native';

import StatusBarColor from '../../components/StatusBar';
import Button from '../../components/Button';
import indexStyles from '../Styles/indexStyles';

function Register({ navigation }) {
    return (
    <KeyboardAvoidingView style={indexStyles.container} enableOnAndroid extraScrollHeight={200}>
      <StatusBarColor/>
      <View style={indexStyles.header}>
        <Image
        source={require('../../assets/logoWhite.png')}
        style={indexStyles.logo}
        />
      </View>
      <View style={indexStyles.footer}>
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
	infoText: {
		marginBottom: 10,
	},
	buttonBox: {
			marginTop: 30,
	}
});

export default Register;

