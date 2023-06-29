import {useLayoutEffect} from 'react';

import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';

import {MEALS} from '../../Data/dummy-data';
import MealsDetails from '../../components/MealsDetails';
import Title from '../../components/MealDetailComponents/Title';

const MealDetails = ({route, navigation}) => {
  const mealId = route.params.mealId;

  const displayMeal = MEALS.find(meal => meal.id === mealId);

  useLayoutEffect(() => {
    const categoryTitle = MEALS.find(meal => meal.id === mealId).title;

    navigation.setOptions({
      title: categoryTitle,
      headerTitleAlign: 'center',
    });
  }, [mealId, navigation]);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={{uri: displayMeal.imageUrl}} style={styles.image} />
        <MealsDetails
          duration={displayMeal.duration}
          complexity={displayMeal.complexity}
          affordability={displayMeal.affordability}
          style={() => {}}
          textStyle={styles.text}
        />
        <Title>INGREDIENTS</Title>
        {displayMeal.ingredients.map(ingredient => (
          <Text key={ingredient}>{ingredient}</Text>
        ))}
        <Title>STEPS</Title>
        {displayMeal.steps.map(step => (
          <Text key={step}>* {step}</Text>
        ))}
      </ScrollView>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
  },

  image: {
    height: 350,
    width: '100%',
    borderRadius: 20,
  },

  text: {color: 'white'},
});
