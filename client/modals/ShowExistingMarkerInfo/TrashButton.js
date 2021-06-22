import React from "react";
import { View } from "react-native";
import { deleteMarker } from "../../services/markerService";
import { ButtonIcon } from "../../components/ButtonIcon/ButtonIcon";

export function TrashButton() {
  return (
    <View testID="trash-button">
      <ButtonIcon iconName="trash" onPress={deleteMarker} />;
    </View>
  );
}
