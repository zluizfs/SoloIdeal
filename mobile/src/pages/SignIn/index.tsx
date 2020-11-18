import React, { useState } from 'react';
import { KeyboardAvoidingView, View, Text, Image} from 'react-native';
import { TextInput } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";

import { useAuth } from '../../contexts/auth';

import StatusBarColor from '../../components/StatusBar';
import Button from '../../components/Button';
import styles from './styles';

const colors  = {
  colors: { primary: '#5AA861', underlineColor:'transparent' }
}

const SignIn: React.FC = () => {
    const navigation = useNavigation();
    const[email, setEmail] = useState('');
    const[senha, setSenha] = useState('');
    const [loading, setLoading] = useState(false);
    
    const { signIn } = useAuth();

    function handleSignIn(){
      signIn(email, senha);
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
                label="E-mail"
                mode="flat"
                style={styles.input}
                theme={colors}
                value={email}
                onChangeText={setEmail}
              />
              <TextInput
                label="Senha"
                mode="flat"
                style={styles.input}
                theme={colors}
                value={senha}
                onChangeText={setSenha}
                secureTextEntry={true}
                autoCapitalize="none"
              />
            </View>
          <View style={styles.buttonBox}>
            <Button onPress={handleSignIn} title="Entrar" backgroundColor="#5AA861" color="#FFF"/>
            <Text style={styles.registerText}>Novo por aqui?</Text>
            <Button onPress={() => navigation.navigate('SignUp')} title="Cadastre-se" backgroundColor="#F7F7F7" color="#000"/>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }

export default SignIn;