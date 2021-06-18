import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { renderIcon, renderTitle } from "../../services/iconFactory";

export function NewMarkerIcon({ iconString, onPress }) {
  return (
    <View style={styles.iconImgContainer}>
      <TouchableOpacity
        key={iconString}
        style={styles.handiMarkerContainer}
        onPress={onPress}
      >
        <View style={styles.markerImgWrapper}>
          <Image
            source={renderIcon(iconString)}
            resizeMode="contain"
            style={styles.iconImg}
          />
        </View>
        <Text style={styles.generalText}>{renderTitle(iconString)}...</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  generalText: {
    fontFamily: "K2D_600SemiBold",
    color: "#1C333E",
    textAlign: "center",
  },
  handiMarkerContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
    borderStyle: "solid",
    marginRight: 4,
    marginBottom: 4,
    width: 100,
    position: "relative",
    zIndex: 0,
  },
  iconImg: {
    width: 60,
    height: 60,
    marginBottom: 3,
  },
  iconImgContainer: {
    elevation: 10,
    zIndex: 1,
    position: "relative",
  },
  markerImgWrapper: {
    zIndex: 1,
    elevation: 10,
  },
});
