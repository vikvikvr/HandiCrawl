import React from "react";
import { View } from "react-native";
import { Icon } from "./Icon";
import { styles } from "./styles";
import { allIcons } from "../../services/iconFactory";

export function IconsList() {
  return (
    <View style={styles.buttonsContainer}>
      {allIcons.map((iconName) => {
        return <Icon iconName={iconName} key={iconName} />;
      })}
    </View>
  );
}
