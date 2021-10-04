import { Button, Text, View } from "react-native";
import React from "react";

export const HomeScreen = ({ navigation: { navigate } }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button title="Go to Details" onPress={() => navigate("Details")} />
    </View>
  );
};
