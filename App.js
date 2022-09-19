import {View, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import {data} from './data/dummy-data';
import Videos from './components/Videos';
import Images from './components/Images';
import {SwiperFlatList} from 'react-native-swiper-flatlist';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="red" />
      <View style={styles.screen}>
        <SwiperFlatList
          autoplay
          autoplayDelay={5}
          autoplayLoop
          index={data?.length - 1}
          showPagination
          paginationDefaultColor="red">
          {data.map(item =>
            item.src.video ? (
              <Videos key={item.id} url={item.src.video} />
            ) : (
              <Images key={item.id} url={item.src.img} />
            ),
          )}
        </SwiperFlatList>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
