import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Home = ({ navigation }) => {
  console.log(navigation);

  const handleNavigate = () => {
    navigation.navigate("Search");
  };

  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={handleNavigate}>
        <Text>Search books</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
