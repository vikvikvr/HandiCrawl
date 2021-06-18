import React from "react";
import { View } from "react-native";
import { IconButton } from "./IconButton";
import { allIcons } from "../../services/iconFactory";

export function IconsList() {
  return (
    <View style={styles.iconButtons}>
      {allIcons.map((iconName) => {
        return <IconButton iconName={iconName} key={iconName} />;
      })}
    </View>
  );
}

const styles = {};
