import {Alert} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import NavigationService from '../Navigation/NavigationService';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}

const getFcmToken = async () => {
  try {
    const token = await messaging().getToken();

    console.log('fcmToken +++  ', token);
  } catch (error) {
    console.log('error in generating token');
  }
};

getFcmToken();

export async function notificationListner() {
  const unsubscribe = messaging().onMessage(async remoteMessage => {
    Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  });

  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );

    if (!!remoteMessage.data && remoteMessage.data.scrn === 'Screen1') {
      setTimeout(() => {
        NavigationService.navigate('Screen1');
      }, 1200);
    } else if (!!remoteMessage.data && remoteMessage.data.scrn === 'Screen2') {
      setTimeout(() => {
        NavigationService.navigate('Screen2');
      }, 1200);
    } else if (!!remoteMessage.data && remoteMessage.data.scrn === 'Screen3') {
      setTimeout(() => {
        NavigationService.navigate('Screen3');
      }, 1200);
    }
  });

  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
      }
    });

  return unsubscribe;
}
