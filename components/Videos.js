import {View, StyleSheet, Dimensions, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import Video from 'react-native-video';

const Videos = ({url}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [onError, setOnError] = useState();
  const [isPaused, setIsPaused] = useState(true);

  if (isLoading) {
    return (
      <View style={styles.backgroundVideo}>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      <Video
        source={url}
        style={styles.backgroundVideo}
        resizeMode="cover"
        muted
        controls
        paused={isPaused ? true : false}
        onProgress={() => setIsPaused(false)}
        onError={onError => setOnError(onError)}
      />
    </View>
  );
};

export default Videos;

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  backgroundVideo: {
    backgroundColor: 'black',
    height: height / 2,
    width: width,
    justifyContent: 'center',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
});
