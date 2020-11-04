import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5AA861', 
    flex: 1,
  },

  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  footer: {
    backgroundColor: '#FFF',
    flex: 1,
    padding: 20,
  },

  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderColor: '#FFF',
    borderWidth: 3,
    overflow: 'hidden',
  },

  imageSize: {
    width: "100%",
    height: "100%"
  },

  headerText: {
    fontSize: 40,
    marginVertical: 2,
    color: '#FFF'
  },

  jobTitle: {
    fontSize: 20,
    marginVertical: 2,
    color: '#FFF',
  },

  infoTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: '#5AA861',

  },

  infoSubTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },

  content: {
    marginTop: 10,
    marginBottom: 5,
  },

  infoContent: {
    fontSize: 16,
    color: "#6C6867"
  },

  buttonContainer: {
    alignSelf: 'center',
    marginVertical: 30,
  }

});

export default styles;