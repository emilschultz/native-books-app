import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { createNativeStackNavigator } from "react-native-screens/native-stack";

import Genre from "../views/Genre";

const Stack = createNativeStackNavigator();

//
const ExploreHome = ({ navigation }) => {
  navigation.navigate("Genre", {
    genre: "crime",
    genre: "science fiction",
    genre: "classics",
    genre: "biography",
    genre: "romance",
    genre: "fantasy",
  });

  return (
    <ScrollView>
      <View>
        <Text style={styles.h1}>Welcome</Text>
      </View>
      <View style={styles.borderBox}>
        <Text>Need inspiration?</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.flexRow}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Genre", { genre: "crime" });
            }}
            style={styles.categoryBox}
          >
            <Text>Crime</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Genre", { genre: "science fiction" });
            }}
            style={styles.categoryBox}
          >
            <Text>Sci-Fi</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.flexRow}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Genre", { genre: "classics" });
            }}
            style={styles.categoryBox}
          >
            <Text>Classics</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Genre", { genre: "biography" });
            }}
            style={styles.categoryBox}
          >
            <Text>Biography</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flexRow}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Genre", { genre: "romance" });
            }}
            style={styles.categoryBox}
          >
            <Text>Romance</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Genre", { genre: "fantasy" });
            }}
            style={styles.categoryBox}
          >
            <Text>Fantasy</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.borderBox}>
        <Text style={styles.h2}>Popular authors</Text>
      </View>
      <View style={styles.borderBox}>
        <Text style={styles.h3}>William Shakespeare</Text>
        <Text style={{ marginLeft: 10, marginBottom: 20 }}>
          Hamlet, Macbeth, Romeo and Juliet
        </Text>
      </View>
      <View style={styles.borderBox}>
        <Text style={styles.h3}>J.K. Rowling</Text>
        <Text style={{ marginLeft: 10, marginBottom: 20 }}>
          Harry Potter, Fantastic Beasts, The Silkworm
        </Text>
      </View>
      <View style={styles.borderBox}>
        <Text style={styles.h3}>Erlend Loe</Text>
        <Text style={{ marginLeft: 10, marginBottom: 20 }}>
          Doppler, Naïv. Super, Volvo Lastvanger
        </Text>
      </View>
      <View style={styles.borderBox}>
        <Text style={styles.h3}>Stephen King</Text>
        <Text style={{ marginLeft: 10, marginBottom: 20 }}>
          The Shining, It, The Dark Tower
        </Text>
      </View>
    </ScrollView>
  );
};

const Explore = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Explore"
        component={ExploreHome}
        options={{
          title: "Explore",
        }}
      ></Stack.Screen>

      <Stack.Screen
        name="Genre"
        component={Genre}
        options={{
          title: `${genre}`,
          headerLargeTitle: false,
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

// styles
const styles = StyleSheet.create({
  borderBox: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
    borderLeftWidth: 0,
    borderRightWidth: 0,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  categoryBox: {
    width: 150,
    height: 150,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    margin: 20,
    flex: 1,
  },
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  },

  flexRow: {
    width: "100%",
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  },
  h1: {
    color: "black",
    fontWeight: "bold",
    fontSize: 40,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
  },
  h2: {
    color: "black",
    fontWeight: "bold",
    fontSize: 28,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
  },
  h3: {
    color: "black",
    fontSize: 20,
    marginTop: 20,
    marginBottom: 8,
    marginLeft: 10,
  },
});

export default Explore;
