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
    margin: 20,
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

  switch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingHorizontal: 15,
    width: '100%',
  },

  switchSub: {
    fontSize: 18,
    paddingLeft: 7,
  },

	buttonBox: {
      marginTop: 20,
      marginBottom: 10,
      alignItems: 'center',
  }
  
});

export default styles;