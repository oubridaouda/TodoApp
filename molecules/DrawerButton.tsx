import React from "react";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { DrawerActions } from "@react-navigation/native";
import { navigationRef } from "../navigations/RootNavigation";
import { navigate } from "../navigations/RootNavigation";

export const DrawerButton = () => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigationRef.current?.dispatch(DrawerActions.toggleDrawer())
      }
    >
      <Feather
        color={"white"}
        style={{
          fontSize: 30,
          marginRight: 5,
        }}
        name={"menu"}
      />
    </TouchableOpacity>
  );
};
