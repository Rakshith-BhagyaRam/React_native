import React from 'react';
import {Image, StyleSheet} from 'react-native';
import logo from '../../assets/logo/logo.png';

const RenderImage = () => {
  return <Image source={logo} style={styles.logo} />;
};

export default RenderImage;

const styles = StyleSheet.create({
  logo: {
    width: '40%',
    height: 100,
    maxWidth: 300,
    borderRadius: 10,
    margin: 20,
  },
});
