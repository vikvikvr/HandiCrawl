import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { setModal } from "../../services/stateService";

export function TopRightInfoIcon() {
  return (
    <View style={styles.infoContainerContainer}>
      <TouchableOpacity
        onPress={() => setModal("markers-key")}
        style={styles.infoContainer}
      >
        <Image style={styles.infoIcon} resizeMode="contain" source={infoIcon} />
      </TouchableOpacity>
    </View>
  );
}
