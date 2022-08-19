import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import {   FAB, Text } from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';

export default function App() {
  const [checked, setChecked] = React.useState('first');
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Picker
          style={styles.select}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, _itemIndex) =>
            setSelectedLanguage(itemValue)
          }
        >
          <Picker.Item label="sqlite" value="sqlite" />
          <Picker.Item label="firebase" value="firebase" />
          <Picker.Item label="shared" value="shared" />
        </Picker>
    </View>
    <FAB
      icon="plus"
      style={styles.fab}
      onPress={() => console.log('Pressed')}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#ededed',
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  header: {
    // flex: 1,
    padding: 32,
    display: 'flex',
    flexDirection: 'row',
    // backgroundColor: '#000',
    // alignItems: 'center',
    justifyContent: 'space-between',
  },
  select: {
    width: '100%',
    backgroundColor: '#FFF' 
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
