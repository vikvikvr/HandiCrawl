import React from "react";
import { View } from "react-native";
import { MarkerIcon } from "../../components/MarkerIcon/MarkerIcon";
import { styles } from "./styles";
import { allIcons } from "../../services/iconFactory";

export function IconsList() {
  return (
    <View style={styles.infoModalView}>
      {allIcons.map((iconName) => {
        return <MarkerIcon iconName={iconName} isLarge key={iconName} />;
      })}
    </View>
  );
}
