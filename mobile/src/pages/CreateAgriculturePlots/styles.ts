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
    padding: 30,
    margin: 20,

    alignItems: 'center',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    
    elevation: 3,
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
    marginBottom: 10,
    alignItems: 'center',
  }
  
});

export default styles;