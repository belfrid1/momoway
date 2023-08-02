
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const image = {uri:'https://legacy.reactjs.org/logo-og.png'}

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode='cover' style={styles.image}></ImageBackground>
      <Text>Bienvenue</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
