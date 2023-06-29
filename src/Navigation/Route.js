import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CategoriesScreens from '../Screens/CategoriesScreens';
import MealsOverView from '../Screens/MealsOverView';
import MealDetails from '../Screens/MealDetails';
import NavigationService from './NavigationService';

const Route = () => {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Meals Categories"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#351401',
            },
            headerTintColor: 'white',
            contentStyle: {backgroundColor: '#3f2f25'},
            animation: 'slide_from_right',
          }}>
          <Stack.Screen
            name="Meals Categories"
            component={CategoriesScreens}
            options={{title: 'All Categories'}}
          />
          <Stack.Screen
            name="Meals Over View"
            component={MealsOverView}
            // options={({route,navigation}) => {const catId  =route.params.categoryId;
            // return{
            //   title:catId,
            // }}}
          />
          <Stack.Screen name="Meals Details" component={MealDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Route;

9019947340;
