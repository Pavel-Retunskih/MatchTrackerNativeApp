import {StyleSheet, View} from "react-native";
import {MatchStatus} from "../../model/type";
import {TeamInfo} from "./TeamInfo/TeamInfo";
import {Score} from "./Score/Score";

type Props = {
  awayTeamName: string
  homeTeamName: string
  homeScore: number
  awayScore: number
  status: MatchStatus
}

export function MatchInfo({awayScore, homeScore, status, awayTeamName, homeTeamName}: Props) {

  return <View style={styles.container}>
    <TeamInfo teamName={homeTeamName}/>
    <Score awayScore={awayScore} homeScore={homeScore} status={status}/>
    <TeamInfo teamName={awayTeamName} isReverse/>
  </View>
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  }
})