import {View, StyleSheet, FlatList, Text} from 'react-native';
import React from 'react';
// import Carousel from 'react-native-snap-carousel';
import {data} from './data/dummy-data';
import Videos from './components/Videos';

const App = () => {
  return (
    <View style={styles.screen}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) =>
          item.src.video && <Videos url={item.src.video} />
        }
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
