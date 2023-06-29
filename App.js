import {
  StatusBar,
  StyleSheet,
  PermissionsAndroid,
  Platform,
  View,
  Alert,
} from 'react-native';

import {useEffect} from 'react';
import {
  notificationListner,
  requestUserPermission,
} from './src/utils/notificationServices';
import Route from './src/Navigation/Route';

const App = () => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      )
        .then(res => {
          console.log('res++++++  ', res);
          if (!!res && res === 'never_ask_again') {
            requestUserPermission();
            notificationListner();
          }
        })
        .catch(error => {
          Alert.alert('Something Went Wrong');
        });
    }
  }, []);

  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="light-content" />
      <Route />
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
