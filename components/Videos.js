import {View, StyleSheet, Text, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import Video from 'react-native-video';

const Videos = ({url}) => {
  const [isVideoBuffer, setIsVideoBuffer] = useState(false);
  const [onError, setOnError] = useState();
  const [isPaused, setIsPaused] = useState(false);

  if (isVideoBuffer) {
    return (
      <View style={styles.backgroundVideo}>
        <Text style={{textAlign: 'center'}}>Loading........</Text>
      </View>
    );
  }

  useEffect(() => {
    setTimeout(() => {
      setIsPaused(false);
    }, 3000);
  }, []);

  return (
    <View style={{flex: 1}}>
      <Video
        source={url}
        style={styles.backgroundVideo}
        // paused={true}
        resizeMode="cover"
        onBuffer={isBuffer => setIsVideoBuffer(isBuffer)}
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
  },
});
