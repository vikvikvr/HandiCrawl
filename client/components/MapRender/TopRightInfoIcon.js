import React from "react";
import { View } from "react-native";
import { setModal } from "../../services/stateService";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";
import { styles } from "./styles";

export function TopRightInfoIcon() {
  return (
    <View style={styles.infoContainerContainer} testID="top-right-info-icon">
      <ButtonIcon onPress={() => setModal("markers-key")} iconName="info" />
    </View>
  );
}
