import React from 'react';
import { KeyboardAvoidingView, View, Text,  Image, TextInput } from 'react-native';
import { useAuth } from '../../contexts/auth';

import StatusBarColor from '../../components/StatusBar';
import Button from '../../components/Button';
import styles from './styles';

const SignIn = ({ navigation }) => {
    const { signed, signIn } = useAuth();

    console.log(signed)

    function handleSignIn(){
      signIn();
    }

    return (
      <KeyboardAvoidingView style={styles.container}>
        <StatusBarColor/>
        <View style={styles.header}>
          <Image
            source={require('../../assets/img/logoWhite.png')}
            style={styles.logo}
          />
          </View>
          <View style={styles.footer}>
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
          <View style={styles.buttonBox}>
            <Button onPress={handleSignIn} title="Entrar" color="#FFF"/>
            <Text style={styles.registerText}>Não possui um usuário?</Text>
            <Button onPress={() => navigation.navigate('SignUp')} title="Cadastre-se" backgroundColor="#FFF" color="#000"/>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }

export default SignIn;