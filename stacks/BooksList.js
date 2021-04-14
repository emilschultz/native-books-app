import React from "react";
import { Text, View } from "react-native";
import { createNativeStackNavigator } from "react-native-screens/native-stack";

const Stack = createNativeStackNavigator();

const BooksListHome = (props) => {
  console.log("PROPS:", props.booklist);
  return (
    <View>
      <Text>Her er nogle props</Text>
      {/* <Text>{props.booksList}</Text> */}
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
