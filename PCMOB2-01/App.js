import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.fillerContainer}></View>
      <View style={styles.titleContainer}>
        <Text style={styles.text}>Hello World</Text>
      </View>
      <View style={styles.fillerContainer}></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center'
  },

  fillerContainer: {
    backgroundColor: 'blue',
    height: "100%",
    width: "55%",
    margin: 10
  },

  titleContainer: {
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: "3%",
    paddingVertical: "35%",
    borderRadius: 20
  },

  text: {
    fontSize: 60,
    color: "red",
    fontWeight: "bold"
  },
});
