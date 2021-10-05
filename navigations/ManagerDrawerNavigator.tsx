import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { HomeScreen } from "../scenes/cowoker";
import { DetailsScreen } from "../scenes/detail";
import { DrawerButton } from "../molecules/DrawerButton";
import { DrawerContent } from "../molecules/DrawerContent";
import { createDrawerNavigator } from "@react-navigation/drawer";

const { Navigator, Screen } = createDrawerNavigator();

export const ManagerDrawerNavigator = () => (
  <Navigator
    initialRouteName="Home"
    screenOptions={{
      // headerLeft: () => null,
      // headerRight: () => <DrawerButton />,
      headerStyle: { backgroundColor: "#fb5b5a" },
      headerTintColor: "white",
    }}
    drawerContent={(props) => <DrawerContent {...props} />}
  >
    {/*drawerContent={() => <DrawerContent />}*/}
    <Screen name="Home" component={HomeScreen} />
    <Screen name="Ma présence" component={DetailsScreen} />
    <Screen name="Mes collaborateurs" component={HomeScreen} />
    <Screen name="Mon abonnement" component={DetailsScreen} />
    <Screen name="Mon profil" component={DetailsScreen} />
    <Screen name="Details" component={DetailsScreen} />
  </Navigator>
);
