import React from "react";
import { View } from "react-native";
import { Icon } from "./Icon";
import { styles } from "./styles";
import { allIcons } from "../../services/iconFactory";

export function IconsList() {
  return (
    <View style={styles.buttonsContainer}>
      {allIcons.map((icon) => {
        return <Icon icon={icon} key={icon} />;
      })}
    </View>
  );
}
