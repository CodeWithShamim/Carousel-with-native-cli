import {Image, View, StyleSheet, Dimensions} from 'react-native';
import React from 'react';

const Images = ({url}) => {
  return (
    <View style={{flex: 1}}>
      <Image style={styles.image} source={url} resizeMode="cover" />
    </View>
  );
};

export default Images;

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  image: {
    backgroundColor: 'black',
    height: height / 2,
    width,
    justifyContent: 'center',
  },
});
