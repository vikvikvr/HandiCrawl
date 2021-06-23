import React from "react";
import { View, TextInput } from "react-native";
import { useSubject } from "../../hooks/useSubject";
import { marker$ } from "../../services/stateService";
import { styles } from "./styles";

export function EditDescriptionInput() {
  const [marker, setMarker] = useSubject(marker$);

  return (
    <View
      style={[styles.editContainer, styles.descriptionContainer]}
      testID="edit-description-input"
    >
      <TextInput
        placeholder="Place description"
        multiline={true}
        style={[styles.generalText, styles.iconText, styles.placeNameText]}
        onChangeText={(description) => setMarker({ ...marker, description })}
        value={marker.description}
      />
    </View>
  );
}
