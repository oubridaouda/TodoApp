import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import RoutesNavigator from "./navigations/RoutesNavigator";
import { HomeScreen } from "./scenes/cowoker";
import { createDrawerNavigator } from "@react-navigation/drawer";
import useAnimatedStyle from "react-native-reanimated";
import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { navigationRef } from "./navigations/RootNavigation";

const Drawer = createDrawerNavigator();

function DetailsScreen({ navigation: { navigate } }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button title="Go to Details" onPress={() => navigate("Home")} />
    </View>
  );
}

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer ref={navigationRef}>
        <RoutesNavigator />
      </NavigationContainer>
    </ApplicationProvider>
  );
  // return (
  //   <NavigationContainer>
  //     <Drawer.Navigator initialRouteName="Detail">
  //       <Drawer.Screen name="Home" component={HomeScreen} />
  //       <Drawer.Screen name="Detail" component={DetailsScreen} />
  //     </Drawer.Navigator>
  //   </NavigationContainer>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
