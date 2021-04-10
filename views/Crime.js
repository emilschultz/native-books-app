import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { createNativeStackNavigator } from "react-native-screens/native-stack";

const Stack = createNativeStackNavigator();

const Crime = () => {
  const [books, setBooks] = useState([]);
  // const handleNavigate = () => {
  //   navigation.navigate("BookList");
  // };

  // useEffect(() => {
  //   fetch("https://www.googleapis.com/books/v1/volumes?q=crime")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       data.items.forEach((item) => {
  //         console.log(item.volumeInfo.title);
  //       });
  //     });
  // }, []);

  useEffect(() => {
    fetch("https://www.googleapis.com/books/v1/volumes?q=crime")
      .then((response) => response.json())
      .then((data) => setBooks(data.items));
  }, []);

  console.log(books);

  const CrimeBooks = books.map((book) => {
    return (
      <View
        style={{
          height: 100,
          width: 100,
          borderWidth: 1,
          borderColor: "black",
        }}
        key={book.id}
      >
        <Text>{book.volumeInfo.title}</Text>
      </View>
    );
  });

  return <ScrollView>{CrimeBooks}</ScrollView>;
};

export default Crime;
