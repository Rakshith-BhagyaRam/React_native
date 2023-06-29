import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const List = ({data}) => {
  return data.map(dataPoint => (
    <View key={dataPoint}>
      <Text>{dataPoint}</Text>
    </View>
  ));
};

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
});

export default List;
