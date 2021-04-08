import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { enableScreens } from "react-native-screens";

import Home from "./views/Home";
import MyBooks from "./views/MyBooks";
import Search from "./views/Search";

import Explore from "./stacks/Explore";
import BookList from "./stacks/BooksList";
import SearchBooks from "./stacks/SearchBooks";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

enableScreens();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Explore}></Tab.Screen>
        <Tab.Screen name="My books" component={BookList}></Tab.Screen>
        <Tab.Screen name="Search books" component={SearchBooks}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
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
