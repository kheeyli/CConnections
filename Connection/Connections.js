// Connections.js
import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { styles } from '../StylesComp/PageStyle';

const Connections = ({ onSaveData }) => {
  const [connectionMethod, setConnectionMethod] = useState('');
  const [num, setNumberText] = useState('');
  const [savedData, setSavedData] = useState(null);

  const handleButtonPress = () => {
    saveData();
  };

  const saveData = () => {
    const data = {
      connectionMethod: 'Connection Method: ' + connectionMethod,
      number: 'Number: ' + num
    };
    onSaveData(data);
    setSavedData(data);
    setConnectionMethod('');
    setNumberText('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>Club Connection</Text>
        <TextInput
          style={[styles.input, styles.connectionMethodInput]}
          onChangeText={text => setConnectionMethod(text)}
          value={connectionMethod}
          placeholder="Connection Method"
          placeholderTextColor="black"
        />
        <TextInput
          style={[styles.input, styles.numberInput]}
          onChangeText={text => {
            if (/^\d+$/.test(text)) {
              setNumberText(text);
            }
          }}
          value={num}
          placeholder="Number"
          placeholderTextColor="black"
          keyboardType="numeric"
        />
        
      {/* Button*/}
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Text style={[styles.buttonText, { fontSize: 20, color: 'black' }]}>Save</Text>
        </TouchableOpacity>
      </View>

      {/* All the Saved Data - Title and Inputs Saved */}
      <ScrollView style={styles.scrollView}>
        <View style={styles.savedDataContainer}>
        <Text style={[styles.savedDataTitle, { color: 'black', fontSize:18 }]}>Saved Data:</Text>

          {savedData && (
             <View style={styles.savedDataContainer}>
             <Text style={[styles.savedDataText, { color: 'black', fontSize:17}]}>{savedData.connectionMethod}</Text>
             <Text style={[styles.savedDataText, { color: 'black', fontSize:17 }]}>{savedData.number}</Text>
           </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Connections;

