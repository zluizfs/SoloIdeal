import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';


const Button = ({ onPress, title, backgroundColor, color }) => (
  <TouchableOpacity
    activeOpacity={0.5}
    onPress= {onPress}
    style={[ styles.button, backgroundColor && { backgroundColor }]}
  >
    <Text style={styles.buttonText, color && { color }}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
      width: 350,
      height: 50,

      backgroundColor: '#5AA861',

      borderWidth: 0.2,
      borderRadius: 50,
      
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    buttonText: {
        color: '#FFF',
        fontSize: 18,
    },
});

export default Button;
