import React from "react";
import { TouchableOpacity, Image } from "react-native";
import trashIcon from "../../assets/trash.png";
import { useSubject } from "../../hooks/useSubject";
import {
  markers$,
  selectedMarker$,
  setModal,
} from "../../services/stateService";
import { styles } from "./styles";

export function TrashButton() {
  const [marker] = useSubject(selectedMarker$);
  const [markers, setMarkers] = useSubject(markers$);

  function deleteMarker() {
    setModal("");
    const { id } = marker;
    const newMarkers = markers.filter((marker) => marker.id !== id);
    setMarkers(newMarkers);
    // TODO: remove current marker from db
  }

  return (
    <TouchableOpacity onPress={deleteMarker}>
      <Image source={trashIcon} style={styles.trashIcon} resizeMode="contain" />
    </TouchableOpacity>
  );
}
