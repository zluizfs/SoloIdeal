import { StyleSheet } from 'react-native';
import { shadow } from 'react-native-paper';

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

  scrollView: {
    flex: 1,
    backgroundColor: '#FFFF',
  },

  card: {
    borderRadius: 0,
    margin: 5,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    
    elevation: 3,

  },

  cardTitle: {
    fontSize: 16,
  }

});

export default styles;