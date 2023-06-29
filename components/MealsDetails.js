import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const MealsDetails = ({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) => {
  return (
    <View>
      <View style={[styles.content, style]}>
        <Text style={[styles.contentItem, textStyle]}>{duration} m</Text>
        <Text style={[styles.contentItem, textStyle]}>
          {complexity.toUpperCase()}
        </Text>
        <Text style={[styles.contentItem, textStyle]}>
          {affordability.toUpperCase()}
        </Text>
      </View>
    </View>
  );
};

export default MealsDetails;

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 16,
  },
  contentItem: {
    marginHorizontal: 16,
    fontSize: 12,
  },
});
