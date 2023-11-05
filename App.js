import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import LoginForm from './src/components/LoginForm';
import Saludar from './src/components/Saludar';

export default function App() {
  console.log('App Ejecutado')
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text>
          Curso de React Native
        </Text>
        <Saludar />
        <Saludar firstname="Juan" lastname="Perez" />
        <Saludar firstname="Maria" lastname="Garcia" />
        <Saludar />
        <LoginForm />
      </View>
    </NavigationContainer>
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
