import React from "react";

export function SelectIconSheet() {
  return (
    <BottomSheet
      visible={bottomSheetVisible}
      onBackButtonPress={() => setBottomSheetVisible(false)}
      onBackdropPress={() => setBottomSheetVisible(false)}
      style={styles.sheet}
    >
      <View style={styles.bottomNavigationView}>
        <SheetHeader onClose={() => setBottomSheetVisible(false)} />
        <MarkerIconList />
      </View>
    </BottomSheet>
  );
}

function MarkerIconList() {
  return (
    <View style={styles.buttonsContainer}>
      {allIcons.map((iconString) => {
        return (
          <NewMarkerIcon
            iconString={iconString}
            onPress={() => handleNewMarkerPress(iconString)}
          />
        );
      })}
    </View>
  );
}
