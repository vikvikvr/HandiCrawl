import React from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";
import { useSubject } from "../../hooks/useSubject";
import { marker$ } from "../../services/stateService";

export function EditPlaceDescriptionInput() {
  const [marker, setMarker] = useSubject(marker$);

  return (
    <View
      style={styles.locationContainer}
      testID="edit-place-description-input"
    >
      <Text style={[styles.generalText, styles.propertyText]}>
        Provide some details to help even more =)
      </Text>
      <View style={[styles.editContainer, styles.descriptionContainer]}>
        <TextInput
          multiline={true}
          placeholder="place description"
          onChangeText={(description) => setMarker({ ...marker, description })}
          value={marker.description}
          style={[styles.generalText, styles.iconText, styles.descriptionText]}
        />
      </View>
    </View>
  );
}
