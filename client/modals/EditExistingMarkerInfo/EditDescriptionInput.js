import React from "react";
import { View, TextInput } from "react-native";
import { useSubject } from "../../hooks/useSubject";
import { marker$ } from "../../services/stateService";
import { styles } from "./styles";

export function EditDescriptionInput() {
  const [marker, setMarker] = useSubject(marker$);

  function updateDescription(description = "") {
    setMarker({ ...marker, description });
  }

  return (
    <View style={[styles.editContainer, styles.descriptionContainer]}>
      <TextInput
        multiline={true}
        style={[styles.generalText, styles.iconText, styles.placeNameText]}
        onChangeText={updateDescription}
        value={marker.description}
      />
    </View>
  );
}
