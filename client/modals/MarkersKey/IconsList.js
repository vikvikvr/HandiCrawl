import React from "react";
import { View } from "react-native";
import { MarkerIcon } from "./MarkerIcon";
import { styles } from "./styles";
import { allIcons } from "../../services/iconFactory";

export function IconsList() {
  return (
    <View style={styles.infoModalView}>
      {allIcons.map((icon) => {
        return <MarkerIcon icon={icon} key={icon} />;
      })}
    </View>
  );
}
