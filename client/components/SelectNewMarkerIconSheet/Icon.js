import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { useSubject } from "../../hooks/useSubject";
import { setSheet, selectedMarker$ } from "../../services/stateService";
import { renderIcon, renderTitle } from "../../services/iconFactory";
import { styles } from "./styles";

export function Icon({ iconName }) {
  const [marker, setMarker] = useSubject(selectedMarker$);

  function chooseIcon() {
    setSheet("edit-new-marker-info");
    setMarker({ ...marker, iconName });
  }

  return (
    <View style={styles.iconImgContainer}>
      <TouchableOpacity
        key={iconName}
        style={styles.handiMarkerContainer}
        onPress={chooseIcon}
      >
        <View style={styles.markerImgWrapper}>
          <Image
            source={renderIcon(iconName)}
            resizeMode="contain"
            style={styles.iconImg}
          />
        </View>
        <Text style={styles.generalText}>{renderTitle(iconName)}...</Text>
      </TouchableOpacity>
    </View>
  );
}
