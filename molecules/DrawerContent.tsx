import { Drawer, DrawerItem, IndexPath, Text } from "@ui-kitten/components";
import React, { useContext } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "../scenes/cowoker";
import { createDrawerNavigator } from "@react-navigation/drawer";

export const DrawerContent = ({ navigation, state }: any) => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <View style={styles.avatarContainer}>
          <Text style={styles.shortName}>OD</Text>
        </View>
        <Text style={styles.displayName}>Oubri Daouda</Text>
      </View>
      <Drawer
        selectedIndex={new IndexPath(state.index)}
        onSelect={(index) => navigation.navigate(state.routeNames[index.row])}
      >
        <DrawerItem title="Accueil" />
        <DrawerItem title="Ma présence" />
        <DrawerItem title="Mes collaborateurs" />
        <DrawerItem title="Mon abonnement" />
        <DrawerItem title="Mon profil" />
      </Drawer>
      <DrawerItem title="Déconnexion" />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#fb5b5a",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: Platform.OS === "ios" ? 160 : 100,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  avatarContainer: {
    marginTop: Platform.OS === "ios" ? 20 : undefined,
    height: 60,
    width: 60,
    borderRadius: 100,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  shortName: {
    fontSize: 30,
    fontWeight: "600",
  },
  displayName: {
    marginTop: 5,
    color: "white",
  },
});
