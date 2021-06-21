import { View, Modal } from "react-native";
import React from "react";
import { setModal } from "../../services/stateService";
import { styles } from "./styles";
import { Header } from "./Header";
import { MarkerDetails } from "./MarkerDetails";

// show existing marker info modal (video 01:31)
export function ShowExistingMarkerInfo() {
  return (
    <Modal
      transparent={true}
      onRequestClose={() => setModal("")}
      animationType="slide"
      testID="show-existing-marker-info"
    >
      <View style={styles.bubble}>
        <Header />
        <MarkerDetails />
      </View>
    </Modal>
  );
}
