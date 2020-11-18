import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5AA861', 
    flex: 1,
    
  },

  scrollView: {
    flex: 1,
    backgroundColor: '#FAF8FA',
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