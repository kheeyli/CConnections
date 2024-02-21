// styles.js

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 5,
    justifyContent: 'space-between',
  },

  topContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center', 
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 13,
    color: 'black',
  },

  // AllInputs
  input: {
    width: '100%', 
    height: 45, 
    borderRadius: 10, 
    borderWidth: 1, 
    borderColor: 'gray', 
    marginBottom: 1, 
    paddingHorizontal: 16, 
    fontSize: 16,
    color: 'black', 
  },

  connectionMethodInput: {
    backgroundColor: '#ffffff', 
    color: 'black', 
  },

  numberInput: {
    backgroundColor: '#ffffff', 
  },

  // Button
  button: {
    backgroundColor: '#C7CACF', 
    borderRadius: 10, 
    paddingHorizontal: 16,
    paddingVertical: 10, 
    width: 120, 
    alignItems: 'center', 
    marginTop:18
  },


  // DataSaved
  savedDataContainer: {
    marginTop: 20,
  },

  savedData: {
    fontSize: 20,
    textAlign: 'left', 
    color:'black',
  },
});
