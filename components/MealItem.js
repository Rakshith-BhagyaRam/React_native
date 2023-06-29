import {useNavigation} from '@react-navigation/native';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import MealsDetails from './MealsDetails';

const MealItem = ({
  id,
  title,
  imageUrl,
  complexity,
  duration,
  affordability,
}) => {
  const navigation = useNavigation();
  const pressHandler = () => {
    navigation.navigate('Meals Details', {
      mealId: id,
    });
  };

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{color: '#ccc'}}
        style={({pressed}) => (pressed ? {opacity: 0.9} : null)}
        onPress={pressHandler}>
        <View>
          <Image style={styles.image} source={{uri: imageUrl}} />
          <Text style={styles.title}> {title}</Text>
        </View>
        <MealsDetails
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'white',

    elevation: 4,

    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 8,
  },

  image: {
    height: 200,
    width: '100%',
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 8,
  },
});
