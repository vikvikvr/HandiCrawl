import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { renderTitle } from "../../services/iconFactory";
import { selectExistingMarkerIcon } from "../../services/markerService";
import { styles } from "./styles";

export function IconButton({ icon }) {
  return (
    <View style={styles.iconImgContainer}>
      <TouchableOpacity
        style={styles.handiMarkerContainer}
        onPress={() => selectExistingMarkerIcon(icon)}
      >
        <View style={styles.markerImgWrapper}>
          <Image
            // source={renderIcon(icon)}
            source={{ uri: "placeholder-image-path" }}
            resizeMode="contain"
            style={styles.iconImg}
          />
        </View>
        <Text style={styles.generalText}>{renderTitle(icon)}</Text>
      </TouchableOpacity>
    </View>
  );
}
