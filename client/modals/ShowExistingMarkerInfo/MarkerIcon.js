import React from "react";
import { View, Image, Text } from "react-native";
import { useSubject } from "../../hooks/useSubject";
import { renderTitle, renderIcon } from "../../services/iconFactory";
import { marker$ } from "../../services/stateService";
import { styles } from "./styles";

export function MarkerIcon() {
  const [marker] = useSubject(marker$);

  return (
    <View>
      <View style={styles.iconImgContainer}>
        <Image source={renderIcon(marker.icon)} style={styles.generalIcon} />
      </View>
      <View style={styles.iconTitle}>
        <Text style={[styles.generalText, styles.iconTitleText]}>
          {renderTitle(marker.icon)}
        </Text>
      </View>
    </View>
  );
}
