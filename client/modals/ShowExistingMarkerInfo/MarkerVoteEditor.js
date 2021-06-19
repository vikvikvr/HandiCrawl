import { Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import thumbUpIcon from "../../assets/activeThumbsUp.png";
import thumbDownIcon from "../../assets/thumbsup.png";
import { styles } from "./styles";
import { useSubject } from "../../hooks/useSubject";
import { marker$ } from "../../services/stateService";
import { voteMarker } from "../../services/markerService";

// vote up / down an existing marker
export function MarkerVoteEditor() {
  const [marker] = useSubject(marker$);

  return (
    <View style={styles.thumbsContainer}>
      <VoteUpIcon />
      <Text style={[styles.generalText, styles.scoreText]}>{marker.score}</Text>
      <VoteDownIcon />
    </View>
  );
}

function VoteUpIcon() {
  return (
    <TouchableOpacity onPress={() => voteMarker(1)}>
      <Image
        source={thumbUpIcon}
        style={styles.thumbsIcon}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
}

function VoteDownIcon() {
  return (
    <TouchableOpacity onPress={() => voteMarker(-1)}>
      <Image
        source={thumbDownIcon}
        style={styles.thumbsIcon}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
}
