import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { createNativeStackNavigator } from "react-native-screens/native-stack";

const Stack = createNativeStackNavigator();

const SearchBooksHome = () => {
  const [newSearch, setNewSearch] = useState("");
  const [results, setResults] = useState([]);

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
        `https://www.googleapis.com/books/v1/volumes?q=${newSearch}+inauthor:${newSearch}&printType=books&maxResults=20`
      )
        .then((response) => response.json())
        .then((data) => setResults(data.items));
    } catch {
      console.log("error");
    }
  };

  const searchResults = results.map((book) => {
    return (
      <View
        style={{
          borderWidth: 1,
          borderColor: "black",
          display: "flex",
          flex: 1,
        }}
        key={book.id}
      >
        <Text style={{ fontStyle: "italic" }}>{book.volumeInfo.title}</Text>
        <Text>{book.volumeInfo.authors}</Text>
        <Text>{book.volumeInfo.description}</Text>
        <TouchableOpacity style={{ borderWidth: 1, width: 150, padding: 8 }}>
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
        <TouchableOpacity onPress={getData}>
          <Text>Button</Text>
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
});
