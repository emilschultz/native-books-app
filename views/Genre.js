import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { useMyBooks } from "../context/MyBooksContext";

const Genre = ({ route }) => {
  const genre = route.params.genre;
  const [books, setBooks] = useState([]);
  // const [myBooks, setMyBooks] = useState([]);
  const adddNew = useMyBooks();

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${genre}&printType=books&orderBy=newest&maxResults=6`
    )
      .then((response) => response.json())
      .then((data) => setBooks(data.items));
  }, []);

  const GenreBooks = books.map((book) => {
    return (
      <View style={styles.container} key={book.id}>
        <View>
          <Image
            style={{ width: 100, height: 150 }}
            source={{
              uri: `${book.volumeInfo.imageLinks.smallThumbnail}`,
            }}
          />
          <Text>{book.volumeInfo.title}</Text>
          <Text>By {book.volumeInfo.authors}</Text>
          <Text>{book.volumeInfo.description}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            adddNew.addToMyBooks({
              title: book.volumeInfo.title,
              author: book.volumeInfo.authors,
              description: book.volumeInfo.description,
            });
          }}
        >
          <Text style={{ borderWidth: 0.5, backgroundColor: "white" }}>
            Add to my books
          </Text>
        </TouchableOpacity>
      </View>
    );
  });

  return (
    <ScrollView>
      <Text style={{ fontSize: 40 }}>Newest in {genre}</Text>
      <View
        style={{
          display: "flex",
        }}
      >
        {GenreBooks}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    borderWidth: 1,
    borderColor: "black",
    display: "flex",
    flex: 1,
  },
});

export default Genre;
