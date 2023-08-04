
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import Logo from './components/logo';
import BienvenueText from './components/BienvenueText';
import { LinearGradient } from 'expo-linear-gradient';





export default function App() {
  const text = React.useState('palceholder');
  return (
    <View style={styles.container}>
       <StatusBar style="auto" />
       <LinearGradient
        Background Linear Gradient
        colors={['rgba(0,0,0,0.8)', 'transparent']}
        style={styles.background}
      />
      <Logo/>
      <BienvenueText/>
      <View style={{borderWidth:1, borderColor: "#fff"}}>
        <TextInput value={text}/>
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#757F9A',
    justifyContent: "center",
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  }, 
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
