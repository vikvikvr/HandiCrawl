import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { useSubject } from "../../hooks/useSubject";
import { setSheet, selectedMarker$ } from "../../services/stateService";
import { renderIcon, renderTitle } from "../../services/iconFactory";
import { styles } from "./styles";

export function Icon({ icon }) {
  const [marker, setMarker] = useSubject(selectedMarker$);

  function chooseIcon() {
    setMarker({ ...marker, icon });
    setSheet("edit-new-marker-info");
  }

  return (
    <View style={styles.iconImgContainer}>
      <TouchableOpacity
        style={styles.handiMarkerContainer}
        onPress={chooseIcon}
      >
        <View style={styles.markerImgWrapper}>
          <Image
            source={renderIcon(icon)}
            resizeMode="contain"
            style={styles.iconImg}
          />
        </View>
        <Text style={styles.generalText}>{renderTitle(icon)}...</Text>
      </TouchableOpacity>
    </View>
  );
}
