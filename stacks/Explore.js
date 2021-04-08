import React from "react";
import { Text, View } from "react-native";
import { createNativeStackNavigator } from "react-native-screens/native-stack";

const Stack = createNativeStackNavigator();

const ExploreHome = () => {
  return (
    <View>
      <Text>Welcome</Text>
    </View>
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
          headerLargeTitle: true,
          headerLargeStyle: {
            backgroundColor: "#fafafa",
          },
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default Explore;
