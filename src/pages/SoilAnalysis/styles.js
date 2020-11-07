import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5AA861', 
    flex: 1,
  },

  scrollView: {
    flex: 1,
    backgroundColor: '#FFF', 
  },

  footer: {
    backgroundColor: '#FFF',
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },

  input: {
    width: 350,
    height: 55,
    marginBottom: 15,
    
    backgroundColor: '#FFF',

    fontSize: 15
  },

	buttonBox: {
      marginTop: 20,
      marginBottom: 10,
	}

});

export default styles;