import {NavigationActions} from '@react-navigation/native';

let _navigator;

const setTopLevelNavigator = navigatorRef => {
  _navigator = navigatorRef;
};

const navigate = (routeName, parms) => {
  _navigator.navigate(routeName, parms);
};

const goBack = () => {
  _navigator.dispatch(NavigationActions.back());
};

export default {
  navigate,
  setTopLevelNavigator,
  goBack,
};
