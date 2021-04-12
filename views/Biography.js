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

const Biography = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=biographies&printType=books&orderBy=newest&maxResults=6"
    )
      .then((response) => response.json())
      .then((data) => setBooks(data.items));
  }, []);

  console.log(books);

  const BiographyBooks = books.map((book) => {
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
        <Text>{book.volumeInfo.description}</Text>
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
      <Text style={{ fontSize: 40 }}>Newest Biographies</Text>
      <View
        style={{
          display: "flex",
        }}
      >
        {BiographyBooks}
      </View>
    </ScrollView>
  );
};

export default Biography;
