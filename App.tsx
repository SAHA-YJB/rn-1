import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const handleClick = () => {
    Alert.alert('Button clicked');
  };
  return (
    <View style={styles.container}>
      <View>
        <Text>another text</Text>
      </View>
      <Text>Hello Worl!</Text>
      <Button title='Click me' onPress={handleClick} />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
