import React from "react";
import { View, Image, Text } from "react-native";
import { renderIcon, renderTitle } from "../../services/iconFactory";
import { styles } from "./styles";
import { useSubject } from "../../hooks/useSubject";
import { marker$ } from "../../services/stateService";

export function EditIconInfoHeader() {
  const [marker] = useSubject(marker$);

  return (
    <View>
      <View style={styles.addIconImgContainer}>
        <Image
          source={renderIcon(marker.icon)}
          resizeMode="contain"
          style={styles.addIconImg}
        />
      </View>
      <Text style={[styles.generalText, styles.iconTitleText]}>
        {renderTitle(marker.icon)}
      </Text>
    </View>
  );
}
