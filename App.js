import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  console.log('App Ejecutado')
  return (
    <View style={styles.container}>
      <Text>
      Hello World!
      </Text>
      <Text >
        Hola Mundo
      </Text>
      <StatusBar />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
