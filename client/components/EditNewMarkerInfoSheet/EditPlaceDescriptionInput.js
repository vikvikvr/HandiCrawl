import React from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";
import { useSubject } from "../../hooks/useSubject";
import { selectedMarker$ } from "../../services/stateService";

export function EditPlaceDescriptionInput() {
  const [marker, setMarker] = useSubject(selectedMarker$);

  function updatePlaceDescription(description = "") {
    setMarker({ ...marker, description });
  }

  return (
    <View style={styles.locationContainer}>
      <Text style={[styles.generalText, styles.propertyText]}>
        Provide some details to help even more =)
      </Text>
      <View style={[styles.editContainer, styles.descriptionContainer]}>
        <TextInput
          multiline={true}
          onChangeText={updatePlaceDescription}
          value={marker.placeDescription}
          style={[styles.generalText, styles.iconText, styles.descriptionText]}
        />
      </View>
    </View>
  );
}
