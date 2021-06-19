import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { allIcons } from "../../services/iconFactory";
import { MarkerIcon } from "../../components/MarkerIcon/MarkerIcon";
import { selectNewMarkerIcon } from "../../services/markerService";

export function IconsList() {
  return (
    <View style={styles.buttonsContainer}>
      {allIcons.map((iconName) => {
        return (
          <MarkerIcon
            iconName={iconName}
            isLarge
            onPress={() => selectNewMarkerIcon(iconName)}
            key={iconName}
          />
        );
      })}
    </View>
  );
}
