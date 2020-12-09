import { StackActions } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Accordion, Container, Header, Content, Card, CardItem, Body } from 'native-base';
import { createStackNavigator } from "@react-navigation/stack";

const dataArray = [
  { title: "What is this?", content: "A basket throwing tournament" },
  { title: "When will it be held?", content: "It will be held on Christmas, 25/12/2020" },
  { title: "What is the purpose of this event?", content: "For everyone to have fun" }
];

function Homepage() {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text style = {styles.homepageHeader} >Basket Throwing Tournament 2020</Text>
      <Container style = {styles.homepageCard} >
        <Header />
        <Content>
          <Card>
            <CardItem>
                <Body>
                  <Text>Welcome!</Text>
                  <Text note>Thanks for downloading our app! Here you'll find all kind of information about our upcoming event. It'll be great!</Text>
                </Body>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://images.unsplash.com/photo-1592239544586-4a444fe446ee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
          </Card>
        </Content>
      </Container>

      <Container style= {styles.Container}>
      <Header />
      <Content padder>
        <Accordion dataArray={dataArray} expanded={0}/>
      </Content>
      </Container>
    </View>
  );
}

const Stack = createStackNavigator();

export default function HomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name = "Home" component = {Homepage}></Stack.Screen>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create
(
  {
    homepageHeader:
    {
      fontSize: 35,
      marginTop: 20,
      fontWeight: "700",
      color: "#333333",
      textAlign: "center"
    },

    homepageCard:
    {
      width: "100%"
    },

    Container:
    {
      width: "100%",
    }
  }
)
