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

  card: {
    backgroundColor: '#FFF',
    padding: 20,
    margin: 15,
    borderRadius: 20,
  },

  title: {
    alignSelf: 'center',
    justifyContent: 'center'
  },

  input: {
    width: 320,
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