import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { useMyBooks } from "../context/MyBooksContext";

const Stack = createNativeStackNavigator();

const SearchBooksHome = () => {
  const [newSearch, setNewSearch] = useState("");
  const [results, setResults] = useState([]);
  const adddNew = useMyBooks();

  const searchHandler = (value) => {
    setNewSearch(value);
  };

  // const getData = async () => {
  //   try {
  //     useEffect(() => {
  //       fetch(
  //         `https://www.googleapis.com/books/v1/volumes?q=${newSearch}&printType=books&maxResults=2`
  //       )
  //         .then((response) => response.json())
  //         .then((data) => setResults(data.items));
  //     }, [newSearch]);
  //   } catch {
  //     console.log("error");
  //   }
  // };

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       fetch(
  //         `https://www.googleapis.com/books/v1/volumes?q=${newSearch}&printType=books&maxResults=2`
  //       )
  //         .then((response) => response.json())
  //         .then((data) => setResults(data.items));
  //     } catch {
  //       console.log("error");
  //     }
  //   };
  // }, [newSearch]);

  const getData = async () => {
    try {
      fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${newSearch}&printType=books&maxResults=20`
      )
        .then((response) => response.json())
        .then((data) => setResults(data.items));
    } catch {
      console.log("error fetching data");
    }
  };

  const searchResults = results.map((book) => {
    return (
      <View style={styles.container} key={book.id}>
        <Image
          style={{ width: 100, height: 150 }}
          source={{
            uri: `${book.volumeInfo.imageLinks.smallThumbnail}`,
          }}
        />
        <Text style={{ fontStyle: "italic" }}>{book.volumeInfo.title}</Text>
        <Text>By {book.volumeInfo.authors}</Text>
        <Text>{book.volumeInfo.description}</Text>

        <TouchableOpacity
          onPress={() => {
            adddNew.addToMyBooks({
              title: book.volumeInfo.title,
              author: book.volumeInfo.authors,
              description: book.volumeInfo.description,
              image: book.volumeInfo.imageLinks.smallThumbnail,
            });
          }}
          style={{ borderWidth: 1, width: 150, padding: 8 }}
        >
          <Text>Add to My Books</Text>
        </TouchableOpacity>
      </View>
    );
  });

  return (
    <ScrollView>
      <View>
        <Text>Looking for something specific?</Text>
        <TextInput
          style={styles.SearchField}
          onChangeText={searchHandler}
          placeholder="Search"
        />
        <TouchableOpacity
          style={{ borderWidth: 0.5, backgroundColor: "lightgreen" }}
          onPress={getData}
        >
          <Text>Search books</Text>
        </TouchableOpacity>
        {searchResults}
      </View>
    </ScrollView>
  );
};

const SearchBooks = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={SearchBooksHome}
        options={{
          title: "Search books",
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default SearchBooks;

const styles = StyleSheet.create({
  SearchField: {
    borderWidth: 1,
    padding: 10,
    width: "80%",
  },
  container: {
    height: "100%",
    width: "100%",
    borderWidth: 1,
    borderColor: "black",
    display: "flex",
    flex: 1,
  },
});
