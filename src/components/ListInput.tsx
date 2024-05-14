import React, { FC, useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

interface ListInputProps {
  addListHandler: (enteredText: string) => void;
}

const ListInput: FC<ListInputProps> = ({ addListHandler }) => {
  const [enteredText, setEnteredText] = useState('');

  const listInputHandler = (inputText: string) => {
    setEnteredText(inputText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder='너의 목표는 뭐니?!'
        onChangeText={listInputHandler}
        value={enteredText}
      />
      <Button
        title='이뤄봐!'
        onPress={() => {
          addListHandler(enteredText);
          setEnteredText('');
        }}
      />
    </View>
  );
};

export default ListInput;

const styles = StyleSheet.create({
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
});
