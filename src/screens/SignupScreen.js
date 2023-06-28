import {useState , useContext} from 'react';
import AuthContent from '../components/Auth/AuthContent';
import {Alert} from 'react-native';

import {createUser} from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { AuthContext } from '../store/auth-context';

function SignupScreen() {
  const [isAuthenticating, setIsAuthenicating] = useState();

  const authCtx = useContext(AuthContext);

  async function signUpHandler({email, password}) {
    setIsAuthenicating(true);
    try {
      const token =   await createUser(email, password);
      authCtx.authenticate(token)
    } catch (error) {
      Alert.alert(
        'Authentication failed',
        'failed to create user, Please check the provided credentials or try again later',
      );
      setIsAuthenicating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating User" />;
  }

  return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignupScreen;
