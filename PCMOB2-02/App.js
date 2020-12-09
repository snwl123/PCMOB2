import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import CounterText from './components/CounterText';

export default function App() {

  let [count,setCount] = useState(0)

  function renderEncouragingText()
  {
    if (count < 10)
      {
        return null
      }
    if (count >= 10)
      {
        return "Keep going!"
      }
    if (count >= 20)
      {
        return "You can do it!"
      }
    else
    {
      return "Power!"
    }

  }

  function clickAnywhere()
  {
    console.log("Yay you pressed me!")
    console.log(`Before pressing, the count was ${count}`)

    setCount(count+1)
  }

  function clickMe()
  {
    console.log("Yay you pressed me!")
    console.log(`Before pressing, the count was ${count}`)

    setCount(count+1)
  }

  function dontClickMe()
  {
    console.log("You pressed me ouch!")
    console.log(`Before pressing, the count was ${count}`)

    setCount(count-1)
  }

  function neverClickMe()
  {
    console.log("NOOOOO!")
    console.log(`Before pressing, the count was ${count}.`)
    setCount(0)
  }


  return (
    <TouchableOpacity onPress = {clickAnywhere} style={styles.container}>
      <View>

          <CounterText color = "lightgrey" fontsize = {10} bottomMargin = {25} textAlign = "center">{count}</CounterText>
          <CounterText color = "lightblue" fontsize = {30} bottomMargin = {25} textAlign = "center">{count}</CounterText>
          <CounterText color = "blue" fontsize = {60} bottomMargin = {25} textAlign = "center">{count}</CounterText>
          <CounterText color = "navy" fontsize = {90} bottomMargin = {25} textAlign = "center">{count}</CounterText>

          <Text style = {styles.encouragingText}> {renderEncouragingText()} </Text>

          <TouchableOpacity onPress = {clickMe} style = {styles.button}>
            <Text style = {styles.buttonText}>
                Increment
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress = {dontClickMe} style = {styles.button}>
            <Text style = {styles.buttonText}>
                Decrement
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress = {neverClickMe} style = {styles.button}>
            <Text style = {styles.buttonText}>
                Reset
            </Text>
          </TouchableOpacity>

          <StatusBar style="auto" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  count:
  {
    textAlign: 'center'
  },

  encouragingText:
  {
    marginBottom: 10,
    color: "#555555",
    fontWeight: "bold",
    textAlign: 'center'
  },

  button:
  {
    backgroundColor: "#eeeeee",
    borderRadius: 2,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center'
    
  },

  buttonText:
  {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000080",
    paddingVertical: "5%",
    paddingHorizontal: "5%",
    textAlign: 'center'
  },


});
