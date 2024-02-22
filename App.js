// App.js
import React, { useState } from 'react';
import { View } from 'react-native';
import Connections from './Connection/Connections'

const App = () => {
  const [savedData, setSavedData] = useState([]);

  const handleSaveData = (data) => {
    setSavedData(prevData => [...prevData, data]);
  };

  return (
    <View style={{ flex: 1 }}>
      <Connections onSaveData={handleSaveData} />

    </View>
  );
};

export default App;
