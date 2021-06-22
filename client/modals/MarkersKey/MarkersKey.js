import React from "react";
import { Modal } from "react-native";
import { setModal } from "../../services/stateService";
import { IconsList } from "./IconsList";

// after clicking info icon in the map (video 00:46)
export function MarkersKey() {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      onRequestClose={() => setModal("")}
      testID="markers-key"
    >
      <IconsList />
    </Modal>
  );
}
