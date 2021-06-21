import React from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";
import { useSubject } from "../../hooks/useSubject";
import { marker$ } from "../../services/stateService";

export function EditPlaceDescriptionInput() {
  const [marker, setMarker] = useSubject(marker$);

  return (
    <View style={styles.locationContainer}>
      <Text style={[styles.generalText, styles.propertyText]}>
        Provide some details to help even more =)
      </Text>
      <View style={[styles.editContainer, styles.descriptionContainer]}>
        <TextInput
          multiline={true}
          onChangeText={(description) => setMarker({ ...marker, description })}
          value={marker.placeDescription}
          style={[styles.generalText, styles.iconText, styles.descriptionText]}
        />
      </View>
    </View>
  );
}
