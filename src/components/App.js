import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, StatusBar } from 'react-native';

const Button = ({ onPress, title, backgroundColor, color}) => (
  <TouchableOpacity
    activeOpacity={0.5}
    onPress={onPress} 
    style={[ styles.button, backgroundColor && { backgroundColor }]}
  >
    <Text style={styles.buttonText, color && { color }}>{title}</Text>
  </TouchableOpacity>

);

export default class MyClass extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#5AA861"/>
        <View style={styles.header}>
            <Image
              source={require('../assets/logoWhite.png')}
              style={styles.logo}
            />
          </View>
          <View style={styles.loginBox}>
            <TextInput
              style={styles.input}
              placeholder="Usuário"
            />
            <TextInput
              style={styles.input}
              placeholder="Senha"
            />
          <View style={styles.buttonBox}>
            <Button title="Entrar" color="#FFF"/>
            <Text style={styles.registerText}>Não possui um usuário?</Text>
            <Button title="Cadastre-se" backgroundColor="#FFF" color="#000"/>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5AA861',
    justifyContent: 'center',
  },

  header: {
    alignItems: 'center',
  },

  loginBox: {
    backgroundColor: '#FFF',

    paddingTop: 20,
    height: 330,

    borderRadius: 15,
    alignItems: 'center',
  },

  logo: {
    width: 200,
    height: 200,
    resizeMode: ('contain'),    
  },

  input: {
    width: 350,
    height: 50,
    padding: 10,

    backgroundColor: '#FFF',

    borderBottomWidth: 0.5,
    borderColor: '#000',
  },

  buttonBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },

  button: {
    width: 350,
    height: 50,
  
    backgroundColor: '#5AA861',

    borderWidth: 0.5,
    borderRadius: 50,

    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#FFF',
    fontSize: 18,
  },
  
  registerText: {
    marginTop: 20,
    marginBottom: 5,
  }
});
