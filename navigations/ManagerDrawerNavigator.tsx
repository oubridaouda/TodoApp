import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { HomeScreen } from "../scenes/cowoker";
import { DetailsScreen } from "../scenes/detail";
import { DrawerButton } from "../molecules/DrawerButton";
import { DrawerContent } from "../molecules/DrawerContent";

const { Navigator, Screen } = createNativeStackNavigator();

export const ManagerDrawerNavigator = () => (
  <NavigationContainer>
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerLeft: () => null,
        headerRight: () => <DrawerButton />,
        headerStyle: { backgroundColor: "#fb5b5a" },
        headerTintColor: "white",
        statusBarColor: "#fb5b5a",
      }}
    >
      {/*drawerContent={() => <DrawerContent />}*/}
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Details" component={DetailsScreen} />
    </Navigator>
  </NavigationContainer>
);
