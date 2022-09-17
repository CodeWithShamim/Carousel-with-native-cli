import {Image, View, StyleSheet} from 'react-native';
import React from 'react';

const Images = ({url}) => {
  return (
    <View>
      <Image style={styles.image} source={url} resizeMode="cover" />
    </View>
  );
};

export default Images;

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: '100%',
    backgroundColor: 'black',
  },
});
