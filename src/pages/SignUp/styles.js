import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5AA861', 
    flex: 1,
  },

  footer: {
    backgroundColor: '#FFF',
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    alignItems: 'center',
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

  infoText: {
    marginTop: 30,
		marginBottom: 10,
  },
  
	buttonBox: {
			marginTop: 30,
	}

});

export default styles;