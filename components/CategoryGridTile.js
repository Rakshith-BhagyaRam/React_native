import React from 'react';
import {Platform, Pressable, StyleSheet, Text, View} from 'react-native';

const CategoryGridTile = ({title, color , onPress}) => {
  return (
    <View style={[styles.rootContainer]}>
      <Pressable
        android_ripple={{color: '#ccc'}}
        style={({pressed}) => [styles.button, pressed ? {opacity: 0.5} : null]}
        onPress={onPress}>
        <View style={[styles.innerContainer, {backgroundColor: color}]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,

    margin: 16,
    height: 150,
    borderRadius: 8,
    backgroundColor: 'white',
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',

    elevation: 5,

    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 8,
  },

  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    flex: 1,
  },

  title: {
    fontWeight: 'bold',
    color: '#111a',
    fontSize: 20,
  },
});
1;
