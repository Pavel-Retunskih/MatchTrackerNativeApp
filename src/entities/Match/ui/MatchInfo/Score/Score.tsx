import {StyleSheet, Text, View} from "react-native";
import {MatchStatus} from "../../../model/type";

type Props = {
  awayScore: number
  homeScore: number
  status: MatchStatus
}

export function Score({awayScore, homeScore, status}: Props) {

  const statusColor = {
    Scheduled: {color: '#EB6422', description: 'Match preparing'},
    Ongoing: {color: '#43AD28', description: 'Live'},
    Finished: {color: '#EB0237', description: 'Finished'},
  }

  const statusStyle = StyleSheet.flatten([
    styles.status,
    {backgroundColor: statusColor[status].color},
  ]);

  return <View style={styles.container}>
    <View style={styles.score}>
      <Text style={styles.text}>{homeScore}</Text>
      <Text style={styles.text}>:</Text>
      <Text style={styles.text}>{awayScore}</Text>
    </View>
    <View style={statusStyle}>
      <Text style={styles.smallText}>{statusColor[status].description}</Text>
    </View>
  </View>
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
    alignItems: 'center',

  },
  status: {
    width: 75,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  score: {
    gap: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    color: '#fff',
    fontSize: 14
  },
  smallText: {
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
  }

})