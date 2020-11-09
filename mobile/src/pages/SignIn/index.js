import React from 'react';
import { KeyboardAvoidingView, SafeAreaView, ScrollView, View, Text,  Image} from 'react-native';
import { TextInput } from 'react-native-paper';

import { useAuth } from '../../contexts/auth';

import StatusBarColor from '../../components/StatusBar';
import Button from '../../components/Button';
import styles from './styles';

const colors  = {
  colors: { primary: '#5AA861', underlineColor:'transparent' }
}

const SignIn = ({ navigation }) => {

    const { signIn } = useAuth();
 
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
            <View style={styles.inputBox}>
              <TextInput
                label="Usuário"
                mode="flat"
                style={styles.input}
                theme={colors}
              />
              <TextInput
                label="Senha"
                mode="flat"
                style={styles.input}
                theme={colors}
                secureTextEntry={true}
                autoCapitalize="none"
              />
            </View>
          <View style={styles.buttonBox}>
            <Button onPress={handleSignIn} title="Entrar" color="#FFF"/>
            <Text style={styles.registerText}>Não possui um usuário?</Text>
            <Button onPress={() => navigation.navigate('SignUp')} title="Cadastre-se" backgroundColor="#F7F7F7" color="#000"/>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }

export default SignIn;