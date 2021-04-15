import React from "react";
import { Text, View } from "react-native";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { useMyBooks } from "../context/MyBooksContext";

const Stack = createNativeStackNavigator();

const BooksListHome = () => {
  const books = useMyBooks();

  console.log("MYYYY BOOOOKS!:", books.myBooks);
  return (
    <View>
      <Text>Hej</Text>
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
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default BooksList;
