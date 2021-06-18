import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { renderIcon } from "../../services/iconFactory";

export function SheetHeader({ onClose }) {
  return (
    <View>
      <Title />
      <MarkerIcon />
    </View>
  );
}

function Title() {
  return (
    <Text style={[styles.generalText, styles.header]}>Add a HandiMarker</Text>
  );
}

function MarkerIcon() {
  return (
    <View style={styles.closeIconContainer}>
      <TouchableOpacity onPress={onClose}>
        <Image
          source={renderIcon("closeIcon")}
          resizeMode="contain"
          style={styles.closeIconImg}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  closeIconContainer: {
    position: "absolute",
    right: "5%",
    top: "5%",
  },
  closeIconImg: {
    width: 20,
    height: 20,
  },
});
