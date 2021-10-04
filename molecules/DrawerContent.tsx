import { Drawer, DrawerItem, IndexPath, Text } from "@ui-kitten/components";
import React, { useContext } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "../scenes/cowoker";
import { createDrawerNavigator } from "@react-navigation/drawer";

export const DrawerContent = ({ navigation, state }: any) => {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
