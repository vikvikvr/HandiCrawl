import React from "react";
import { View } from "react-native";
import { MarkerVoteEditor } from "./MarkerVoteEditor";
import { TrashButton } from "./TrashButton";
import { EditButton } from "./EditButton";
import { MarkerIcon } from "./MarkerIcon";
import { styles } from "./styles";

export function Header() {
  return (
    <View>
      <MarkerIcon />
      <MarkerVoteEditor />
      <View style={styles.editBubble}>
        <TrashButton />
        <EditButton />
      </View>
    </View>
  );
}
