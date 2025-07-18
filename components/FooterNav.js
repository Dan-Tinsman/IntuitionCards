import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function FooterNav(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.buttonWrapper1}>
        <MaterialCommunityIconsIcon
          name="home"
          style={styles.icon1}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.home}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.activeButtonWrapper}>
        <MaterialCommunityIconsIcon
          name="cards-outline"
          style={styles.activeIcon}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.intuition}>Intuition</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonWrapper2}>
        <MaterialCommunityIconsIcon
          name="account"
          style={styles.icon2}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.profile}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#FFF",
      flexDirection: "row",
      shadowColor: "#111",
      shadowOffset: {
        width: 0,
        height: -2
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.2,
      elevation: 3
    },
    buttonWrapper1: {
      flex: 1,
      paddingTop: 8,
      paddingBottom: 10,
      paddingHorizontal: 12,
      minWidth: 80,
      maxWidth: 168,
      alignItems: "center"
    },
    icon1: {
      backgroundColor: "transparent",
      color: "#616161",
      fontSize: 24,
      opacity: 0.8
    },
    home: {
      fontSize: 12,
      color: "#9E9E9E",
      backgroundColor: "transparent",
      paddingTop: 4
    },
    activeButtonWrapper: {
      flex: 1,
      paddingTop: 6,
      paddingBottom: 10,
      paddingHorizontal: 12,
      minWidth: 80,
      maxWidth: 168,
      alignItems: "center"
    },
    activeIcon: {
      backgroundColor: "transparent",
      color: "#3f51b5",
      fontSize: 24,
      opacity: 0.8
    },
    intuition: {
      fontSize: 14,
      color: "#3f51b5",
      backgroundColor: "transparent",
      paddingTop: 0,
      alignSelf: "center",
      paddingLeft: 0,
      paddingBottom: 0
    },
    buttonWrapper2: {
      flex: 1,
      paddingTop: 8,
      paddingBottom: 10,
      paddingHorizontal: 12,
      minWidth: 80,
      maxWidth: 168,
      alignItems: "center"
    },
    icon2: {
      backgroundColor: "transparent",
      color: "#616161",
      fontSize: 24,
      opacity: 0.8
    },
    profile: {
      fontSize: 12,
      color: "#9E9E9E",
      backgroundColor: "transparent",
      paddingTop: 4
    }
  });

export default FooterNav;
