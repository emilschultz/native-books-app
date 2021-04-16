import React from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { useMyBooks } from "../context/MyBooksContext";

const Stack = createNativeStackNavigator();

const BooksListHome = () => {
  const books = useMyBooks();

  const removeHandler = (index) => {
    const newBooksArray = [...books.myBooks];
    newBooksArray.splice(index, 1);
    books.setMyBooks(newBooksArray);
  };

  const allMyBooks = books.myBooks.map((book, index) => {
    return (
      <View key={book.id} style={{ borderWidth: 1 }}>
        <Image
          style={{ width: 100, height: 150 }}
          source={{
            uri: `${book.image}`,
          }}
        />
        <Text>{book.title}</Text>
        <Text>By {book.author}</Text>
        <TouchableOpacity
          onPress={() => {
            removeHandler(index);
          }}
          style={{ borderWidth: 0.5, backgroundColor: "red" }}
        >
          <Text>Remove</Text>
        </TouchableOpacity>
      </View>
    );
  });

  return (
    <ScrollView>
      <Text style={{ fontSize: 40 }}>My books</Text>
      {allMyBooks}
    </ScrollView>
  );
};

const BooksList = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BooksList"
        component={BooksListHome}
        options={{
          title: "My books",
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default BooksList;
