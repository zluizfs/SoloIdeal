import React from 'react';
import { KeyboardAvoidingView, View, Text, TextInput} from 'react-native';

import StatusBarColor from '../../components/StatusBar';
import Button from '../../components/Button';

import styles from './styles';

function SignUp() {
    return (
    <KeyboardAvoidingView style={styles.container} enableOnAndroid extraScrollHeight={200}>
      <StatusBarColor/>
      <View style={styles.footer}>
        <Text style={styles.infoText}>Digite os dados abaixo para efetuar o cadastro.</Text>
        <TextInput
          placeholder="Usuário"
          style={styles.input}
        />
        <TextInput
          placeholder="Senha"
          secureTextEntry={true}
          autoCapitalize="none"
          style={styles.input}
        />
        <TextInput
          placeholder="Confirme a Senha"
          secureTextEntry={true}
          autoCapitalize="none"
          style={styles.input}
        />
        <TextInput
          placeholder="E-mail"
          style={styles.input}
        />
        <View style={styles.buttonBox}>
            <Button title="Cadastre-se" color= "#FFF"/>
        </View>
      </View>
    </KeyboardAvoidingView>
    );
}


export default SignUp;

