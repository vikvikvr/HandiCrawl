import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { renderIcon, renderTitle } from "../../services/iconFactory";
import { selectNewMarkerIcon } from "../../services/markerService";
import { styles } from "./styles";

export function Icon({ icon }) {
  return (
    <View style={styles.iconImgContainer}>
      <TouchableOpacity
        style={styles.handiMarkerContainer}
        onPress={() => selectNewMarkerIcon(icon)}
      >
        <View style={styles.markerImgWrapper}>
          <Image
            source={renderIcon(icon)}
            resizeMode="contain"
            style={styles.iconImg}
          />
        </View>
        <Text style={styles.generalText}>{renderTitle(icon)}...</Text>
      </TouchableOpacity>
    </View>
  );
}
