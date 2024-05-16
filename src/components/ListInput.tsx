import React, { FC, useState } from 'react';
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native';

interface ListInputProps {
  addListHandler: (enteredText: string) => void;
  visible?: boolean;
  setModalVisible?: (visible: boolean) => void;
}

const ListInput: FC<ListInputProps> = ({
  visible,
  addListHandler,
  setModalVisible,
}) => {
  const [enteredText, setEnteredText] = useState('');

  const listInputHandler = (inputText: string) => {
    setEnteredText(inputText);
  };

  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='너의 목표는 뭐니?!'
          onChangeText={listInputHandler}
          value={enteredText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title='취소'
              onPress={() => {
                setEnteredText('');
                if (setModalVisible) {
                  setModalVisible(!visible);
                }
              }}
            />
          </View>
          <View style={styles.button}>
            <Button
              title='이뤄봐!'
              onPress={() => {
                addListHandler(enteredText);
                setEnteredText('');
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ListInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    padding: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  textInput: {
    width: '100%',
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
  },
  button: {
    width: '30%',
    marginHorizontal: 4,
  },
});
