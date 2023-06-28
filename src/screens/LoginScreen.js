import React, {useState, useContext} from 'react';
import {Alert} from 'react-native';

import AuthContent from '../components/Auth/AuthContent';
import {login} from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import {AuthContext} from '../store/auth-context';

function LoginScreen() {
  const [isAuthenticating, setIsAuthenicating] = useState();

  const authCtx = useContext(AuthContext);

  async function logInHandler({email, password}) {
    setIsAuthenicating(true);

    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        'Authentication failed!',
        'User Not Found.....! , please check your credentials or try again Later',
      );
      setIsAuthenicating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging User In" />;
  }

  return <AuthContent isLogin onAuthenticate={logInHandler} />;
}

export default LoginScreen;
