import { StyleSheet } from 'react-native';

import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#5AA861', 
    flex: 1,
  },

  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  footer: {
    backgroundColor: '#FFF',
    flex: 1,
    
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
  },

  logo: {
    width: responsiveWidth(50), 
    height: responsiveHeight(50),
    resizeMode: ('contain'),
  },

  input: {
    width: 350,
    height: 50,
    padding: 10,
    marginBottom: 15,
    
    backgroundColor: '#FFF',
    borderColor: '#000',

    borderBottomWidth: 0.5,
  },

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

export default styles;