import React from 'react';
import {View, StyleSheet,Text} from 'react-native';

const Title = ({children}) => {
    return (
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{children}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#ebc1a7',
  },
  titleContainer: {
    marginHorizontal: 34,
    marginVertical: 4,
    padding: 4,
    borderBottomColor: '#ebc1a7',
    borderBottomWidth: 2,
  },
});

export default Title;
