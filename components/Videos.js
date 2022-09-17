import {View, StyleSheet, Text} from 'react-native';
import React, {useRef, useState} from 'react';
import Video from 'react-native-video';

const Videos = ({url}) => {
  const [isVideoBuffer, setIsVideoBuffer] = useState(false);
  const [onError, setOnError] = useState();

  if (isVideoBuffer) {
    return (
      <View style={styles.backgroundVideo}>
        <Text style={{textAlign: 'center'}}>Loading........</Text>
      </View>
    );
  }

  console.log(isVideoBuffer);

  return (
    <View>
      <Video
        source={url}
        style={styles.backgroundVideo}
        controls={true}
        resizeMode="contain"
        onBuffer={isBuffer => setIsVideoBuffer(isBuffer)}
        onError={onError => setOnError(onError)}
      />
    </View>
  );
};

export default Videos;

const styles = StyleSheet.create({
  backgroundVideo: {
    height: 200,
    width: '100%',
    backgroundColor: 'black',
  },
});
