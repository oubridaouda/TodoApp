// import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { ManagerDrawerNavigator } from "./ManagerDrawerNavigator";
import { createNativeStackNavigator } from "react-native-screens/native-stack";

// const Stack = createNativeStackNavigator();
type StackParamList = {
  DrawerStack: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<StackParamList>();

export const ManagerStackNavigator = () => {
  return <ManagerDrawerNavigator />;
};
