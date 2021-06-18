import React from "react";
import { useSubject } from "../hooks/useSubject";
import { currentModal$ } from "../services/modalService";
// import all modals
import { MarkersKeyModal } from "../components/MarkersKeyModal";

export function ModalHanlder() {
  const [modal] = useSubject(currentModal$);

  const modalsMap = {
    info: null,
    "markers-key": <MarkersKeyModal />,
  };

  if (modal in modalsMap) {
    return modalsMap[modal];
  }

  return null;
}

// services
