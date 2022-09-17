import {View, StyleSheet, FlatList, useWindowDimensions} from 'react-native';
import React from 'react';
import {data} from './data/dummy-data';
import Videos from './components/Videos';
import Images from './components/Images';

const App = () => {
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;

  return (
    <View style={styles.screen}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) =>
          item.src.video ? (
            <Videos url={item.src.video} />
          ) : (
            <Images url={item.src.img} />
          )
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
