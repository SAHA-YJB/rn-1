import React from 'react';
import { useState } from 'react';
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

type ListType = { text: string; key?: string; id?: string };

export default function App() {
  const [enteredText, setEnteredText] = useState('');
  const [lists, setLists] = useState<ListType[]>([]);

  const listInputHandler = (inputText: string) => {
    setEnteredText(inputText);
  };

  const addListHandler = () => {
    setLists((currentList) => [
      { text: enteredText, id: Math.random().toString() },
      ...currentList,
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='너의 목표는 뭐니?!'
          onChangeText={listInputHandler}
        />
        <Button title='이뤄봐!' onPress={addListHandler} />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={lists}
          renderItem={(listData) => (
            <View style={styles.listItem}>
              <Text>{listData.item.text}</Text>
            </View>
          )}
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
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    width: '80%',
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    marginRight: 8,
  },
  listContainer: {
    flex: 7,
  },
  listItem: {
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 8,
    color: 'black',
  },
});
