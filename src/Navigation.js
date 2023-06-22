import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SignInScreen from './screens/SignInScreen/SignInScreen';

export default function componentName() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login Page" component={SignInScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
