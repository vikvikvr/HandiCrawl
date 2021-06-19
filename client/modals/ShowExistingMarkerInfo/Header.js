import React from "react";
import { View } from "react-native";
import { MarkerVoteEditor } from "./MarkerVoteEditor";
import { TrashButton } from "./TrashButton";
import { EditButton } from "./EditButton";
import { MarkerIcon } from "../../components/MarkerIcon/MarkerIcon";
import { styles } from "./styles";
import { useSubject } from "../../hooks/useSubject";
import { marker$ } from "../../services/stateService";

export function Header() {
  const [marker] = useSubject(marker$);

  return (
    <View>
      <MarkerIcon iconName={marker.icon} isLarge hasBorder />
      <MarkerVoteEditor />
      <View style={styles.editBubble}>
        <TrashButton />
        <EditButton />
      </View>
    </View>
  );
}
