import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

export function SearchBar() {
  return (
    <View style={styles.container} testID="search-bar">
      <View style={styles.textContainer}>
        <TextInput placeholder="Search location..." style={styles.text} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F6F7",
    position: "absolute",
    width: "80%",
    height: "8%",
    zIndex: 1,
    elevation: 10,
    right: "10%",
    bottom: "15%",
    borderRadius: 100,
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    justifyContent: "center",
    flexDirection: "row",
    height: "100%",
  },
  text: {
    marginLeft: 10,
    alignItems: "center",
    fontSize: 20,
    fontFamily: "K2D_500Medium_Italic",
  },
});
