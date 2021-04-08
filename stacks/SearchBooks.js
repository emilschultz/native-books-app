import React from "react";
import { Text, View } from "react-native";
import { createNativeStackNavigator } from "react-native-screens/native-stack";

const Stack = createNativeStackNavigator();

const SearchBooksHome = () => {
  return <View></View>;
};

const SearchBooks = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={SearchBooksHome}
        options={{
          title: "Search books",
          headerLargeTitle: true,
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default SearchBooks;
