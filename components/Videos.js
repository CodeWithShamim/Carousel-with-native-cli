import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Video from 'react-native-video';

const Videos = ({url}) => {
  const [isBuffer, setIsBuffer] = useState(false);
  const [onError, setOnError] = useState();
  const [isPaused, setIsPaused] = useState(false);

  if (isBuffer) {
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
        // paused={true}
        resizeMode="cover"
        // controls
        // pictureInPicture={true}
        poster="https://baconmockup.com/300/200/"
        posterResizeMode="cover"
        onBuffer={isBuffer => setIsBuffer(isBuffer)}
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
