import React from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';

const data = Array.from({length: 2000}, (_, i) => ({
  id: i,
  text: `This is another item with index ${i}`,
}));

const App = () => {
  return (
    <SafeAreaView>
      <FlatList
        // style={{height: 100}}
        initialNumToRender={30}
        ItemSeparatorComponent={() => <View style={{height: 2}} />}
        data={data}
        renderItem={({item, index}) => {
          console.warn('rendering row', index);
          return <Text>{item.text}</Text>;
        }}
      />
    </SafeAreaView>
  );
};

export default App;
