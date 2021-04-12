import React, { useState, useEffect } from "react";
import { Text, View, TextInput, StyleSheet, Button } from "react-native";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

const Stack = createNativeStackNavigator();

const SearchBooksHome = () => {
  const [newSearch, setNewSearch] = useState("");

  const changeHandler = (value) => {
    setNewSearch(value);
  };

  // useEffect(() => {
  //   fetch(
  //     `https://www.googleapis.com/books/v1/volumes?q={newSearch}&printType=books&maxResults=1`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => console.log(data.items));
  // }, []);

  return (
    <ScrollView>
      <View>
        <Text>Looking for something specific?</Text>
        <TextInput
          style={styles.SearchField}
          onChangeText={changeHandler}
          placeholder="Search"
        />
        <TouchableOpacity onPress={console.log(newSearch)}>
          <Text>button</Text>
        </TouchableOpacity>
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
