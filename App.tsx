import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, TextInput, View } from 'react-native';
import ListItem from './src/components/ListItem';
import ListInput from './src/components/ListInput';

type ListType = { text: string; key?: string; id?: string };

export default function App() {
  const [lists, setLists] = useState<ListType[]>([]);

  const addListHandler = (enteredText: string) => {
    setLists((currentList) => [
      { text: enteredText, id: Math.random().toString() },
      ...currentList,
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <ListInput addListHandler={addListHandler} />
      <View style={styles.listContainer}>
        <FlatList
          data={lists}
          renderItem={(listData) => {
            return (
              <ListItem text={listData.item.text} id={listData.item.id!} />
            );
          }}
          alwaysBounceVertical={false}
          keyExtractor={(item) => item.id!}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  listContainer: {
    flex: 7,
  },
});
