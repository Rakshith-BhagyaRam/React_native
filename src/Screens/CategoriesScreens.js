import React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import {CATEGORIES} from '../../Data/dummy-data';
import CategoryGridTile from '../../components/CategoryGridTile';

const CategoriesScreens = ({navigation}) => {
  const renderCategoryItem = itemData => {
    const pressHandler = () => {
      navigation.navigate('Meals Over View', {
        categoryID: itemData.item.id,
      });
    };

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderCategoryItem}
      keyExtractor={item => item.id}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({});
export default CategoriesScreens;
