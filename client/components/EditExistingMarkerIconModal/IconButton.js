import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { useSubject } from "../../hooks/useSubject";
import { renderIcon, renderTitle } from "../../services/iconFactory";
import { selectedMarker$, setModal } from "../../services/stateService";
import { styles } from "./styles";

export function IconButton({ icon }) {
  const [marker, setMarker] = useSubject(selectedMarker$);

  function selectMarkerIcon() {
    setMarker({ ...marker, icon });
    setModal("edit-existing-marker-info");
  }

  return (
    <View style={styles.iconImgContainer}>
      <TouchableOpacity
        style={styles.handiMarkerContainer}
        onPress={selectMarkerIcon}
      >
        <View style={styles.markerImgWrapper}>
          <Image
            // source={renderIcon(icon)}
            source={{ uri: "placeholder-image-path" }}
            resizeMode="contain"
            style={styles.iconImg}
          />
        </View>
        <Text style={styles.generalText}>{renderTitle(icon)}</Text>
      </TouchableOpacity>
    </View>
  );
}
