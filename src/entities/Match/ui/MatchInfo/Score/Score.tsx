import {StyleSheet, Text, View} from "react-native";
import {MatchStatus} from "../../../model/type";

type Props = {
  awayScore: number
  homeScore: number
  status: MatchStatus
}

export function Score({awayScore, homeScore, status}: Props) {

  return <View style={styles.container}>
    <View style={styles.score}>
      <Text style={styles.text}>{homeScore}</Text>
      <Text style={styles.text}>:</Text>
      <Text style={styles.text}>{awayScore}</Text>
    </View>
    <View>
      <Text style={styles.text}>{status}</Text>
    </View>
  </View>
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
    alignItems: 'center',

  },
  score: {
    gap: 10,
    alignItems: 'center',
    flexDirection: 'row'
  },
  text: {
    color: '#fff',
    fontSize: 16
  }

})