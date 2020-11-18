import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

interface ButtonProps {
  onPress?: () => void,
  title: string,
  backgroundColor: any,
  color: any,
}


const Button: React.FunctionComponent<ButtonProps> = (props) => {
  const { onPress, title, backgroundColor, color } = props

  return(
    <TouchableOpacity
    activeOpacity={0.5}
    onPress= {onPress}
    style={[ styles.button, backgroundColor && { backgroundColor }]}
    >
      <Text style={[styles.buttonText, color && { color }]}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button: {
      width: 370,
      height: 45,

      backgroundColor: '#5AA861',

      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.20,
      shadowRadius: 1.41,
      
      elevation: 1,

      borderRadius: 10,
      
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    buttonText: {
      color: '#FFF',
      fontWeight: '600',
      fontSize: 15,
    },
});

export default Button;
