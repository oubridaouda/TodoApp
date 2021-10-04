import { Button, Text, View } from "react-native";
import React from "react";

export const DetailsScreen = ({ navigation: { navigate } }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Detail screen</Text>
      <Button title="Go to Details" onPress={() => navigate("Home")} />
    </View>
  );
};
