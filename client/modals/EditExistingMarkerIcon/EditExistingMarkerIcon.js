import { Text, View, Modal } from "react-native";
import React from "react";
import { IconsList } from "./IconsList";
import { styles } from "./styles";
import { setModal } from "../../services/stateService";

export function EditExistingMarkerIcon() {
  return (
    <Modal
      transparent={true}
      onRequestClose={() => setModal("")}
      animationType="slide"
    >
      <View style={styles.bubble}>
        <Text style={[styles.generalText, styles.titleText]}>
          Choose your icon
        </Text>
        <IconsList />
      </View>
    </Modal>
  );
}
