import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import SignInScreen from './screens/SignInScreen/SignInScreen';
import DeviceScreen from './screens/DevicesScreen';

export default function componentName() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="login Page" component={SignInScreen}></Stack.Screen>
        <Stack.Screen
          name="Device Screen"
          component={DeviceScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
