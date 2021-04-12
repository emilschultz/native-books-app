import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { createNativeStackNavigator } from "react-native-screens/native-stack";

const Stack = createNativeStackNavigator();

const Crime = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=crime&printType=books&orderBy=newest&maxResults=6"
    )
      .then((response) => response.json())
      .then((data) => setBooks(data.items));
  }, []);

  console.log(books);

  const CrimeBooks = books.map((book) => {
    return (
      <View
        style={{
          height: 200,
          width: "100%",
          borderWidth: 1,
          borderColor: "black",
          display: "flex",
          flex: 1,
        }}
        key={book.id}
      >
        <Text>{book.volumeInfo.title}</Text>
        <Text>{book.volumeInfo.authors}</Text>
        <Text style={{ height: "50%", width: "80%" }}>
          {book.volumeInfo.description}
        </Text>
        <>
          {/* <Image
            style={{
              width: 51,
              height: 51,
              resizeMode: "contain",
            }}
            source={{
              uri:
                "data:https://d1.awsstatic.com/serverless/New-API-GW-Diagram.c9fc9835d2a9aa00ef90d0ddc4c6402a2536de0d.png",
            }}
          /> */}
        </>
      </View>
    );
  });

  return (
    <ScrollView>
      <Text style={{ fontSize: 40 }}>Newest crime books</Text>
      <View
        style={{
          display: "flex",
        }}
      >
        {CrimeBooks}
      </View>
    </ScrollView>
  );
};

export default Crime;