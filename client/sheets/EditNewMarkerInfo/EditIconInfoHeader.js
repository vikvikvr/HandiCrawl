import React from "react";
import { View, Image, Text } from "react-native";
import { renderIcon, renderTitle } from "../../services/iconFactory";
import { styles } from "./styles";
import { useSubject } from "../../hooks/useSubject";
import { marker$ } from "../../services/stateService";
import { MarkerIcon } from "../../components/MarkerIcon/MarkerIcon";

export function EditIconInfoHeader() {
  const [marker] = useSubject(marker$);

  return (
    <View>
      <MarkerIcon iconName={marker.icon} isLarge hasBorder />
      <Text style={[styles.generalText, styles.iconTitleText]}>
        {renderTitle(marker.icon)}
      </Text>
    </View>
  );
}
