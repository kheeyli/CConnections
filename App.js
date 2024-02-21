import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { styles } from './PageStyle'; 
const App = () => {

  const [connectionMethod, setConnectionMethod] = useState('');
  const [num, setNumberText] = useState('');
  const [savedData, setSavedData] = useState([]);


  const handleButtonPress = () => {

    saveConnectionMethod(connectionMethod);
    saveNumberText(num);
  };


  const saveConnectionMethod = (method) => {

    console.log('Saving connection method:', method);

    setSavedData((prevData) => [...prevData, 'Connection Method: ' + method]);
  };


  const saveNumberText = (numCall) => {

    console.log('Saving Number:', numCall);

    setSavedData((prevData) => [...prevData, 'Number: ' + numCall]);
  };


  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.topContainer}>

        <Text style={styles.title}>Club Connection</Text>

        <TextInput
          style={[styles.input, styles.connectionMethodInput]}
          onChangeText={(text) => setConnectionMethod(text)}
          value={connectionMethod}
          placeholder="Connection Method"
          placeholderTextColor="black" 
        />


        <TextInput
          style={[styles.input, styles.numberInput]}
          onChangeText={(text) => {
            if (/^\d+$/.test(text)) { 
              setNumberText(text);
            } 
          }}
          value={num}
          placeholder="Number"
          placeholderTextColor="black" 
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Text style={[styles.buttonText, { fontSize: 20, color: 'black' }]}>Save</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView}>
        {savedData.map((data, index) => (
          <Text key={index} style={styles.savedData}>{data}</Text>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
