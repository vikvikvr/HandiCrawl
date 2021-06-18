import React from "react";
import { Modal } from "react-native";
import { setModal } from "services/modalService";
import { IconsList } from "./IconsList";

// after clicking info icon in the map (video 00:46)
export function MarkersKeyModal() {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      onRequestClose={() => setModal("")}
    >
      <IconsList />
    </Modal>
  );
}
