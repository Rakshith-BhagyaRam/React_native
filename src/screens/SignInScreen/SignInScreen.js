import {View, StyleSheet, Image, ScrollView} from 'react-native';

import CustomInput from '../../components/InputCustom';
import logo from '../../../assets/logo/logo.png';
// import {useState} from 'react';
import CustomButton from '../../components/ButtonsCustom';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import LinearGradient from 'react-native-linear-gradient';

let loginSchema = [
  {
    key: 'emp111',
    displayName: '',
    placeholder: 'Your Employee ID',
    value: '',
    error: '',
    required: true,
    lowerCase: true,
    label: 'Employee ID',
  },
  {
    key: 'password',
    displayName: '',
    placeholder: 'Password',
    secureTextEntry: true,
    value: '',
    error: '',
    required: true,
    label: 'password',
  },
];

const SignInScreen = () => {
  const navigation = useNavigation();

  const {control, handleSubmit} = useForm();

  // console.log(errors);

  const onSignIn = data => {
    console.log(data);
    navigation.navigate('Device Screen');
  };
  const onSignUp = () => {};
  const onForgotPassword = () => {};

  return (
    <LinearGradient colors={['#40E0D0', '#32de84']} style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Image source={logo} style={styles.logo} />
          <View style={styles.inputContainer}>
            <CustomInput
              name="username"
              control={control}
              placeHolder="username"
              rules={{
                validate: value => value === loginSchema[0].key,
              }}
            />

            <CustomInput
              rules={{
                required: `password is required`,
                validate: value => value === loginSchema[1].key,
                minLength: {
                  value: 5,
                  message: 'password sholud be min 5 characters',
                },
              }}
              placeHolder="password"
              control={control}
              name="password"
              secureTextEntry
            />
          </View>
          <CustomButton onPress={handleSubmit(onSignIn)} >
            Sign In
          </CustomButton>
          {/* <CustomButton onPress={onForgotPassword} >
            Forgot Password ?
          </CustomButton>

          <CustomButton onPress={onSignUp} >
            Sign up
          </CustomButton> */}
        </View>
      </ScrollView>
    </LinearGradient>
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
