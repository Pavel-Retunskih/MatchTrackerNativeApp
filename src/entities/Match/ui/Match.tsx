import {View, StyleSheet} from "react-native";
import {MatchInfo} from "./MatchInfo/MatchInfo";
import {Match} from "../model/type";

export const MatchCard = ({match}: { match: Match }) => {
  const {homeTeam, awayTeam, homeScore, awayScore, status} = match

  return <View style={styles.container}>
    <MatchInfo
        awayTeamName={awayTeam.name}
        homeTeamName={homeTeam.name}
        homeScore={homeScore}
        awayScore={awayScore}
        status={status}
    />
  </View>
}

const styles = StyleSheet.create({
      container: {
        height: 96,
        width: '100%',
        backgroundColor: '#0B0E12',
        paddingHorizontal: 8,
        marginTop: 8,
        marginBottom: 8,
        flex: 1,
        borderRadius: 8
      }
    }
)