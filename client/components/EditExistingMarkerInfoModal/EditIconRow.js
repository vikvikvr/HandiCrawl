import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { renderIcon, renderTitle } from "../../services/iconFactory";
import { useSubject } from "../../hooks/useSubject";
import { setModal, selectedMarker$ } from "../../services/stateService";

export function EditIconRow() {
  const [marker] = useSubject(selectedMarker$);

  return (
    <View style={styles.editContainer}>
      <View style={styles.iconImgContainer}>
        <Image
          source={renderIcon(marker.iconName)}
          style={styles.generalIcon}
        />
        <Text style={styles.iconText}>{renderTitle(marker.iconName)}</Text>
      </View>
      <TouchableOpacity onPress={() => setModal("edit-existing-icon")}>
        <Image
          source={renderIcon("edit")}
          style={[styles.trashIcon, styles.editIcon]}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
}
