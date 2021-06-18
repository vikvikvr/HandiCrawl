export function TopRightInfoIcon() {
  const [modal, setModal] = useSubject(currentModal$);

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
