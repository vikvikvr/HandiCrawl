import React from "react";
import { View, TextInput } from "react-native";
import { useSubject } from "../../hooks/useSubject";
import { selectedMarker$ } from "../../services/stateService";
import { styles } from "./styles";

export function EditDescriptionInput() {
  const [marker, setMarker] = useSubject(selectedMarker$);

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
