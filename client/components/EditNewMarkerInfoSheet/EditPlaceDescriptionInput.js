import React from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";

export function EditPlaceDescriptionInput({ placeDescription, onChangeText }) {
  return (
    <View style={styles.locationContainer}>
      <Text style={[styles.generalText, styles.propertyText]}>
        Provide some details to help even more =)
      </Text>
      <View style={[styles.editContainer, styles.descriptionContainer]}>
        <TextInput
          multiline={true}
          onChangeText={onChangeText}
          value={placeDescription}
          style={[styles.generalText, styles.iconText, styles.descriptionText]}
        />
      </View>
    </View>
  );
}
