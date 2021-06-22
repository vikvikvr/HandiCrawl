import { Text, View, Modal } from "react-native";
import React from "react";
import { EditIconRow } from "./EditIconRow";
import { EditLocationNameInput } from "./EditLocationNameInput";
import { EditDescriptionInput } from "./EditDescriptionInput";
import { SendButton } from "./SendButton";
import { setModal } from "../../services/stateService";
import { styles } from "./styles";

// edit existing marker 1:41
export function EditExistingMarkerInfo() {
  return (
    <Modal
      transparent={true}
      onRequestClose={() => setModal("")}
      animationType="slide"
      testID="edit-existing-marker-info"
    >
      <View style={styles.bubble}>
        <Text style={[styles.generalText, styles.titleText]}>
          Edit Handimarker
        </Text>
        <GeneralText>Edit icon...</GeneralText>
        <EditIconRow />
        <GeneralText>Edit location...</GeneralText>
        <EditLocationNameInput />
        <GeneralText>Edit description...</GeneralText>
        <EditDescriptionInput />
        <SendButton />
      </View>
    </Modal>
  );
}

function GeneralText({ children }) {
  return <Text style={[styles.generalText, styles.titleText]}>{children}</Text>;
}
