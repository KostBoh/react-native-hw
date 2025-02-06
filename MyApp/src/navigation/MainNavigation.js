import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "../screens/PostsScreen.js";
import PublicationsIcon from "../../assets/icons/PublicationsIcon.js";
import AddPostIcon from "../../assets/icons/AddPostIcon.js";
import AccountIcon from "../../assets/icons/AccountIcon.js";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import MapScreen from "../screens/MapScreen.js";
import { colors } from "../../styles/global.js";
import CreatePostScreen from "../screens/CreatePostScreen.js";
import ProfileScreen from "../screens/ProfileScreen.js";
import LogoutButton from "../components/LogoutButton.js";
import LocationIcon from "../../assets/icons/LocationIcon.js";
import * as Location from 'expo-location';
import CreatePostNavigator from "./CreatePostNavigator.js";

const BottomTab = createBottomTabNavigator();

const MainNavigation = ({ authorization }) => {

  

  return (
    <BottomTab.Navigator
      initialRouteName="Posts"
      screenOptions={{
        headerShown: true,
        tabBarLabel: "",
        tabBarStyle: {
          display: "flex",
          paddingTop: 4,
          paddingHorizontal: 82,
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      <BottomTab.Screen
        name="Posts"
        component={PostsScreen}
        options={({ navigation }) => ({
          tabBarIcon: ({ focused }) => (
            <PublicationsIcon
              size={32}
              color={focused ? colors.orange : "black"}
            />
          ),
          tabBarIconStyle: styles.bottomBarElement,
          headerRightContainerStyle: styles.headerRightStyle,
          headerRight: ({}) => <LogoutButton onPress={authorization} />,
        })}
      />
      <BottomTab.Screen
        name="Create Post"
        component={CreatePostNavigator}
        options={({ navigation }) => ({
          tabBarIcon: ({ focused }) => (
            <AddPostIcon size={32} color={focused ? colors.orange : "black"} />
          ),
          tabBarIconStyle: [styles.bottomBarElement, styles.addPostElement],
        })}
      />

      <BottomTab.Screen
        name="Map"
        component={MapScreen}
        options={({ navigation }) => ({
          title: "Map",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <LocationIcon
              name="map"
              size={32}
              color={focused ? colors.orange : "black"}
            />
          ),
          tabBarIconStyle: [styles.bottomBarElement, styles.addPostElement],
        })}
      />

      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ navigation }) => ({
          tabBarIcon: ({ focused }) => (
            <AccountIcon size={32} color={focused ? colors.orange : "black"} />
          ),
          tabBarIconStyle: styles.bottomBarElement,
          headerShown: false,
        })}
      />
    </BottomTab.Navigator>
  );
};
export default MainNavigation;
const styles = StyleSheet.create({
  bottomBarElement: {
    height: 40,
    width: 40,
  },
  addPostElement: {
    backgroundColor: colors.orange,
    width: 70,
    borderRadius: 50,
  },
  headerRightStyle: {
    paddingRight: 10,
  },
});
