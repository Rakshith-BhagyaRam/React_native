import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useState, useEffect} from 'react';

import Navigation from './src/Navigation';

const App = () => {
  const [data, setData] = useState([]);

  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f9fbfc',
  },
});
