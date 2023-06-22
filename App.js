import {SafeAreaView, StyleSheet, Text} from 'react-native';
import SignInScreen from './src/screens/SignInScreen/SignInScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <SignInScreen></SignInScreen>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor:"#f9fbfc"
  },
});
