import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5AA861', 
    flex: 1
  },

  header: {
    flex: 1,
    alignItems: 'center',
  },

  body: {
    backgroundColor: '#FFF',
    flex: 5,
    padding: 20,
    paddingTop: 15,
    paddingBottom: 15
    
  },

  footer: {
    backgroundColor: '#FFF', 
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  headerText: {
    fontSize: 40,
    color: '#FFF',
  },

  infoTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: '#5AA861',
    alignSelf: 'center',
    padding: 7,
  },

  infoSubTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: '#5AA861',
    alignSelf: 'center',
  },

  scrollView: {
    flex: 1,
    backgroundColor: '#FFFF',
  },

});

export default styles;