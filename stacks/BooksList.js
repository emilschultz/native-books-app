import React from "react";
import { Text, View } from "react-native";
import { createNativeStackNavigator } from "react-native-screens/native-stack";

const Stack = createNativeStackNavigator();

const BooksListHome = () => {
  return (
    <View>
      <Text>My Books</Text>
    </View>
  );
};

const BooksList = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BooksList"
        component={BooksListHome}
        options={{
          title: "My booklist",
          headerLargeTitle: true,
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default BooksList;
