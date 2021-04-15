import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { enableScreens } from "react-native-screens";
import { BooksList } from "./context/MyBooksContext";

import Explore from "./stacks/Explore";
import BookList from "./stacks/BooksList";
import SearchBooks from "./stacks/SearchBooks";

const Tab = createBottomTabNavigator();

enableScreens();

export default function App() {
  return (
    <BooksList>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Explore}></Tab.Screen>
          <Tab.Screen name="My books" component={BookList}></Tab.Screen>
          <Tab.Screen name="Search books" component={SearchBooks}></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </BooksList>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
