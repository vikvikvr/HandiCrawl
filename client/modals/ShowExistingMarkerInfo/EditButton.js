import React from "react";
import { View } from "react-native";
import { setModal } from "../../services/stateService";
import { ButtonIcon } from "../../components/ButtonIcon/ButtonIcon";

export function EditButton() {
  const nextModal = "edit-existing-marker-info";

  return (
    <View testID="edit-button">
      <ButtonIcon iconName="edit" onPress={() => setModal(nextModal)} />;
    </View>
  );
}
