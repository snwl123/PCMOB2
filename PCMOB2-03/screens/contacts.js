import * as React from "react";
import { View } from "react-native";
import {
  Container,
  Content,
  Header,
  List,
  ListItem,
  Left,
  Right,
  Thumbnail,
  Body,
  Text,
} from "native-base";

const contactsData = [
  {
    name: "Charlie McCharles",
    title: "CEO",
    company: "Baskets International LLC",
    pic: "https://randomuser.me/portraits/men/1.jpg",
  },
  {
    name: "Desiree Dee",
    title: "CMO",
    company: "Busket Inc",
    pic: "https://randomuser.me/portraits/women/1.jpg",
  },
  {
    name: "Adam ellis",
    title: "CTO",
    company: "Baskets of Biskits",
    pic: "https://randomuser.me/portraits/men/2.jpg",
  },
];

export default function ContactScreen() {
  return (
    <Container>
      <Content>
        <List>
          {contactsData.map((item) => (
            <ListItem avatar key={item.name}>
              <Left>
                <Thumbnail source={{ uri: item.pic }} />
              </Left>
              <Body>
                <Text>{item.name}</Text>
                <Text note>
                  {item.title}, {item.company}
                </Text>
              </Body>
            </ListItem>
          ))}
        </List>
      </Content>
    </Container>
  );
}