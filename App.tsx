import React, { useState } from 'react';
import {
  Alert,
  Button,
  FlatList,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import ListItem from './src/components/ListItem';
import ListInput from './src/components/ListInput';

type ListType = { text: string; key?: string; id?: string };

export default function App() {
  const [lists, setLists] = useState<ListType[]>([]);

  const addListHandler = (enteredText: string) => {
    if (enteredText === '') {
      return Alert.alert('목표를 입력해주세요!');
    }
    setLists((currentList) => [
      { text: enteredText, id: Math.random().toString() },
      ...currentList,
    ]);
  };

  const removeListHandler = (listId: string) => {
    setLists((currentList) => {
      return currentList.filter((list) => list.id !== listId);
    });
  };

  return (
    <View style={styles.appContainer}>
      <ListInput addListHandler={addListHandler} />
      <View style={styles.listContainer}>
        <FlatList
          data={lists}
          renderItem={(listData) => {
            return (
              <ListItem
                text={listData.item.text}
                id={listData.item.id!}
                removeListHandler={removeListHandler}
              />
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
