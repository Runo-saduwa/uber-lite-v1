import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Main from './src/main';

export default function App(props) {
  return (
    <View style={styles.container}>
       <Main {...props}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
