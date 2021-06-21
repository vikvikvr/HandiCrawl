import React from "react";
import { View, Text } from "react-native";
import { allIcons } from "../../services/iconFactory";
import { MarkerIcon } from "../../components/MarkerIcon/MarkerIcon";
import { selectExistingMarkerIcon } from "../../services/markerService";
import { renderTitle } from "../../services/iconFactory";
import { styles } from "./styles";

export function IconsList() {
  return (
    <View style={styles.iconButtons}>
      {allIcons.map((iconName) => {
        return (
          <View style={styles.iconImgContainer}>
            <MarkerIcon
              iconName={iconName}
              onPress={() => selectExistingMarkerIcon(iconName)}
              key={iconName}
            />
            <Text style={styles.generalText}>{renderTitle(iconName)}</Text>
          </View>
        );
      })}
    </View>
  );
}

// const styles = {};
