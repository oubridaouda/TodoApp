import React, { useContext, useEffect, useState } from "react";
import { ManagerDrawerNavigator } from "./ManagerDrawerNavigator";
import { ManagerStackNavigator } from "./ManagerStackNavigator";
import { NavigationContainer } from "@react-navigation/native";
// import ManagerStackNavigator from "./ManagerStackNavigator";

export default function RoutesNavigator() {
  return <ManagerStackNavigator />;
}
