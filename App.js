// import {SafeAreaView, StyleSheet} from 'react-native';

// import Navigation from './src/Navigation';

// const App = () => {
//   return (
//     <SafeAreaView style={styles.root}>
//       <Navigation />
//     </SafeAreaView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   root: {
//     flex: 1,
//     backgroundColor: '#f9fbfc',
//   },
// });

import React, {useContext} from 'react';
import {StatusBar, View, Text, Pressable} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import {Colors} from './src/constants/styles';
import AuthContextProvider, {AuthContext} from './src/store/auth-context';
import IconButton from './src/components/ui/IconButton';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: Colors.primary500},
        headerTintColor: 'white',
        contentStyle: {backgroundColor: Colors.primary100},
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  const authCtx = useContext(AuthContext);

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: Colors.primary500},
        headerTintColor: 'white',
        contentStyle: {backgroundColor: Colors.primary100},
      }}>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerRight: ({tintColor}) => (
            <Pressable onPress={authCtx.logout}>
              <View style={{backgroundColor: 'white'}}>
                <Text style={{color: {tintColor}, fontSize: 24}}>Exit</Text>
              </View>
            </Pressable>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <AuthContextProvider>
        <Navigation />
      </AuthContextProvider>
    </>
  );
}
