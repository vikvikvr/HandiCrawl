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
        <MarkerIcon icon={marker.icon} />
        <Text style={styles.iconText}>{renderTitle(marker.icon)}</Text>
        <EditIcon />
      </View>
    </View>
  );
}

function MarkerIcon({ icon }) {
  return <Image source={renderIcon(icon)} style={styles.generalIcon} />;
}

function EditIcon() {
  return (
    <TouchableOpacity onPress={() => setModal("edit-existing-marker-icon")}>
      <Image
        source={renderIcon("edit")}
        style={[styles.trashIcon, styles.editIcon]}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
}
