import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { renderTitle } from "../../services/iconFactory";
import { useSubject } from "../../hooks/useSubject";
import { setModal, marker$ } from "../../services/stateService";
import { ButtonIcon } from "../../components/ButtonIcon/ButtonIcon";
import { MarkerIcon } from "../../components/MarkerIcon/MarkerIcon";

export function EditIconRow() {
  const [marker] = useSubject(marker$);

  return (
    <View style={styles.editContainer} testID="edit-icon-row">
      <View style={styles.iconImgContainer}>
        <MarkerIcon iconName={marker.icon} isLarge />
        <Text style={styles.iconText}>{renderTitle(marker.icon)}</Text>
        <ButtonIcon
          iconName="edit"
          onPress={() => setModal("edit-existing-marker-icon")}
        />
      </View>
    </View>
  );
}
