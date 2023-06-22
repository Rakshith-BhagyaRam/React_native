import {View, Text, StyleSheet, Image, Pressable} from 'react-native';

import CustomInput from '../../components/InputCustom';
import logo from '../../../assets/logo/logo.png';
import {useState} from 'react';
import CustomButton from '../../components/ButtonsCustom';

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSignIn = () => {};
  const onSignUp = () => {};
  const onForgotPassword = () => {};

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.inputContainer}>
        <CustomInput
          placeHolder={'username'}
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeHolder={'password'}
          value={password}
          setValue={setPassword}
        />
      </View>
      <CustomButton onPress={onSignIn}>Sign In</CustomButton>
      <Pressable onPress={onForgotPassword}>
        <Text style={styles.forgotPassword}>Forgot password ?</Text>
      </Pressable>
      <CustomButton onPress={onSignUp}>Sign up</CustomButton>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  inputContainer: {
    width: '80%',
  },
  logo: {
    width: '40%',
    height: 100,
    maxWidth: 300,
    borderRadius: 10,
    margin: 20,
  },
});
