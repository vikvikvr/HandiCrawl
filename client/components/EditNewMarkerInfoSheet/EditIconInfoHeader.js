import React from "react";
import { View, Image, Text } from "react-native";
import { renderIcon, renderTitle } from "../../services/iconFactory";
import { styles } from "./styles";

export function EditIconInfoHeader({ iconName }) {
  return (
    <View>
      <View style={styles.addIconImgContainer}>
        <Image
          source={renderIcon(iconName)}
          resizeMode="contain"
          style={styles.addIconImg}
        />
      </View>
      <Text style={[styles.generalText, styles.iconTitleText]}>
        {renderTitle(iconName)}
      </Text>
    </View>
  );
}
