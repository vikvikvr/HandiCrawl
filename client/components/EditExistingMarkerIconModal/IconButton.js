import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { renderIcon, renderTitle } from "../../services/iconFactory";
import { styles } from "./styles";

export function IconButton({ iconName }) {
  function selectMarkerIcon() {
    // TODO: update current edit with iconName
    // TODO: open EditExistingMarkerInfoModal
  }

  return (
    <View style={styles.iconImgContainer}>
      <TouchableOpacity
        style={styles.handiMarkerContainer}
        onPress={selectMarkerIcon}
      >
        <View style={styles.markerImgWrapper}>
          <Image
            source={renderIcon(iconName)}
            resizeMode="contain"
            style={styles.iconImg}
          />
        </View>
        <Text style={styles.generalText}>{renderTitle(iconName)}</Text>
      </TouchableOpacity>
    </View>
  );
}
