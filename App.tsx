import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='너의 목표는 뭐니?!' />
        <Button title='이뤄봐!' />
      </View>
      <View>
        <Text>너의 목표들이야!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    marginTop: 20,
    width: '100%',
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
