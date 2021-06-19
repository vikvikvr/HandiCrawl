import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import { useSubject } from "../../hooks/useSubject";
import { selectedMarker$, markers$ } from "../../services/stateService";
import { addMarker } from "../../services/apiServices";

export function SendButton() {
  const [marker] = useSubject(selectedMarker$);
  const [markers, setMarkers] = useSubject(markers$);

  async function saveMarker() {
    try {
      const { _id: id } = await addMarker(marker);
      const newMarker = { ...marker, id };
      setMarkers([...markers, newMarker]);
      setSheet("");
    } catch (error) {
      console.log("failed to add marker to db");
    }
  }

  return (
    <TouchableOpacity style={[styles.button]} onPress={saveMarker}>
      <Text style={[styles.generalText, styles.textStyle]}>Send</Text>
    </TouchableOpacity>
  );
}
